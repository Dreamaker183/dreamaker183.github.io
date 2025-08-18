import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";

export function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="w-full max-w-4xl py-16 md:py-24 border-t"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Projects</h2>
        <p className="text-muted-foreground mt-2">
          A selection of my recent work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="group overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
          >
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
              <CardDescription className="line-clamp-3 flex-grow">
                {project.description}
              </CardDescription>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                {project.links.map((link) => (
                  <Button key={link.name} variant="outline" size="sm" asChild>
                    <Link href={link.url} target="_blank">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
