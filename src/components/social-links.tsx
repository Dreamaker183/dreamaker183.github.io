import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

export function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-2">
        {personalData.socials.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            className="group transition-all duration-300 ease-in-out hover:w-32"
            asChild
          >
            <Link href={social.url} target="_blank" aria-label={social.name}>
              <social.icon className="h-5 w-5" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
