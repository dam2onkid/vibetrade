"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full justify-start gap-2 px-2 hover:bg-sidebar-muted"
    >
      <div className="relative flex h-6 w-6 items-center justify-center">
        <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </div>
      <span className="text-sm font-medium text-sidebar-foreground">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </Button>
  )
}