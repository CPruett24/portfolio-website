import Link from "next/link";
import BackToTop from "./BackToTop";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-black">
              {siteConfig.name}
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Building intelligent software through artificial intelligence,
              backend engineering, and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">

              <Link
                href={siteConfig.github}
                target="_blank"
                className="transition hover:text-cyan-400"
              >
                GitHub
              </Link>

              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="transition hover:text-cyan-400"
              >
                LinkedIn
              </Link>

              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-cyan-400"
              >
                Email
              </a>

              <a
                href={siteConfig.resume}
                download
                className="transition hover:text-cyan-400"
              >
                Resume
              </a>

            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">

            <BackToTop />

            <p className="mt-10 text-right text-sm text-slate-500">
              Built with Next.js, React, TypeScript, and Tailwind CSS.
            </p>

            <p className="mt-2 text-right text-sm text-slate-500">
              © {year} {siteConfig.name}. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}