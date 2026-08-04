export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    year: "2023-2024",
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
    year: "2026",
    title: "Summer Intern",
    company: "Contec, Inc.",
    description:
      "Continued work in assembly and testing of industrial computer systems as well as learned the use of software to troubleshoot and diagnose issues.",

    technologies: [
      "Python",
      "Git",
      "Software Engineering",
      "Problem Solving"
    ]
  },

  {
    year: "2024-2026",
    title: "Computer Science Student",
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