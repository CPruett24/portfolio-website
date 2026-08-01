import Card from "../ui/Card";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    title: "JARVIS",
    description:
      "A personal AI assistant with voice interaction, memory, local LLM integration, and automation capabilities.",
    stack: "Python • Ollama • SQLite",
  },
  {
    title: "Vehicle AI Diagnostic",
    description:
      "AI-powered diagnostic assistant using semantic search and vector embeddings for intelligent troubleshooting.",
    stack: "Python • Streamlit • FAISS",
  },
  {
    title: "VolunteerHub",
    description:
      "Backend API supporting authentication, database design, and role-based access control.",
    stack: "Flask • SQLAlchemy • JWT",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <h3 className="mb-4 text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mb-6 leading-7 text-slate-400">
              {project.description}
            </p>

            <p className="text-cyan-400">
              {project.stack}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}