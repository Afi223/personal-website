"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
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
  const [navbar, setNavbar] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex items-center justify-between px-4 sm:px-20 py-2 sm:py-4">

        {/* Logo */}
        <Link to="home">
          <h2 className="text-lg sm:text-2xl font-bold glitter-text">AH</h2>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={24} className="sm:block hidden" /> : <IoMdMenu size={24} className="sm:block hidden" />}
            {navbar ? <IoMdClose size={20} className="sm:hidden block" /> : <IoMdMenu size={20} className="sm:hidden block" />}
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`
            ml-auto
            transition-transform transition-opacity
            duration-700 ease-in-out

            md:flex md:items-center
            md:opacity-100 md:translate-y-0
            md:pointer-events-auto

            ${
              navbar
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }
          `}
        >
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 md:flex-row md:space-y-0 md:space-x-6">

            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                onClick={() => setNavbar(false)}
                className="text-sm sm:text-base text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition"
              >
                {item.label}
              </Link>
            ))}

            {mounted && (
              currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl hover:scale-110 transition"
                >
                  <RiSunLine size={20} className="sm:block hidden text-black" />
                  <RiSunLine size={16} className="sm:hidden block text-black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl hover:scale-110 transition"
                >
                  <RiMoonFill size={20} className="sm:block hidden text-black dark:text-white" />
                  <RiMoonFill size={16} className="sm:hidden block text-black dark:text-white" />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
