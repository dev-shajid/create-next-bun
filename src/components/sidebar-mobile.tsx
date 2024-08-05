"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import ProtectedNavContents from "./ProtectedNavContents"


export function SidebarMobile({ className }: { className?: string }) {
  const pathname = usePathname()
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    setSheetOpen(false)
  }, [pathname])

  return (
    <>
      <Sheet
        open={sheetOpen} onOpenChange={setSheetOpen}
      >
        <SheetTrigger
          className={cn("transition hover:opacity-30", className)}
        >
          <Menu />
        </SheetTrigger>
        <SheetContent
          side="left"
          role="navigation"
          className="!px-0 overflow-y-auto h-full flex flex-col"
        >
          <ProtectedNavContents />
        </SheetContent>
      </Sheet>
    </>
  )
}
