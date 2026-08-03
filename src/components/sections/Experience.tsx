import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ExperienceCard from "./ExperienceCard";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="My Journey"
        subtitle="The experiences that have shaped my growth as a software engineer."
      />

      <div className="mt-16 space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.year}-${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </Section>
  );
}