import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-[var(--color-border)] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="A little about how I work"
          description="Modern portfolios tell a story â€” not just a list of buzzwords. Swap these paragraphs for yours."
        />

        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {site.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6"
          >
            {site.about.stats.map((s) => (
              <li
                key={s.label}
                className="saas-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-5 shadow-[var(--shadow-soft)]"
              >
                <p className="font-mono text-3xl font-semibold text-[var(--color-foreground)]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

