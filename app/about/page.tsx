'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LOOKBOOK_IMAGES } from '@/data/products';
import styles from '@/styles/About.module.css';

const BRAND_VALUES = [
  {
    num: '01',
    title: 'Craftsmanship',
    desc: 'Every piece is designed with precision and produced from carefully selected premium materials that stand the test of time.',
  },
  {
    num: '02',
    title: 'Intentional Design',
    desc: 'We create with purpose — no excess, no trend-chasing. Only pieces that genuinely belong in your wardrobe, season after season.',
  },
  {
    num: '03',
    title: 'Community',
    desc: "Kahfa is more than a brand. It's a community of individuals who value self-expression through understated, confident style.",
  },
];

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const lookbookStrip = LOOKBOOK_IMAGES.slice(3, 6);

  return (
    <>
      {/* About Split */}
      <section className={styles.aboutSplit}>
        <div className={styles.aboutSplitImg}>
          <Image
            src="/images/lookbook_02.png"
            alt="Kahfa Brand Story"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className={styles.aboutSplitContent}>
          <p className={styles.aboutSplitLabel}>Our Story</p>
          <h1 className={styles.aboutSplitTitle}>About<br />Us</h1>
          <p className={styles.aboutSplitText}>
            &quot;Kahfa&quot; is an Indonesia-based clothing brand that creates timeless
            essentials made to last for generations. We blend elements of objects, art,
            and everyday culture to thoughtfully fill the gaps in your wardrobe.
          </p>
          <p className={styles.aboutSplitText}>
            Founded in Jakarta, we believe in slow fashion — pieces designed with
            intention, built with quality, and worn with pride. Every stitch tells a story.
          </p>
          <Link href="/shop" className="btn btn-outline-dark" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Brand Values */}
      <div className={styles.brandValues}>
        {BRAND_VALUES.map(({ num, title, desc }) => (
          <div key={num} className={styles.brandValue}>
            <p className={styles.brandValueNum}>{num}</p>
            <h3 className={styles.brandValueTitle}>{title}</h3>
            <p className={styles.brandValueDesc}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Lookbook Strip */}
      <div className={styles.lookbookStrip}>
        {lookbookStrip.map((item, i) => (
          <div key={i} className={styles.lookbookStripItem}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactSectionTitle}>Contact Us</h2>
        {submitted ? (
          <p className={styles.formSuccess}>
            ✓ Message sent. We&apos;ll be in touch soon.
          </p>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                className={styles.formInput}
                placeholder="How can we help?"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className={styles.formTextarea}
                placeholder="Tell us more..."
                required
              />
            </div>
            <button type="submit" className={styles.formSubmit}>
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
