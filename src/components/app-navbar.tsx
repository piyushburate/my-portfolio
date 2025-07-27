"use client";

import React from "react";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { MdMenu } from "react-icons/md";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }
  return (
    <div className="flex items-center gap-4 bg-background p-4 border-b border-muted sticky top-0 z-50">
      <Avatar className="size-8">
        <AvatarImage src="https://avatars.githubusercontent.com/u/121924335?v=4" />
        <AvatarFallback>PB</AvatarFallback>
      </Avatar>
      <p className="text-lg font-normal">Piyush Burate</p>
      <Button onClick={toggleSidebar} className="ml-auto" variant="ghost">
        <MdMenu className="size-5" />
      </Button>
    </div>
  );
}
