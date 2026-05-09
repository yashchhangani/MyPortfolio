import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const projects = site.projects;

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped work & experiments"
          description="Lead with outcomes; link live demos and sources when you can."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const imagePosition = "imagePosition" in project ? project.imagePosition : "center";
            const imageContain = "imageContain" in project ? project.imageContain : false;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="saas-card group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[16/9.6] overflow-hidden bg-[var(--color-accent-soft)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      style={{ objectPosition: imagePosition }}
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.06] ${
                        imageContain ? "object-contain" : "object-cover"
                      }`}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-start justify-end p-8">
                      <Sparkles className="mb-4 h-8 w-8 text-[var(--color-accent)] opacity-80" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                        Project
                      </span>
                    </div>
                  )}
                  <div className="absolute right-4 top-4 flex gap-2">
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 items-center gap-1 rounded-full bg-[var(--color-background)]/90 px-3 text-xs font-medium text-[var(--color-foreground)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-white"
                      >
                        Live <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {project.links.repo ? (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 items-center gap-1 rounded-full bg-[var(--color-background)]/90 px-3 text-xs font-medium text-[var(--color-foreground)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                      >
                        Code <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{project.title}</h3>
                  <p className="mt-3 flex-1 text-[var(--color-muted)]">{project.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
