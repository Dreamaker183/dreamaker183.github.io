## Aura Portfolio

Elegant, responsive personal portfolio built with Next.js 15 (App Router), Tailwind CSS, and shadcn/ui. Includes dark mode, subtle animations, and an optional AI assistant powered by Genkit + Google AI to suggest new portfolio content based on your interests.

### Key Features

- **Hero section**: Name, title, location, education highlight, and profile photo
- **Experience & Education**: Clean timeline-style presentation
- **Tech stack**: Iconic skill grid using custom SVG icons
- **Projects**: Taggable project cards with links
- **Contact**: Simple call-to-action section
- **Dark mode**: Theme toggle with `next-themes`
- **Delightful UI**: Boids background, scroll progress indicator, shadcn/ui components
- **AI suggestions (optional)**: Genkit flow to generate suggested portfolio content from your About Me

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, tailwindcss-animate
- **UI**: shadcn/ui (Radix primitives), lucide-react
- **State/Utils**: Zustand, clsx, class-variance-authority, date-fns
- **AI (optional)**: Genkit with `@genkit-ai/googleai`
- **Deployment**: Firebase App Hosting (optional)

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm 9+

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
# App runs on http://localhost:9002
```

### Build and start

```bash
npm run build
npm run start
```

## Configuration

### Personal content

Edit the content in:

- `src/lib/data.ts`: profile, socials, skills, experience, education, projects
- `src/app/layout.tsx`: `metadata.title` and `metadata.description`
- Replace `personalData.profilePicture` with your image URL (or switch to a local file via Next Image if preferred)

### Styling

- Global tokens live in `src/app/globals.css` (HSL CSS variables for light/dark)
- Tailwind config in `src/tailwind.config.ts`
- Additional UI primitives in `src/components/ui/*`

## Optional: AI Suggestions

This project includes a Genkit flow that suggests new portfolio content based on your About Me.

Relevant files:

- `src/ai/genkit.ts`: Genkit client configured with `@genkit-ai/googleai` and model `googleai/gemini-2.0-flash`
- `src/ai/flows/suggested-interests-content.ts`: Flow definition
- `src/ai/dev.ts`: Loads flows in a local Genkit dev session

### Enable AI locally

1) Create a `.env` file in the project root and add your Google AI API key:

```bash
GOOGLE_GENERATIVE_AI_API_KEY=YOUR_API_KEY
```

2) Start the Genkit dev server:

```bash
npm run genkit:dev
```

Optionally, use `npm run genkit:watch` during active development.

Note: The example client UI (`src/components/suggested-content.tsx`) demonstrates how to call a server action to fetch suggestions. You can integrate it into a section or route of your choice.

## Scripts

- `dev`: Next dev server (Turbopack) on port 9002
- `build`: Production build
- `start`: Start production server
- `lint`: Run Next lint
- `typecheck`: TypeScript type check
- `genkit:dev`: Start Genkit with `ts-node/tsx` on `src/ai/dev.ts`
- `genkit:watch`: Same as above with watch mode

## Project Structure

```
src/
  app/
    layout.tsx           # Root layout, fonts, theme provider, header, scroll indicator
    page.tsx             # Home page assembling sections
    globals.css          # Theme tokens & base styles
  components/
    sections/            # Hero, Experience, Education, Tech Stack, Projects, Contact, Quote
    ui/                  # shadcn/ui components
    boids-canvas.tsx     # Animated background
    scroll-indicator.tsx # Sticky progress/navigation
    header.tsx           # Theme toggle & navigation
    suggested-content.tsx# (Optional) AI suggestion UI
  ai/
    genkit.ts            # Genkit configuration (Google AI)
    dev.ts               # Dev entry to register flows locally
    flows/
      suggested-interests-content.ts
  lib/
    data.ts              # Portfolio content
  hooks/
    use-toast.ts         # Toast helper for UI feedback
```

## Deployment (Optional: Firebase App Hosting)

This repo includes `apphosting.yaml`. To deploy to Firebase App Hosting:

1) Install Firebase CLI and log in
2) Initialize App Hosting in your Firebase project or connect this directory
3) Build the app: `npm run build`
4) Deploy with the CLI as per Firebase docs

Refer to Firebase App Hosting docs for detailed steps.

## Troubleshooting

- Clear `.next/` and re-run `npm run dev` if you see stale assets
- Ensure your Node version is 18+ if Next build fails
- For AI, confirm `GOOGLE_GENERATIVE_AI_API_KEY` is set and restart the Genkit dev server

## Acknowledgments

- Next.js, Tailwind CSS, shadcn/ui, Radix UI, lucide-react
- Genkit and Google AI for the optional suggestion flow

