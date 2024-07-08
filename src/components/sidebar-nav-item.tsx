'use client'

import Link from "next/link"
import { useCurrentPath } from "@/hooks/use-current-path"

export function SidebarNavItem({
  href = "",
  children,
  onClick,
}: React.ComponentProps<"a"> & {
  children: React.PropsWithChildren
  icon?: React.ElementType
}) {
  const isCurrentPath = useCurrentPath(href)

  if (!children) {
    return null
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-sm px-3 py-2 text-primary transition-all border ${isCurrentPath ? 'bg-gray-200 dark:bg-gray-900 border-border' : 'bg-transparent border-transparent'} md:hover:bg-muted`}
    >
      {children}
    </Link>
  )
}
