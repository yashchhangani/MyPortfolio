import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-pretty text-[var(--color-muted)]">{description}</div>
      ) : null}
    </div>
  );
}
