'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBag } from '@/components/bag/BagContext';

const NAV_LEFT = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
];

const NAV_RIGHT = [
  { label: 'Gallery', href: '/gallery' },
];

interface SiteHeaderProps {
  onSearchOpen: () => void;
}

export default function SiteHeader({ onSearchOpen }: SiteHeaderProps) {
  const pathname = usePathname();
  const { openBag, totalCount } = useBag();

  return (
    <header className="site-header">
      <nav className="site-header__nav site-header__nav--left" aria-label="Primary navigation">
        {NAV_LEFT.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/" className="site-header__logo" aria-label="Kahfa — home">
        Kahfa
      </Link>

      <nav className="site-header__nav site-header__nav--right" aria-label="Secondary navigation">
        {NAV_RIGHT.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}

        <button
          className="nav-link"
          onClick={onSearchOpen}
          aria-label="Open search"
        >
          Search
        </button>

        <button
          className="nav-link"
          onClick={openBag}
          aria-label={`Open bag, ${totalCount} items`}
        >
          My Bag ({totalCount})
        </button>
      </nav>
    </header>
  );
}
