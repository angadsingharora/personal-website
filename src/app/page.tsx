import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Toolkit } from "@/components/Toolkit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Intro />
        <Experience />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
