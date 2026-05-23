# KAHFA — Changelog

Semua perubahan signifikan pada project ini didokumentasikan di file ini.  
Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2025-05-23

### 🎉 Initial Release — Frontend MVP

#### Added
- **Homepage** (`index.html`)
  - Hero full-viewport dengan gambar editorial dan tombol SHOP ALL
  - Announcement ticker scrolling horizontal (FREE SHIPPING, New Collection)
  - Featured products grid 3-kolom dengan Quick Add button
  - Collection banner split layout (foto kiri, teks kanan)
  - Lookbook teaser 3-kolom
  - Info strip (Free Shipping, Quality First, Easy Returns)
  - Newsletter subscription form

- **Shop Page** (`shop.html`)
  - Product grid 3-kolom responsif
  - Filter by category: All / Tops / Bottoms / Outerwear
  - Sort: Featured / Price Low-High / Price High-Low / Name A–Z
  - Product count indicator
  - Product badges: New, Low Stock, Sold Out
  - Quick Add button on hover

- **About Page** (`about.html`)
  - Split layout 50/50 (foto brand + teks story)
  - Brand values section (3 kolom: Craftsmanship, Design, Community)
  - Lookbook strip 3 foto
  - Contact form (Name, Email, Subject, Message)

- **Gallery Page** (`gallery.html`)
  - 6-photo lookbook grid 3-kolom
  - Lightbox viewer dengan overlay gelap
  - Keyboard navigation (← → Esc)
  - Hover overlay dengan label foto

- **Global Components** (`js/main.js`)
  - Announcement ticker (auto-inject ke semua halaman)
  - Sticky header 3-kolom (Home/Shop/About | Logo | Gallery/Search/Bag)
  - Active nav link detection per halaman
  - Search overlay fullscreen (Cmd/Ctrl+K shortcut)
  - Live search filter (pages + products)
  - My Bag drawer slide-in dari kanan
  - Bag counter di header
  - Add/remove/qty-change item di bag
  - Subtotal calculation (IDR format)
  - Bag state persistent via localStorage
  - Footer auto-inject

- **Design System** (`css/style.css`)
  - CSS custom properties (color, font, transition tokens)
  - Roboto Mono + Playfair Display via Google Fonts
  - No border-radius policy
  - Responsive breakpoints (900px, 768px, 600px)

- **Assets**
  - 1 hero image (AI-generated editorial)
  - 4 product images: T-Shirt Black, T-Shirt Cream, Bomber Jacket, Wide-Leg Pants
  - 6 lookbook photos (editorial Indonesian fashion)

- **Documentation**
  - `README.md` — Setup dan quick start guide
  - `docs/PRD.md` — Product requirements document
  - `docs/DESIGN_SYSTEM.md` — Design system lengkap
  - `docs/CHANGELOG.md` — File ini

---

## [Unreleased] — Planned

### Phase 2 — Product Detail & Checkout
- [ ] Product detail page (`product/[slug].html`)
- [ ] Size selector interaktif di product page
- [ ] Image gallery per produk (multi-foto)
- [ ] Checkout page dengan form pengiriman
- [ ] Payment gateway (Midtrans / Xendit)

### Phase 3 — Backend & CMS
- [ ] Database produk (Supabase / Firebase)
- [ ] Admin panel untuk kelola produk
- [ ] Order management
- [ ] Email notifikasi otomatis

### Phase 4 — Growth
- [ ] User account & order history
- [ ] Wishlist
- [ ] Product reviews
- [ ] Promo codes
- [ ] Google Analytics + Meta Pixel
- [ ] Instagram Shop integration
- [ ] SEO: sitemap.xml, robots.txt, structured data

---

## Versioning Convention

```
[MAJOR.MINOR.PATCH]

MAJOR → Perubahan arsitektur besar (backend, framework baru)
MINOR → Fitur baru ditambahkan
PATCH → Bug fix, penyesuaian kecil, konten update
```
