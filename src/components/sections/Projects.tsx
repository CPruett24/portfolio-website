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
        title="Projects I'm Proud Of"
        subtitle="Software engineered through curiosity, iteration, and solving real-world problems."
      />

      {featured && (
        <div className="mt-16">
          <ProjectCard
            project={featured}
            featured
          />
        </div>
      )}

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
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