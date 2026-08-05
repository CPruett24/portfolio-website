import Image from "next/image";

export default function DeveloperDashboard() {
  return (
    <div className="mt-16 w-full lg:mt-0">

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_30px_100px_rgba(6,182,212,0.18)] backdrop-blur-xl">

        {/* Header */}

        <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-8 py-8">

          <div className="flex flex-col items-center text-center">

            <Image
              src="/images/profile/profile-placeholder.png"
              alt="Portrait of Chandler Pruett"
              width={110}
              height={110}
              className="rounded-3xl border border-cyan-500/30 shadow-lg"
            />

            <h2 className="mt-5 text-3xl font-bold">
              Chandler Pruett
            </h2>

            <p className="mt-1 text-slate-400">
              Software Engineer
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Building JARVIS
            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-10 p-7 sm:p-8">

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

          <div className="hidden lg:block">

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

          <div className="hidden lg:block">

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