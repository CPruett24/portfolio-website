import Image from "next/image";

export default function DeveloperDashboard() {
  return (
    <div className="hidden lg:block">

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_30px_100px_rgba(6,182,212,0.18)] backdrop-blur-xl">

        {/* Header */}

        <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-8 py-6">

          <div className="flex items-center gap-5">

            <Image
              src="/images/profile/profile-placeholder.png"
              alt="Profile"
              width={90}
              height={90}
              className="rounded-2xl border border-cyan-500/30"
            />

            <div>

              <h2 className="text-2xl font-bold">
                Chandler Pruett
              </h2>

              <p className="mt-1 text-slate-400">
                Software Engineer
              </p>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-8 p-8">

          {/* Status */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Current Status
            </p>

            <div className="mt-3 flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

              <span className="font-semibold text-emerald-300">
                Building JARVIS
              </span>

            </div>

          </div>

          {/* Focus */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Primary Focus
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Backend Systems",
                "Automation",
                "Software Architecture",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Flagship */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Flagship Project
            </p>

            <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

              <h3 className="text-lg font-bold">
                JARVIS
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Modular AI assistant with voice interaction,
                persistent memory, local LLMs,
                and intelligent automation.
              </p>

            </div>

          </div>

          {/* Tech */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Core Technologies
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">

              {[
                "Python",
                "Ollama",
                "SQLite",
                "SQLAlchemy",
                "Flask",
                "FAISS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-white/10 bg-slate-800/70 py-3 text-center font-medium"
                >
                  {tech}
                </div>
              ))}

            </div>

          </div>

          {/* Availability */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Availability
            </p>

            <div className="mt-4 space-y-2 text-slate-300">

              <p>✓ Software Engineering</p>
              <p>✓ Artificial Intelligence</p>
              <p>✓ Backend Development</p>
              <p>✓ Full-Time Opportunities</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}