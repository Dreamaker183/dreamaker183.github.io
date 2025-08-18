import { AnimatedSection } from "../animated-section";
import { Separator } from "../ui/separator";

export function QuoteSection() {
  return (
    <AnimatedSection
      id="quote"
      className="w-full"
    >
      <div className="w-full max-w-4xl mx-auto py-24 md:py-32 px-4 text-center">
        <Separator className="mb-12" />
        <div className="relative">
          <blockquote className="font-headline text-3xl md:text-5xl lg:text-6xl text-foreground italic leading-tight md:leading-tight lg:leading-tight">
            &quot;All our dreams can come true, if we have the courage to pursue
            them.&quot;
          </blockquote>
          <cite className="block text-right mt-8 text-lg text-muted-foreground font-body not-italic">
            - Walt Disney
          </cite>
        </div>
      </div>
    </AnimatedSection>
  );
}
