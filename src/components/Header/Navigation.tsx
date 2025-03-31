"use client";

import { Drawer } from "../common/Drawer";
import "./Navigation.css";
import { useState } from "react";
import { DarkModeToggle } from "@/components/Header/DarkModeToggle";
import Link from "next/link";

const LINKS = {
  author: "/author/cl7rkg9m7uyw20ctd4isqvag0",
  social: "#",
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => { setIsOpen(v => !v)}

  return (
    <>
      <Drawer isOpen={isOpen} onOutsideClick={toggleOpen}>
        <div className="pt-6 px-8 flex flex-col gap-6 text-3xl">
          <Link href="/">Home</Link>
          <Link href={LINKS.author}>About me</Link>
          <Link href={LINKS.social}>Social media</Link>
        </div>
      </Drawer>
      <div className="flex items-center gap-8">
        <DarkModeToggle />
        <nav className="hidden lg:flex items-center gap-2 text-lg">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
          <span className="text-gray-400">|</span>
          <Link href={LINKS.author} className="hover:text-gray-600 dark:hover:text-gray-300">About me</Link>
          <span className="text-gray-400">|</span>
          <Link href={LINKS.social} className="hover:text-gray-600 dark:hover:text-gray-300">Social media</Link>
        </nav>
        <button className={`inline-block hamburger z-20 hamburger--spin lg:hidden ${isOpen ? "is-active" : ""}`}
                type="button"
                onClick={toggleOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </>
  )
}