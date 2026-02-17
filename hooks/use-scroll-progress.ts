"use client"

import { useEffect, useRef } from "react"

export function useScrollProgress() {
  const rafRef = useRef<number>(0)
  const lastValueRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0

        // Only update if change is meaningful (> 1%)
        if (Math.abs(progress - lastValueRef.current) > 0.01) {
          lastValueRef.current = progress
          document.documentElement.style.setProperty(
            "--scroll-depth",
            progress.toFixed(3)
          )
        }

        rafRef.current = 0
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Set initial value

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])
}
