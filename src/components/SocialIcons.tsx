import { Github, Linkedin, Mail } from "lucide-react";
import type { SiteData } from "@/data/site";

type IconKey = SiteData["social"][number]["icon"];

const map: Record<IconKey, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialIcon({ icon, className }: { icon: IconKey; className?: string }) {
  const Cmp = map[icon];
  return <Cmp className={className} aria-hidden />;
}
