# KAHFA — Product Requirements Document (PRD)

**Version:** 2.0  
**Created:** May 2025  
**Status:** v2.0 — Migrated to Next.js  
**Owner:** KAHFA Brand Team

---

## 1. Overview

### 1.1 Product Summary
KAHFA adalah platform e-commerce clothing brand Indonesia yang menjual timeless essentials — pakaian minimalis berkualitas tinggi yang dirancang untuk bertahan lama. Website ini adalah storefront digital utama brand KAHFA.

### 1.2 Vision
Menciptakan pengalaman belanja online yang sesederhana dan seelegan produk yang dijual — bersih, cepat, dan penuh intention.

### 1.3 Reference Benchmark
- **Design Reference:** Minimalist streetwear aesthetic
- **UX Reference:** Premium Shopify storefronts (minimal friction checkout)

---

## 2. Target Users

| Segmen | Deskripsi |
|---|---|
| **Primary** | 18–32 tahun, urban, fashion-conscious, menghargai kualitas vs kuantitas |
| **Secondary** | Gift buyer — membeli untuk orang lain yang sesuai profil di atas |
| **Platform** | Mobile-first (60%+ traffic dari mobile), desktop untuk browsing |

---

## 3. Goals & Success Metrics

### Business Goals
- Meningkatkan konversi dari visitor → purchase
- Membangun brand awareness dan identitas visual yang konsisten
- Menyediakan channel penjualan langsung (D2C) tanpa marketplace fee

### Success Metrics (KPI)
| Metric | Target |
|---|---|
| Page Load Time | < 2 detik (LCP) |
| Bounce Rate | < 50% |
| Add-to-Bag Rate | > 5% dari visitors |
| Mobile Usability Score | > 90 (Google) |
| Cart Abandonment Rate | < 65% |

---

## 4. Features & Requirements

### 4.1 Core Pages

#### 🏠 Home (`index.html`)
| Feature | Priority | Status |
|---|---|---|
| Hero full-viewport dengan CTA | P0 | ✅ Done |
| Announcement ticker / promo bar | P0 | ✅ Done |
| Featured products grid (3-col) | P0 | ✅ Done |
| Collection banner (split layout) | P1 | ✅ Done |
| Lookbook teaser section | P1 | ✅ Done |
| Info strip (shipping, quality, returns) | P1 | ✅ Done |
| Newsletter signup form | P2 | ✅ Done |

#### 🛍️ Shop (`shop.html`)
| Feature | Priority | Status |
|---|---|---|
| Product grid 3-kolom | P0 | ✅ Done |
| Filter by category | P0 | ✅ Done |
| Sort (price, name) | P1 | ✅ Done |
| Product badges (New, Low Stock, Sold Out) | P1 | ✅ Done |
| Quick Add to bag | P1 | ✅ Done |
| Product detail page | P0 | ⬜ Pending |
| Size selector on product | P0 | ⬜ Pending |
| Image gallery per product | P1 | ⬜ Pending |
| Stock indicator | P2 | ⬜ Pending |
| Pagination / infinite scroll | P2 | ⬜ Pending |

#### ℹ️ About (`about.html`)
| Feature | Priority | Status |
|---|---|---|
| Brand story split layout | P0 | ✅ Done |
| Brand values section | P1 | ✅ Done |
| Lookbook strip | P2 | ✅ Done |
| Contact form | P1 | ✅ Done |
| Form submission backend | P0 | ⬜ Pending |

#### 🖼️ Gallery (`gallery.html`)
| Feature | Priority | Status |
|---|---|---|
| Lookbook photo grid 3-col | P0 | ✅ Done |
| Lightbox viewer | P1 | ✅ Done |
| Keyboard navigation (←→ Esc) | P1 | ✅ Done |
| Hover overlay labels | P2 | ✅ Done |

#### 🔍 Search (Global Overlay)
| Feature | Priority | Status |
|---|---|---|
| Fullscreen dark overlay | P0 | ✅ Done |
| Live product search | P0 | ✅ Done |
| Page links shortcut | P1 | ✅ Done |
| Product thumbnail in results | P2 | ✅ Done |

#### 🛒 My Bag (Global Drawer)
| Feature | Priority | Status |
|---|---|---|
| Slide-in drawer dari kanan | P0 | ✅ Done |
| Add/remove item | P0 | ✅ Done |
| Quantity control | P0 | ✅ Done |
| Subtotal calculation | P0 | ✅ Done |
| Persisted di localStorage | P1 | ✅ Done |
| Checkout flow | P0 | ⬜ Pending |

---

## 5. Pages Roadmap

### Phase 1 — Frontend MVP ✅ (Current State)
- Homepage, Shop, About, Gallery
- Search overlay, Bag drawer
- Static product data

### Phase 2 — Product Detail & Checkout ⬜
- `/product/[slug].html` — halaman detail produk
- `/checkout.html` — form pengiriman dan pembayaran
- Size selector interaktif
- Payment gateway integration (Midtrans / Xendit)

### Phase 3 — Backend & CMS ⬜
- Database produk (Supabase / Firebase / Strapi)
- Order management system
- Admin panel untuk kelola produk & stok
- Email notifikasi (order confirmation, shipping update)

### Phase 4 — Growth Features ⬜
- User account & order history
- Wishlist
- Product reviews & ratings
- Promo codes & discount
- Instagram Shop integration
- Google Analytics & Meta Pixel

---

## 6. Non-Functional Requirements

| Requirement | Specification |
|---|---|
| **Performance** | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| **Accessibility** | WCAG 2.1 AA minimum |
| **SEO** | Meta tags, semantic HTML, sitemap.xml |
| **Browser Support** | Chrome 90+, Safari 14+, Firefox 88+, Edge 90+ |
| **Mobile** | Responsive, touch-friendly, min 375px viewport |
| **Security** | HTTPS mandatory, form CSRF protection |

---

## 7. Out of Scope (v1.0)
- Multi-language (ID/EN toggle)
- Multi-currency
- Live chat
- AR try-on
- Subscription / membership model

---

## 8. Stakeholders

| Role | Responsibility |
|---|---|
| Brand Owner | Final approval, content, product direction |
| Frontend Developer | UI implementation, performance |
| Designer | Visual QA, asset creation |
| Backend Developer | API, database, payment (Phase 2+) |
