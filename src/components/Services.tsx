import { motion } from "framer-motion";
import { Droplets, Zap, Paintbrush, TreePine, Grid3X3, Monitor } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Plumbing",
    description:
      "Full plumbing installation, repairs, and maintenance for homes and businesses — leaks, pipes, fixtures, and more.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Safe wiring, installations, fault finding, and electrical upgrades handled by qualified professionals.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting with a flawless finish — color consultation, prep work, and cleanup included.",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "Transform outdoor spaces with design, planting, lawns, paving, and garden maintenance that brings your vision to life.",
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    description:
      "Precision floor and wall tiling for bathrooms, kitchens, and living areas — clean lines and lasting quality.",
  },
  {
    icon: Monitor,
    title: "Desktop Support",
    description:
      "Reliable IT helpdesk and desktop support for small businesses — troubleshooting, setup, and ongoing maintenance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Full-service construction
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            From initial concept to final handover, we handle every phase of
            your build with precision and care.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="mb-5 inline-flex rounded-md bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
