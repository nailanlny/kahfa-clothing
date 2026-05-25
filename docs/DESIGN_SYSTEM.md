# KAHFA — Design System

**Version:** 2.0  
**Last Updated:** May 2025  
**Stack:** Next.js · TypeScript · CSS Modules

> Dokumen ini adalah sumber kebenaran tunggal (*single source of truth*) untuk semua keputusan visual KAHFA. Setiap developer dan designer HARUS mengacu ke sini sebelum membuat komponen baru.

---

## 1. Design Principles

| Prinsip | Deskripsi |
|---|---|
| **Minimal** | Kurangi noise. Setiap elemen harus punya tujuan. |
| **Timeless** | Hindari trend sesaat. Pilih yang bertahan lama. |
| **Intentional** | Spacing, warna, tipografi dipilih dengan alasan, bukan intuisi. |
| **Silent Luxury** | Premium terasa dari detail, bukan dari dekorasi. |

---

## 2. Color System

Semua warna didefinisikan sebagai CSS custom properties di `css/style.css`.

```css
:root {
  --color-white:   #ffffff;   /* Background utama halaman */
  --color-bg:      #f7f7f7;   /* Background section alternatif */
  --color-card:    #f3f3f3;   /* Background card produk */
  --color-black:   #111111;   /* Heading, CTA button, border tebal */
  --color-dark:    #333333;   /* Body text, product title */
  --color-mid:     #777777;   /* Secondary text, label, meta info */
  --color-border:  #d4d4d4;   /* Garis pembatas, border input */
  --color-accent:  #b22222;   /* "FREE SHIPPING" ticker, badge sold out */
  --color-overlay: rgba(0,0,0,0.78); /* Search overlay background */
}
```

### Panduan Penggunaan Warna

| Situasi | Token yang Digunakan |
|---|---|
| Background halaman | `--color-white` |
| Section abu-abu muda | `--color-bg` atau `--color-card` |
| Teks utama / heading | `--color-black` |
| Teks paragraf | `--color-dark` |
| Label, caption, harga | `--color-mid` |
| Tombol primary (solid) | bg: `--color-black`, text: `--color-white` |
| Tombol outline (gelap) | border+text: `--color-black`, bg: `transparent` |
| Tombol outline (terang) | border+text: `--color-white`, bg: `transparent` |
| Promo / highlight | `--color-accent` |

> ⚠️ **Jangan gunakan warna hardcoded** seperti `#000`, `red`, atau `gray` langsung di file CSS. Selalu gunakan token di atas.

---

## 3. Typography

### Font Families
```css
--font-mono: 'Roboto Mono', 'Courier New', monospace;  /* Semua teks UI */
--font-logo: 'Playfair Display', serif;                 /* Logo brand saja */
```

### Type Scale

| Role | Font | Size | Weight | Letter-Spacing | Transform |
|---|---|---|---|---|---|
| Logo | Playfair Display italic | 22px | 400 | 0 | none |
| Nav link | Roboto Mono | 12px | 300 | 1px | uppercase |
| Section title | Roboto Mono | 11px | 400 | 3px | uppercase |
| Heading (About) | Roboto Mono | 36px | 400 | 3px | uppercase |
| Collection title | Roboto Mono | 28px | 300 | 2px | uppercase |
| Product name | Roboto Mono | 12px | 300 | 0.5px | none |
| Product price | Roboto Mono | 12px | 200 | 0.5px | none |
| Body text | Roboto Mono | 13px | 300 | 0.5px | none |
| Label kecil | Roboto Mono | 10–11px | 300–400 | 2–3px | uppercase |
| Button | Roboto Mono | 10–11px | 400–500 | 2px | uppercase |
| Ticker | Roboto Mono | 11px | 300 | 1.5px | uppercase |
| Footer link | Roboto Mono | 12px | 300 | 0.5px | none |
| Copyright | Roboto Mono | 10px | 300 | 1px | uppercase |

### Aturan Tipografi
- **Jangan** gunakan font selain dua di atas tanpa persetujuan
- Logo `Playfair Display` **hanya** untuk elemen logo, **tidak** untuk heading konten
- `font-weight: 200` — hanya untuk harga produk (kesan premium ultra-tipis)
- `font-weight: 300` — teks body dan product name (default)
- `font-weight: 400–500` — button, label, nav (perlu keterbacaan)

---

## 4. Spacing & Layout

### Grid System
```
Layout dasar: CSS Grid
Kolom produk: repeat(3, 1fr) — desktop
Kolom produk: repeat(2, 1fr) — tablet (< 900px)
Kolom produk: repeat(2, 1fr) — mobile (< 600px)
Gap produk:   16–20px
```

### Spacing Scale (padding/margin standar)
```
4px   — micro gap (antara badge dan gambar)
8px   — gap antar foto gallery
12px  — margin kecil dalam card
16px  — gap standar antara form fields
20px  — padding card info produk
24px  — padding header, padding section horisontal
32px  — gap antar section dalam halaman
40px  — padding section medium
48px  – padding about content vertikal
64px  — padding section besar
80px  — padding about split vertikal
```

### Fixed Heights
```css
--ticker-h:  36px;   /* Announcement bar */
--header-h:  60px;   /* Sticky site header */
/* Total offset untuk page-main: 96px */
```

---

## 5. Border & Shape

> **Aturan utama: `border-radius: 0` di SEMUA elemen.**  
> KAHFA tidak menggunakan sudut membulat. Semua sudut tajam adalah bagian dari identitas visual.

```css
border-radius: 0;   /* Wajib di semua komponen */
```

### Border yang Digunakan
```css
/* Divider / separator */
border: 1px solid var(--color-border);   /* #d4d4d4 */

/* Input focus */
border-color: var(--color-black);

/* Button outline */
border: 1px solid var(--color-black);
```

---

## 6. Transitions & Animations

```css
--transition-fast: 0.18s ease;   /* Hover color, opacity */
--transition-med:  0.32s ease;   /* Overlay open/close, underline */
--transition-slow: 0.5s ease;    /* Image zoom, drawer slide */
```

### Panduan Animasi
| Elemen | Animasi | Nilai |
|---|---|---|
| Image zoom saat hover | `transform: scale(1.04)` | `--transition-slow` |
| Nav underline | `width: 0 → 100%` | `--transition-med` |
| Overlay (search/bag) | `opacity: 0 → 1` | `--transition-med` |
| Bag drawer | `translateX(100%) → 0` | `--transition-med` |
| Quick Add button | `opacity+translateY` | `--transition-fast` |
| Hero CTA fade-in | `@keyframes hero-fade` | 1.2s ease |
| Ticker scroll | `@keyframes ticker-scroll` | 28s linear infinite |

> ⚠️ Hindari animasi yang terlalu agresif. KAHFA = calm, understated. Tidak ada bounce, elastic, atau efek berlebihan.

---

## 7. Components

### 7.1 Announcement Ticker
```html
<div class="ticker">
  <div class="ticker__track">
    <span class="ticker__item"><span>Free Shipping</span> For All Orders...</span>
    <!-- Ulangi isi 2x untuk loop seamless -->
  </div>
</div>
```
- Posisi: `position: fixed; top: 0;`
- Tinggi: 36px (`--ticker-h`)
- Warna accent untuk kata kunci (FREE SHIPPING)

---

### 7.2 Site Header
```html
<header class="site-header">
  <nav class="site-header__nav site-header__nav--left">...</nav>
  <a class="site-header__logo">Kahfa</a>
  <nav class="site-header__nav site-header__nav--right">...</nav>
</header>
```
- Posisi: `position: fixed; top: 36px;` (di bawah ticker)
- Tinggi: 60px
- Layout: `grid-template-columns: 1fr auto 1fr`
- Halaman aktif: class `.active` + `text-decoration: underline`

---

### 7.3 Product Card
```html
<div class="product-card">
  <div class="product-card__img-wrap">
    <img src="..." alt="...">
    <span class="product-card__badge">New</span>         <!-- opsional -->
    <span class="product-card__badge product-card__badge--soldout">Sold Out</span>
    <div class="product-card__overlay">
      <button class="quick-add-btn">Quick Add</button>
    </div>
  </div>
  <div class="product-card__info">
    <p class="product-card__name">Product Name</p>
    <p class="product-card__price">Rp 299.000</p>
  </div>
</div>
```
- Aspect ratio image: `3/4` (portrait)
- Background card: `--color-card` (`#f3f3f3`)
- Badge: hitam solid / merah untuk sold out
- Quick Add: muncul saat hover, slide up dari bawah

---

### 7.4 Button Variants
```html
<!-- Primary — background hitam -->
<a class="btn btn-dark">Shop All</a>

<!-- Outline gelap — di atas background terang -->
<a class="btn btn-outline-dark">Explore Collection</a>

<!-- Outline terang — di atas hero/gambar gelap -->
<a class="btn btn-outline">View More</a>
```

---

### 7.5 Search Overlay
- Trigger: klik "Search" di header, atau `Cmd/Ctrl + K`
- Close: tombol ×, klik luar, atau `Esc`
- Struktur: dark overlay > input > dua kolom hasil (Pages | Products)
- Semua logic di `js/main.js` fungsi `openSearch()` / `closeSearch()`

---

### 7.6 Bag Drawer
- Trigger: klik "My Bag (n)" di header
- Close: overlay click, tombol ×, atau `Esc`
- State: persisted ke `localStorage` key: `kahfa-bag`
- Counter di header: `.bag-count` (diupdate via `updateBagCount()`)

---

### 7.7 Form Inputs
```css
.form-input, .form-textarea {
  border: 1px solid var(--color-border);
  border-radius: 0;           /* selalu 0 */
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 300;
  padding: 14px 16px;
}
.form-input:focus { border-color: var(--color-black); }
```

---

## 8. Do's & Don'ts

### ✅ Do
- Gunakan semua token CSS (`--color-*`, `--font-*`, `--transition-*`)
- Pertahankan `border-radius: 0`
- Gunakan `text-transform: uppercase` untuk semua UI label
- Pertahankan `font-family: var(--font-mono)` di semua elemen
- Test di mobile 375px dan desktop 1440px

### ❌ Don't
- Jangan gunakan warna hardcoded
- Jangan tambahkan shadow (`box-shadow`) kecuali sangat diperlukan
- Jangan gunakan icon library — gunakan unicode/emoji atau SVG minimal
- Jangan gunakan `border-radius > 0`
- Jangan gunakan font baru tanpa update Design System ini
- Jangan animasi yang terlalu cepat (< 150ms) atau terlalu lambat (> 600ms)

---

## 9. Assets

### Image Guidelines
| Tipe | Format | Aspect Ratio | Keterangan |
|---|---|---|---|
| Hero | JPG/WebP | 16:9 atau 4:3 | Full-bleed, object-position: center top |
| Product | JPG/PNG | 3:4 (portrait) | Background abu #f3f3f3, clean |
| Lookbook | JPG/WebP | 3:4 (portrait) | Editorial, high contrast |
| About split | JPG/WebP | Flexible | Lifestyle / brand story |

### Naming Convention
```
product_[type]_[color].png     → product_tshirt_black.png
lookbook_[number].png          → lookbook_01.png
hero_[descriptor].png          → hero_main.png
```

---

## 10. File Architecture (Next.js)

```
app/
├── globals.css     → Design tokens + SEMUA shared components
│                     (ticker, header, footer, buttons, cards,
│                      search overlay, bag drawer, responsive)
├── layout.tsx      → Root layout (server component)
├── page.tsx        → Homepage
├── shop/
│   └── page.tsx    → Shop page
├── about/
│   └── page.tsx    → About page
└── gallery/
    └── page.tsx    → Gallery page

styles/
├── Home.module.css     → Styles KHUSUS homepage saja
├── Shop.module.css     → Styles KHUSUS shop page saja
├── About.module.css    → Styles KHUSUS about page saja
└── Gallery.module.css  → Styles KHUSUS gallery page saja

components/
├── layout/         → Ticker, SiteHeader, SiteFooter, ClientShell
├── bag/            → BagContext (state), BagDrawer (UI)
├── search/         → SearchOverlay
└── products/       → ProductCard

data/
└── products.ts     → PRODUCTS array + TypeScript types
```

> **Aturan:** Shared styles → `app/globals.css`. Page-specific → CSS Modules masing-masing halaman.  
> Jangan letakkan style spesifik halaman di `globals.css`.

