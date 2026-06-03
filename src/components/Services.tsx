import { motion } from "framer-motion";
import { Droplets, Zap, Wrench, CloudRain } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description:
      "Leak detection and repairs, pipe installation, fixture fitting, and full plumbing maintenance for homes and businesses.",
  },
  {
    icon: CloudRain,
    title: "Water Solutions",
    description:
      "JoJo tank supply and installation, water pump systems, and reliable water storage and pressure solutions for any property.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Certified wiring, DB board upgrades, sub-meter installations, fault finding, and safe electrical work for homes and businesses.",
  },
  {
    icon: Droplets,
    title: "Building Maintenance",
    description:
      "Painting, tiling, bricklaying, and general property maintenance — keeping your building looking sharp and structurally sound.",
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
