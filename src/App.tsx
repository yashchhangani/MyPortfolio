import { ThemeProvider } from "@/theme/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSiteMeta } from "@/hooks/useSiteMeta";

function App() {
  useSiteMeta();

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-accent-soft),transparent)]"
          aria-hidden
        />
        <div
          className="glow-orb glow-orb-soft pointer-events-none fixed -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl"
          aria-hidden
        />
        <div
          className="glow-orb pointer-events-none fixed -right-24 top-48 -z-10 h-80 w-80 rounded-full bg-[var(--color-accent-soft)]/70 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] [background-size:52px_52px]"
          aria-hidden
        />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
