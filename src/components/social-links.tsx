import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Briefcase, Mail } from "lucide-react";

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
  <Button variant="ghost" size="icon" asChild className="group relative">
    <Link href={href} aria-label={ariaLabel}>
      <Icon className="h-5 w-5" />
      <span className="absolute bottom-full mb-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-card text-card-foreground scale-0 group-hover:scale-100 transition-transform origin-bottom duration-300">
        {label}
      </span>
    </Link>
  </Button>
);

export function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-sm border shadow-md">
        <SocialButton href="#projects" aria-label="View My Work" icon={Briefcase} label="Work" />
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
