import Badge from "@/components/ui/Badge";

import { Experience } from "@/data/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

      <span className="text-cyan-400 font-bold">
        {experience.year}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {experience.title}
      </h3>

      <p className="mt-1 text-slate-300">
        {experience.company}
      </p>

      <p className="mt-6 leading-8 text-slate-400">
        {experience.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

    </div>
  );
}