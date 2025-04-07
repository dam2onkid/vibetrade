"use client"

import * as React from "react"
import {
  BotMessageSquare,
  ChartCandlestick,
  Command,
  LifeBuoy,
  FileText,
  Wallet,
} from "lucide-react"
import Link from "next/link"

import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar
} from "@components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Docs",
      url: "#",
      icon: FileText,
    },
  ],
  projects: [
    {
      name: "Chat",
      url: "/chat",
      icon: BotMessageSquare,
    },
    {
      name: "Tokens",
      url: "/tokens",
      icon: ChartCandlestick,
    },
    {
      name: "Wallet",
      url: "/wallet",
      icon: Wallet,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-white/10 border-r-[1px]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Vibetrade</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <div className="mt-auto space-y-2">
          <NavSecondary items={data.navSecondary} />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
