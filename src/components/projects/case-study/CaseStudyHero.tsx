import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function CaseStudyHero({ project }: Props) {
  return (
    <section className="space-y-10">

      <div className="space-y-6">

        <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Featured Project
        </span>

        <h1 className="text-5xl font-black tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-2xl text-slate-300">
          {project.tagline}
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="flex gap-6">
        <Link
          href={project.github}
          target="_blank"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View GitHub
        </Link>
      </div>

    </section>
  );
}