import Link from "next/link";
import clsx from "clsx";

const primary =
  "inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_15px_50px_rgba(6,182,212,.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const secondary =
  "inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link
        href="#projects"
        className={primary}
      >
        View My Work
      </Link>

      <a
        href="/resume.pdf"
        download
        className={clsx(secondary)}
        aria-label="Download Chandler Pruett's resume as a PDF"
      >
        Download Resume (PDF)
      </a>

    </div>
  );
}