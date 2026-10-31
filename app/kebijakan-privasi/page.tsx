import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LegalCompliancePortal from "@/components/sections/LegalCompliancePortal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Perlindungan Data",
  description:
    "Kebijakan privasi dan perlindungan data konsumen Tunas Abadi Raya yang selaras dengan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022).",
  alternates: {
    canonical: "https://tunasabadiraya.cloud/kebijakan-privasi",
  },
  openGraph: {
    title: "Kebijakan Privasi & Perlindungan Data | Tunas Abadi Raya",
    description:
      "Kebijakan privasi dan perlindungan data konsumen Tunas Abadi Raya yang selaras dengan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022).",
    url: "https://tunasabadiraya.cloud/kebijakan-privasi",
    type: "website",
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <LegalCompliancePortal initialTab="privacy" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
