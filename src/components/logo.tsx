import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({href='/'}: {href?: string}) {
  return (
    <Link
      className={cn(
        "flex items-center space-x-1 text-xl font-bold ",
      )}
      href={href}
    >
      <span className="text-xl font-extrabold">NXT</span>
    </Link>
  )
}
