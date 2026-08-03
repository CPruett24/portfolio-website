import { notFound } from "next/navigation";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectSection from "@/components/projects/ProjectSection";
import TechStack from "@/components/projects/TechStack";

import { projects } from "@/data/projects";

import BulletList from "@/components/projects/BulletList";

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

      <ProjectHero project={project} />

      <ProjectSection title="The Problem">
        <p>{project.problem}</p>
      </ProjectSection>

      <ProjectSection title="The Solution">
        <p>{project.solution}</p>
      </ProjectSection>

      <ProjectSection title="Architecture">
          <BulletList items={project.architecture} />
      </ProjectSection>

      <ProjectSection title="Key Features">
          <BulletList items={project.features} />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={project.technologies} />
      </ProjectSection>

      <ProjectSection title="Challenges">
        <ul className="list-disc space-y-3 pl-6">
          {project.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection title="Lessons Learned">
        <BulletList items={project.lessonsLearned} />
      </ProjectSection>

      <ProjectSection title="Future Improvements">
        <ul className="list-disc space-y-3 pl-6">
          {project.futureWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectSection>

    </main>
  );
}