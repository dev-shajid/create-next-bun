import { Fragment } from "react"
import { protectedRoutes } from "../../app.config"
import { Logo } from "./logo"
import { SidebarNavItem } from "./sidebar-nav-item"

const protectedNavItems = [...Object.keys(protectedRoutes).map(e => protectedRoutes[e])]

export default function ProtectedNavComponent() {
  return (
    <>
      <div className="md:flex hidden h-screen w-full max-w-[280px] flex-col gap-2 border-r">
        <div className="sticky top-0 flex h-16 shrink-0 items-center justify-between border-b px-6">
          <Logo />
        </div>
        <div className="flex-1 mt-4">
          <nav className="grid items-start px- gap-1 text-sm font-medium lg:px-4">
            {
              protectedNavItems.map((menu, i) => (
                <Fragment key={i}>
                  <SidebarNavItem
                    href={menu.href}
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
              ))
            }
          </nav>
        </div>
      </div>
    </>
  )
}