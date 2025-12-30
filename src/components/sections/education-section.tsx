
import { education } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4">Education</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground text-lg">My academic background.</p>
      </div>
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent -translate-x-1/2"></div>
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              {/* Desktop timeline dot */}
              <div className="hidden md:block md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="md:relative md:flex md:items-start md:gap-12">
                {/* Mobile: Meta on top */}
                <div className="flex md:hidden items-center gap-4 mb-4 ml-10">
                  <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-white border shadow-sm overflow-hidden p-2">
                    <Image
                      src={(edu as any).logoUrl || (edu as any).iconUrl}
                      alt={edu.institution}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{edu.period}</p>
                    <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                </div>

                {/* Desktop: Left side (even index) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="hidden md:flex md:w-1/2 md:items-center md:justify-end gap-6">
                      <p className="font-bold text-lg text-primary order-2">{edu.period}</p>
                      <div className="order-1 relative w-16 h-16 flex-shrink-0 rounded-2xl bg-white border shadow-md overflow-hidden p-2 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={(edu as any).logoUrl || (edu as any).iconUrl}
                          alt={edu.institution}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <Card className="glass-card hover:border-primary/30 ml-10 md:ml-0 overflow-hidden group">
                        <a
                          href={(edu as any).url || '#'}
                          target={(edu as any).url ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`block h-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl ${(edu as any).url ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{edu.institution}</CardTitle>
                            <CardDescription className="md:hidden font-medium">{edu.degree}</CardDescription>
                            <CardDescription className="hidden md:block font-medium">Academic Pursuits</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm md:text-base font-semibold text-primary/80 mb-2">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                              {edu.description || "Pursuing excellence in engineering and technology."}
                            </p>
                          </CardContent>
                        </a>
                      </Card>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Desktop: Right side (odd index) */}
                    <div className="md:w-1/2 md:pr-8">
                      <Card className="glass-card hover:border-primary/30 ml-10 md:ml-0 md:mr-0 overflow-hidden group">
                        <a
                          href={(edu as any).url || '#'}
                          target={(edu as any).url ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className={`block h-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl ${(edu as any).url ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{edu.institution}</CardTitle>
                            <CardDescription className="md:hidden font-medium">{edu.degree}</CardDescription>
                            <CardDescription className="hidden md:block font-medium">Academic Pursuits</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm md:text-base font-semibold text-primary/80 mb-2">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                              {edu.description || "Focusing on core principles of computer science and software development."}
                            </p>
                          </CardContent>
                        </a>
                      </Card>
                    </div>
                    <div className="hidden md:flex md:w-1/2 md:items-center md:justify-start gap-6">
                      <div className="order-1 relative w-16 h-16 flex-shrink-0 rounded-2xl bg-white border shadow-md overflow-hidden p-2 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={(edu as any).logoUrl || (edu as any).iconUrl}
                          alt={edu.institution}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                      <p className="order-2 font-bold text-lg text-primary">{edu.period}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
