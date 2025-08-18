import { Quote } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function QuoteSection() {
  return (
    <AnimatedSection
      id="quote"
      className="w-full bg-secondary"
    >
      <div className="w-full max-w-4xl mx-auto py-24 md:py-32 px-4 text-center">
        <div className="relative">
          <Quote className="absolute -top-12 -left-4 md:-left-8 w-20 h-20 md:w-24 md:h-24 text-primary/10" />
          <blockquote className="font-headline text-3xl md:text-5xl lg:text-6xl text-foreground italic leading-tight md:leading-tight lg:leading-tight">
            &quot;All our dreams can come true, if we have the courage to pursue
            them.&quot;
          </blockquote>
          <cite className="block text-right mt-8 text-lg text-muted-foreground font-body not-italic">
            - Walt Disney
          </cite>
          <Quote className="absolute -bottom-12 -right-4 md:-right-8 w-20 h-20 md:w-24 md:h-24 text-primary/10" />
        </div>
      </div>
    </AnimatedSection>
  );
}
