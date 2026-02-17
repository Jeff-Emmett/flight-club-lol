"use client"

import { AlertTriangle, TrendingUp, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PricingChart } from "@/components/pricing-chart"
import { pricingStats } from "@/lib/pricing-data"

const callouts = [
  {
    icon: AlertTriangle,
    title: "Your emergency is their payday",
    description: `Average ${pricingStats.avgPremium} premium on last-minute domestic flights. Your urgency is a revenue opportunity.`,
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    title: `${pricingStats.markupRange} markup`,
    description:
      "Same seat. Same plane. Same crew. Different price because you needed it sooner.",
    color: "text-accent dark:text-accent",
  },
  {
    icon: Bot,
    title: "It's not supply and demand. It's an algorithm.",
    description:
      "Airlines use dynamic pricing AI trained on one objective: maximize revenue extraction.",
    color: "text-primary",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Airlines use algorithms to maximize what you pay.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {`Here's what that looks like.`}
          </p>
        </div>

        {/* Pricing chart */}
        <div className="mb-16">
          <PricingChart />
        </div>

        {/* Callout cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {callouts.map((item) => (
            <Card
              key={item.title}
              className="border-border/50 hover:border-border transition-colors"
            >
              <CardContent className="pt-6">
                <item.icon className={`size-8 mb-4 ${item.color}`} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
