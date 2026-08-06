import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.find((p) => p.slug === "jarvis");

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title="Engineering Projects"
        subtitle="Testing Safari"
      />

      {featured && (
        <div className="mt-16">
          <ProjectCard
            project={featured}
            featured
          />
        </div>
      )}
    </Section>
  );
}