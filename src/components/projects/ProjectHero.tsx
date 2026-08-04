import Link from "next/link";
import BrowserFrame from "./BrowserFrame";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectHero({ project }: Props) {
  return (
    <section className="border-b border-white/10 pb-16">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {project.tagline}
      </p>

      <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
        {project.title}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={project.github}
          target="_blank"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
        >
          View GitHub
        </Link>

        <Link
          href="/#projects"
          className="rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400"
        >
          ← Back to Projects
        </Link>
      </div>
      
    <BrowserFrame
        src={project.image}
        alt={project.title}
    />
    </section>
  );
}