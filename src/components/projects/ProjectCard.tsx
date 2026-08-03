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
          ? "overflow-hidden p-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          : "overflow-hidden"
      }
    >
      <ProjectImage
        src={project.image}
        alt={project.title}
      />

      <div className={featured ? "" : "mt-6"}>

        {featured && (
          <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Project
          </span>
        )}

        <h3
          className={
            featured
              ? "mt-6 text-5xl font-black tracking-tight"
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

        <p className="mt-6 leading-8 text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link
            href={project.github}
            target="_blank"
            className="font-semibold text-slate-300 transition hover:text-cyan-400"
          >
            GitHub ↗
          </Link>

          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-cyan-400 transition hover:translate-x-1"
          >
            View Case Study →
          </Link>
        </div>

      </div>
    </Card>
  );
}