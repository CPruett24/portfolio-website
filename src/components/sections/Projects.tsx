import Link from "next/link";

import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I'm Proud Of"
        subtitle="These projects represent my growth as a software engineer and demonstrate my interests in AI, backend systems, and full-stack development."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/projects"
          className="rounded-xl border border-cyan-500/30 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
        >
          View All Projects
        </Link>
      </div>
    </Section>
  );
}