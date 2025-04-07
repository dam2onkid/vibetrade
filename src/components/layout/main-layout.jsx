"use client";

import { AppSidebar } from "@components/layout/app-sidebar";
import { Sidebar } from "@components/ui/sidebar";
import { SidebarTrigger } from "@components/ui/sidebar";
import { Separator } from "@components/ui/separator";
import { usePathname } from "next/navigation";

export function MainLayout({ children }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentTab = pathSegments.length > 0
    ? pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)
    : 'Home';

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <p>{currentTab}</p>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}