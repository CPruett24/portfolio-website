import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero/Hero";

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </main>
  );
}