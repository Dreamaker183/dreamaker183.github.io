import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-sm border shadow-md">
        {personalData.socials.map((social) => (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            className="group transition-all duration-300 ease-in-out"
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
