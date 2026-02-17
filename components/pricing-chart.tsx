"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { domesticPricing, internationalPricing } from "@/lib/pricing-data"

// Convert data points to SVG path coordinates
// Chart: X = 0 (60 days) to 400 (0 days), Y = 0 (top, 10x) to 300 (bottom, 0x)
function toPath(
  data: { days: number; multiplier: number }[]
): string {
  const points = data.map((d) => ({
    x: ((60 - d.days) / 60) * 380 + 40,
    y: 280 - (d.multiplier / 10) * 260,
  }))

  // Smooth bezier curve through points
  let path = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const cpx = (prev.x + curr.x) / 2
    path += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`
  }
  return path
}

export function PricingChart() {
  const { ref, isVisible } = useIntersection(0.3)

  const domesticPath = toPath(domesticPricing)
  const internationalPath = toPath(internationalPricing)

  // Y position for 2x multiplier (danger threshold)
  const dangerY = 280 - (2 / 10) * 260

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 440 320"
        className="w-full h-auto crt-glow"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Danger zone (above 2x) */}
        <rect
          x="40"
          y="20"
          width="380"
          height={dangerY - 20}
          fill="var(--destructive)"
          opacity="0.06"
          rx="4"
        />

        {/* Grid lines */}
        {[0, 2, 4, 6, 8, 10].map((mult) => {
          const y = 280 - (mult / 10) * 260
          return (
            <g key={mult}>
              <line
                x1="40"
                y1={y}
                x2="420"
                y2={y}
                stroke="var(--border)"
                strokeWidth="0.5"
                strokeDasharray={mult === 2 ? "none" : "4,4"}
                opacity={mult === 2 ? 0.6 : 0.3}
              />
              <text
                x="32"
                y={y + 4}
                textAnchor="end"
                fill="var(--muted-foreground)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {mult}x
              </text>
            </g>
          )
        })}

        {/* X-axis labels */}
        {[60, 45, 30, 21, 14, 7, 3, 0].map((days) => {
          const x = ((60 - days) / 60) * 380 + 40
          return (
            <text
              key={days}
              x={x}
              y="300"
              textAnchor="middle"
              fill="var(--muted-foreground)"
              fontSize="9"
              fontFamily="var(--font-mono)"
            >
              {days}d
            </text>
          )
        })}

        {/* 2x danger label */}
        <text
          x="425"
          y={dangerY + 4}
          fill="var(--destructive)"
          fontSize="9"
          fontFamily="var(--font-mono)"
          fontWeight="bold"
        >
          2x
        </text>

        {/* International line */}
        <path
          d={internationalPath}
          fill="none"
          stroke="var(--chart-3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="draw-path"
          data-visible={isVisible}
          style={{ animationDelay: "0.3s" }}
        />

        {/* Domestic line */}
        <path
          d={domesticPath}
          fill="none"
          stroke="var(--chart-1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="draw-path"
          data-visible={isVisible}
        />

        {/* End point dots */}
        {isVisible && (
          <>
            <circle
              cx={((60 - 0) / 60) * 380 + 40}
              cy={280 - (10 / 10) * 260}
              r="4"
              fill="var(--chart-1)"
              className="animate-in fade-in duration-1000"
              style={{ animationDelay: "2s" }}
            />
            <circle
              cx={((60 - 0) / 60) * 380 + 40}
              cy={280 - (5 / 10) * 260}
              r="4"
              fill="var(--chart-3)"
              className="animate-in fade-in duration-1000"
              style={{ animationDelay: "2.3s" }}
            />
          </>
        )}

        {/* Axis labels */}
        <text
          x="230"
          y="316"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
        >
          Days before departure
        </text>
        <text
          x="14"
          y="155"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          transform="rotate(-90, 14, 155)"
        >
          Price multiplier
        </text>
      </svg>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[var(--chart-1)] rounded" />
          <span className="text-muted-foreground">Domestic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[var(--chart-3)] rounded" />
          <span className="text-muted-foreground">International</span>
        </div>
      </div>
    </div>
  )
}
