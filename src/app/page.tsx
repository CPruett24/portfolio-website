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
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="bg-slate-950 text-white focus:outline-none"
      >
        <Hero />

        <Projects />

        <About />

        <Experience />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </>
  );
}