import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="w-full max-w-6xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground mt-2">
          A selection of my recent work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                {project.links.map((link) => (
                  <Button key={link.name} variant="outline" size="sm" asChild>
                    <Link href={link.url} target="_blank">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
