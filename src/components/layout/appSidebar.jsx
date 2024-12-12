import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "./navMain.jsx";
import { NavSecondary } from "./navSecondary.jsx";
import { NavUser } from "./navUser.jsx";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import routes from "@/config/routes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/common/modeToogle";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            className={"flex flex-row justify-between items-center"}
          >
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <Avatar className="h-8 w-4/5 rounded-lg">
                  <AvatarImage src="/public/icon/soupbun.svg" alt="@shadcn" />
                  <AvatarFallback className="rounded-lg">
                    SoupBun
                  </AvatarFallback>
                </Avatar>
              </a>
            </SidebarMenuButton>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
        <NavSecondary items={routes.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={routes.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
