import * as React from "react";
import { Link } from "react-router-dom";

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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui";

import routes from "@/config/routes";
import { ModeToggle } from "@/components/common";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            className={"flex flex-row justify-start items-center"}
          >
            <SidebarMenuButton size="lg" asChild>
              <Link to={"/"}>
                <Avatar className="h-7 w-7 rounded-full justify-start">
                  <AvatarImage src="/public/icon/soupbun.svg" alt="@shadcn" />
                  <AvatarFallback className="rounded-lg">Bun</AvatarFallback>
                </Avatar>
                <span className={"text-lg font-bold"}>SoupBun</span>
              </Link>
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
