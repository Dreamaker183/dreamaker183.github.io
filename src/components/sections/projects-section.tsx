
import { projects } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";
import { ExternalLink, Rocket } from "lucide-react";

export function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="w-full max-w-5xl mx-auto py-16 md:py-24 border-t"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4">Featured Projects</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground text-lg">
          A showcase of my recent engineering work and creative endeavors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="glass-card group flex flex-col h-full overflow-hidden hover:border-primary/40"
          >
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex items-start justify-between mb-4">
                <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Rocket className="w-5 h-5 text-primary/40 group-hover:text-primary transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-1" />
              </div>

              <CardDescription className="text-sm md:text-base leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                {project.description}
              </CardDescription>

              <div className="space-y-4 mb-8">
                {('assignedBy' in project) && (
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary/80">
                    <span className="relative block w-5 h-5 rounded-full overflow-hidden border border-primary/20 bg-white">
                      <img src={(project as any).assignedLogoUrl} alt="" className="absolute inset-0 w-full h-full object-contain p-0.5" />
                    </span>
                    <span>{(project as any).assignedBy}</span>
                  </div>
                )}
                {('schoolBy' in project) && (
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-xs font-semibold text-accent/80">
                    <span className="relative block w-5 h-5 rounded-full overflow-hidden border border-accent/20 bg-white">
                      <img src={(project as any).schoolLogoUrl} alt="" className="absolute inset-0 w-full h-full object-contain p-0.5" />
                    </span>
                    <span>{(project as any).schoolBy}</span>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary/50 text-muted-foreground font-medium rounded-md px-2.5 py-0.5 border border-border/50 group-hover:border-primary/20 group-hover:text-primary/80 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                {('comingSoon' in project && (project as any).comingSoon) ? (
                  <div className="w-full py-2.5 text-center rounded-xl bg-muted/30 border border-dashed border-border text-sm font-medium text-muted-foreground">
                    Coming soon to GitHub...
                  </div>
                ) : (
                  project.links.map((link: any) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      size="lg"
                      className="flex-1 rounded-xl glass-card border-primary/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group"
                      asChild
                    >
                      <Link href={link.url} target="_blank">
                        {link.iconUrl ? (
                          <img src={link.iconUrl} alt="" className="mr-2.5 h-4 w-4 filter grayscale group-hover:grayscale-0 group-hover:brightness-200 transition-all" />
                        ) : (
                          <link.icon className="mr-2.5 h-4 w-4" />
                        )}
                        <span className="font-semibold">{link.name}</span>
                        <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  ))
                )}
              </div>
            </div>
            {/* Background Decorative Gradient */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
