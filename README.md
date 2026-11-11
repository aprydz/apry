# Personal Portfolio Website – Full-Stack Developer

A modern, high-performance personal portfolio built for a **Full-Stack Developer** featuring a dark minimalist editorial aesthetic, fluid micro-interactions, and accessible engineering.

Designed and implemented in accordance with the specifications in [`PRD.md`](./PRD.md).

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Ready**: [Vercel](https://vercel.com/)

---

## 🎨 Design System

- **Background**: `#101010`
- **Cards & Containers**: `#171717`
- **Borders**: `#2C2C2C` / `#454545`
- **Primary Text**: `#F5F5F5`
- **Secondary / Muted**: `#A0A0A0`
- **Highlight**: `#FFFFFF`
- **Typography**:
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Code & Metadata: `JetBrains Mono`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Dark minimalist theme, scrollbar & utilities
│   ├── layout.tsx          # Root layout, Google fonts, OpenGraph SEO
│   └── page.tsx            # Single-page layout connecting all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation, active spy & mobile drawer
│   │   └── Footer.tsx      # Editorial index, socials, back-to-top
│   ├── sections/
│   │   ├── Hero.tsx        # Oversized editorial typography & intro
│   │   ├── About.tsx       # Bio, engineering principles, portrait card
│   │   ├── Projects.tsx    # Horizontal carousel with category filters
│   │   ├── Skills.tsx      # Technical stack grouped by category
│   │   ├── Experience.tsx  # Interactive career timeline
│   │   └── Contact.tsx     # Form with validation, copy email & confetti
│   └── ui/
│       ├── Button.tsx
│       ├── Icons.tsx
│       ├── ProjectCard.tsx
│       ├── SectionHeading.tsx
│       └── SocialLinks.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
public/
├── robots.txt
└── sitemap.xml
```

---

## ⚡ Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Run local development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build:
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete full-stack developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect Next.js and deploy your portfolio live with zero configuration needed.

