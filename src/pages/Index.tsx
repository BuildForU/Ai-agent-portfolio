import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientTypes from "@/components/ClientTypes";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollTransition from "@/components/ScrollTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ScrollTransition />
      <Services />
      <ClientTypes />
      <Pricing />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
