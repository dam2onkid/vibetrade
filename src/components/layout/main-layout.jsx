"use client";

import { Suspense } from "react";
import { ThemeProvider } from "@components/ui/theme-provider";
import { SidebarProvider } from "@components/ui/sidebar";
// import { WalletProvider } from "@suiet/wallet-kit";
// import "@suiet/wallet-kit/style.css";
import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mysten/dapp-kit/dist/index.css";

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();

import { AppSidebar } from "@components/layout/app-sidebar";
import { SiteHeader } from "@components/ui/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import { LoadingSpinner } from "@/components/ui/loading";
import { usePathname } from "next/navigation";

export function ClientProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <App children={children} />
          </ThemeProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

function App({ children }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentTab =
    pathSegments.length > 0
      ? pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)
      : "Home";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-y-auto">
        <SiteHeader title={currentTab} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}
