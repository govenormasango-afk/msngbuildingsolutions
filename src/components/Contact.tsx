import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Embalelenhe, Mpumalanga",
    },
    { icon: Phone, label: "Phone", value: "082 384 8653" },
    { icon: Mail, label: "Email", value: "msngbuilding@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon–Fri, 7:00 AM – 5:00 PM" },
  ];

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl">
            Let's get it sorted
          </h2>
          <p className="mt-4 max-w-xl text-base text-primary-foreground/70">
            Tell us what you need. We'll respond within 24 hours with a
            free estimate and timeline.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-lg bg-accent/20 p-8 text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-accent-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-primary-foreground/70">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="082 000 0000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Service Type
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a service</option>
                      <option value="plumbing">Plumbing & Leak Repairs</option>
                      <option value="water">Water (JoJo Tanks & Pumps)</option>
                      <option value="electrical">Electrical / DB Upgrades</option>
                      <option value="sub-meter">Sub-Meter Installation</option>
                      <option value="painting">Painting</option>
                      <option value="tiling">Tiling</option>
                      <option value="bricklaying">Bricklaying</option>
                      <option value="maintenance">General Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground/60">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sm text-primary-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-primary-foreground/10 pt-6">
              <div className="text-sm font-medium text-primary-foreground/60">
                Follow us
              </div>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7464949571266248705"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/SasolSA/status/2059183901138903261?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/v/1E6M9EkXhM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
