import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectMetrics({
  project,
}: Props) {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {project.metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center backdrop-blur-xl transition hover:border-cyan-500/40"
        >
          <p className="text-sm uppercase tracking-wider text-slate-500">
            {metric.label}
          </p>

          <p className="mt-3 text-2xl font-bold text-cyan-400">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}