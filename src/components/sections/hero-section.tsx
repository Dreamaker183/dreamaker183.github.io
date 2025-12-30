import Image from "next/image";
import { personalData } from "@/lib/data";
import { MapPin, GraduationCap } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function HeroSection() {
  return (
    <AnimatedSection
      id="hero"
      className="w-full max-w-4xl flex flex-col items-center text-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="flex flex-col items-center text-center z-10 -mt-20">
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl animate-float">
            <Image
              src={personalData.profilePicture}
              alt={personalData.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint="profile picture"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
          {personalData.name}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-primary mb-6 tracking-tight">
          {personalData.title}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 text-muted-foreground mb-10 text-sm md:text-base font-medium">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/50 transition-colors">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>City University of Hong Kong</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/50 transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{personalData.location}</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
          {personalData.about}
        </p>

        <figure className="max-w-2xl px-6 py-8 border-y border-border/50 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
             <span className="text-4xl text-primary/40 font-serif">“</span>
          </div>
          <blockquote className="font-quote text-2xl md:text-4xl leading-tight tracking-tight italic bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent font-semibold">
            All our dreams can come true, if we have the courage to pursue them.
          </blockquote>
          <figcaption className="mt-6 text-sm md:text-base text-muted-foreground font-medium flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-border"></span>
            Walt Disney
            <span className="w-8 h-[1px] bg-border"></span>
          </figcaption>
        </figure>
      </div>
    </AnimatedSection>
  );
}
