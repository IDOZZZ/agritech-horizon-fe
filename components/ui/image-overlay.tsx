import type React from "react"
import { cn } from "@/lib/utils"

interface ImageOverlayProps {
  children: React.ReactNode
  className?: string
  variant?: "gradient" | "solid" | "light"
}

export default function ImageOverlay({ children, className, variant = "gradient" }: ImageOverlayProps) {
  const variants = {
    gradient: "bg-gradient-to-t from-black/90 via-black/50 to-transparent",
    solid: "bg-black/60",
    light: "bg-black/30",
  }

  return <div className={cn("absolute inset-0", variants[variant], className)}>{children}</div>
}
