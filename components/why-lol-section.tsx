"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { GlitchText } from "@/components/glitch-text"

export function WhyLolSection() {
  const { ref, isVisible } = useIntersection(0.2)

  return (
    <section
      id="why-lol"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 scanlines overflow-hidden"
      data-in-view={isVisible}
    >
      {/* Gradient background shift */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--background), oklch(0.15 0.03 160 / 0.3))",
          opacity: isVisible ? 1 : 0,
        }}
      />

      <div className="max-w-3xl mx-auto relative z-20">
        <div className="text-center mb-12">
          <GlitchText
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-2"
            active={isVisible}
          >
            The first rule of Flight Club is: tell EVERYONE about Flight Club.
          </GlitchText>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            We put {`"lol"`} in the domain because laughing is what you do when
            the alternative is crying into your $1,100 same-day ticket to see
            your mom in the hospital.
          </p>

          <p>
            The airline industry made{" "}
            <strong className="text-destructive">$29 billion</strong> in profit
            last year. They employ teams of PhDs to build pricing algorithms
            that extract maximum revenue from your urgency, your grief, your
            inflexible schedule.
          </p>

          <p>
            We think the correct response to that is a collective structure that
            makes their extraction irrelevant. And also: <em>lol.</em>
          </p>

          <div className="border-l-4 border-primary/50 pl-6 py-2 my-8">
            <p className="text-muted-foreground italic">
              {`This isn't a startup. There's no VC money. There's no exit
              strategy. It's just people pooling resources to protect each other
              from systems designed to pick them clean.`}
            </p>
          </div>

          <p className="text-muted-foreground">
            The airlines built an asymmetric weapon: they know your price
            sensitivity better than you do, and they use it against you in real
            time. We{`'`}re building the collective shield.
          </p>
        </div>
      </div>
    </section>
  )
}
