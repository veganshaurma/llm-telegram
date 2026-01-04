import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { FeaturesSection } from "@/components/features-section"
import { ForWhomSection } from "@/components/for-whom-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { DocumentsSection } from "@/components/documents-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturesSection />
        <ForWhomSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <DocumentsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
