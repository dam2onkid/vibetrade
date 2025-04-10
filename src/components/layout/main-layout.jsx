import { ThemeProvider } from "@components/ui/theme-provider";
import { SidebarProvider } from "@components/ui/sidebar";
import { AppSidebar } from "@components/layout/app-sidebar";
import { SiteHeader } from "@components/ui/site-header";
import { SidebarInset } from "@components/ui/sidebar";
import { SuiProviders } from "@/lib/sui";

export function ClientProviders({ children }) {
  return (
    <SuiProviders>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <App>{children}</App>
      </ThemeProvider>
    </SuiProviders>
  );
}

function App({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-y-auto">
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
