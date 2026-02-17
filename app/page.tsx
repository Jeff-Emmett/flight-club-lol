"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { VisionSection } from "@/components/vision-section"
import { ModelsSection } from "@/components/models-section"
import { WhyLolSection } from "@/components/why-lol-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

export default function Home() {
  useScrollProgress()

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <VisionSection />
        <ModelsSection />
        <WhyLolSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
