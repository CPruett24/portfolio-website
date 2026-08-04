"use client";

const sections = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "problem",
    title: "Problem",
  },
  {
    id: "solution",
    title: "Solution",
  },
  {
    id: "architecture",
    title: "Architecture",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "technology",
    title: "Technology",
  },
  {
    id: "engineering",
    title: "Engineering",
  },
  {
    id: "challenges",
    title: "Challenges",
  },
  {
    id: "lessons",
    title: "Lessons",
  },
  {
    id: "future",
    title: "Future",
  },
];

export default function ProjectNavigation() {
  return (
    <aside className="sticky top-32 hidden h-fit lg:block">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        On This Page
      </h3>

      <nav>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-slate-400 transition hover:text-cyan-400"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}