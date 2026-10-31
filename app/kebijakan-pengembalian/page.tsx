import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LegalCompliancePortal from "@/components/sections/LegalCompliancePortal";

export const metadata: Metadata = {
  title: "Kebijakan Pengembalian Dana & Pembatalan",
  description:
    "Kebijakan resmi pembatalan proyek dan pengembalian dana (refund policy) berbasis milestone 7-14 hari kerja sesuai standar regulasi gerbang pembayaran berlisensi Bank Indonesia.",
  alternates: {
    canonical: "https://tunasabadiraya.cloud/kebijakan-pengembalian",
  },
  openGraph: {
    title: "Kebijakan Pengembalian Dana & Pembatalan | CV Tunas Abadi Raya",
    description:
      "Kebijakan resmi pembatalan proyek dan pengembalian dana (refund policy) berbasis milestone 7-14 hari kerja sesuai standar regulasi gerbang pembayaran berlisensi Bank Indonesia.",
    url: "https://tunasabadiraya.cloud/kebijakan-pengembalian",
    type: "website",
  },
};

export default function KebijakanPengembalianPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <LegalCompliancePortal initialTab="refund" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
