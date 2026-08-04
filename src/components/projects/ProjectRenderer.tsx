import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import TechStack from "./TechStack";
import ArchitectureFlow from "./ArchitectureFlow";
import BulletList from "./BulletList";
import DecisionCard from "./case-study/DecisionCard";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectRenderer({
  project,
}: Props) {
  return (
    <>

      <ProjectHero project={project} />

      <ProjectSection title="The Problem">
        <p>{project.problem}</p>
      </ProjectSection>

      <ProjectSection title="The Solution">
        <p>{project.solution}</p>
      </ProjectSection>

      <ProjectSection title="System Architecture">
        <ArchitectureFlow
          steps={project.architecture}
        />
      </ProjectSection>

      <ProjectSection title="Key Features">
        <BulletList items={project.features} />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack technologies={project.technologies} />
      </ProjectSection>

      <ProjectSection title="Engineering Decisions">
        <div className="grid gap-6 md:grid-cols-2">
          {project.engineeringDecisions.map((decision) => (
            <DecisionCard
              key={decision.title}
              title={decision.title}
              reason={decision.reason}
            />
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Challenges">
        <BulletList items={project.challenges} />
      </ProjectSection>

      <ProjectSection title="Lessons Learned">
        <BulletList items={project.lessonsLearned} />
      </ProjectSection>

      <ProjectSection title="Future Roadmap">
        <BulletList items={project.futureWork} />
      </ProjectSection>

    </>
  );
}