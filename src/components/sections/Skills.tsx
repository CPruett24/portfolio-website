import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import SkillCard from "./SkillCard";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies I Work With"
        subtitle="A collection of the technologies, tools, and concepts I've used through coursework, internships, and personal projects."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            category={category}
          />
        ))}
      </div>
    </Section>
  );
}