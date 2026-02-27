import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Currently } from "@/components/Currently";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Currently />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
