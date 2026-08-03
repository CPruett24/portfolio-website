import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/types/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {project.tagline}
      </p>

      <h1 className="mt-4 text-6xl font-black">
        {project.title}
      </h1>

      <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-400">
        {project.shortDescription}
      </p>

      <div className="mt-16 grid gap-12">

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            The Problem
          </h2>

          <p className="leading-8 text-slate-400">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            The Solution
          </h2>

          <p className="leading-8 text-slate-400">
            {project.solution}
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-800 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            Challenges
          </h2>

          <ul className="space-y-3 text-slate-400">
            {project.challenges.map((challenge) => (
              <li key={challenge}>• {challenge}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold">
            Future Improvements
          </h2>

          <ul className="space-y-3 text-slate-400">
            {project.futureWork.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <Link
          href={project.github}
          target="_blank"
          className="w-fit rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
        >
          View GitHub Repository
        </Link>

      </div>

    </main>
  );
}