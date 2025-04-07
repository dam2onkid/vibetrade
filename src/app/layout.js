import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@components/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibetrade",
  description: "AI agent trading on Sui blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
