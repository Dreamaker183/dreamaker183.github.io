import { workExperience } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        <p className="text-muted-foreground mt-2">My professional journey so far.</p>
      </div>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-3"></div>
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground text-right whitespace-nowrap">
                      {job.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
