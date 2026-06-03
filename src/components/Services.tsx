import { motion } from "framer-motion";
import { Droplets, Zap, Wrench, CloudRain } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Solutions",
    description:
      "Leak detection & repairs, burst pipes, drain unblocking, pipe installations, tap & toilet repairs, geyser installations and repairs, bathroom & kitchen plumbing, water pressure solutions, and general plumbing maintenance.",
  },
  {
    icon: CloudRain,
    title: "Water Solutions",
    description:
      "JoJo tank installations, water tank connections, water pumps, borehole connections, rainwater harvesting systems, water filtration systems, and water storage solutions.",
  },
  {
    icon: Zap,
    title: "Electrical Solutions",
    description:
      "Electrical installations & repairs, house wiring and rewiring, fault finding, DB board upgrades, DB board installations and repairs, sub-meter & prepaid meter installations, lighting, plug & switch installations, and electrical maintenance.",
  },
  {
    icon: Droplets,
    title: "Building Maintenance",
    description:
      "Painting, tiling, bricklaying, paving, ceiling installations and repairs, waterproofing, roof repairs, plastering, renovations, and general property maintenance.",
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
            Plumbing, water, electrical & maintenance
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            From leak repairs and JoJo tank installations to DB upgrades, tiling, and bricklaying — one trusted team for every job on your property.
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
