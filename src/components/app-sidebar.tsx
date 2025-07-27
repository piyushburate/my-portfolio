"use client";

import {
  BiRocket as ContactIcon,
  BiCommand as CommandIcon,
} from "react-icons/bi";
import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
  FiSearch as SearchIcon,
  FiArrowRight,
} from "react-icons/fi";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "@/hooks/use-theme";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const MENU_ITEMS = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: ProjectIcon,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: BlogIcon,
  },
  {
    title: "Learn",
    href: "/learn",
    icon: LearnIcon,
  },
  {
    title: "About",
    href: "/about",
    icon: ProfileIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: ContactIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  return (
    <Sidebar className="!border-0">
      <SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-4 mt-4">
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <Avatar className="size-16 mb-4">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/121924335?v=4" />
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className="rounded-full border p-2 bg-accent text-foregorund cursor-pointer"
                        onClick={toggleTheme}
                      >
                        {theme === "dark" ? (
                          <BsSunFill className="size-3.5" />
                        ) : (
                          <BsMoonFill className="size-3.5" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Change to{" "}
                      <span className="capitalize">
                        {theme === "dark" ? "light" : "dark"} Mode
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-xl">Piyush Burate</p>
              <p className="text-sm text-muted-foreground">
                @{process.env.NEXT_PUBLIC_GITHUB_USERNAME}
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-md border-[1.8px] border-neutral-300 bg-neutral-100 px-3 py-1 text-neutral-500 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900">
              <SearchIcon className="size-6" />
              <span className="w-full text-[15px] hover:cursor-text">
                Search
              </span>
              <div className="flex items-center gap-0.5 rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-800">
                <CommandIcon className="size-3" />
                <span>k</span>
              </div>
            </div>
          </SidebarGroup>
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      // className="px-4"
                      className={cn(
                        "px-4 !py-5 text-muted-foreground text-base",
                        isActive && "text-foreground"
                      )}
                      isActive={isActive}
                      asChild
                    >
                      <a href={item.href}>
                        <item.icon className="!size-4.5" />
                        <span>{item.title}</span>
                        {isActive && (
                          <FiArrowRight className="!size-4 ml-auto" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
