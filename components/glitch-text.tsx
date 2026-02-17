"use client"

import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: string
  as?: "h1" | "h2" | "h3" | "span" | "p"
  className?: string
  active?: boolean
}

export function GlitchText({
  children,
  as: Tag = "span",
  className,
  active = false,
}: GlitchTextProps) {
  return (
    <Tag
      className={cn("glitch-text", className)}
      data-text={children}
      data-active={active}
    >
      {children}
    </Tag>
  )
}
