"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Smile, Skull } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [flashing, setFlashing] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="opacity-0">
        <Smile className="size-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setFlashing(true)
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
      setTimeout(() => setFlashing(false), 300)
    }, 50)
  }

  return (
    <>
      {flashing && <div className="theme-flash" />}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Skull className="size-5 text-primary" />
        ) : (
          <Smile className="size-5 text-primary" />
        )}
      </Button>
    </>
  )
}
