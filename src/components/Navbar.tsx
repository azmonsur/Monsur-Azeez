import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import type { NavItem } from "../types/portfolio";

interface NavbarProps {
  menuItems: NavItem[];
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo - Inspired by David Franco */}
        <a href="#home">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30">
              M
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Monsur<span className="text-emerald-500">.</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-sm font-semibold">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`relative py-2 transition-all duration-300 hover:text-emerald-500 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-emerald-500"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.replace("#", "") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-emerald-500/50 transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-slate-900 dark:text-white z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Updated to Full Screen & Centered */}
      <div
        className={`md:hidden fixed inset-0 w-full h-screen bg-white dark:bg-slate-950 transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-4xl font-serif font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
