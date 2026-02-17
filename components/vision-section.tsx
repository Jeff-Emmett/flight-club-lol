"use client"

import { useIntersection } from "@/hooks/use-intersection"

export function VisionSection() {
  const { ref, isVisible } = useIntersection(0.3)

  return (
    <section
      id="vision"
      className="py-24 px-6 bg-gradient-to-b from-primary/5 to-secondary/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What if we just... looked out for each other?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flight Club is an ergodically aligned collective mechanism.
            <span className="block mt-1 text-sm italic">
              {`(Don't worry, we'll explain.)`}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Explanation */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              In a system with pricing volatility, individuals get destroyed by
              outlier events. A $200 flight becomes $1,200 when you need it
              most.
            </p>
            <p className="text-lg leading-relaxed">
              But a pool of people, sharing the risk, experiences the{" "}
              <strong>average</strong>. The wild swings that bankrupt
              individuals become gentle ripples across a collective.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 text-lg italic text-muted-foreground">
              {`"The house always wins — unless the house is a mutual aid
              society."`}
            </blockquote>
          </div>

          {/* Pooling animation SVG */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="flex justify-center"
          >
            <svg viewBox="0 0 300 300" className="w-full max-w-xs crt-glow">
              {/* Central pool circle */}
              <circle
                cx="150"
                cy="150"
                r="80"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                opacity="0.3"
                strokeDasharray="4,4"
              />
              <circle
                cx="150"
                cy="150"
                r="40"
                fill="var(--primary)"
                opacity="0.08"
              />

              {/* Individual dots - animate from volatile to pooled */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2
                const poolX = 150 + Math.cos(angle) * 55
                const poolY = 150 + Math.sin(angle) * 55
                const chaosX = 150 + Math.cos(angle) * (100 + (i % 3) * 30)
                const chaosY = 150 + Math.sin(angle) * (100 + (i % 3) * 30)

                return (
                  <circle
                    key={i}
                    r="6"
                    fill="var(--primary)"
                    opacity="0.7"
                    style={{
                      transition: "all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transitionDelay: `${i * 0.08}s`,
                      cx: isVisible ? poolX : chaosX,
                      cy: isVisible ? poolY : chaosY,
                    }}
                  />
                )
              })}

              {/* Center label */}
              <text
                x="150"
                y="154"
                textAnchor="middle"
                fill="var(--primary)"
                fontSize="12"
                fontWeight="bold"
                fontFamily="var(--font-mono)"
                opacity={isVisible ? 1 : 0}
                style={{ transition: "opacity 0.5s ease 1.5s" }}
              >
                POOL
              </text>

              {/* Labels */}
              <text
                x="150"
                y="268"
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="10"
              >
                {isVisible
                  ? "Collective: smooth, predictable"
                  : "Individual: volatile, exposed"}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
