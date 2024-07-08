import { cn } from "@/lib/utils"

export function Title1({ children, className }: React.ComponentProps<"h1">) {
  return <h1 className={cn("md:text-4xl sm:text-3xl text-2xl font-bold", className)}>{children}</h1>
}

export function Title2({ children, className }: React.ComponentProps<"h2">) {
  return <h2 className={cn("md:text-3xl sm:text-2xl text-xl font-semibold", className)}>{children}</h2>
}