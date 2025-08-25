import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SocialLinks } from "@/components/social-links";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { BoidsCanvas } from "@/components/boids-canvas";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Anson Portfolio",
  description:
    "Personal portfolio of Your Name, a Software Developer and Entrepreneur based in Hong Kong.",
};

const sections = [
  { id: "hero", label: "Hero" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "quote", label: "Quote" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BoidsCanvas />
          <Header />
          <ScrollIndicator sections={sections} />
          {children}
          <SocialLinks />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
