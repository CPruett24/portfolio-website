"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-8 py-4 shadow-2xl backdrop-blur-xl">

        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href={siteConfig.resume}
          download
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400"
        >
          Resume
        </a>

      </nav>
    </header>
  );
}