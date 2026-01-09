import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DesignsSection } from "@/components/designs-section"
import { PricingSection } from "@/components/pricing-section"
import { IncludesSection } from "@/components/includes-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TargetAudienceSection />
      <HowItWorksSection />
      <DesignsSection />
      <PricingSection />
      <IncludesSection />
      <FaqSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
