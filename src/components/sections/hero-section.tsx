import Image from "next/image";
import { personalData } from "@/lib/data";
import { MapPin, GraduationCap } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function HeroSection() {
  return (
    <AnimatedSection
      id="hero"
      className="w-full max-w-4xl flex flex-col items-center text-center py-20 md:py-32"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
        <Image
          src={personalData.profilePicture}
          alt={personalData.name}
          fill
          className="rounded-full object-cover shadow-lg"
          data-ai-hint="profile picture"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-3">
        {personalData.name}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl">
        {personalData.title}
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{personalData.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span>City University of Hong Kong</span>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        {personalData.about}
      </p>
      <div className="mt-8 border-l-4 border-primary pl-4 italic text-left">
        <blockquote className="font-headline text-lg text-foreground">
          &quot;All our dreams can come true, if we have the courage to pursue them.&quot;
        </blockquote>
        <cite className="block text-right mt-2 text-muted-foreground">- Walt Disney</cite>
      </div>
    </AnimatedSection>
  );
}
