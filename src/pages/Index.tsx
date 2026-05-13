import { LangProvider } from "@/contexts/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CV from "@/components/CV";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CV />
        <Contact />
      </main>
    </LangProvider>
  );
};

export default Index;
