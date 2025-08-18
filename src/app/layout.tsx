import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SocialLinks } from "@/components/social-links";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { BoidsCanvas } from "@/components/boids-canvas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aura Portfolio | Your Name - Software Developer",
  description:
    "Personal portfolio of Your Name, a Software Developer and Entrepreneur based in Hong Kong.",
};

const sections = [
  { id: "hero", label: "Hero" },
  { id: "quote", label: "Quote" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BoidsCanvas />
          <ScrollIndicator sections={sections} />
          {children}
          <SocialLinks />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
