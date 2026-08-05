import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "Chandler Pruett | Software Engineer",
    template: "%s | Chandler Pruett",
  },

  description:
    "Software Engineer specializing in artificial intelligence, backend engineering, scalable software architecture, and modern web applications.",

  keywords: [
    "Software Engineer",
    "Artificial Intelligence",
    "Backend Developer",
    "Python",
    "Next.js",
    "Portfolio",
    "Machine Learning",
    "Software Architecture",
    "Flask",
    "SQL",
  ],

  authors: [
    {
      name: "Chandler Pruett",
    },
  ],

  creator: "Chandler Pruett",

  openGraph: {
    title: "Chandler Pruett | Software Engineer",
    description:
      "Portfolio showcasing AI systems, backend engineering, and software architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Chandler Pruett Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chandler Pruett | Software Engineer",
    description:
      "Portfolio showcasing AI systems, backend engineering, and software architecture.",
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
        {children}
      </body>
    </html>
  );
}