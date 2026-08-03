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
      "Traditional OBD-II code readers only provide generic fault descriptions. I wanted to build a system capable of understanding symptoms, retrieving relevant failures, and providing more useful diagnostic suggestions.",

    solution:
      "Built a Streamlit application that combines structured OBD-II lookups with semantic similarity search using Sentence Transformers and FAISS. The assistant can retrieve relevant failures from a large dataset and generate more context-aware troubleshooting guidance.",

    challenges: [
      "Generating vector embeddings",
      "Building an efficient FAISS index",
      "Combining exact lookup with semantic search",
      "Organizing large datasets efficiently"
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
      "A secure backend API for managing volunteers, organizations, events, authentication, and permissions within a full-stack volunteer management platform.",

    problem:
      "Volunteer organizations often struggle to manage users, events, and permissions efficiently. The project focused on creating a secure and scalable backend to support those needs.",

    solution:
      "Designed and implemented RESTful API endpoints, SQLAlchemy database models, JWT authentication, and role-based authorization using Flask. The backend was built with scalability and maintainability in mind.",

    challenges: [
      "Database schema design",
      "Role-based authentication",
      "REST API architecture",
      "Backend testing"
    ],

    futureWork: [
      "Production PostgreSQL deployment",
      "Email notifications",
      "Analytics dashboard",
      "Admin reporting",
      "API documentation"
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