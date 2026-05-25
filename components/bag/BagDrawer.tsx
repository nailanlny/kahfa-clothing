'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBag } from '@/components/bag/BagContext';

export default function BagDrawer() {
  const { items, isOpen, closeBag, removeItem, changeQty, totalPrice } = useBag();

  return (
    <>
      {/* Overlay */}
      <div
        className={`bag-overlay${isOpen ? ' is-open' : ''}`}
        onClick={closeBag}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`bag-drawer${isOpen ? ' is-open' : ''}`}
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
      >
        <div className="bag-drawer__header">
          <span className="bag-drawer__title">
            My Bag ({items.reduce((s, i) => s + i.qty, 0)})
          </span>
          <button
            className="bag-drawer__close"
            onClick={closeBag}
            aria-label="Close bag"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="bag-drawer__empty">
            <span className="empty-icon">🛍</span>
            <span>Your bag is empty</span>
            <Link href="/shop" onClick={closeBag} className="bag-drawer__shop-link">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="bag-drawer__items">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bag-item">
                  <div className="bag-item__img">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={88}
                      height={88}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div>
                    <div className="bag-item__name">{item.name}</div>
                    <div className="bag-item__meta">Size: {item.size}</div>
                    <div className="bag-item__qty">
                      <button
                        onClick={() => changeQty(item.id, item.size, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span style={{ fontSize: '12px', fontWeight: 300 }}>{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, item.size, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="bag-item__remove"
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="bag-item__price">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="bag-drawer__footer">
              <div className="bag-drawer__subtotal">
                <span>Subtotal</span>
                <strong>{totalPrice}</strong>
              </div>
              <button className="bag-drawer__checkout">Checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
