import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-12 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-[var(--color-foreground)]">{site.person.name}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{site.person.role}</p>
          <p className="mt-4 text-xs text-[var(--color-muted)]">
            Â© {year} {site.person.name.split(" ")[0]}. Built with React & Vite.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3" aria-label="Social">
          {site.social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="saas-card flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)]"
                aria-label={s.label}
              >
                <SocialIcon icon={s.icon} className="h-[17px] w-[17px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

