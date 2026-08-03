export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    description: "Building scalable APIs, application logic, and software architecture.",
    skills: [
      "Python",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "SQLite",
      "Java"
    ]
  },

  {
    title: "Artificial Intelligence",
    description: "Developing AI-powered applications using local and cloud technologies.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Ollama",
      "Prompt Engineering",
      "Vector Search",
      "FAISS"
    ]
  },

  {
    title: "Frontend Development",
    description: "Creating responsive user interfaces using modern web technologies.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },

  {
    title: "Databases",
    description: "Designing and managing relational databases.",
    skills: [
      "SQLite",
      "SQL",
      "Database Design"
    ]
  },

  {
    title: "Developer Tools",
    description: "Tools used throughout the software development lifecycle.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Streamlit",
      "Linux"
    ]
  },

  {
    title: "Currently Learning",
    description: "Areas I'm actively expanding through coursework and projects.",
    skills: [
      "Cloud Computing",
      "AWS",
      "Docker",
      "CI/CD",
      "Cybersecurity"
    ]
  }
];