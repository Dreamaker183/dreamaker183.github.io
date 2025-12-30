"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AnimatedSection } from "../animated-section";
import { Send, Mail, MapPin, User } from "lucide-react";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="w-full max-w-5xl mx-auto py-16 md:py-24 border-t">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline tracking-tight mb-4">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out. I'm always open to new opportunities!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-6 rounded-2xl border-primary/10 flex items-start gap-4 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Email Me</h4>
              <p className="text-muted-foreground font-medium">anson20038@gmail.com</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border-primary/10 flex items-start gap-4 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Location</h4>
              <p className="text-muted-foreground font-medium">Hong Kong SAR</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            className="glass-card p-8 rounded-3xl border-primary/10 space-y-6 shadow-2xl shadow-primary/5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = (data.get("name") as string) || "";
              const email = (data.get("email") as string) || "";
              const message = (data.get("message") as string) || "";
              const subject = `Portfolio inquiry from ${name}`;
              const body = `From: ${name} <${email}>\n\n${message}`;
              const mailto = `mailto:anson20038@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.location.href = mailto;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                  <User className="w-3.5 h-3.5" /> Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground ml-1">Message</label>
              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20 group hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
