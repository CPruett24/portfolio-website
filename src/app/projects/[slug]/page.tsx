import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectRenderer from "@/components/projects/ProjectRenderer";

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
    <main className="mx-auto max-w-5xl px-6 py-24">
      <ProjectRenderer project={project} />
    </main>
  );
}