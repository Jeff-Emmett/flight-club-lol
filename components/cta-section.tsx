"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setLoading(true)
    // Stub: just simulate a brief delay
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {`We're building this. Want in?`}
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Flight Club is in the research and design phase. Drop your email and
          {` we'll`} let you know when {`we're`} ready to fly.
        </p>

        {submitted ? (
          <div className="rounded-xl border bg-primary/5 p-8 space-y-3">
            <Check className="size-10 text-primary mx-auto" />
            <p className="text-xl font-semibold">
              {`You're in the club.`}
            </p>
            <p className="text-muted-foreground">
              First rule: tell everyone.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base rounded-full px-5"
            />
            <Button
              type="submit"
              size="xl"
              disabled={loading}
              className="rounded-full shrink-0"
            >
              {loading ? (
                "..."
              ) : (
                <>
                  Join <Send className="size-4" />
                </>
              )}
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-6">
          No spam. No algorithms. Just humans.
        </p>
      </div>
    </section>
  )
}
