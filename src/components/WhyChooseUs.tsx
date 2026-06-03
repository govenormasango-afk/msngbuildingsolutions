import { motion } from "framer-motion";
import { Shield, Wrench, DollarSign, Eye, Home, Building2, HardHat } from "lucide-react";

const reasons = [
  { icon: Shield, text: "Reliable and Professional Service" },
  { icon: Wrench, text: "Quality Workmanship" },
  { icon: DollarSign, text: "Fair and Competitive Pricing" },
  { icon: Eye, text: "Attention to Detail" },
  { icon: Home, text: "Plumbing, Water, Electrical & Building Solutions" },
  { icon: Building2, text: "Residential, Commercial & Industrial Services" },
  { icon: HardHat, text: "Committed to Delivering Practical and Lasting Solutions" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose MSNG Building Solutions?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            MSNG Building Solutions was built on hard work, determination, and a commitment
            to delivering reliable solutions. We understand that every project matters,
            whether it's a home, business, school, farm, or industrial facility.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We take pride in providing quality workmanship, honest communication, and
            dependable service. As a growing company, we value every client and work hard
            to build long-term relationships based on trust, professionalism, and results.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="inline-flex shrink-0 rounded-md bg-accent/10 p-2.5 text-accent">
                <reason.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-card-foreground">
                {reason.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
