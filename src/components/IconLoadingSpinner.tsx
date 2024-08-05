"use client"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export function IconLoadingSpinner({
  size = "md",
  className,
}: {
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }
  return (
    <Loader2
      className={cn(
        "animate-spin size-6",
        className,
        `size-${size}`
      )}
    />
  )
}
