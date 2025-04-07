"use client";

import { useState } from "react";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab, TokensTab, TradesTab, NFTsTab } from "./components";

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const currentAccount = useCurrentAccount();

  if (!currentAccount) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>Connect your wallet to start</span>
      </div>
    );
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-8">
        <Tabs defaultValue="overview" onValueChange={setActiveTab}>
          <TabsList className="mb-8 border-b border-border">
            <TabsTrigger value="overview" className="text-base cursor-pointer">
              Overview
            </TabsTrigger>
            <TabsTrigger value="tokens" className="text-base cursor-pointer">
              Tokens
            </TabsTrigger>
            <TabsTrigger value="trades" className="text-base cursor-pointer">
              Trades
            </TabsTrigger>
            <TabsTrigger value="nfts" className="text-base cursor-pointer">
              NFTs
            </TabsTrigger>
            <div className="flex justify-center items-center ml-auto">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-muted-foreground">
                    {currentAccount.address.slice(0, 6)}...
                    {currentAccount.address.slice(-4)}
                  </span>
                  <CopyButton address={currentAccount.address} />
                  <ExplorerButton address={currentAccount.address} />
                </div>
                <BalanceDisplay balance={currentAccount.balance} />
              </div>
            </div>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="tokens">
            <TokensTab />
          </TabsContent>

          <TabsContent value="trades">
            <TradesTab />
          </TabsContent>

          <TabsContent value="nfts">
            <NFTsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const CopyButton = ({ address }) => {
  return (
    <button
      className="p-1 rounded-md hover:bg-secondary/50 cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(address);
        // Show a toast notification when address is copied
        const toast = document.createElement("div");
        toast.className =
          "fixed top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md shadow-md transition-opacity duration-300";
        toast.textContent = "Address copied to clipboard";
        document.body.appendChild(toast);

        // Remove the toast after 2 seconds
        setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 2000);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    </button>
  );
};

const ExplorerButton = ({ address }) => {
  return (
    <a
      href={`https://suivision.xyz/account/${address}`}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 rounded-md hover:bg-secondary/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
    </a>
  );
};

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="flex items-center px-2 py-1 text-sm font-medium rounded-md bg-secondary/20">
      <span className="text-primary">{balance || "0"} SUI</span>
    </div>
  );
};
