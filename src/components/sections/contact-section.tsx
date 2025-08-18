import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AnimatedSection } from "../animated-section";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
        <p className="text-muted-foreground mt-2">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>
      <form className="max-w-xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
        </div>
        <Textarea placeholder="Message" rows={5} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </AnimatedSection>
  );
}
