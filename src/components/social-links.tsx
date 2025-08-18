import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Briefcase, Mail, User, BookText, Home, GitBranch } from "lucide-react";

const SocialButton = ({
  href,
  "aria-label": ariaLabel,
  icon: Icon,
  label,
}: {
  href: string;
  "aria-label": string;
  icon: React.ElementType;
  label: string;
}) => (
  <div className="group relative flex items-center">
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="hover:bg-transparent transition-transform duration-300 ease-in-out group-hover:scale-125"
    >
      <Link href={href} aria-label={ariaLabel} target={href.startsWith("#") ? "" : "_blank"}>
        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[360deg] group-hover:scale-125" />
      </Link>
    </Button>
    <span className="absolute bottom-full mb-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-card text-card-foreground scale-0 group-hover:scale-100 transition-all origin-bottom duration-300">
      {label}
    </span>
  </div>
);

export function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 p-3 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg">
        <SocialButton href="#hero" aria-label="About Me" icon={User} label="About" />
        <SocialButton href="#experience" aria-label="My Experience" icon={BookText} label="Experience" />
        <SocialButton href="#projects" aria-label="View My Work" icon={Briefcase} label="Projects" />
        <SocialButton href="#contact" aria-label="Contact Me" icon={Mail} label="Contact" />
        
        <div className="h-6 w-px bg-border mx-2" />

        {personalData.socials.map((social) => (
           <SocialButton 
              key={social.name}
              href={social.url}
              aria-label={social.name}
              icon={social.icon}
              label={social.name}
            />
        ))}
        <div className="h-6 w-px bg-border mx-2" />
        <ThemeToggle />
      </div>
    </div>
  );
}
