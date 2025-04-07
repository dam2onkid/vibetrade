"use client";

import { ArrowDownToLine, ArrowUpFromLine, Key, Ban, Plus } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        <Card className="p-6 transition-all cursor-pointer hover:bg-secondary/50 border-white/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-2 rounded-full bg-secondary">
              <ArrowDownToLine className="w-6 h-6" />
            </div>
            <span className="font-medium">Deposit</span>
          </div>
        </Card>

        <Card className="p-6 transition-all cursor-pointer hover:bg-secondary/50 border-white/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-2 rounded-full bg-secondary">
              <ArrowUpFromLine className="w-6 h-6" />
            </div>
            <span className="font-medium">Withdraw</span>
          </div>
        </Card>

        <Card className="p-6 transition-all cursor-pointer hover:bg-secondary/50 border-white/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-2 rounded-full bg-secondary">
              <Key className="w-6 h-6" />
            </div>
            <span className="font-medium">Show Private Key</span>
          </div>
        </Card>

        <Card className="p-6 transition-all cursor-pointer hover:bg-secondary/50 border-white/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-2 rounded-full bg-secondary">
              <Ban className="w-6 h-6" />
            </div>
            <span className="font-medium">Revoke</span>
          </div>
        </Card>
      </div>
      {/* Balances and staking cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-md bg-background">
                <Image
                  src="/icons/sui-token.svg"
                  alt="SUI Token"
                  width={32}
                  height={32}
                  className="text-primary"
                />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">$0.00</div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium">+$0.00</span>
                  <Badge variant="outline" className="bg-secondary/20">
                    0.00%
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 p-2 rounded-md bg-background">
                  <Image
                    src="/icons/staking.svg"
                    alt="Staking"
                    width={32}
                    height={32}
                    className="text-primary"
                  />
                </div>
                <div>
                  <div className="text-sm">Stake SUI</div>
                  <div className="text-xs text-muted-foreground">
                    Earn Rewards
                  </div>
                </div>
              </div>
              <div>
                <Badge className="px-2 py-1 font-medium bg-green-500/20 text-green-500">
                  8.27%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Chat with Agent Wallet */}
      {/* <Card className="mt-8 border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 p-2 border rounded-md">
              <Image
                src="/icons/agent.svg"
                alt="Agent"
                width={20}
                height={20}
                className="text-primary"
              />
            </div>
            <h3 className="text-lg font-medium">Chat with Agent Wallet</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 mb-4 rounded-md bg-secondary/20">
            <Input placeholder="Message Wallet" className="bg-background" />
          </div>
          <Button className="w-full bg-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Energy
          </Button>
        </CardContent>
      </Card>{" "} */}
    </div>
  );
}
