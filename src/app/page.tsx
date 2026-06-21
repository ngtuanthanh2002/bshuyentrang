import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            image: `${siteConfig.url}/images/Bshuyentrang.png`,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            medicalSpecialty: ["Cardiovascular", "Phlebology"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "159B Lê Thanh Nghị",
              addressLocality: "Hà Nội",
              addressCountry: "VN",
            },
          }),
        }}
      />

      <SiteHeader />
      <main>
        <Hero />
        <TestimonialsSection />
        <ProblemSection />
        <ProcessSection />
        <FaqSection />
        <CtaBand />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
