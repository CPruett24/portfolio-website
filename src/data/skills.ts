export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",

    description:
      "Building scalable APIs, application logic, and software architecture.",

    skills: [
      "Python",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "SQL",
      "Java",
    ],
  },

  {
    title: "Artificial Intelligence",

    description:
      "Developing AI-powered applications using local and cloud technologies.",

    skills: [
      "Machine Learning",
      "Deep Learning",
      "AI Applications",
      "Vector Search",
      "FAISS",
      "Ollama",
    ],
  },

  {
    title: "Frontend Development",

    description:
      "Creating responsive user interfaces using modern web technologies.",

    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    title: "Databases",

    description:
      "Designing and managing relational databases.",

    skills: [
      "SQL",
      "Database Design",
      "SQLite",
    ],
  },

  {
    title: "Developer Tools",

    description:
      "Tools and platforms used for development, version control, testing, and application development.",

    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Streamlit",
      "Linux",
    ],
  },

  {
    title: "Currently Learning",

    description:
      "Technologies and engineering practices I'm actively developing through coursework and projects.",

    skills: [
      "Cloud Computing",
      "AWS",
      "Docker",
      "CI/CD",
      "Cybersecurity",
    ],
  },
];