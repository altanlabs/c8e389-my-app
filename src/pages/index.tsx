import { HeroSection } from "@/components/blocks/hero-section";
import { ServicesSection } from "@/components/blocks/services-section";
import { AboutSection } from "@/components/blocks/about-section";
import { ContactSection } from "@/components/blocks/contact-section";

export default function IndexPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}