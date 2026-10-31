import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadToTelegram } from "@/lib/server/telegram";
import { LeadSubmissionPayload } from "@/types";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter"),
  companyName: z.string().trim().min(2, "Nama perusahaan minimal 2 karakter"),
  email: z.string().trim().email("Format email bisnis tidak valid"),
  whatsapp: z.string().trim().min(8, "Nomor WhatsApp minimal 8 digit"),
  category: z.enum([
    "custom_web_erp",
    "mobile_app",
    "payment_api",
    "cloud_devops",
    "enterprise_squad",
  ]),
  budgetTier: z.enum(["tier_starter", "tier_growth", "tier_enterprise"]),
  message: z.string().trim().min(10, "Deskripsi kebutuhan minimal 10 karakter"),
  websiteHoneypot: z.string().optional(),
});

const CATEGORY_NAMES: Record<string, string> = {
  custom_web_erp: "Custom ERP & Sistem Informasi",
  mobile_app: "Pengembangan Mobile App",
  payment_api: "Integrasi API & Payment Gateway",
  cloud_devops: "Arsitektur Cloud & DevOps",
  enterprise_squad: "Dedicated Squad Enterprise",
};

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json();

    // Check honeypot for spam bots
    if (rawBody?.websiteHoneypot && String(rawBody.websiteHoneypot).trim() !== "") {
      return NextResponse.json(
        {
          success: true,
          data: {
            received: true,
            telegramSent: false,
            whatsappFollowUpUrl: "",
          },
        },
        { status: 200 }
      );
    }

    const parseResult = leadSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validasi data formulir gagal",
          details: parseResult.error.format(),
        },
        { status: 400 }
      );
    }

    const payload: LeadSubmissionPayload = parseResult.data;

    // Send notification to Telegram
    const telegramSent = await sendLeadToTelegram(payload);

    // Build WhatsApp follow-up URL
    const categoryText = CATEGORY_NAMES[payload.category] || payload.category;
    const waText = `Halo Tim Rekayasa CV Tunas Abadi Raya, saya ${payload.name} dari ${payload.companyName}. Kami telah mengirimkan spesifikasi proyek "${categoryText}" melalui formulir tunasabadiraya.cloud dan ingin berdiskusi lebih lanjut.`;
    const whatsappFollowUpUrl = `https://wa.me/6282195500236?text=${encodeURIComponent(
      waText
    )}`;

    return NextResponse.json(
      {
        success: true,
        data: {
          received: true,
          telegramSent,
          whatsappFollowUpUrl,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Lead] Unexpected error processing lead submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kesalahan internal server saat memproses formulir.",
      },
      { status: 500 }
    );
  }
}
