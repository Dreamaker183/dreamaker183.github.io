import { education } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground mt-2">My academic background.</p>
      </div>
      <div className="relative pl-16">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-card border">
                {/* Placeholder for icon */}
              </div>
              <div className="absolute left-6 top-6 -translate-x-[55%] -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ml-12">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.institution}</CardTitle>
                      <CardDescription>{edu.degree}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground text-right whitespace-nowrap">
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
