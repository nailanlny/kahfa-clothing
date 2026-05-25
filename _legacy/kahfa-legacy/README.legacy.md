# KAHFA — Frontend Website

Website e-commerce official untuk brand clothing **KAHFA** — timeless essentials made to last.

**Stack:** Pure HTML · Vanilla CSS · Vanilla JavaScript  
**Status:** v1.0 — Frontend Complete

---

## 📁 Project Structure

```
project-kahfa-01/
│
├── index.html              # Home page
├── shop.html               # Shop / all products
├── about.html              # About & contact
├── gallery.html            # Lookbook gallery
│
├── css/
│   ├── style.css           # ⭐ Design system (tokens, shared components)
│   ├── home.css            # Styles khusus home
│   ├── shop.css            # Styles khusus shop
│   ├── about.css           # Styles khusus about
│   └── gallery.css         # Styles khusus gallery
│
├── js/
│   ├── main.js             # ⭐ Shared logic: bag, search, header inject
│   └── shop.js             # Filter, sort, render produk
│
├── assets/
│   └── images/             # Semua gambar (hero, produk, lookbook)
│
└── docs/
    ├── PRD.md              # Product Requirements Document
    ├── DESIGN_SYSTEM.md    # Design system (warna, font, komponen)
    └── CHANGELOG.md        # Riwayat perubahan
```

---

## 🚀 Quick Start

### Cara 1 — Buka Langsung di Browser
```
Klik kanan index.html → Open with → Browser
```

### Cara 2 — VS Code Live Server (Recommended)
1. Install extension **Live Server** di VS Code
2. Klik kanan `index.html` → **"Open with Live Server"**
3. Browser otomatis terbuka di `http://127.0.0.1:5500`

### Cara 3 — Python Simple Server
```bash
cd "project-kahfa-01"
python3 -m http.server 3000
# Buka: http://localhost:3000
```

---

## 📄 Pages

| URL | Deskripsi |
|---|---|
| `index.html` | Homepage — hero, featured products, lookbook teaser |
| `shop.html` | Semua produk dengan filter & sort |
| `about.html` | Brand story, values, dan contact form |
| `gallery.html` | Lookbook editorial SS'25 |

---

## ✨ Features

- **Announcement Ticker** — scrolling promo bar di atas semua halaman
- **Sticky Header** — 3-kolom: nav kiri | logo | nav kanan
- **Search Overlay** — `Cmd/Ctrl+K` atau klik Search, live filter
- **My Bag Drawer** — slide-in dari kanan, persisted di localStorage
- **Product Filter** — filter by category (Tops/Bottoms/Outerwear)
- **Product Sort** — sort by price & name
- **Gallery Lightbox** — klik foto → fullscreen, navigasi ← →
- **Responsive** — mobile 375px hingga desktop 1440px+

---

## 🎨 Design System

Lihat [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) untuk dokumentasi lengkap.

**Quick reference:**
```css
--font-mono: 'Roboto Mono', monospace;   /* Semua teks UI */
--font-logo: 'Playfair Display', serif;  /* Logo saja */

--color-black:  #111111;
--color-dark:   #333333;
--color-white:  #ffffff;
--color-card:   #f3f3f3;
--color-accent: #b22222;

/* Rule: border-radius: 0 pada SEMUA elemen */
```

---

## 🛒 Menambah Produk Baru

Edit array `PRODUCTS` di `js/main.js`:

```javascript
{
  id: 7,                              // ID unik, increment
  name: 'Kahfa Cargo Pants — Olive',
  price: 'Rp 529.000',
  priceNum: 529000,                   // untuk sort & subtotal
  category: 'bottoms',               // tops | bottoms | outerwear
  img: 'assets/images/product_cargo_olive.png',
  badge: 'New',                      // null | 'New' | 'Low Stock' | 'Sold Out'
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
v1.0  ✅ Frontend MVP (current)
v1.1  ⬜ Product detail page + size selector
v1.2  ⬜ Checkout flow + payment gateway
v2.0  ⬜ Backend (database, auth, admin panel)
v2.1  ⬜ User account + order history
v3.0  ⬜ Growth features (reviews, promo, analytics)
```

---

## 🤝 Development Guidelines

1. **Baca `docs/DESIGN_SYSTEM.md`** sebelum membuat komponen baru
2. **Gunakan CSS tokens** — jangan hardcode warna atau font
3. **`border-radius: 0`** — selalu, tanpa exception
4. **Shared styles** → `css/style.css`, page-specific → CSS halaman masing-masing
5. **Shared logic** → `js/main.js`, page-specific → JS halaman masing-masing
6. **Update `docs/CHANGELOG.md`** setiap ada perubahan yang di-commit
7. **Test di 375px dan 1440px** sebelum dianggap selesai

---

*KAHFA © 2025 — All rights reserved*
