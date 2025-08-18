import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Briefcase, Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 group">
      <div className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-sm border shadow-md transition-all duration-300 ease-in-out hover:px-4">
        <Button
            variant="ghost"
            size="sm"
            className="hidden group-hover:inline-flex"
            asChild
          >
            <Link href="#projects" aria-label="View My Work">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="text-sm">Work</span>
            </Link>
          </Button>
         <Button
            variant="ghost"
            size="sm"
            className="hidden group-hover:inline-flex"
            asChild
          >
            <Link href="#contact" aria-label="Contact Me">
              <Mail className="h-4 w-4 mr-2" />
               <span className="text-sm">Contact</span>
            </Link>
          </Button>

        <div className="h-6 w-px bg-border mx-2 hidden group-hover:block" />

        {personalData.socials.map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            className="transition-all duration-300 ease-in-out"
            asChild
          >
            <Link href={social.url} target="_blank" aria-label={social.name}>
              <social.icon className="h-5 w-5" />
            </Link>
          </Button>
        ))}
        <div className="h-6 w-px bg-border mx-2" />
        <ThemeToggle />
      </div>
    </div>
  );
}
