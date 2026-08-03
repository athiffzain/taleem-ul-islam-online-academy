"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Online Classes", href: "#online-classes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-solid shadow-lg shadow-masjid-900/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="relative h-12 w-12 flex items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-gold-400/40">
  <Image
    src="/logo.png"
    alt="Madresa-e-Taleem Ul Islam"
    width={48}
    height={48}
    className="object-contain"
  />
</span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-masjid-600 dark:text-parchment">
              Taleem Ul Islam
            </span>
            <span className="block text-[11px] tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400">
              Online Academy
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-masjid-700 dark:text-parchment/90 hover:text-gold-600 dark:hover:text-gold-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-10 w-10 rounded-full flex items-center justify-center border border-masjid-200 dark:border-gold-400/30 text-masjid-600 dark:text-gold-300 hover:bg-masjid-50 dark:hover:bg-masjid-800 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#admissions"
            className="rounded-full bg-masjid-500 hover:bg-masjid-600 text-white text-sm font-semibold px-5 py-2.5 shadow-md shadow-masjid-500/25 transition"
          >
            Online Admission
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
<p className="text-red-500">TEST</p>          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-10 w-10 rounded-full flex items-center justify-center border border-masjid-200 dark:border-gold-400/30 text-masjid-600 dark:text-gold-300"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => {
  alert("Button clicked");
  setOpen(!open);
}}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="h-10 w-10 rounded-full flex items-center justify-center border border-masjid-200 dark:border-gold-400/30 text-masjid-600 dark:text-gold-300"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-solid overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-masjid-700 dark:text-parchment border-b border-masjid-100 dark:border-masjid-800"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="mt-4 text-center rounded-full bg-masjid-500 text-white font-semibold px-5 py-3"
              >
                Online Admission
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
