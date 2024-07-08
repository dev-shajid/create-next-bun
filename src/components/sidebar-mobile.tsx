"use client"

import { Fragment, useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { protectedRoutes, publicRoutes } from "@/../app.config"
import { SidebarNavItem } from "./sidebar-nav-item"
import { Separator } from "./ui/separator"
import { usePathname } from "next/navigation"

const publicRoutesItems = [publicRoutes.pricing, publicRoutes.contact]
const protectedRoutesItems = [...Object.keys(protectedRoutes).map(e => protectedRoutes[e])]

export function SidebarMobile({ className, publicRoute = false }: { className?: string, publicRoute: boolean }) {
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
          className="!px-0"
        >
          <SheetHeader
          >
            <SheetTitle
              className="pl-6"
            >
              <Logo />
            </SheetTitle>
            <Separator />
            <SheetDescription asChild className="px-3 !mt-4">
              <div className="space-y-8">
                <nav className="grid items-start gap-1 text-sm font-medium lg:px-4">
                  {(publicRoute ? publicRoutesItems : protectedRoutesItems).map((menu, i) =>
                    menu && (
                      <Fragment key={i}>
                        <SidebarNavItem
                          href={menu.href}
                          onClick={() => setSheetOpen(false)}
                        >

                          {menu.icon && (
                            <menu.icon
                              size={18}
                              aria-hidden="true"
                            />
                          )}
                          {menu.name}
                        </SidebarNavItem>
                      </Fragment>
                    ),
                  )}
                </nav>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
