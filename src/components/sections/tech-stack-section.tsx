import { skills } from "@/lib/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">My Tech Stack</h2>
        <p className="text-muted-foreground mt-2">Technologies I love to work with.</p>
      </div>
      <TooltipProvider>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer">
                  <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-xs text-center text-muted-foreground hidden sm:block">{skill.name}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
