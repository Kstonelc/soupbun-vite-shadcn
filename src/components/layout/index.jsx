import { AppSidebar } from "@/components/layout/appSidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
