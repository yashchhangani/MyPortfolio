import { useEffect } from "react";
import { site } from "@/data/site";

export function useSiteMeta() {
  useEffect(() => {
    document.title = site.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", site.meta.description);
    const theme = document.querySelector('meta[name="theme-color"]');
    const isDark = document.documentElement.classList.contains("dark");
    if (theme)
      theme.setAttribute(
        "content",
        isDark ? "oklch(0.14 0.02 265)" : "oklch(0.985 0.002 247)",
      );
  }, []);
}
