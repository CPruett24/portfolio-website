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
      "Assembled, tested, and inspected industrial computer systems while following engineering documentation, bills of materials, quality procedures, and manufacturing standards. Verified hardware configurations, identified discrepancies, and documented issues for resolution.",

    technologies: [
      "Hardware Assembly",
      "Hardware Verification",
      "Quality Assurance",
      "Technical Documentation"
    ]
  },

  {
    year: "2026",
    title: "Summer Intern",
    company: "Contec, Inc.",
    description:
      "Performed assembly, testing, and quality verification of industrial computer systems while using diagnostic software and testing equipment to troubleshoot hardware issues. Worked within controlled ESD environments and followed technical documentation and established quality procedures.",

    technologies: [
      "Hardware Testing",
      "Troubleshooting",
      "Diagnostic Software",
      "ESD Procedures"
    ]
  },

  {
    year: "2024-2026",
    title: "Computer Science Student",
    company: "University",

    description:
      "Pursuing a Computer Science degree with coursework spanning artificial intelligence, machine learning, algorithms, databases, cybersecurity, software engineering, and software architecture.",

    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Algorithms",
      "Databases"
    ]
  }
];