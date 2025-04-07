import Link from "next/link"
import { HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-background">
      <div className="mx-auto flex  flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">404</h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/" className="gap-2">
              <HomeIcon className="size-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}