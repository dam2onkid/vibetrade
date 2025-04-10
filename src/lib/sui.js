"use client";
import { registerEnokiWallets } from "@mysten/enoki";
import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mysten/dapp-kit/dist/index.css";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();
const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

export function registerEnoki() {
  registerEnokiWallets({
    client: suiClient,
    network: "testnet",
    apiKey: process.env.ENOKI_API_KEY,
    providers: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
      // twitch: {
      //   clientId: process.env.TWITCH_CLIENT_ID,
      // },
    },
  });
}

export function SuiProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect={true}>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
