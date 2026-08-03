import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ProjectImage from "./ProjectImage";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <ProjectImage
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Featured Project
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-1 text-lg text-slate-300">
          {project.tagline}
        </p>

        <p className="mt-5 leading-8 text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
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