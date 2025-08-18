import { AnimatedSection } from "../animated-section";

export function QuoteSection() {
  return (
    <AnimatedSection
      id="quote"
      className="w-full max-w-4xl py-16 md:py-24 text-center"
    >
      <div className="border-l-4 border-primary pl-4 italic">
        <blockquote className="font-headline text-2xl md:text-3xl text-foreground">
          &quot;All our dreams can come true, if we have the courage to pursue
          them.&quot;
        </blockquote>
        <cite className="block text-right mt-4 text-muted-foreground">
          - Walt Disney
        </cite>
      </div>
    </AnimatedSection>
  );
}
