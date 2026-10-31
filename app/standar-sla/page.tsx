import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LegalCompliancePortal from "@/components/sections/LegalCompliancePortal";

export const metadata: Metadata = {
  title: "Standar Keamanan, HAKI & SLA Operasional",
  description:
    "Standar garansi bug 30-90 hari, uptime SLA 99.9%, respons insiden kritis P1 < 2 jam, dan penyerahan 100% kepemilikan hak cipta (HAKI) CV Tunas Abadi Raya.",
  alternates: {
    canonical: "https://tunasabadiraya.cloud/standar-sla",
  },
  openGraph: {
    title: "Standar Keamanan, HAKI & SLA Operasional | CV Tunas Abadi Raya",
    description:
      "Standar garansi bug 30-90 hari, uptime SLA 99.9%, respons insiden kritis P1 < 2 jam, dan penyerahan 100% kepemilikan hak cipta (HAKI) CV Tunas Abadi Raya.",
    url: "https://tunasabadiraya.cloud/standar-sla",
    type: "website",
  },
};

export default function StandarSlaPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <LegalCompliancePortal initialTab="sla" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
