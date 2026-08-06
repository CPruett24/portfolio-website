import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} Chandler Pruett. All Rights Reserved.
        </p>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="/privacy"
            className="transition hover:text-cyan-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-cyan-400"
          >
            Terms of Use
          </Link>

          <Link
            href="https://github.com/CPruett24"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/chandler-pruett-2a1145345/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </Link>
        </nav>
      </div>
    </footer>
  );
}