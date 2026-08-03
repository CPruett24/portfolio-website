export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    year: "2023",
    title: "Assembler",
    company: "Contec, Inc.",
    description:
      "Assembled and tested industrial computer systems while following detailed manufacturing procedures, quality standards, and documentation.",

    technologies: [
      "Hardware Assembly",
      "Quality Control",
      "Manufacturing",
      "Documentation"
    ]
  },

  {
    year: "2025",
    title: "Software Engineering Intern",
    company: "Contec, Inc.",
    description:
      "Worked on internal software projects while applying software engineering principles, collaborating with developers, and gaining experience with real-world development workflows.",

    technologies: [
      "Python",
      "Git",
      "Software Engineering",
      "Problem Solving"
    ]
  },

  {
    year: "2026",
    title: "Computer Science Senior",
    company: "University",

    description:
      "Completing a Computer Science degree while focusing on artificial intelligence, backend development, algorithms, databases, and software architecture.",

    technologies: [
      "AI",
      "Machine Learning",
      "Algorithms",
      "Databases"
    ]
  }
];