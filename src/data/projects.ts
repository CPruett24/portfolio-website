import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "jarvis",
    title: "JARVIS",
    tagline: "Local AI Assistant with Voice Interaction and Long-Term Memory",
    
    projectType: "Personal Project",

    role: "Sole Developer",

    status: "Active Development",

    shortDescription: "A modular AI assistant built with Python that combines voice recognition, local language models, persistent memory, and an extensible command architecture for intelligent desktop automation.",

    problem:
      "I wanted to build an AI assistant that could run locally, remember conversations, and eventually automate everyday tasks instead of relying entirely on cloud services.",

    solution:
      "Developed a modular Python application using speech recognition, text-to-speech, SQLite memory, and Ollama for local LLM inference. The architecture is designed to support future integrations such as vision, desktop automation, and smart home control.",

    timeline: [
        {
            title: "Project Started",
            description: "Created the initial voice assistant with speech recognition and text-to-speech.",
        },
        {
            title: "Persistent Memory",
            description: "Implemented SQLite and SQLAlchemy to remember information between sessions.",
        },
        {
            title: "Local AI",
            description: "Integrated Ollama to provide private local language model inference.",
        },
        {
            title: "Current Development",
            description: "Expanding toward desktop automation, vision, and intelligent workflows.",
        },
    ],

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

    engineeringDecisions: [
    {
        title: "Sentence Transformers",
        why:
        "Sentence Transformers convert user symptoms into semantic embeddings, allowing the system to understand meaning rather than relying on exact keyword matches.",
        tradeoffs: [
        "Requires embedding generation and storage",
        "Produces significantly better semantic search results",
        ],
        usedFor: [
        "Symptom embedding",
        "Semantic similarity search",
        "Fault retrieval",
        ],
    },
    {
        title: "FAISS",
        why:
        "FAISS was chosen to perform high-speed vector similarity searches across thousands of embedded vehicle fault records.",
        tradeoffs: [
        "Additional preprocessing is required",
        "Extremely fast search performance",
        ],
        usedFor: [
        "Vector indexing",
        "Nearest-neighbor search",
        "Fault retrieval",
        ],
    },
    {
        title: "Hybrid Search",
        why:
        "Combining exact OBD-II code lookup with semantic symptom matching produces more accurate and useful diagnostic recommendations.",
        tradeoffs: [
        "More application complexity",
        "Much higher diagnostic quality",
        ],
        usedFor: [
        "OBD-II lookup",
        "Semantic reasoning",
        "AI-assisted diagnostics",
        ],
    },
    {
        title: "Streamlit",
        why:
        "Streamlit enabled rapid development of an interactive interface while allowing the project to focus on AI functionality rather than frontend infrastructure.",
        tradeoffs: [
        "Less customizable than React",
        "Extremely fast development cycle",
        ],
        usedFor: [
        "User interface",
        "Diagnostic dashboard",
        "AI interaction",
        ],
    },
    ],

    github: "https://github.com/CPruett24/jarvis-ai-assistant",

    image: "/images/projects/jarvis.png",

    featured: true
  },

  {
  slug: "vehicle-ai-diagnostic",

  title: "Vehicle AI Diagnostic",

  tagline: "AI Vehicle Troubleshooting Platform",

  projectType: "Personal Project",

  role: "Sole Developer",

  status: "Completed",

  shortDescription:
    "An AI-powered vehicle diagnostic assistant that combines exact OBD-II code lookup with semantic search using vector embeddings to provide intelligent repair guidance.",

  problem:
    "Traditional OBD-II scanners provide generic fault descriptions but very little diagnostic reasoning. I wanted to create an assistant capable of understanding both diagnostic codes and user-reported symptoms.",

  solution:
    "Built a Streamlit application that combines exact OBD-II code lookup with semantic similarity search using Sentence Transformers and FAISS to provide more intelligent troubleshooting recommendations.",

  timeline: [
        {
            title: "Dataset Collection",
            description: "Prepared structured OBD-II code and vehicle fault datasets.",
        },
        {
            title: "Semantic Search",
            description: "Generated embeddings and built a FAISS index for vector search.",
        },
        {
            title: "Hybrid Diagnostics",
            description: "Combined exact code lookup with semantic similarity search.",
        },
        {
            title: "Completed",
            description: "Delivered an AI-powered diagnostic assistant with an interactive Streamlit interface.",
        },
    ],

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

  engineeringDecisions: [
    {
        title: "Flask",
        why:
        "Flask provides a lightweight and modular backend framework that makes it easy to organize REST APIs and business logic.",
        tradeoffs: [
        "Requires more manual setup than larger frameworks",
        "Very flexible architecture",
        ],
        usedFor: [
        "REST API",
        "Request routing",
        "Backend services",
        ],
    },
    {
        title: "SQLAlchemy",
        why:
        "SQLAlchemy simplifies database interactions through an ORM while keeping models organized and maintainable.",
        tradeoffs: [
        "Adds ORM abstraction",
        "Improves maintainability and portability",
        ],
        usedFor: [
        "Database models",
        "Relationships",
        "Queries",
        ],
    },
    {
        title: "JWT Authentication",
        why:
        "JWT enables secure, stateless authentication suitable for REST APIs and scalable client-server applications.",
        tradeoffs: [
        "Requires token management",
        "Scales well without server sessions",
        ],
        usedFor: [
        "Authentication",
        "API security",
        "User sessions",
        ],
    },
    {
        title: "Role-Based Authorization",
        why:
        "Separating user permissions by role improves security and allows the application to support different user responsibilities.",
        tradeoffs: [
        "Additional authorization logic",
        "Improved security and scalability",
        ],
        usedFor: [
        "Permission management",
        "Admin controls",
        "User access",
        ],
    },
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

  projectType: "Team Project",

  role: "Backend Developer",
 
  status: "Completed",

  shortDescription:
    "A secure backend API for managing volunteers, organizations, events, authentication, and permissions within a volunteer management platform.",

  problem:
    "Volunteer organizations require a secure and scalable backend capable of managing users, events, permissions, and authentication while remaining easy to maintain.",

  solution:
    "Developed a Flask backend with SQLAlchemy models, JWT authentication, RESTful APIs, and role-based authorization to provide a solid backend foundation for the application.",

  timeline: [
        {
            title: "Project Planning",
            description: "Collaborated with the team to define backend requirements and API responsibilities.",
        },
        {
            title: "Backend Development",
            description: "Designed the database schema, implemented REST APIs, and added authentication and authorization.",
        },
        {
            title: "Frontend Integration",
            description: "Worked with teammates to support frontend integration through the backend API.",
        },
        {
            title: "Project Completion",
            description: "Delivered the backend as part of the completed team project.",
        },
    ],

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

  engineeringDecisions: [
    {
        title: "Python",
        why:
        "Chosen for rapid development, readability, and its mature ecosystem for AI, automation, and speech processing.",
        tradeoffs: [
        "Slower than compiled languages",
        "Excellent developer productivity",
        ],
        usedFor: [
        "Voice recognition",
        "Command routing",
        "Application orchestration",
        ],
    },
    {
        title: "Ollama",
        why:
        "Provides local language model inference for privacy, offline capability, and experimentation without API costs.",
        tradeoffs: [
        "Higher local hardware requirements",
        "No external API dependency",
        ],
        usedFor: [
        "Conversation generation",
        "Question answering",
        "Natural language reasoning",
        ],
    },
    {
        title: "SQLite",
        why:
        "Simple deployment and persistence for a single-user desktop assistant.",
        tradeoffs: [
        "Not intended for high-concurrency workloads",
        "Very lightweight",
        ],
        usedFor: [
        "Persistent memory",
        "Conversation storage",
        ],
    },
    {
        title: "Modular Architecture",
        why:
        "Keeps AI, memory, routing, and future integrations isolated for easier maintenance.",
        tradeoffs: [
        "Slightly more initial complexity",
        "Much easier long-term expansion",
        ],
        usedFor: [
        "Command routing",
        "Feature isolation",
        "Future integrations",
        ],
    },
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