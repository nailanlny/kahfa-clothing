import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickAdd?: (product: Product) => void;
  /** If provided, wraps the card in a link; otherwise renders a div */
  href?: string;
}

export default function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  const badgeClass =
    product.badge === 'Sold Out'
      ? 'product-card__badge product-card__badge--soldout'
      : 'product-card__badge';

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <Image
          src={product.img}
          alt={product.name}
          width={600}
          height={800}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />

        {product.badge && (
          <span className={badgeClass}>{product.badge}</span>
        )}

        {onQuickAdd && product.badge !== 'Sold Out' && (
          <div className="product-card__overlay">
            <button
              className="quick-add-btn"
              onClick={() => onQuickAdd(product)}
              aria-label={`Quick add ${product.name} to bag`}
            >
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{product.price}</p>
      </div>
    </div>
  );
}
