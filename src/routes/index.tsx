import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MSNG Building Solutions" },
      { name: "description", content: "Expert construction and renovation services built to last." },
      { property: "og:title", content: "MSNG Building Solutions" },
      { property: "og:description", content: "Expert construction and renovation services built to last." },
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
