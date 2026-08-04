import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "jarvis",

    title: "JARVIS",

    tagline: "Local AI Assistant with Voice Interaction, Long-Term Memory, and Intelligent Automation",

    projectType: "Personal Project",

    role: "Sole Developer",

    status: "Active Development",

    shortDescription:
      "JARVIS is a modular AI assistant designed to run locally while combining voice interaction, persistent memory, local language models, and an extensible software architecture. The long-term vision is to evolve JARVIS into an intelligent desktop operating layer capable of automating workflows, understanding its environment, and acting as a personalized AI companion.",

    problem:
      "Most commercial AI assistants rely heavily on cloud infrastructure, have limited personalization, and provide little control over long-term memory or automation. I wanted to build an assistant that prioritizes privacy, local execution, modular software design, and future expandability while serving as a long-term engineering project.",

    solution:
      "I designed JARVIS as a modular Python application that separates voice recognition, command routing, persistent memory, AI reasoning, and future integrations into independent services. Using SQLite, SQLAlchemy, SpeechRecognition, and Ollama allows the assistant to run locally while remaining highly extensible as new capabilities are introduced.",

    timeline: [
      {
        title: "Foundation",
        description:
          "Developed the initial voice assistant with speech recognition, text-to-speech, and a command routing system."
      },
      {
        title: "Persistent Memory",
        description:
          "Implemented SQLite and SQLAlchemy to allow JARVIS to remember information between sessions."
      },
      {
        title: "Local Intelligence",
        description:
          "Integrated Ollama to provide private local language model inference without requiring external AI APIs."
      },
      {
        title: "Future Expansion",
        description:
          "Currently expanding toward desktop automation, computer vision, email management, calendar integration, and multi-agent workflows."
      }
    ],

    architecture: [
      "Voice Input",
      "Wake Word Detection",
      "Speech Recognition",
      "Command Router",
      "Memory Service",
      "SQLite Database",
      "Local LLM (Ollama)",
      "Response Generation",
      "Text-to-Speech Output"
    ],

    features: [
      "Wake-word voice activation",
      "Persistent long-term memory",
      "Local language model inference",
      "Modular command routing",
      "SQLite-backed memory storage",
      "Conversation history",
      "Extensible service architecture",
      "Offline-first design"
    ],

    technologies: [
      "Python",
      "SQLite",
      "SQLAlchemy",
      "Ollama",
      "SpeechRecognition"
    ],

    engineeringDecisions: [
      {
        title: "Python",
        why:
          "Python provides rapid development, excellent readability, and one of the strongest ecosystems available for AI, automation, and speech processing.",

        tradeoffs: [
          "Lower runtime performance than compiled languages",
          "Excellent developer productivity",
          "Large AI ecosystem"
        ],

        usedFor: [
          "Application orchestration",
          "Voice processing",
          "Command routing"
        ]
      },

      {
        title: "Ollama",

        why:
          "Running language models locally keeps conversations private while allowing experimentation with different models without depending on cloud APIs.",

        tradeoffs: [
          "Requires more local hardware resources",
          "No recurring API costs",
          "Offline operation"
        ],

        usedFor: [
          "Natural language understanding",
          "Conversation generation",
          "Question answering"
        ]
      },

      {
        title: "SQLite",

        why:
          "SQLite keeps deployment simple for a desktop application while providing persistent storage without requiring a database server.",

        tradeoffs: [
          "Not intended for large concurrent workloads",
          "Extremely lightweight",
          "Simple deployment"
        ],

        usedFor: [
          "Persistent memory",
          "Conversation history",
          "Stored user information"
        ]
      },

      {
        title: "Modular Architecture",

        why:
          "Separating memory, AI services, routing, speech processing, and future integrations minimizes coupling and allows the assistant to evolve without major rewrites.",

        tradeoffs: [
          "Slightly more initial design complexity",
          "Much easier long-term maintenance",
          "Highly extensible"
        ],

        usedFor: [
          "Feature isolation",
          "Future integrations",
          "Maintainability"
        ]
      }
    ],

    challenges: [
      "Improving speech recognition reliability across different environments",
      "Designing scalable command routing",
      "Maintaining long-term conversational memory",
      "Integrating local language models efficiently",
      "Building an architecture capable of supporting future AI capabilities"
    ],

    lessonsLearned: [
      "Modular software architecture dramatically simplifies future expansion.",
      "Separating routing, memory, and AI services reduces long-term technical debt.",
      "Local language models require different optimization strategies than cloud APIs.",
      "Iterative development produces cleaner software than attempting to design every feature upfront."
    ],

    futureWork: [
      "Desktop automation",
      "Computer vision through connected cameras",
      "Email management and automation",
      "Calendar scheduling and reminders",
      "Home server integration",
      "Multi-agent AI architecture",
      "Natural language workflow automation",
      "Cross-device synchronization"
    ],

    github: "https://github.com/CPruett24/jarvis-ai-assistant",

    image: "/images/projects/jarvis.png",

    featured: true
  },

   {
    slug: "vehicle-ai-diagnostic",

    title: "Vehicle AI Diagnostic",

    tagline: "AI-Powered Vehicle Diagnostic Assistant Using Hybrid Semantic Search",

    projectType: "Personal Project",

    role: "Sole Developer",

    status: "Completed",

    shortDescription:
      "Vehicle AI Diagnostic is an intelligent troubleshooting assistant that combines traditional OBD-II diagnostic code lookup with semantic vector search to provide context-aware repair guidance. Rather than relying solely on exact fault codes, the system understands natural language descriptions of vehicle symptoms and retrieves the most relevant failures using AI-powered similarity search.",

    problem:
      "Traditional OBD-II scanners provide generic fault code descriptions but rarely help users understand the underlying cause of a problem. Drivers often describe symptoms that do not directly correspond to a diagnostic code. I wanted to build a system capable of combining structured diagnostic information with semantic reasoning to produce more meaningful troubleshooting recommendations.",

    solution:
      "I designed a hybrid diagnostic platform that combines exact OBD-II code lookup with semantic search powered by Sentence Transformers and FAISS. By embedding thousands of known vehicle faults into vector space, the application can retrieve failures that are semantically similar to a user's symptoms while still supporting precise diagnostic code lookups. The result is a more intelligent diagnostic assistant capable of reasoning beyond simple keyword matching.",

    timeline: [
      {
        title: "Research & Dataset Preparation",
        description:
          "Collected and organized structured OBD-II codes together with thousands of documented vehicle fault records."
      },
      {
        title: "Semantic Search",
        description:
          "Generated vector embeddings using Sentence Transformers and built a FAISS index for high-performance similarity search."
      },
      {
        title: "Hybrid AI Engine",
        description:
          "Combined exact diagnostic code lookup with semantic retrieval to provide more intelligent troubleshooting recommendations."
      },
      {
        title: "Application Delivery",
        description:
          "Developed a complete Streamlit application capable of interactive vehicle diagnostics using both traditional and AI-powered search techniques."
      }
    ],

    architecture: [
      "User Input",
      "Diagnostic Code Parser",
      "Symptom Processing",
      "Sentence Transformer Embeddings",
      "FAISS Vector Search",
      "Fault Retrieval",
      "AI Response Generation",
      "Streamlit Interface"
    ],

    features: [
      "Exact OBD-II code lookup",
      "Natural language symptom search",
      "Semantic vector similarity search",
      "Large searchable fault database",
      "AI-assisted troubleshooting recommendations",
      "Interactive Streamlit dashboard",
      "Hybrid retrieval architecture"
    ],

    technologies: [
      "Python",
      "Streamlit",
      "Sentence Transformers",
      "FAISS",
      "Pandas"
    ],

    engineeringDecisions: [
      {
        title: "Sentence Transformers",

        why:
          "Sentence Transformers convert user symptom descriptions into semantic embeddings, allowing the system to understand meaning rather than relying only on exact keyword matches.",

        tradeoffs: [
          "Requires preprocessing to generate embeddings",
          "Significantly improves semantic understanding",
          "Enables flexible symptom searches"
        ],

        usedFor: [
          "Symptom embeddings",
          "Semantic retrieval",
          "Natural language search"
        ]
      },

      {
        title: "FAISS",

        why:
          "FAISS provides extremely fast nearest-neighbor searches across thousands of embedded vehicle fault vectors, making semantic search practical for interactive applications.",

        tradeoffs: [
          "Requires index generation",
          "Very fast query performance",
          "Scales efficiently"
        ],

        usedFor: [
          "Vector indexing",
          "Similarity search",
          "Fault retrieval"
        ]
      },

      {
        title: "Hybrid Search Architecture",

        why:
          "Combining deterministic OBD-II lookup with semantic AI retrieval produces more reliable diagnostic recommendations than either technique alone.",

        tradeoffs: [
          "More complex application logic",
          "Improved diagnostic accuracy",
          "Supports multiple search strategies"
        ],

        usedFor: [
          "Code lookup",
          "Semantic reasoning",
          "Diagnostic recommendations"
        ]
      },

      {
        title: "Streamlit",

        why:
          "Streamlit allowed rapid development of an interactive interface while keeping the primary engineering effort focused on AI and backend functionality.",

        tradeoffs: [
          "Less customizable than React",
          "Rapid prototyping",
          "Excellent for AI demonstrations"
        ],

        usedFor: [
          "Application interface",
          "User interaction",
          "Diagnostic visualization"
        ]
      }
    ],

    challenges: [
      "Generating embeddings for large datasets",
      "Balancing semantic accuracy with search performance",
      "Designing a hybrid retrieval pipeline",
      "Organizing structured and unstructured vehicle data",
      "Maintaining responsive search performance"
    ],

    lessonsLearned: [
      "Hybrid retrieval systems outperform purely deterministic searches for many AI applications.",
      "Precomputed embeddings dramatically reduce runtime latency.",
      "Separating retrieval from reasoning creates a more maintainable architecture.",
      "Vector databases unlock entirely new user experiences compared to traditional search."
    ],

    futureWork: [
      "Live OBD-II scanner integration",
      "VIN decoding",
      "Predictive maintenance recommendations",
      "Repair cost estimation",
      "Multi-vehicle profiles",
      "Cloud synchronization",
      "Voice-powered diagnostics",
      "Mobile application"
    ],

    github: "https://github.com/CPruett24/vehicle-ai-diagnostic",

    image: "/images/projects/vehicle-ai.png",

    featured: true
  },

    {
    slug: "volunteerhub",

    title: "VolunteerHub",

    tagline: "Backend Infrastructure for a Team-Based Volunteer Management Platform",

    projectType: "Team Project",

    role: "Backend Software Engineer",

    status: "Completed",

    shortDescription:
      "VolunteerHub is a collaborative full-stack volunteer management platform developed by a team of software engineering students. My primary responsibility was designing and implementing the backend architecture, including database modeling, REST API development, authentication, and role-based authorization to provide a secure and scalable foundation for the application.",

    problem:
      "The project aimed to provide volunteer organizations with a centralized platform for managing volunteers, organizations, events, and user accounts. As the backend developer, my objective was to design a secure, maintainable backend capable of supporting the frontend through well-structured REST APIs while enforcing authentication and authorization across the application.",

    solution:
      "I designed and implemented the backend using Flask, SQLAlchemy, SQLite, and JWT authentication. My work included database schema design, REST API development, user authentication, role-based authorization, and supporting frontend integration through clearly defined API endpoints. Throughout development, I collaborated closely with teammates to ensure seamless communication between the frontend and backend components.",

    timeline: [
      {
        title: "Project Planning",
        description:
          "Collaborated with the team to define project requirements, backend responsibilities, and the overall application architecture."
      },
      {
        title: "Backend Architecture",
        description:
          "Designed the database schema, established model relationships, and implemented the application's REST API structure."
      },
      {
        title: "Security Implementation",
        description:
          "Developed JWT authentication, role-based authorization, and secure API endpoints to protect application resources."
      },
      {
        title: "Frontend Integration",
        description:
          "Worked alongside frontend developers to integrate backend services, validate API functionality, and support application testing."
      }
    ],

    architecture: [
      "Client Requests",
      "REST API",
      "Authentication Middleware",
      "Authorization Layer",
      "Business Logic",
      "SQLAlchemy ORM",
      "SQLite Database"
    ],

    features: [
      "RESTful API endpoints",
      "JWT authentication",
      "Role-based authorization",
      "Volunteer management",
      "Organization management",
      "Event management",
      "Relational database modeling",
      "Secure backend architecture"
    ],

    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "JWT"
    ],

    engineeringDecisions: [
      {
        title: "Flask",

        why:
          "Flask provided a lightweight and flexible framework that allowed the backend architecture to remain modular while supporting rapid development throughout the project.",

        tradeoffs: [
          "Requires more manual configuration than larger frameworks",
          "Excellent flexibility",
          "Simple application structure"
        ],

        usedFor: [
          "REST API",
          "Application routing",
          "Backend services"
        ]
      },

      {
        title: "SQLAlchemy",

        why:
          "SQLAlchemy simplified database interactions while allowing the project to maintain clean object-oriented models and well-defined relationships.",

        tradeoffs: [
          "Additional ORM abstraction",
          "Improved maintainability",
          "Database portability"
        ],

        usedFor: [
          "Database models",
          "Relationships",
          "Database queries"
        ]
      },

      {
        title: "JWT Authentication",

        why:
          "JWT authentication enabled secure stateless authentication for API requests while keeping the backend scalable and independent of server-side sessions.",

        tradeoffs: [
          "Requires token management",
          "Highly scalable",
          "Industry-standard authentication"
        ],

        usedFor: [
          "User authentication",
          "API security",
          "Session management"
        ]
      },

      {
        title: "Role-Based Authorization",

        why:
          "Different user roles required different levels of access. Role-based authorization ensured users could only perform actions appropriate for their permissions.",

        tradeoffs: [
          "Additional authorization logic",
          "Improved application security",
          "Easier future expansion"
        ],

        usedFor: [
          "Permission management",
          "Administrative controls",
          "Secure API endpoints"
        ]
      }
    ],

    challenges: [
      "Designing a normalized relational database schema",
      "Coordinating backend development within a collaborative team environment",
      "Implementing secure authentication and authorization",
      "Maintaining clean API contracts for frontend integration",
      "Ensuring backend scalability while keeping the codebase maintainable"
    ],

    lessonsLearned: [
      "Clear communication between frontend and backend developers is essential for successful full-stack projects.",
      "Well-designed database relationships simplify API development and future maintenance.",
      "Authentication and authorization should be considered early in the design process rather than added later.",
      "Modular backend architecture significantly improves maintainability as projects grow."
    ],

    futureWork: [
      "Deploy using PostgreSQL",
      "Containerize the backend with Docker",
      "Add automated API testing",
      "Generate OpenAPI documentation",
      "Implement email notifications",
      "Build an administrative analytics dashboard",
      "Improve logging and monitoring",
      "Support cloud deployment"
    ],

    github: "#",

    image: "/images/projects/volunteerhub.png",

    featured: true
  }
];