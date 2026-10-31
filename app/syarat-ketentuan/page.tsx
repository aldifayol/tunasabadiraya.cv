import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LegalCompliancePortal from "@/components/sections/LegalCompliancePortal";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan",
  description:
    "Syarat & ketentuan resmi layanan rekayasa perangkat lunak, ruang lingkup kerja, pembayaran milestone, dan yurisdiksi hukum CV Tunas Abadi Raya.",
  alternates: {
    canonical: "https://tunasabadiraya.cloud/syarat-ketentuan",
  },
  openGraph: {
    title: "Syarat & Ketentuan Layanan | CV Tunas Abadi Raya",
    description:
      "Syarat & ketentuan resmi layanan rekayasa perangkat lunak, ruang lingkup kerja, pembayaran milestone, dan yurisdiksi hukum CV Tunas Abadi Raya.",
    url: "https://tunasabadiraya.cloud/syarat-ketentuan",
    type: "website",
  },
};

export default function SyaratKetentuanPage() {
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
