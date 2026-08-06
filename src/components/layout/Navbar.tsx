"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /**
   * Close the mobile menu with the Escape key.
   */
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  /**
   * Prevent background scrolling while the mobile menu is open.
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="rounded-2xl border border-white/10 bg-slate-900/75 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            aria-current="page"
            className={`rounded-lg px-1 py-1 text-lg font-bold tracking-tight transition ${focusClasses}`}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-lg px-2 py-1 text-sm font-medium text-slate-300 transition hover:text-cyan-400 ${focusClasses}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Resume */}

          <div className="hidden md:block">
            <a
              href={siteConfig.resume}
              download
              aria-label="Download Chandler Pruett's resume as a PDF"
              className={`rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 ${focusClasses}`}
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Mobile Controls */}

          <div className="flex items-center gap-3 md:hidden">
            <a
              href={siteConfig.resume}
              download
              aria-label="Download Chandler Pruett's resume as a PDF"
              className={`rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 ${focusClasses}`}
            >
              Download Resume (PDF)
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className={`rounded-lg border border-white/10 p-2 transition hover:border-cyan-400 ${focusClasses}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="flex flex-col p-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400 ${focusClasses}`}
              >
                {link.name}
              </Link>
            ))}

            <div
              className="my-4 border-t border-white/10"
              aria-hidden="true"
            />

            <a
              href="https://github.com/CPruett24"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg px-3 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400 ${focusClasses}`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chandler-pruett-2a1145345/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg px-3 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400 ${focusClasses}`}
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.resume}
              download
              aria-label="Download resume as PDF"
              className={`mt-4 rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400 ${focusClasses}`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}