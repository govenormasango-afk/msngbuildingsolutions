import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "240+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Industry Awards" },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Craftsmanship meets reliability
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                MSNG Building Solutions was founded on a simple belief: every
                structure should be built to stand the test of time. Over the
                past 15 years, we've grown from a small family operation into a
                trusted name across residential and commercial construction.
              </p>
              <p>
                Our team of certified builders, project managers, and trades
                specialists brings decades of combined experience to every
                project — whether it's a bespoke home, a commercial fit-out,
                or a complex renovation.
              </p>
              <p>
                We don't cut corners. We don't miss deadlines. And we never
                compromise on the quality that our clients expect and deserve.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
