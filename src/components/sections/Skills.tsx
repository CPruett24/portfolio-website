import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Flask", "REST APIs", "SQLAlchemy", "JWT"],
  },
  {
    title: "AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "FAISS",
      "Sentence Transformers",
      "Ollama",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I enjoy working with."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="mb-5 text-xl font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}