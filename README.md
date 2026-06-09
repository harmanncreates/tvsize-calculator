# 📺 TVSizeCalc

Simple, beautiful TV size calculator. [Live demo](https://yoursite.pages.dev)

## File Structure

```
tv-size-calculator/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Base.astro        ← Nav, footer, dark mode, fonts
│   ├── pages/
│   │   ├── index.astro       ← Main calculator (both modes)
│   │   ├── faq.astro         ← FAQ with Google rich snippet schema
│   │   ├── about.astro       ← About page
│   │   └── privacy.astro     ← Privacy policy (for AdSense)
│   └── styles/
│       └── global.css        ← Tailwind base
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── wrangler.toml             ← Cloudflare Pages config
```

---

## 🚀 Run Locally

### 1. Install Node.js (if you haven't)
Download from https://nodejs.org (version 18 or 20)

### 2. Install dependencies
```bash
cd tv-size-calculator
npm install
```

### 3. Start dev server
```bash
npm run dev
```
Open http://localhost:4321 in your browser. 

Hot reload works — edit any `.astro` file and the browser updates instantly.

### 4. Build for production
```bash
npm run build
npm run preview   # preview the built site locally
```

---

## ☁️ Deploy to Cloudflare Pages (FREE)

### One-time setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create tv-size-calculator --public --push
   ```

2. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Click **Workers & Pages → Create → Pages**
   - Click **Connect to Git** → select your GitHub repo
   - Set build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node.js version:** `20` (under Environment variables, set `NODE_VERSION = 20`)
   - Click **Save and Deploy**

3. **Done!** You get a free `.pages.dev` URL in ~2 minutes.

### Future deploys
Every `git push` to `main` auto-deploys. Zero config needed.

### Custom domain (optional)
In Cloudflare Pages → your project → **Custom domains** → add `tvsizecalc.com`

---

## 💰 AdSense Setup

1. Apply at https://adsense.google.com
2. Add your site URL
3. Paste the AdSense verification snippet into `src/layouts/Base.astro` inside `<head>`
4. Once approved, add ad units where you want (good spots: below the calculator card, above the footer)

---

## 🔧 Customization

### Change the formula
Edit `src/pages/index.astro`, in the `<script>` block:
```js
const mult = type === '4k' ? 7.5 : 5.5;  // change these multipliers
```

### Add more TV sizes
Edit the `COMMON_SIZES` array:
```js
const COMMON_SIZES = [43, 50, 55, 60, 65, 75, 85]; // add 32, 40, 98, etc.
```

### Change colors
Edit `tailwind.config.mjs` or replace Tailwind color classes directly in `.astro` files.

### Add your site URL for SEO
Edit `astro.config.mjs`:
```js
site: 'https://tvsizecalc.com',  // your actual domain
```

---

## SEO Checklist

- [x] H1 on homepage: "TV Size Calculator"
- [x] Meta title + description on every page
- [x] FAQ page with JSON-LD schema (Google rich snippets)
- [x] robots.txt
- [x] Dark mode (reduces bounce rate)
- [x] Mobile-first responsive layout
- [ ] Add your domain to `astro.config.mjs`
- [ ] Update `robots.txt` with your real sitemap URL
- [ ] Submit sitemap to Google Search Console

---

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) · Deployed on [Cloudflare Pages](https://pages.cloudflare.com)
