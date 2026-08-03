import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "jarvis",

    title: "JARVIS",

    tagline: "Personal AI Assistant",

    shortDescription:
      "A personal AI assistant featuring voice interaction, memory, local LLMs, and future automation capabilities.",

    problem:
      "Build a personal AI assistant that can run locally, remember information, and automate tasks.",

    solution:
      "Created a modular Python application using speech recognition, Ollama, SQLite, and text-to-speech.",

    challenges: [
      "Speech recognition",
      "Conversation memory",
      "Command routing",
      "Local AI integration"
    ],

    futureWork: [
        "Desktop automation",
        "Long-term memory improvements",
        "Vision and camera support",
        "Smart home integration",
        "Email and calendar integration",
        "Multi-agent architecture"
    ],

    technologies: [
      "Python",
      "SQLite",
      "Ollama",
      "SpeechRecognition"
    ],

    github: "https://github.com/CPruett24/jarvis-ai-assistant",

    image: "/images/projects/jarvis.png",

    featured: true
  }
];