import Link from "next/link";

const focusClasses =
  "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-slate-950"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 text-center text-sm text-slate-400 md:flex-row md:text-left">
        {/* Copyright */}

        <div className="space-y-2">
          <small className="block text-sm">
            © {new Date().getFullYear()} Chandler Pruett. All rights reserved.
          </small>

          <p className="max-w-md text-xs leading-5 text-slate-500">
            All product names, company names, trademarks, and registered
            trademarks referenced throughout this portfolio remain the property
            of their respective owners and are used for identification purposes
            only.
          </p>
        </div>

        {/* Footer Navigation */}

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="/privacy"
            className={`transition hover:text-cyan-400 ${focusClasses}`}
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className={`transition hover:text-cyan-400 ${focusClasses}`}
          >
            Terms of Use
          </Link>

          <Link
            href="https://github.com/CPruett24"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition hover:text-cyan-400 ${focusClasses}`}
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/chandler-pruett-2a1145345/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition hover:text-cyan-400 ${focusClasses}`}
          >
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}