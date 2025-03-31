import React from "react";
import { Avatar } from "@/components/Header/Avatar";
import { Navigation } from "@/components/Header/Navigation";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 text-black dark:text-white">
      <Avatar />
      <Navigation />
    </header>
  );
}
