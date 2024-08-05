'use client'

import { usePathname } from "next/navigation"

export function useCurrentPath(href: string) {
  const currentPath = usePathname()

  return currentPath.split('/').slice(0,3).join('/')==href
}