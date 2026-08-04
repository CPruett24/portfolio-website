const skills = [
  "Python",
  "Artificial Intelligence",
  "Backend Engineering",
  "Software Architecture",
  "Machine Learning",
  "REST APIs",
  "SQL",
  "Automation",
  "Local LLMs",
  "Flask",
];

export default function HeroSkills() {
  return (
    <div className="mt-14 flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border
            border-cyan-500/30
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/20
          "
        >
          {skill}
        </span>
      ))}
    </div>
  );
}