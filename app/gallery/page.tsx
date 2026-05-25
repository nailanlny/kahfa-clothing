'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { LOOKBOOK_IMAGES } from '@/data/products';
import styles from '@/styles/Gallery.module.css';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;
  const total = LOOKBOOK_IMAGES.length;

  const openLightbox = (index: number) => setLightboxIndex(index);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const shiftLightbox = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + dir + total) % total,
      );
    },
    [total],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') shiftLightbox(-1);
      if (e.key === 'ArrowRight') shiftLightbox(1);
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, shiftLightbox, closeLightbox]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <div className={styles.galleryHeader}>
        <h1 className={styles.galleryHeaderTitle}>Gallery</h1>
        <p className={styles.galleryHeaderSub}>SS&apos;25 Lookbook — Jakarta</p>
      </div>

      {/* Grid */}
      <div className={styles.galleryGrid}>
        {LOOKBOOK_IMAGES.map((item, i) => (
          <div
            key={i}
            className={styles.galleryItem}
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            aria-label={`Open ${item.label}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
            <div className={styles.galleryItemOverlay}>
              <span className={styles.galleryItemLabel}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div
        className={`${styles.lightbox}${isOpen ? ` ${styles.lightboxOpen}` : ''}`}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Lookbook lightbox"
        aria-hidden={!isOpen}
      >
        <button
          className={styles.lightboxClose}
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          ×
        </button>

        <button
          className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
          onClick={(e) => { e.stopPropagation(); shiftLightbox(-1); }}
          aria-label="Previous image"
        >
          ‹
        </button>

        {lightboxIndex !== null && (
          <Image
            src={LOOKBOOK_IMAGES[lightboxIndex].src}
            alt={LOOKBOOK_IMAGES[lightboxIndex].alt}
            width={900}
            height={1200}
            className={styles.lightboxImg}
            style={{ objectFit: 'contain' }}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <button
          className={`${styles.lightboxNav} ${styles.lightboxNext}`}
          onClick={(e) => { e.stopPropagation(); shiftLightbox(1); }}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </>
  );
}
