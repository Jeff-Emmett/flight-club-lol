"use client"

import { useState, useEffect } from "react"
import { Plane, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Vision", href: "#vision" },
  { label: "Models", href: "#models" },
  { label: "Why lol", href: "#why-lol" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-bold text-lg hover:text-primary transition-colors"
        >
          <Plane className="size-5" />
          <span>
            flightclub
            <span className="text-primary">.lol</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </Button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#cta")}
            className="ml-2 rounded-full"
          >
            Join
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#cta")}
            className="w-full rounded-full mt-2"
          >
            Join the Waitlist
          </Button>
        </div>
      )}
    </nav>
  )
}
