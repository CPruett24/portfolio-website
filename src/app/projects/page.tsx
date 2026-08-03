import Link from "next/link";

import { projects } from "@/types/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="mb-12 text-5xl font-bold">
        Projects
      </h1>

      <div className="space-y-8">

        {projects.map((project) => (

          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-2xl border border-white/10 p-8 transition hover:border-cyan-400"
          >
            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {project.shortDescription}
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}