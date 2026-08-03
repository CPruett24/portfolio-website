import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "jarvis",
    title: "JARVIS",
    tagline: "Personal AI Assistant",

    shortDescription:
      "A modular AI assistant that combines voice interaction, local language models, memory, and automation into a scalable desktop assistant.",

    problem:
      "I wanted to build an AI assistant that could run locally, remember conversations, and eventually automate everyday tasks instead of relying entirely on cloud services.",

    solution:
      "Developed a modular Python application using speech recognition, text-to-speech, SQLite memory, and Ollama for local LLM inference. The architecture is designed to support future integrations such as vision, desktop automation, and smart home control.",

    challenges: [
      "Improving speech recognition accuracy",
      "Designing a scalable command router",
      "Managing long-term memory",
      "Integrating local language models"
    ],

    futureWork: [
      "Desktop automation",
      "Vision and camera support",
      "Email integration",
      "Calendar integration",
      "Smart home control",
      "Multi-agent architecture"
    ],

    technologies: [
      "Python",
      "SQLite",
      "SQLAlchemy",
      "Ollama",
      "SpeechRecognition"
    ],

    architecture: [
    "Voice Input Layer",
    "Speech Recognition Pipeline",
    "Command Router",
    "Memory Service",
    "SQLite Database",
    "Ollama Local LLM",
    "Text-to-Speech Output"
    ],

    features: [
        "Voice activation",
        "Conversation memory",
        "Local AI inference",
        "Modular command system",
        "Persistent SQLite memory",
        "Expandable architecture"
    ],

    lessonsLearned: [
        "Designing modular software makes future features much easier to add.",
        "Separating memory, routing, and AI services greatly simplified maintenance.",
        "Local LLMs require different optimization strategies than cloud APIs.",
        "Iterative development leads to a cleaner architecture."
    ],

    github: "https://github.com/CPruett24/jarvis-ai-assistant",

    image: "/images/projects/jarvis.png",

    featured: true
  },

  {
  slug: "vehicle-ai-diagnostic",

  title: "Vehicle AI Diagnostic",

  tagline: "AI Vehicle Troubleshooting Platform",

  shortDescription:
    "An AI-powered vehicle diagnostic assistant that combines exact OBD-II code lookup with semantic search using vector embeddings to provide intelligent repair guidance.",

  problem:
    "Traditional OBD-II scanners provide generic fault descriptions but very little diagnostic reasoning. I wanted to create an assistant capable of understanding both diagnostic codes and user-reported symptoms.",

  solution:
    "Built a Streamlit application that combines exact OBD-II code lookup with semantic similarity search using Sentence Transformers and FAISS to provide more intelligent troubleshooting recommendations.",

  architecture: [
    "Streamlit User Interface",
    "OBD-II Exact Lookup Engine",
    "Semantic Search Engine",
    "Sentence Transformer Embeddings",
    "FAISS Vector Database",
    "AI Response Layer"
  ],

  features: [
    "Exact OBD-II code lookup",
    "Semantic symptom search",
    "Vector similarity search",
    "Large fault database",
    "AI-assisted troubleshooting"
  ],

  challenges: [
    "Generating vector embeddings",
    "Building an efficient FAISS index",
    "Combining exact lookup with semantic search",
    "Managing large datasets efficiently"
  ],

  lessonsLearned: [
    "Hybrid search provides better results than relying on exact matches alone.",
    "Precomputed embeddings dramatically improve application performance.",
    "Separating lookup logic from AI reasoning makes the application easier to extend."
  ],

  futureWork: [
    "VIN decoding",
    "Maintenance scheduling",
    "Live OBD-II scanner integration",
    "Repair cost estimation",
    "Multi-vehicle support"
  ],

  technologies: [
    "Python",
    "Streamlit",
    "FAISS",
    "Sentence Transformers",
    "Pandas"
  ],

  github: "https://github.com/CPruett24/vehicle-ai-diagnostic",

  image: "/images/projects/vehicle-ai.png",

  featured: true
},

  {
  slug: "volunteerhub",

  title: "VolunteerHub",

  tagline: "Volunteer Management Backend",

  shortDescription:
    "A secure backend API for managing volunteers, organizations, events, authentication, and permissions within a volunteer management platform.",

  problem:
    "Volunteer organizations require a secure and scalable backend capable of managing users, events, permissions, and authentication while remaining easy to maintain.",

  solution:
    "Developed a Flask backend with SQLAlchemy models, JWT authentication, RESTful APIs, and role-based authorization to provide a solid backend foundation for the application.",

  architecture: [
    "REST API",
    "Flask Application",
    "SQLAlchemy ORM",
    "SQLite Database",
    "JWT Authentication",
    "Role-Based Authorization"
  ],

  features: [
    "User authentication",
    "Role management",
    "Volunteer management",
    "REST API endpoints",
    "Database relationships"
  ],

  challenges: [
    "Database schema design",
    "Role-based authentication",
    "REST API architecture",
    "Backend testing"
  ],

  lessonsLearned: [
    "Proper database relationships simplify backend development.",
    "JWT authentication provides a scalable security solution.",
    "Separating routes, models, and services improves maintainability."
  ],

  futureWork: [
    "PostgreSQL deployment",
    "Email notifications",
    "Analytics dashboard",
    "Admin reporting",
    "OpenAPI documentation"
  ],

  technologies: [
    "Python",
    "Flask",
    "SQLAlchemy",
    "JWT",
    "SQLite"
  ],

  github: "#",

  image: "/images/projects/volunteerhub.png",

  featured: true
}
];