"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import "../styles/navbar.css";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-stone-900 border-b border-neutral-300 dark:border-stone-600">
      <div className="flex items-center px-4 sm:px-20 py-3 sm:py-4">
        
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer"
        >
          <h2 className="text-lg sm:text-2xl font-bold glitter-text">
            AH
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6 ml-auto">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              smooth
              duration={500}
              className="cursor-pointer text-xs sm:text-sm md:text-base text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-1.5 sm:p-2 rounded-xl hover:scale-110 transition"
              >
                <RiSunLine size={16} className="text-black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-1.5 sm:p-2 rounded-xl hover:scale-110 transition"
              >
                <RiMoonFill size={16} className="text-black dark:text-white" />
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
