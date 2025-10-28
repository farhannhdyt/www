"use client";

import type React from "react";

import Link from "next/link";
// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Experience",
    href: "/experience"
  },
  {
    label: "Works",
    href: "/works"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

export function MainNavbar(): React.ReactElement {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-4 z-30 max-w-full w-[1104px] mx-auto flex justify-between bg-background backdrop-blur-md md:border">
      {/* Logo */}
      <Link
        href="/"
        className=" md:px-5 px-2.5 text-foreground py-3 md:col-span-2 shrink-0 transition-colors md:w-[268px] lg:w-[286px] font-mono text-lg flex items-center"
      >
        farhannhdyt.
      </Link>

      {/* Nav menu */}
      <nav className="">
        <ul className="md:flex items-center divide-x w-max hidden shrink-0 h-full">
          {navLinks.map((link: NavLink, index) => (
            <li
              className="h-full flex items-center border-b border-b-transparent hover:border-b-neutral-950 dark:hover:border-b-white"
              key={index}
            >
              <Link
                href={link.href}
                className="px-6 font-sans text-base font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="h-full flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="dark:hover:bg-transparent hover:bg-transparent px-6"
            >
              {theme === "light" ? (
                <Moon className="w-6 h-6 text-foreground" />
              ) : (
                <Sun className="w-6 h-6 text-foreground" />
              )}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
