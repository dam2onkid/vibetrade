"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import { ConnectModal, useCurrentAccount } from "@mysten/dapp-kit";
import { useState } from "react";

export default function AccountPage() {
  const currentAccount = useCurrentAccount();

  return (
    <div className="flex justify-center items-center h-screen">
      <ConnectButton />
      <span>{currentAccount?.address}</span>
    </div>
  );
}
