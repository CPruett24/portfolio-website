import Image from "next/image";
import Link from "next/link";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <p className="mt-6 text-sm uppercase tracking-widest text-cyan-400">
        {project.tagline}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {project.title}
      </h3>

      <p className="mt-5 text-slate-400 leading-8">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex gap-4">

        <Link
          href={`/projects/${project.slug}`}
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Case Study →
        </Link>

        <Link
          href={project.github}
          target="_blank"
          className="text-slate-400 hover:text-white"
        >
          GitHub
        </Link>

      </div>
    </Card>
  );
}