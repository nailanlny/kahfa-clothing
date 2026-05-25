// Announcement ticker — scrolling promo bar

const TICKER_ITEMS = [
  { text: 'For All Orders Above Rp 500.000', highlight: 'Free Shipping' },
  { text: "New Collection — SS'25 Now Available", highlight: null },
  { text: 'For All Orders Above Rp 500.000', highlight: 'Free Shipping' },
  { text: 'Timeless Essentials Made to Last', highlight: null },
  { text: 'For All Orders Above Rp 500.000', highlight: 'Free Shipping' },
  { text: "New Collection — SS'25 Now Available", highlight: null },
  { text: 'For All Orders Above Rp 500.000', highlight: 'Free Shipping' },
  { text: 'Timeless Essentials Made to Last', highlight: null },
];

export default function Ticker() {
  return (
    <div className="ticker" role="marquee" aria-label="Announcements">
      <div className="ticker__track">
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className="ticker__item">
            {item.highlight && <span>{item.highlight}</span>}
            {item.highlight ? ` ${item.text}` : item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
