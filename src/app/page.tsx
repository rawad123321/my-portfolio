import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
