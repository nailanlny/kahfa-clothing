import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Explore the Kahfa lookbook — editorial photography featuring our SS'25 collection.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
