import Badge from "@/components/ui/Badge";

import type { SkillCategory } from "@/data/skills";

type Props = {
  category: SkillCategory;
};

export default function SkillCard({ category }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)]">
      <h3 className="text-2xl font-bold">
        {category.title}
      </h3>

      <p className="mt-3 text-slate-400">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}