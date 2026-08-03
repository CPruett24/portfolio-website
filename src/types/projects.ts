export type Project = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;

  problem: string;
  solution: string;

  challenges: string[];
  futureWork: string[];

  technologies: string[];

  github: string;
  image: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "jarvis",

    title: "JARVIS",

    tagline: "Personal AI Assistant",

    shortDescription:
      "A personal AI assistant with voice interaction, local LLMs, memory, and future automation capabilities.",

    problem:
      "I wanted an AI assistant that could run locally, remember information between sessions, and eventually automate tasks across my computer instead of relying entirely on cloud services.",

    solution:
      "I built JARVIS using Python with speech recognition, text-to-speech, SQLite memory storage, and Ollama for local language models. The architecture is modular so additional capabilities can be added without rewriting the core assistant.",

    challenges: [
      "Speech recognition reliability",
      "Managing conversation memory",
      "Designing modular command routing",
      "Local LLM integration"
    ],

    futureWork: [
      "Desktop automation",
      "Vision support",
      "Calendar integration",
      "Email integration",
      "Home server integration"
    ],

    technologies: [
      "Python",
      "SQLite",
      "Ollama",
      "SpeechRecognition",
      "SQLAlchemy"
    ],

    github: "https://github.com/CPruett24/jarvis-ai-assistant",

    image: "/images/projects/jarvis.png",

    featured: true
  }
];