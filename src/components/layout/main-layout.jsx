'use client';

import { Suspense } from 'react';
import { ThemeProvider } from "@components/ui/theme-provider";
import { SidebarProvider } from "@components/ui/sidebar";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

import { AppSidebar } from "@components/layout/app-sidebar";
import { SiteHeader } from "@components/ui/site-header";
import {
  SidebarInset,
} from "@/components/ui/sidebar"
import {  LoadingSpinner } from "@/components/ui/loading";
import { usePathname } from "next/navigation";

export function MainLayout({ children }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentTab = pathSegments.length > 0
    ? pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)
    : 'Home';

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <WalletProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 overflow-y-auto">
            <SiteHeader title={currentTab} />
            <Suspense fallback={<LoadingSpinner />}>
              {children}
            </Suspense>
          </SidebarInset>
        </SidebarProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}