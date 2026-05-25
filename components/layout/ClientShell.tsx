'use client';

import { useState, useEffect, useCallback } from 'react';
import { BagProvider } from '@/components/bag/BagContext';
import BagDrawer from '@/components/bag/BagDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Ticker from '@/components/layout/Ticker';
import '@/app/globals.css';

interface ClientShellProps {
  children: React.ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Global keyboard shortcut: Cmd/Ctrl + K → open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <BagProvider>
      <Ticker />
      <SiteHeader onSearchOpen={openSearch} />
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
      <BagDrawer />
      <main className="page-main">{children}</main>
      <SiteFooter />
    </BagProvider>
  );
}
