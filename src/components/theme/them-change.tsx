"use client"

import * as React from "react"
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        className="!ring-0 select-none" variant="outline" size="icon"
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      >
        {
          theme == 'light' ?
            <RxMoon className="h-[1.2rem] w-[1.2rem]" />
            : <RxSun className="h-[1.2rem] w-[1.2rem]" />
        }
        {/* <span className="sr-only">Toggle theme</span> */}
      </Button>
    </>
  )
}
