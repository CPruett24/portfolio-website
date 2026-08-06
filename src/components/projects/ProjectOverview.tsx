import Link from "next/link";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectOverview({
  project,
}: Props) {
  return (
    <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold">
        Project Overview
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Project Type
          </p>

          <p className="mt-2 text-lg font-semibold">
            {project.projectType}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Role
          </p>

          <p className="mt-2 text-lg font-semibold">
            {project.role}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Status
          </p>

          <p className="mt-2 text-lg font-semibold text-emerald-400">
            {project.status}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Repository
          </p>

          <Link
            href={project.github}
            target="_blank"
            className="mt-2 inline-block text-lg font-semibold text-cyan-400 hover:underline"
          >
            View on GitHub →
          </Link>
        </div>

      </div>

    </div>
  );
}