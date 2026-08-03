import { siteConfig } from "@/config/site";

export const contact = {
  title: "Let's Build Something Great Together",

  description:
    "I'm currently seeking full-time Software Engineering opportunities where I can contribute, continue learning, and help build impactful software.",

  availability: "Open to Full-Time Software Engineering Opportunities",

  links: [
    {
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      title: "GitHub",
      value: "github.com/CPruett24",
      href: siteConfig.github,
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      href: siteConfig.linkedin,
    },
  ],
};