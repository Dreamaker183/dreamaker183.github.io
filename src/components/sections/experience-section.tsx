import { workExperience } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Work Experience</h2>
        <p className="text-muted-foreground mt-2">My professional journey so far.</p>
      </div>
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative group">
              <div className="md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group-even:md:flex-row-reverse">
                {/* Timeline Meta Info */}
                <div className="flex items-center gap-4 md:w-1/2 md:group-odd:justify-end md:group-even:justify-start">
                   <p className="font-semibold text-muted-foreground order-2 md:order-none">{job.period}</p>
                   <div className="order-1 md:order-none relative w-12 h-12 flex-shrink-0 rounded-full bg-white border overflow-hidden">
                     <Image
                       src={(job as any).logoUrl || (job as any).iconUrl}
                       alt={job.company}
                       fill
                       sizes="48px"
                       className="object-contain p-1"
                     />
                   </div>
                </div>

                {/* Card */}
                <div className="md:w-1/2">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ml-16 md:ml-0">
                    <a
                      href={(job as any).url || '#'}
                      target={(job as any).url ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg ${(job as any).url ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <CardHeader>
                          <CardTitle className="font-headline">{job.role}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                      </CardContent>
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
