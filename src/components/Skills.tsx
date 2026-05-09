import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for most often"
          description="Grouped for recruiters and collaborators â€” edit groups in site config."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {site.skills.groups.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="saas-card flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-sm text-[var(--color-foreground)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

