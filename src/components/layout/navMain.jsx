import { ChevronRight, MonitorDot } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

export function NavMain({ items }) {
  const location = useLocation();

  const checkIsActive = (item) => {
    return location.pathname === item.url;
  };
  return (
    <SidebarGroup>
      <SidebarMenuButton tooltip="控制台" asChild className={"mb-2"}>
        <Link
          className="flex items-center  hover:!bg-gray-200 bg-gray-100"
          to={"/"}
        >
          <MonitorDot className={"w-5 h-5"} />
          <span className="ml-2">控制台</span>
        </Link>
      </SidebarMenuButton>
      <SidebarGroupLabel className={"text-sm"}>技术测评</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isMainActive = checkIsActive(item);
          return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link
                    className={`flex items-center p-2 ${
                      isMainActive
                        ? "bg-blue-400 text-white hover:!bg-blue-400 hover:!text-white"
                        : "hover:!bg-gray-200"
                    }`}
                    to={item.url}
                  >
                    <item.icon className={"w-5 h-5"} />
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {/*过滤hide属性为true的*/}
                {item.items?.filter((item) => !item.hide)?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight
                          className={`${
                            isMainActive ? " text-white " : "hover:bg-gray-200"
                          }`}
                        />
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => {
                          const isSubActive = checkIsActive(subItem);
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  className={`flex items-center p-2 ${
                                    isSubActive
                                      ? "bg-blue-400 text-white hover:!bg-blue-300"
                                      : "hover:!bg-gray-200"
                                  }`}
                                  to={subItem.url}
                                >
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
