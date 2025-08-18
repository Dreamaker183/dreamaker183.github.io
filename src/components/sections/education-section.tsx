import { education } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Education</h2>
        <p className="text-muted-foreground mt-2">My academic background.</p>
      </div>
      <div className="relative pl-2">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute left-8 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
              <div className="absolute -left-px top-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border overflow-hidden">
                <div className="relative w-10 h-10">
                  <Image
                    src={(edu as any).logoUrl || (edu as any).iconUrl}
                    alt={edu.institution}
                    fill
                    sizes="40px"
                    className="object-contain opacity-90"
                    priority={false}
                  />
                </div>
              </div>
              {(edu as any).url ? (
                <a
                  href={(edu as any).url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg"
                >
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline">{edu.institution}</CardTitle>
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
                </a>
              ) : (
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ml-16">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline">{edu.institution}</CardTitle>
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
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
