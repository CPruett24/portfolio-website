import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

import ProjectImage from "./ProjectImage";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: Props) {
  return (
    <Card
      className={
        featured
          ? "overflow-hidden p-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
          : "overflow-hidden"
      }
    >
      <ProjectImage
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
      />

      <div className={featured ? "" : "mt-6"}>

        {featured && (
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            ⭐ Flagship Project
          </div>
        )}

        <h3
          className={
            featured
              ? "mt-8 text-5xl font-black tracking-tight"
              : "mt-2 text-3xl font-bold"
          }
        >
          {project.title}
        </h3>

        <p
          className={
            featured
              ? "mt-3 text-2xl text-slate-300"
              : "mt-2 text-lg text-slate-300"
          }
        >
          {project.tagline}
        </p>

        <p className="mt-8 leading-8 text-slate-400">
          {project.shortDescription}
        </p>

        {featured && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Project Type
              </p>

              <p className="mt-3 font-semibold">
                {project.projectType}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Status
              </p>

              <p className="mt-3 font-semibold text-emerald-400">
                {project.status}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Primary Role
              </p>

              <p className="mt-3 font-semibold">
                {project.role}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Focus
              </p>

              <p className="mt-3 font-semibold">
                Artificial Intelligence
              </p>
            </div>

          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        {featured && (
          <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Why This Project Matters
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              JARVIS represents my long-term software engineering project
              focused on building a modular AI assistant capable of voice
              interaction, persistent memory, intelligent automation, and
              future multimodal capabilities. Every new feature is designed
              with scalability and maintainability in mind.
            </p>

          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-5">

          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore Case Study
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="font-semibold text-slate-300 transition hover:text-cyan-400"
          >
            View GitHub →
          </Link>

        </div>

      </div>
    </Card>
  );
}