import { personalData } from "@/lib/data";
import { SuggestedContent } from "../suggested-content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl py-16 md:py-24 border-t"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2">
          <p className="text-muted-foreground leading-relaxed">
            {personalData.about}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">My Values</h3>
          <ul className="space-y-2">
            {personalData.values.map((value) => (
              <li key={value} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SuggestedContent aboutMe={personalData.about} />
    </section>
  );
}
