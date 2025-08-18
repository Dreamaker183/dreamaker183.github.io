import { skills } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AnimatedSection } from "../animated-section";

const SkillIcon = ({ skill }: { skill: (typeof skills)[0] }) => (
  <li>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer">
          <skill.icon className="w-10 h-10 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{skill.name}</p>
      </TooltipContent>
    </Tooltip>
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
        <h2 className="text-3xl font-bold tracking-tight">My Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Technologies I love to work with.
        </p>
      </div>
      <TooltipProvider>
        <div className="flex flex-col gap-4">
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
              {firstRowSkills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
              {firstRowSkills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
            style={{ animationDirection: 'reverse' }}
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
              {secondRowSkills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
              {secondRowSkills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </TooltipProvider>
    </AnimatedSection>
  );
}
