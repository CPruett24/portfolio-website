"use client";

import Link from "next/link";
import { Github, Menu, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-5 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl">

          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            CP
          </Link>

          <div className="hidden items-center gap-8 md:flex">
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

          <a
            href="https://github.com/CPruett24"
            target="_blank"
            className="rounded-lg border border-white/10 p-2 transition hover:border-cyan-400"
          >
            <Github size={18} />
          </a>

        </nav>
      </Container>
    </header>
  );
}