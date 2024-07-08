import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import ThemeToggle from "./theme/them-change"
import { Button } from "./ui/button"
import { CircleUser } from "lucide-react"
import { SidebarMobile } from "./sidebar-mobile"
import PublicNavComponent from "./PublicNavItems"
import { LinkButton } from "./ui/linkButton"

export default function Header({ className, publicRoute = false }: { className?: string, publicRoute?: boolean }) {
  return (
    <header
      className={cn(
        "sticky top-0 flex h-16 shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg lg:px-6",
        className,
      )}
    >
      <div className="flex gap-4 items-center">
        <SidebarMobile className="md:hidden" publicRoute={publicRoute} />
        {
          publicRoute ?
            <>
              <Logo />
              <div className="hidden ml-6 md:flex items-center gap-4">
                <PublicNavComponent />
              </div>
            </>
            : <></>
        }
      </div>
      <div className="space-x-4 ml-auto">
        <ThemeToggle />
        <LinkButton href='/dashboard' variant="outline" size="icon" className="rounded-md">
          <CircleUser className="h-5 w-5" />
        </LinkButton>
      </div>
    </header>
  )
}