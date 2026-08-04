"use client";

import { useState } from "react";

import type { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ArchitectureExplorer({
  project,
}: Props) {

  const [selected, setSelected] = useState(
    project.architecture[2] ?? project.architecture[0]
  );

  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_420px]">

      {/* Diagram */}

      <div className="space-y-4">

        {project.architecture.map((node, index) => (

          <div
            key={node.title}
            className="flex flex-col items-center"
          >

            <button
              onClick={() => setSelected(node)}
              className={`
                w-full
                max-w-md
                rounded-2xl
                border
                p-5
                text-center
                transition

                ${
                  selected.title === node.title
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-white/10 bg-slate-900 hover:border-cyan-500/40"
                }
              `}
            >
              <h3 className="font-semibold">
                {node.title}
              </h3>
            </button>

            {index !== project.architecture.length - 1 && (

              <div className="flex flex-col items-center py-3">

                <div className="h-8 w-px bg-cyan-500/40" />

                <span className="text-cyan-400">
                  ▼
                </span>

              </div>

            )}

          </div>

        ))}

      </div>

      {/* Detail Panel */}

      <div className="sticky top-28 h-fit rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Selected Component
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {selected.title}
        </h2>

        <div className="mt-8">

          <h3 className="font-semibold">
            Purpose
          </h3>

          <p className="mt-3 leading-8 text-slate-400">
            {selected.description}
          </p>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">
            Responsibilities
          </h3>

          <ul className="mt-4 space-y-3">

            {selected.responsibilities.map((item) => (

              <li key={item}>
                ✓ {item}
              </li>

            ))}

          </ul>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">
            Technologies
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            {selected.technologies.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="font-semibold">
            Why It Exists
          </h3>

          <p className="mt-3 leading-8 text-slate-400">
            {selected.why}
          </p>

        </div>

      </div>

    </div>
  );
}