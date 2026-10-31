import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LegalCompliancePortal from "@/components/sections/LegalCompliancePortal";

export const metadata: Metadata = {
  title: "Spesifikasi Layanan & Kebijakan Kepatuhan Legal",
  description:
    "Standar deliverables, tata kelola kontrak, alur pembayaran milestone IDR via Payment Gateway resmi, dan jaminan HAKI Tunas Abadi Raya.",
  alternates: {
    canonical: "https://tunasabadiraya.cloud/spesifikasi-legal",
  },
  openGraph: {
    title: "Spesifikasi Layanan & Kebijakan Kepatuhan Legal | Tunas Abadi Raya",
    description:
      "Standar deliverables, tata kelola kontrak, alur pembayaran milestone IDR via Payment Gateway resmi, dan jaminan HAKI Tunas Abadi Raya.",
    url: "https://tunasabadiraya.cloud/spesifikasi-legal",
    type: "website",
  },
};

export default function SpesifikasiLegalPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <LegalCompliancePortal initialTab="tos" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
