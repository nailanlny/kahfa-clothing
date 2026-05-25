import type { Metadata } from 'next';
import ClientShell from '@/components/layout/ClientShell';

export const metadata: Metadata = {
  title: {
    default: 'Kahfa — Timeless Essentials',
    template: '%s — Kahfa',
  },
  description:
    'Kahfa is an Indonesia-based clothing brand creating timeless essentials made to last. Shop our latest collection of minimalist streetwear.',
  keywords: ['kahfa', 'clothing', 'streetwear', 'minimalist', 'indonesia', 'fashion'],
  openGraph: {
    title: 'Kahfa — Timeless Essentials',
    description:
      'Kahfa is an Indonesia-based clothing brand creating timeless essentials made to last.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
