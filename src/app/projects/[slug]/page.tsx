import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectRenderer from "@/components/projects/ProjectRenderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: project.title,

    description:
      project.tagline || project.shortDescription,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: project.title,

      description:
        project.tagline || project.shortDescription,

      url: `https://chandlerpruett.com/projects/${project.slug}`,

      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: project.title,

      description:
        project.tagline || project.shortDescription,

      images: [project.image],
    },
  };
}

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