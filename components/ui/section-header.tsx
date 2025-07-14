import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeader({ title, subtitle, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h1 className="text-3xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">{title}</h1>
      {subtitle && <p className="max-w-2xl text-lg text-gray-600">{subtitle}</p>}
    </div>
  )
}
