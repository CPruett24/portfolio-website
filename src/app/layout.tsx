import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chandlerpruett.com"),

  title: {
    default: "Chandler Pruett | Software Engineer",
    template: "%s | Chandler Pruett",
  },

  description:
    "Software Engineer specializing in Artificial Intelligence, Backend Development, Machine Learning, and scalable software systems. Creator of JARVIS, AI-powered applications, and modern full-stack software.",

  keywords: [
    "Chandler Pruett",
    "Software Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Next.js",
    "React",
    "TypeScript",
    "Backend Development",
    "Flask",
    "SQL",
    "JARVIS",
    "Portfolio",
  ],

  authors: [
    {
      name: "Chandler Pruett",
      url: "https://chandlerpruett.com",
    },
  ],

  creator: "Chandler Pruett",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandlerpruett.com",

    siteName: "Chandler Pruett",

    title: "Chandler Pruett | Software Engineer",

    description:
      "Software Engineer specializing in Artificial Intelligence, Backend Development, and scalable software architecture.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chandler Pruett Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Chandler Pruett | Software Engineer",

    description:
      "Software Engineer specializing in AI, Backend Engineering, and modern software systems.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:absolute
            focus:left-6
            focus:top-6
            focus:z-[100]
            focus:rounded-xl
            focus:bg-cyan-500
            focus:px-5
            focus:py-3
            focus:font-semibold
            focus:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        >
          Skip to main content
        </a>

        <StructuredData />

        {children}

      </body>
    </html>
  );
}