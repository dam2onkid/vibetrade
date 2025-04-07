import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <Toaster />
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to VibeTrade
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>Project Setup Complete</CardTitle>
            <CardDescription>
              Your Next.js project is configured with Tailwind CSS and shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Click me</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
