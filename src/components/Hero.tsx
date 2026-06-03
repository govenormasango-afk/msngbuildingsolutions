import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern construction project"
          className="h-full w-full object-cover"
          width={1536}
          height={864}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-0 md:pt-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Building Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl"
          >
            Built with
            <br />
            precision.
            <br />
            Made to last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/80 md:text-lg"
          >
            Plumbing, electrical, painting, landscaping, tiling, and IT support
            — all under one roof. Reliable trades and tech services for your
            home and business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 p-1"
        >
          <div className="h-2 w-full rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
