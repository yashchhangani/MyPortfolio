import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:pt-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5 font-mono text-xs text-[var(--color-muted)] shadow-[var(--shadow-soft)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          Open to opportunities · {site.person.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl"
        >
          {site.person.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="mt-4 text-lg text-[var(--color-accent)] sm:text-xl"
        >
          {site.person.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-muted)]"
        >
          {site.person.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:brightness-110"
          >
            Start a conversation
            <ArrowDownRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-3 text-sm font-medium text-[var(--color-foreground)] shadow-[var(--shadow-soft)] transition hover:border-[var(--color-accent)]"
          >
            View selected work
          </a>
          {site.person.resumeUrl ? (
            <a
              href={site.person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
            >
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </a>
          ) : null}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
          aria-label="Social links"
        >
          {site.social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] shadow-[var(--shadow-soft)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                aria-label={s.label}
              >
                <SocialIcon icon={s.icon} className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
