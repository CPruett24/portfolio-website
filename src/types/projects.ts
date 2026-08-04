export type Project = {
  slug: string;
  title: string;
  tagline: string;
  
  projectType: string;
  role: string;
  status: string;

  timeline: {
    title: string;
    description: string;
  }[];
  
  shortDescription: string;

  problem: string;
  solution: string;

  architecture: string[];

  features: string[];

  challenges: string[];

  lessonsLearned: string[];

  engineeringDecisions: {
    title: string;
    why: string;
    tradeoffs: string[];
    usedFor: string[];
  }[];

  futureWork: string[];

  technologies: string[];

  github: string;
  image: string;

  featured: boolean;
};