'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useBag } from '@/components/bag/BagContext';
import { PRODUCTS, LOOKBOOK_IMAGES } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/data/products';
import styles from '@/styles/Home.module.css';

const FEATURED_IDS = [3, 2, 4]; // Bomber Jacket, Essential Tee Cream, Wide-Leg Trousers

export default function HomePage() {
  const { addItem } = useBag();
  const [subscribed, setSubscribed] = useState(false);

  const featuredProducts = FEATURED_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id),
  ).filter(Boolean) as Product[];

  const lookbookTeaser = LOOKBOOK_IMAGES.slice(0, 3);

  const handleQuickAdd = (product: Product) => {
    addItem(product, product.sizes[0]);
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/images/hero_main.png"
          alt="Kahfa SS'25 Collection"
          fill
          className={styles.heroImg}
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroCta}>
            <Link href="/shop" className="btn btn-outline">
              Shop All
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className={styles.featuredHeader}>
          <p className="section-title" style={{ margin: 0 }}>New Arrivals</p>
          <Link href="/shop" className="nav-link" style={{ fontSize: '11px', letterSpacing: '1px' }}>
            View All →
          </Link>
        </div>
        <div className={styles.featuredGrid}>
          {featuredProducts.map((product) => (
            <Link key={product.id} href="/shop">
              <ProductCard product={product} onQuickAdd={handleQuickAdd} />
            </Link>
          ))}
        </div>
      </section>

      {/* Collection Banner */}
      <div className={styles.collectionBanner}>
        <div className={styles.collectionBannerImg}>
          <Image
            src="/images/lookbook_02.png"
            alt="Kahfa SS25 Lookbook"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.collectionBannerContent}>
          <p className={styles.collectionBannerLabel}>SS &apos;25 Collection</p>
          <h2 className={styles.collectionBannerTitle}>
            Objects,<br />Art &amp;<br />Everyday Culture
          </h2>
          <p className={styles.collectionBannerDesc}>
            Timeless essentials made to last for generations. We blend elements
            of objects, art, and everyday culture to thoughtfully fill the gaps
            in your wardrobe.
          </p>
          <Link href="/shop" className="btn btn-outline-dark" style={{ alignSelf: 'flex-start' }}>
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Lookbook Teaser */}
      <section className={styles.featured} style={{ paddingTop: 0 }}>
        <div className={styles.featuredHeader}>
          <p className="section-title" style={{ margin: 0 }}>Lookbook</p>
          <Link href="/gallery" className="nav-link" style={{ fontSize: '11px', letterSpacing: '1px' }}>
            View Gallery →
          </Link>
        </div>
        <div className={styles.featuredGrid}>
          {lookbookTeaser.map((item, i) => (
            <Link key={i} href="/gallery" className="product-card">
              <div className="product-card__img-wrap" style={{ position: 'relative' }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Strip */}
      <div className={styles.infoStrip}>
        {[
          { icon: '✦', title: 'Free Shipping', desc: 'On all orders above Rp 500.000 within Indonesia.' },
          { icon: '◎', title: 'Quality First', desc: 'Premium materials selected for longevity and comfort.' },
          { icon: '↩', title: 'Easy Returns', desc: '14-day hassle-free return policy on all products.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} className={styles.infoStripItem}>
            <span className={styles.infoStripIcon}>{icon}</span>
            <p className={styles.infoStripTitle}>{title}</p>
            <p className={styles.infoStripDesc}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <p className={styles.newsletterTitle}>Stay Updated</p>
        <h3 className={styles.newsletterHeading}>Join the Kahfa Community</h3>
        {subscribed ? (
          <p className={styles.newsletterSuccess}>Thank you for subscribing!</p>
        ) : (
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
          >
            <input
              type="email"
              className={styles.newsletterInput}
              placeholder="Your email address"
              required
              aria-label="Email address"
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe
            </button>
          </form>
        )}
      </section>
    </>
  );
}
