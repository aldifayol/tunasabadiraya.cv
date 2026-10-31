import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  HeroSection,
  ServicesSection,
  ChallengesMatrixSection,
  SprintMethodologySection,
  PortfolioSection,
  ProjectSchemesSection,
  ConsultationSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-[76px]">
        <div className="flex flex-col w-full">
          <HeroSection />
          <ServicesSection />
          <ChallengesMatrixSection />
          <SprintMethodologySection />
          <PortfolioSection />
          <ProjectSchemesSection />
          <ConsultationSection />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
