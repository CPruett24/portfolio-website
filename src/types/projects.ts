export type Project = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;

  problem: string;
  solution: string;

  architecture: string[];

  features: string[];

  challenges: string[];

  lessonsLearned: string[];

  futureWork: string[];

  technologies: string[];

  github: string;
  image: string;

  featured: boolean;
};