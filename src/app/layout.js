import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@components/ui/theme-provider";
import { MainLayout } from "@components/layout/main-layout";
import { SidebarProvider } from "@components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibetrade",
  description: "AI agent trading on Sui blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <MainLayout>{children}</MainLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
