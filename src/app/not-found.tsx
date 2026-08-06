import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
      <div className="mx-auto max-w-2xl">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Error 404
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
          Page Not Found
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist, may have been moved,
          or the link you followed is no longer available.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              text-slate-950
              transition
              hover:bg-cyan-400
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            Return Home
          </Link>

          <Link
            href="/#projects"
            className="
              rounded-xl
              border
              border-white/10
              px-6
              py-3
              font-semibold
              text-slate-300
              transition
              hover:border-cyan-400
              hover:text-cyan-400
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            View Projects
          </Link>

        </div>

      </div>
    </main>
  );
}