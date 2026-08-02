"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <Container>

        <nav className="mt-6 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-7 backdrop-blur-xl">

          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            Chandler Pruett
          </Link>

          <div className="hidden gap-8 md:flex">

            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {item.title}
              </a>
            ))}

          </div>

          <div className="flex gap-3">

            <a
              href="https://github.com/CPruett24"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold transition hover:bg-cyan-400"
            >
              Contact
            </a>

          </div>

        </nav>

      </Container>

    </header>
  );
}