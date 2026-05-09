import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "@/theme/context";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const apply = useCallback((t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark");
    localStorage.setItem(STORAGE_KEY, t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute(
        "content",
        t === "dark" ? "oklch(0.14 0.02 265)" : "oklch(0.985 0.002 247)",
      );
  }, []);

  useEffect(() => {
    apply(theme);
  }, [theme, apply]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(() => ({ theme, toggle, setTheme }), [theme, toggle, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
