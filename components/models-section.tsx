"use client"

import {
  Shield,
  Lock,
  Globe,
  Users,
  Landmark,
  HandHeart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ModelsSection() {
  return (
    <section id="models" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {`We're exploring several paths.`}
          </h2>
          <p className="text-lg text-muted-foreground">
            All of them beat getting fleeced.
          </p>
        </div>

        <Tabs defaultValue="pool" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pool">The Mutual Pool</TabsTrigger>
            <TabsTrigger value="options">Flight Options</TabsTrigger>
            <TabsTrigger value="bigger">The Bigger Picture</TabsTrigger>
          </TabsList>

          {/* Tab 1: Mutual Pool */}
          <TabsContent value="pool">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="size-6 text-primary" />
                  <Badge variant="success">Low Risk</Badge>
                </div>
                <CardTitle className="text-2xl">The Mutual Pool</CardTitle>
                <CardDescription className="text-base">
                  Classic mutual aid: everyone contributes, everyone is covered.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-2xl font-bold text-primary">$20</div>
                    <div className="text-sm text-muted-foreground">
                      /month base dues
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-2xl font-bold text-primary">
                      Shared
                    </div>
                    <div className="text-sm text-muted-foreground">
                      risk pool
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="text-2xl font-bold text-primary">
                      $100-300
                    </div>
                    <div className="text-sm text-muted-foreground">
                      /year expected savings
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      Members contribute monthly. When someone faces a
                      last-minute price spike, the pool covers the difference.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <HandHeart className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      Phase 1 starts with aggregated buying power: shared travel
                      agent access, group airline passes, and price-lock tools.
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground italic border-t pt-4">
                  Honest note: Pure insurance has challenges (adverse selection,
                  moral hazard). {`That's`} why we pair the pool with the models
                  below.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Flight Options */}
          <TabsContent value="options">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="size-6 text-primary" />
                  <Badge variant="warning">Medium Risk</Badge>
                </div>
                <CardTitle className="text-2xl">Flight Options</CardTitle>
                <CardDescription className="text-base">
                  Financial derivatives for regular people. Lock in today{`'`}s
                  price, exercise later if you need to.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Flex",
                      price: "$15",
                      options: "2 options/year",
                    },
                    {
                      name: "Standard",
                      price: "$35",
                      options: "4 options/year",
                    },
                    {
                      name: "Premium",
                      price: "$65",
                      options: "6 options/year",
                    },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className="rounded-lg border p-4 text-center"
                    >
                      <div className="font-semibold text-sm mb-1">
                        {tier.name}
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {tier.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        /month &middot; {tier.options}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Lock className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      {`You "lock in" the 21-day-out price for a route. If you need
                      to fly last-minute, exercise your option and pay the locked
                      price. The pool absorbs the difference.`}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Landmark className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      Expected savings: $200-800/year depending on tier and
                      usage. Break-even at just 1-2 last-minute flights per
                      year.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Bigger Picture */}
          <TabsContent value="bigger">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="size-6 text-primary" />
                  <Badge variant="outline">Exploratory</Badge>
                </div>
                <CardTitle className="text-2xl">The Bigger Picture</CardTitle>
                <CardDescription className="text-base">
                  What happens when a community negotiates with airlines the way
                  a corporation does?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-sm">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="font-semibold mb-1">
                      Aggregated Buying Power
                    </h4>
                    <p className="text-muted-foreground">
                      Travel agent credentials, consolidator fares, group
                      airline passes. The deals that corporations and agencies
                      get, but for regular people.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="font-semibold mb-1">Credit Union Model</h4>
                    <p className="text-muted-foreground">
                      Closed-group social accountability. When everyone knows
                      each other, gaming the system has social consequences.
                      This is how mutual aid actually works.
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="font-semibold mb-1">
                      Verified Emergency Coverage
                    </h4>
                    <p className="text-muted-foreground">
                      The hardest version to game: coverage only for documented
                      emergencies (medical, bereavement, jury duty, natural
                      disasters). Low premiums, real protection.
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-dashed border-primary/30 p-4">
                    <h4 className="font-semibold mb-1 text-primary">
                      Beyond flights...
                    </h4>
                    <p className="text-muted-foreground">
                      The same ergodic principle applies to any domain where
                      algorithms extract rents from individual volatility.
                      Hotels. Concert tickets. Surge pricing. The pattern is the
                      same. The solution scales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
