import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { useTheme } from "@/theme/useTheme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/72 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a
          href="#top"
          className="font-semibold tracking-tight text-[var(--color-foreground)]"
          onClick={() => setOpen(false)}
        >
          {site.person.name.split(" ")[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {site.person.resumeUrl ? (
            <a
              href={site.person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="saas-card hidden h-10 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 text-sm font-medium text-[var(--color-foreground)] shadow-[var(--shadow-soft)] sm:flex"
            >
              Resume
            </a>
          ) : null}

          <button
            type="button"
            onClick={toggle}
            className="saas-card flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] shadow-[var(--shadow-soft)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="saas-card flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-[var(--color-foreground)] hover:bg-[var(--color-accent-soft)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}

