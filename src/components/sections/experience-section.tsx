
import { workExperience } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4">Work Experience</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground text-lg">My professional journey so far.</p>
      </div>
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent -translate-x-1/2"></div>
        <div className="space-y-16">
          {workExperience.map((job, index) => (
            <div key={index} className="relative group">
              {/* Desktop timeline dot */}
              <div className="hidden md:block md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="md:relative md:flex md:items-start md:gap-12 group-even:md:flex-row-reverse">
                {/* Mobile: Meta on top */}
                <div className="flex md:hidden items-center gap-4 mb-4 ml-10">
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-white border shadow-sm overflow-hidden p-2">
                    <Image
                      src={(job as any).logoUrl || (job as any).iconUrl}
                      alt={job.company}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{job.period}</p>
                    <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                  </div>
                </div>

                {/* Desktop: Meta aligned with timeline */}
                <div className="hidden md:flex md:w-1/2 md:items-center md:group-odd:justify-end md:group-even:justify-start gap-6">
                  <p className="font-bold text-lg text-primary order-2 md:group-odd:order-2 md:group-even:order-1">{job.period}</p>
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-2xl bg-white border shadow-md overflow-hidden p-2 order-1 md:group-odd:order-1 md:group-even:order-2 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={(job as any).logoUrl || (job as any).iconUrl}
                      alt={job.company}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <Card className="glass-card hover:border-primary/30 ml-10 md:ml-0 overflow-hidden group">
                    <a
                      href={(job as any).url || '#'}
                      target={(job as any).url ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`block h-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl ${(job as any).url ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{job.role}</CardTitle>
                        <CardDescription className="md:hidden font-medium">{job.company}</CardDescription>
                        <CardDescription className="hidden md:block font-medium">Professional Experience</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                          {job.description}
                        </p>
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
