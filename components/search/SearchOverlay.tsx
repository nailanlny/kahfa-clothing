'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';

const PAGES = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const q = query.toLowerCase().trim();
  const filteredPages = q ? PAGES.filter((p) => p.name.toLowerCase().includes(q)) : PAGES;
  const filteredProducts = q
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q))
    : PRODUCTS.slice(0, 3);

  return (
    <div
      className={`search-overlay${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      aria-hidden={!isOpen}
    >
      <button
        className="search-overlay__close"
        onClick={handleClose}
        aria-label="Close search"
      >
        ×
      </button>

      <div className="search-overlay__input-wrap">
        <input
          id="search-input"
          type="text"
          className="search-overlay__input"
          placeholder="Search products..."
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search input"
        />
      </div>

      <div className="search-results">
        {/* Pages column */}
        <div>
          <div className="search-results__title">Pages</div>
          {filteredPages.length > 0 ? (
            filteredPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="search-results__item"
                onClick={handleClose}
              >
                {page.name}
              </Link>
            ))
          ) : (
            <div className="search-results__empty">No pages found</div>
          )}
        </div>

        {/* Products column */}
        <div>
          <div className="search-results__title">Products</div>
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href="/shop"
                className="search-results__item"
                onClick={handleClose}
              >
                <div className="search-results__thumb">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={44}
                    height={44}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <span>
                  {product.name}
                  <br />
                  <small style={{ opacity: 0.5 }}>{product.price}</small>
                </span>
              </Link>
            ))
          ) : (
            <div className="search-results__empty">No products found</div>
          )}
        </div>
      </div>
    </div>
  );
}
