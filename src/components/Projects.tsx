import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "The Henderson Residence",
    category: "Residential Renovation",
    location: "Melbourne, VIC",
  },
  {
    image: project2,
    title: "Civic Office Tower",
    category: "Commercial Construction",
    location: "Sydney, NSW",
  },
  {
    image: project3,
    title: "The Banksia Kitchen",
    category: "Interior Remodel",
    location: "Brisbane, QLD",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Selected projects
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              A glimpse of our recent work across residential and commercial
              builds.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group overflow-hidden rounded-lg bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1024}
                  height={768}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
