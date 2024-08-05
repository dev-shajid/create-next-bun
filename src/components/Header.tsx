import { cn } from "@/lib/utils"
import ThemeToggle from "./theme/them-change"
import { CircleUser } from "lucide-react"
import { SidebarMobile } from "./sidebar-mobile"
import { LinkButton } from "./ui/linkButton"

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 flex h-16 shrink-0 bg-background/50 items-center justify-between border-b px-4 backdrop-blur-lg lg:px-6",
        className,
      )}
    >
      <SidebarMobile className="md:hidden" />
      <div className="space-x-4 ml-auto">
        <ThemeToggle />
      </div>
    </header>
  )
}