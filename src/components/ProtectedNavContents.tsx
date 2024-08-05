import { Fragment } from "react"
import { protectedRoutes } from "../../app.config"
import { Logo } from "./logo"
import { SidebarNavItem } from "./sidebar-nav-item"
import LogoutButton from "./LogoutButton"

const protectedNavItems = [...Object.keys(protectedRoutes).map(e => protectedRoutes[e])]

export default function ProtectedNavContents() {
    return (
        <>
            <div className="flex h-16 shrink-0 items-center justify-between border-b px-6">
                <Logo href={'/dashboard'} />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto md:my-4 text-sm font-medium md:px-4 px-2">
                <div className="flex-1">
                    <nav className="grid items-start gap-1">
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
                <LogoutButton />

            </div>
        </>
    )
}
