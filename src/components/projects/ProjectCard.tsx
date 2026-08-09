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

        {/* Featured Label */}

        {featured && (
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            ⭐ Flagship Project
          </div>
        )}

        {/* Project Title */}

        <h3
          className={
            featured
              ? "mt-8 text-5xl font-black tracking-tight"
              : "mt-2 text-3xl font-bold"
          }
        >
          {project.title}
        </h3>

        {/* Tagline */}

        <p
          className={
            featured
              ? "mt-3 text-2xl text-slate-300"
              : "mt-2 text-lg text-slate-300"
          }
        >
          {project.tagline}
        </p>

        {/* Project Metadata */}

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400">
          <span>{project.projectType}</span>

          <span className="text-slate-600">•</span>

          <span>{project.role}</span>

          <span className="text-slate-600">•</span>

          <span className="inline-flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                project.status === "Active Development"
                  ? "bg-emerald-400"
                  : "bg-slate-500"
              }`}
              aria-hidden="true"
            />

            {project.status}
          </span>
        </div>

        {/* Description */}

        <p
          className={
            featured
              ? "mt-8 leading-8 text-slate-400"
              : "mt-6 leading-7 text-slate-400"
          }
        >
          {project.shortDescription}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}

        <div className="mt-10 flex flex-wrap items-center gap-5">

          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore Case Study
          </Link>

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-300 transition hover:text-cyan-400"
          >
            View GitHub →
          </Link>

        </div>

      </div>
    </Card>
  );
}