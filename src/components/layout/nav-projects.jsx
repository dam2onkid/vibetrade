"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@components/ui/sidebar";

import { BotMessageSquare, ChartCandlestick, Wallet } from "lucide-react";

const projects = [
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
];

export function NavProjects() {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
