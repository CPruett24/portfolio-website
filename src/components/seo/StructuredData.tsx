export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Chandler Pruett",

    url: "https://chandlerpruett.com",

    image: "https://chandlerpruett.com/images/profile/profile-placeholder.png",

    jobTitle: "Software Engineer",

    description:
      "Software Engineer specializing in Artificial Intelligence, Backend Engineering, Machine Learning, and scalable software systems.",

    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Flask",
      "Next.js",
      "React",
      "TypeScript",
      "Backend Development",
      "SQL",
      "Software Architecture",
    ],

    sameAs: [
      "https://github.com/CPruett24",
      "https://www.linkedin.com/in/chandler-pruett-2a1145345/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}