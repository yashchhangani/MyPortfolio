import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const mailto = `mailto:${site.person.email}`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-[var(--color-border)] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title={site.contact.headline} description={site.contact.subtext} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="saas-card mx-auto max-w-xl rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-soft)] sm:p-10"
        >
          <div className="text-center">
            <p className="text-[var(--color-muted)]">
              Prefer email? Reach me directly - I read everything.
            </p>
            <a
              href={mailto}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {site.person.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

