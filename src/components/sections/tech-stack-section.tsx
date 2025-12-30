"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { AnimatedSection } from "../animated-section";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const SkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
  <li className="flex flex-col items-center text-center gap-3 group">
    {(skill as any).url ? (
      <a
        href={(skill as any).url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card flex items-center justify-center w-20 h-20 md:w-28 md:h-28 p-4 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        aria-label={skill.name}
      >
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-10 h-10 md:w-14 md:h-14 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </a>
    ) : (
      <div className="glass-card flex items-center justify-center w-20 h-20 md:w-28 md:h-28 p-4 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all duration-500">
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-10 h-10 md:w-14 md:h-14 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    )}
    <p className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 w-24 truncate">{skill.name}</p>
  </li>
);

export function TechStackSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const midPoint = Math.ceil(skills.length / 2);
  const firstRowSkills = skills.slice(0, midPoint);
  const secondRowSkills = skills.slice(midPoint);

  return (
    <AnimatedSection
      id="tech-stack"
      className="w-full max-w-5xl mx-auto py-16 md:py-24 border-t"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4">My Tech Stack</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Desktop: Scrolling Animation */}
      <div className={`hidden md:flex flex-col gap-12 transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll" aria-hidden="true">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll [animation-direction:reverse]">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll [animation-direction:reverse]" aria-hidden="true">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: Detailed View Toggle */}
      <div className="md:hidden space-y-8">
        {(() => {
          const skillsByCategory = skills.reduce((acc, skill) => {
            const category = (skill as any).category || "Other";
            if (!acc[category]) acc[category] = [];
            acc[category].push(skill);
            return acc;
          }, {} as Record<string, any[]>);

          return Object.keys(skillsByCategory).map((category) => (
            <div key={category} className="glass-card rounded-3xl p-6 border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-primary rounded-full"></div>
                <h3 className="text-xl font-headline font-bold text-foreground">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillsByCategory[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-background/50 border border-border/50 rounded-2xl p-4 transition-all duration-300 hover:border-primary/40"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <p className="font-bold text-xs text-center text-muted-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ));
        })()}
      </div>

      {/* Expand Button - Desktop Only */}
      <div className="hidden md:block text-center mt-12">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          size="lg"
          className="rounded-full px-8 py-6 text-lg border-primary/20 hover:border-primary/50 hover:bg-primary/5 group"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              Standard View
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Detailed View
            </>
          )}
        </Button>
      </div>

      {/* Expanded Table View */}
      <div className={`transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100 mt-12' : 'opacity-0 h-0 overflow-hidden'}`}>
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(() => {
              const skillsByCategory = skills.reduce((acc, skill) => {
                const category = (skill as any).category || "Other";
                if (!acc[category]) acc[category] = [];
                acc[category].push(skill);
                return acc;
              }, {} as Record<string, any[]>);

              return Object.keys(skillsByCategory).map((category) => (
                <div key={category} className="glass-card rounded-3xl p-8 border-primary/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                    <h3 className="text-2xl font-headline font-bold text-foreground">
                      {category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {skillsByCategory[category].map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col items-center gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="relative w-16 h-16 p-2 bg-background/50 rounded-xl border border-border/50 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                          <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <p className="font-bold text-sm text-center text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        )}
      </div>

    </AnimatedSection>
  );
}
