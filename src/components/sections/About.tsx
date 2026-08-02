import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={about.title}
        subtitle={about.intro}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {about.story.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg leading-8 text-slate-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}