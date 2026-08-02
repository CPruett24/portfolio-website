import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Some of my favorite software engineering projects."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
      </div>
    </Section>
  );
}