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
import { Separator } from "@/components/ui/separator";

export function NavMain({ items }) {
  const location = useLocation();

  const checkIsActive = (item) => {
    return location.pathname === item.url;
  };

  return (
    <SidebarGroup>
      <SidebarMenuButton tooltip="控制台" asChild className={"mb-2"}>
        <Link className={"hover:bg-sidebar-router-hover"} to={"/"}>
          <MonitorDot className={"w-5 h-5"} />
          <span className="ml-2">控制台</span>
        </Link>
      </SidebarMenuButton>
      {/*<Separator className={"mb-2"} />*/}
      <SidebarGroupLabel className={"text-sm font-bold"}>
        技术测评
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // const isMainActive = checkIsActive(item);
          return (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link
                    to={item.url}
                    className={"hover:bg-sidebar-router-hover"}
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
                        // className={`${isMainActive ? " text-white " : null}`}
                        />
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => {
                          // const isSubActive = checkIsActive(subItem);
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  className={"hover:bg-sidebar-router-hover"}
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
