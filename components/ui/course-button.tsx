
import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface CourseButtonProps {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

export default function CourseButton({
  href = "#",
  children,
  variant = "primary",
  className,
  onClick,
}: CourseButtonProps) {
  const baseStyles = "inline-block transition-colors py-2 px-4 rounded-md text-center w-full text-sm font-medium"
  const variants = {
    primary: "bg-green-800 hover:bg-green-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-gray-900",
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
        {children}
      </button>
    )
  }

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  )
}
