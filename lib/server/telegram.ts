import "server-only";

import { LeadSubmissionPayload, ServiceCategorySlug, ProjectBudgetTier } from "@/types";
import { serverEnv } from "./env";

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const CATEGORY_NAMES: Record<ServiceCategorySlug, string> = {
  custom_web_erp: "Custom ERP / Web & Sistem Informasi",
  mobile_app: "Pengembangan Mobile App (iOS / Android)",
  payment_api: "Integrasi API & Payment Gateway (IDR)",
  cloud_devops: "Arsitektur Cloud & Dedicated SLA Support",
  enterprise_squad: "Dedicated Squad & Audit Sistem Legacy",
};

const BUDGET_TIER_NAMES: Record<ProjectBudgetTier, string> = {
  tier_starter: "Rp 15.000.000 – Rp 35.000.000 (Paket Starter)",
  tier_growth: "Rp 35.000.000 – Rp 75.000.000 (Sistem Operasional)",
  tier_enterprise: "> Rp 75.000.000 (Solusi Enterprise / By-Order)",
};

export async function sendLeadToTelegram(
  lead: LeadSubmissionPayload
): Promise<boolean> {
  const token = serverEnv.TELEGRAM_BOT_TOKEN;
  const chatId = serverEnv.TELEGRAM_ADMIN_CHAT_ID;

  if (!token || !chatId) {
    console.warn(
      "[Telegram] Skipping notification: TELEGRAM_BOT_TOKEN or TELEGRAM_ADMIN_CHAT_ID is not configured."
    );
    return false;
  }

  const categoryLabel =
    CATEGORY_NAMES[lead.category] || escapeHtml(lead.category);
  const budgetLabel =
    BUDGET_TIER_NAMES[lead.budgetTier] || escapeHtml(lead.budgetTier);

  const timestamp = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Makassar",
  }).format(new Date());

  const messageHtml = [
    `⚡ <b>PENGAJUAN PROYEK BARU // CV TUNAS ABADI RAYA</b>`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🏢 <b>Perusahaan:</b> ${escapeHtml(lead.companyName)}`,
    `👤 <b>Nama Klien:</b> ${escapeHtml(lead.name)}`,
    `📧 <b>Email:</b> ${escapeHtml(lead.email)}`,
    `📱 <b>WhatsApp:</b> ${escapeHtml(lead.whatsapp)}`,
    ``,
    `🎯 <b>Kategori Layanan:</b>`,
    `<code>${escapeHtml(categoryLabel)}</code>`,
    ``,
    `💰 <b>Estimasi Skala Anggaran:</b>`,
    `<code>${escapeHtml(budgetLabel)}</code>`,
    ``,
    `📝 <b>Deskripsi Kebutuhan:</b>`,
    `<blockquote>${escapeHtml(lead.message)}</blockquote>`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🌐 <b>Infrastruktur:</b> tunasabadiraya.cloud`,
    `⏰ <i>Waktu (WITA): ${escapeHtml(timestamp)}</i>`,
  ].join("\n");

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageHtml,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `[Telegram] Failed to send message. HTTP ${response.status}: ${errorText}`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Telegram] Network exception while sending notification:", error);
    return false;
  }
}
