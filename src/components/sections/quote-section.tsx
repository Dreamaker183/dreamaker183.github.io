import { Quote } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function QuoteSection() {
  return (
    <AnimatedSection
      id="quote"
      className="w-full max-w-4xl py-16 md:py-24 text-center"
    >
      <div className="relative">
        <Quote className="absolute -top-8 -left-8 w-16 h-16 text-primary/10" />
        <blockquote className="font-headline text-2xl md:text-4xl text-foreground italic">
          &quot;All our dreams can come true, if we have the courage to pursue
          them.&quot;
        </blockquote>
        <cite className="block text-right mt-6 text-muted-foreground font-body not-italic">
          - Walt Disney
        </cite>
        <Quote className="absolute -bottom-8 -right-8 w-16 h-16 text-primary/10" />
      </div>
    </AnimatedSection>
  );
}
