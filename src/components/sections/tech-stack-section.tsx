import { skills } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AnimatedSection } from "../animated-section";

const SkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
  <li className="flex flex-col items-center text-center gap-2">
    {(skill as any).url ? (
      <a
        href={(skill as any).url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-24 h-24 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        aria-label={skill.name}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-12 h-12 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </a>
    ) : (
      <div className="group flex items-center justify-center w-24 h-24 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-12 h-12 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    )}
    <p className="text-sm font-medium w-24 truncate">{skill.name}</p>
  </li>
);

export function TechStackSection() {
  const midPoint = Math.ceil(skills.length / 2);
  const firstRowSkills = skills.slice(0, midPoint);
  const secondRowSkills = skills.slice(midPoint);

  return (
    <AnimatedSection
      id="tech-stack"
      className="w-full max-w-4xl mx-auto py-16 md:py-24 border-t"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">My Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Technologies I love to work with.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll [animation-direction:reverse]">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
           <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll [animation-direction:reverse]" aria-hidden="true">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
