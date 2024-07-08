'use client'

import { usePathname } from "next/navigation"

export function useCurrentPath(href: string) {
  const currentPath = usePathname()

  return currentPath.startsWith(`${href}`)
}