import { AppSidebar } from "@/components/layout/appSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/*Toast组件*/}
      <Toaster />
      {children}
    </SidebarProvider>
  );
}
