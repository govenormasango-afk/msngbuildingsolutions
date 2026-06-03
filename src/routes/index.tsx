import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MSNG Building Solutions" },
      { name: "description", content: "Plumbing, water, electrical, and building maintenance — leak repairs, JoJo tanks, DB upgrades, painting, tiling, and bricklaying." },
      { property: "og:title", content: "MSNG Building Solutions" },
      { property: "og:description", content: "Plumbing, water, electrical, and building maintenance — leak repairs, JoJo tanks, DB upgrades, painting, tiling, and bricklaying." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
