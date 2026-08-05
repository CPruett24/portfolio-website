import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import TechStack from "./TechStack";
import SystemExplorer from "./SystemExplorer";
import BulletList from "./BulletList";
import DecisionCard from "./case-study/DecisionCard";
import ProjectOverview from "./ProjectOverview";
import Timeline from "./Timeline";
import ProjectMetrics from "./ProjectMetrics";
import ProjectNavigation from "./ProjectNavigation";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectRenderer({
  project,
}: Props) {
  return (
    <>
    <div className="grid gap-20 lg:grid-cols-[260px_1fr]">

        <ProjectNavigation />

        <div>

        <div id="overview">
            <ProjectHero project={project} />
            <ProjectOverview project={project} />
            <ProjectMetrics project={project} />
        </div>

        <div id="timeline">
            <Timeline project={project} />
        </div>

        <ProjectSection
            id="problem"
            title="The Problem"
        >
            <p>{project.problem}</p>
        </ProjectSection>

        <ProjectSection
            id="solution"
            title="The Solution"
        >
            <p>{project.solution}</p>
        </ProjectSection>

        <ProjectSection
            id="architecture"
            title="System Architecture"
        >
            <SystemExplorer
                project={project}
            />
        </ProjectSection>

        <ProjectSection
            id="features"
            title="Key Features"
        >
            <BulletList items={project.features} />
        </ProjectSection>

        <ProjectSection
            id="technology"
            title="Technology Stack"
        >
            <TechStack technologies={project.technologies} />
        </ProjectSection>

        <ProjectSection
            id="engineering"
            title="Engineering Decisions"
        >
            <div className="grid gap-6 md:grid-cols-2">
            {project.engineeringDecisions.map((decision) => (
                <DecisionCard
                key={decision.title}
                title={decision.title}
                why={decision.why}
                tradeoffs={decision.tradeoffs}
                usedFor={decision.usedFor}
                />
            ))}
            </div>
        </ProjectSection>

        <ProjectSection
            id="challenges"
            title="Challenges"
        >
            <BulletList items={project.challenges} />
        </ProjectSection>

        <ProjectSection
            id="lessons"
            title="Lessons Learned"
        >
            <BulletList items={project.lessonsLearned} />
        </ProjectSection>

        <ProjectSection
            id="future"
            title="Future Roadmap"
        >
            <BulletList items={project.futureWork} />
        </ProjectSection>

        </div>

    </div>
    </>
  );
}