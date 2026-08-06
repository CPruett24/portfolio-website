import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.find((p) => p.slug === "jarvis");

  const others = projects.filter((p) => p.slug !== "jarvis");

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title="Engineering Projects"

        subtitle="A collection of software engineering projects showcasing artificial intelligence, backend architecture, semantic search, and full-stack application development."
      />

      {featured && (
        <div className="mt-16">
          <ProjectCard
            project={featured}
            featured
          />
        </div>
      )}

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {others.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}