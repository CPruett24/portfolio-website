import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function Timeline({
  project,
}: Props) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">
        Engineering Timeline
      </h2>

      <div className="mt-10 space-y-8 border-l border-cyan-500/30 pl-8">
        {project.timeline.map((item) => (
          <div
            key={item.title}
            className="relative"
          >
            <div className="absolute -left-[39px] h-4 w-4 rounded-full bg-cyan-400" />

            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-2 leading-8 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}