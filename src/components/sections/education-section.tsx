import { education } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function EducationSection() {
  return (
    <section id="education" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground mt-2">My academic background.</p>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index}>
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
          </Card>
        ))}
      </div>
    </section>
  );
}
