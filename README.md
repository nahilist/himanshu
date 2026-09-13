This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# nahilist — Award-Winning Portfolio & Digital Experience

## Getting Started
A high-performance, responsive, animated digital portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

First, run the development server:
---

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
## 🚀 Features

bun dev
```
- **7 Master Sections**:
  1. Philosophy Hero with radial amber glow aura
  2. Interactive Services Sphere with 4 floating discipline pills
  3. DRIP Smart Hydration 3D Case Study (Hardware, Bento Grid, Craft Spotlight)
  4. Player Portal Mobile App (3 sports recruitment screens)
  5. Works Archive Gallery ("Our Craft, Your Expression") with category filters
  6. Dedicated Contact Section with interactive inquiry form
  7. Grand Finale Footer with award badges, 4 directories, and giant **nahilist** identity
- **Interactive Capabilities**:
  - Full keyboard (`↑`/`↓`/`←`/`→`), touch swipe, and mouse wheel navigation
  - Cinema-grade Showreel Modal lightbox
  - Fullscreen Menu Overlay with live New York (EST) clock
  - Procedural Web Audio API sound synthesis with mute toggle
  - Adaptive Navbar and Bottom Tick pagination (7 ticks)

---

## 🛠️ Getting Started

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
### 1. Install Dependencies
```bash
npm install
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Learn More
### 3. Production Build & Validation
```bash
npm run typecheck   # Validate TypeScript types
npm run lint        # Check ESLint rules
npm run build       # Create production build
npm run start       # Start production server
```

To learn more about Next.js, take a look at the following resources:
---

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
## ⚙️ CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
The repository includes a complete automated CI/CD pipeline running on GitHub Actions:

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
- **Triggers**:
  - `push` to `main`, `master`, `dev`, or `update-logo`
  - `pull_request` to `main` or `master`
  - Manual trigger via `workflow_dispatch`
- **Jobs**:
  1. **Code Quality**: Runs `npm run lint` and `npm run typecheck`.
  2. **Production Build**: Restores Next.js build cache and runs `npm run build`.
  3. **Artifact Retention & Deployment**: Generates optimized build assets ready for zero-downtime deployment (e.g. Vercel, Docker, GitHub Pages).
