# KAHFA — Frontend Website

Website e-commerce official untuk brand clothing **KAHFA** — timeless essentials made to last.

**Stack:** Next.js 16 · TypeScript · CSS Modules · React Context  
**Status:** v2.0 — Next.js App Router

---

## 📁 Project Structure

```
project-kahfa-01/
│
├── app/                        ← App Router
│   ├── layout.tsx              ← Root layout (server) + SEO metadata
│   ├── page.tsx                ← Homepage (/)
│   ├── shop/page.tsx           ← Shop (/shop)
│   ├── about/page.tsx          ← About (/about)
│   ├── gallery/page.tsx        ← Gallery (/gallery)
│   └── globals.css             ← ⭐ Design system (tokens, shared components)
│
├── components/
│   ├── layout/
│   │   ├── ClientShell.tsx     ← Provider wrapper (bag, search state)
│   │   ├── Ticker.tsx          ← Announcement ticker
│   │   ├── SiteHeader.tsx      ← Sticky header
│   │   └── SiteFooter.tsx      ← Footer
│   ├── bag/
│   │   ├── BagContext.tsx      ← ⭐ Bag state (React Context + useReducer)
│   │   └── BagDrawer.tsx       ← Slide-in bag drawer UI
│   ├── search/
│   │   └── SearchOverlay.tsx   ← Fullscreen search overlay
│   └── products/
│       └── ProductCard.tsx     ← Reusable product card
│
├── data/
│   └── products.ts             ← PRODUCTS array + TypeScript types
│
├── styles/
│   ├── Home.module.css         ← Homepage-specific styles
│   ├── Shop.module.css         ← Shop-specific styles
│   ├── About.module.css        ← About-specific styles
│   └── Gallery.module.css      ← Gallery-specific styles
│
├── public/
│   └── images/                 ← All images (hero, products, lookbook)
│
├── _legacy/                    ← Archive: original HTML/CSS/JS files
│
└── docs/
    ├── PRD.md                  ← Product Requirements Document
    ├── DESIGN_SYSTEM.md        ← Design system (warna, font, komponen)
    └── CHANGELOG.md            ← Riwayat perubahan
```

---

## 🚀 Quick Start

```bash
npm run dev
# Buka: http://localhost:3000
```

### Build for Production
```bash
npm run build
npm run start
```

---

## 📄 Pages

| URL | Deskripsi |
|---|---|
| `/` | Homepage — hero, featured products, lookbook teaser |
| `/shop` | Semua produk dengan filter & sort |
| `/about` | Brand story, values, dan contact form |
| `/gallery` | Lookbook editorial SS'25 |

---

## ✨ Features

- **Announcement Ticker** — scrolling promo bar
- **Sticky Header** — 3-kolom: nav kiri | logo | nav kanan, active link detection
- **Search Overlay** — `Cmd/Ctrl+K` shortcut, live filter
- **My Bag Drawer** — slide-in dari kanan, persisted di localStorage via React Context
- **Product Filter** — filter by category (Tops/Bottoms/Outerwear)
- **Product Sort** — sort by price & name
- **Gallery Lightbox** — klik foto → fullscreen, navigasi ← →, keyboard accessible
- **Responsive** — mobile 375px hingga desktop 1440px+
- **SEO** — metadata per halaman, semantic HTML, Open Graph

---

## 🎨 Design System

Lihat [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) untuk dokumentasi lengkap.

**Quick reference:**
```css
--font-mono: 'Roboto Mono', monospace;  /* Semua teks UI */
--font-logo: 'Playfair Display', serif; /* Logo saja */

--color-black:  #111111;
--color-dark:   #333333;
--color-white:  #ffffff;
--color-card:   #f3f3f3;
--color-accent: #b22222;

/* Rule: border-radius: 0 pada SEMUA elemen */
```

---

## 🛒 Menambah Produk Baru

Edit array `PRODUCTS` di `data/products.ts`:

```typescript
{
  id: 7,
  slug: 'cargo-pants-olive',
  name: 'Kahfa Cargo Pants — Olive',
  price: 'Rp 529.000',
  priceNum: 529000,
  category: 'bottoms',     // 'tops' | 'bottoms' | 'outerwear'
  img: '/images/product_cargo_olive.png',
  badge: 'New',             // null | 'New' | 'Low Stock' | 'Sold Out'
  sizes: ['S', 'M', 'L', 'XL']
}
```

---

## 📋 Documentation

| Dokumen | Deskripsi |
|---|---|
| [`docs/PRD.md`](docs/PRD.md) | Product requirements, features, roadmap |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | Warna, tipografi, komponen, rules |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | Riwayat semua perubahan per versi |

---

## 🗺️ Roadmap

```
v1.0  ✅ Frontend MVP (vanilla HTML/CSS/JS)
v2.0  ✅ Migrated to Next.js + TypeScript (current)
v2.1  ⬜ Product detail page + size selector
v2.2  ⬜ Checkout flow + payment gateway
v3.0  ⬜ Backend (database, auth, admin panel)
v3.1  ⬜ User account + order history
v4.0  ⬜ Growth features (reviews, promo, analytics)
```

---

## 🤝 Development Guidelines

1. **Baca `docs/DESIGN_SYSTEM.md`** sebelum membuat komponen baru
2. **Gunakan CSS tokens** — jangan hardcode warna atau font
3. **`border-radius: 0`** — selalu, tanpa exception
4. **Shared styles** → `app/globals.css`, page-specific → CSS Module masing-masing halaman
5. **Update `docs/CHANGELOG.md`** setiap ada perubahan yang di-commit
6. **Test di 375px dan 1440px** sebelum dianggap selesai

---

*KAHFA © 2025 — All rights reserved*
