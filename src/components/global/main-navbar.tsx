"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 max-w-full w-[1104px] mx-auto bg-background backdrop-blur-md">
      <div className="flex justify-between border">
        {/* Logo */}
        <Link
          href="/"
          className="md:px-5 px-2.5 text-foreground md:py-3 py-2 md:col-span-2 shrink-0 transition-colors md:w-[268px] lg:w-[286px] font-mono text-lg flex items-center border-r md:border-r-0"
        >
          farhannhdyt.
        </Link>

        {/* Nav menu */}
        <nav>
          <ul className="flex items-center w-max shrink-0 h-full">
            {navLinks.map((link: NavLink, index) => (
              <li
                className="h-full hidden md:flex items-center border-b border-b-transparent hover:border-b-neutral-950 dark:hover:border-b-white border-r"
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
            <li className="h-full md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="dark:hover:bg-transparent hover:bg-transparent px-6"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu navigation */}
      {isOpen && (
        <div className="fixed w-full bg-background border-b dark:border-b-neutral-800 border-b-neutral-200">
          <div className="flex flex-col divide-y">
            {navLinks.map((link: NavLink, index) => (
              <Link href={link.href} key={index} className="py-3 px-2.5">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
