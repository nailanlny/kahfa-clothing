import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kahfa is an Indonesia-based clothing brand creating timeless essentials made to last for generations.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
