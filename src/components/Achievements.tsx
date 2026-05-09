import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 border-t border-[var(--color-border)] py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Highlights so far"
          description="A quick snapshot of progress and outcomes."
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {site.achievements.map((item, i) => (
            <motion.article
              key={`${item.title}-${item.context}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="saas-card h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {item.context}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

