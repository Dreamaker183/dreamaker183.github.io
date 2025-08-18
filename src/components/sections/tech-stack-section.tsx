import { skills } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AnimatedSection } from "../animated-section";

export function TechStackSection() {
  return (
    <AnimatedSection
      id="tech-stack"
      className="w-full py-16 md:py-24 border-t"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">My Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Technologies I love to work with.
        </p>
      </div>
      <TooltipProvider>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {skills.map((skill) => (
              <li key={skill.name}>
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
            ))}
          </ul>
           <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {skills.map((skill) => (
              <li key={skill.name}>
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
            ))}
          </ul>
        </div>
      </TooltipProvider>
    </AnimatedSection>
  );
}
