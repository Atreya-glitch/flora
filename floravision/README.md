# 🌿 FloraVision

> **Earth's Exhale** — A modern plant e-commerce storefront built with Next.js 16, TypeScript, and Tailwind CSS 4.

FloraVision is a responsive, dark-themed plant shopping UI showcasing curated indoor plants with sections for top-selling items, trending picks, O2-producing plants, and customer reviews.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Fonts | DM Serif Display + DM Sans via `next/font` |
| Images | Next.js `<Image>` with automatic optimization |
| Linting | ESLint 9 with `eslint-config-next` (core web vitals + TypeScript) |
| Testing | Jest + React Testing Library |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout — fonts, metadata, Navbar
│   ├── page.tsx             # Root redirect → /home
│   ├── home/page.tsx        # Hero section
│   ├── top-selling/page.tsx # Product grid (6 plants)
│   ├── trending/page.tsx    # Editorial feature cards
│   ├── best-o2/page.tsx     # O2 plant spotlight
│   ├── reviews/page.tsx     # Customer reviews grid
│   ├── footer/page.tsx      # Footer / contact
│   └── globals.css          # Design tokens (@theme, :root)
└── components/
    ├── Navbar.tsx            # Fixed top navigation
    ├── PlantCard.tsx         # Product card (image, name, price, add-to-cart)
    ├── ReviewCard.tsx        # Customer review card (avatar, stars, quote)
    └── SectionHeading.tsx    # Reusable pill-style section heading
public/
└── plants/                  # Plant and avatar images (PNG)
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/floravision.git
cd floravision

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run test suite |

---

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Redirects to `/home` |
| `/home` | Hero — featured plant, CTA buttons |
| `/top-selling` | 6-plant product grid with prices |
| `/trending` | Trending editorial layout |
| `/best-o2` | Best oxygen-producing plants spotlight |
| `/reviews` | Customer review cards |
| `/footer` | Contact info, newsletter signup, links |

---

## Design System

Colors and typography are defined as CSS custom properties in `globals.css` and exposed to Tailwind via `@theme`:

```css
--bg-primary:    #1a1f1a   /* Dark green-black background */
--bg-card:       #242a24   /* Card surface */
--text-primary:  #f0f0e8   /* Off-white body text */
--text-secondary:#9ea89e   /* Muted supporting text */
--accent-green:  #7aad5a   /* Brand accent */
```

Fonts: **DM Serif Display** for headings, **DM Sans** for body — both loaded via `next/font/google` with zero layout shift.

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npm run build   # verify build passes locally first
```

Then push to GitHub and import the repo in the Vercel dashboard. No environment variables required for the base UI.

---

## License

MIT
