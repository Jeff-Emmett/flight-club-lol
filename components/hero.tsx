"use client"

import { Plane, Cloud, DollarSign, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/glitch-text"

const floatingItems = [
  { Icon: Plane, className: "top-[15%] left-[10%]", delay: "0s", duration: "6s" },
  { Icon: Cloud, className: "top-[25%] right-[15%]", delay: "1s", duration: "8s" },
  { Icon: DollarSign, className: "top-[60%] left-[20%]", delay: "2s", duration: "7s" },
  { Icon: Plane, className: "top-[70%] right-[10%]", delay: "0.5s", duration: "9s" },
  { Icon: Cloud, className: "top-[40%] left-[75%]", delay: "3s", duration: "7.5s" },
  { Icon: DollarSign, className: "top-[20%] left-[50%]", delay: "1.5s", duration: "6.5s" },
]

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10"
    >
      {/* Floating background elements */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.className} opacity-[0.12] dark:opacity-[0.08] pointer-events-none`}
          style={{
            animation: `float-gentle ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          <item.Icon className="size-12 md:size-16 text-primary" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium dark:bg-primary/20">
            Coming Soon
          </span>
        </div>

        <GlitchText
          as="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
        >
          {`We're just a bunch of friends who hate paying $800 for a flight that was $200 yesterday :)`}
        </GlitchText>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          So we built a way to stop getting gouged. An ergodically aligned
          collective mechanism to protect each other from extractive pricing
          algorithms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="xl"
            onClick={() => scrollTo("vision")}
            className="rounded-full"
          >
            See How It Works
          </Button>
          <Button
            size="xl"
            variant="outline"
            onClick={() => scrollTo("cta")}
            className="rounded-full"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-6 text-muted-foreground" />
      </div>
    </section>
  )
}
