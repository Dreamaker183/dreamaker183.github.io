import Image from "next/image";
import { personalData } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full max-w-4xl flex flex-col items-center text-center py-20 md:py-32"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
        <Image
          src={personalData.profilePicture}
          alt={personalData.name}
          layout="fill"
          className="rounded-full object-cover shadow-lg"
          data-ai-hint="profile picture"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-3">
        {personalData.name}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
        {personalData.title}
      </p>
      <div className="flex items-center gap-2 text-muted-foreground mb-8">
        <MapPin className="h-4 w-4" />
        <span>{personalData.location}</span>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
