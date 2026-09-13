# nahilist — Award-Winning Portfolio & Digital Experience

A high-performance, responsive, animated digital portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Features

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

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Validation
```bash
npm run typecheck   # Validate TypeScript types
npm run lint        # Check ESLint rules
npm run build       # Create production build
npm run start       # Start production server
```

---

## ⚙️ CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

The repository includes a complete automated CI/CD pipeline running on GitHub Actions:

- **Triggers**:
  - `push` to `main`, `master`, `dev`, or `update-logo`
  - `pull_request` to `main` or `master`
  - Manual trigger via `workflow_dispatch`
- **Jobs**:
  1. **Code Quality**: Runs `npm run lint` and `npm run typecheck`.
  2. **Production Build**: Restores Next.js build cache and runs `npm run build`.
  3. **Artifact Retention & Deployment**: Generates optimized build assets ready for zero-downtime deployment (e.g. Vercel, Docker, GitHub Pages).
