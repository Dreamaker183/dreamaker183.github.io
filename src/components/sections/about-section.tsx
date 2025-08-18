import { personalData } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl py-16 md:py-24 border-t"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">My Values</h2>
      </div>
      <div className="mt-8 flex justify-center">
        <ul className="space-y-2">
          {personalData.values.map((value) => (
            <li key={value} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
              <span className="text-muted-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
