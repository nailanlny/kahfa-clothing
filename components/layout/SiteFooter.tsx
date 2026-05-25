import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/shop" className="footer-link">Shop</Link>
          <Link href="/about" className="footer-link">About</Link>
        </nav>
        <nav className="site-footer__nav site-footer__nav--right" aria-label="Footer secondary navigation">
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">Newsletter</a>
          <Link href="/about" className="footer-link">Contact</Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        KAHFA &copy; 2025 &nbsp;·&nbsp;{' '}
        <a href="#" style={{ color: 'inherit' }}>Refund Policy</a>
        &nbsp;·&nbsp;{' '}
        <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
        &nbsp;·&nbsp;{' '}
        <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
      </div>
    </footer>
  );
}
