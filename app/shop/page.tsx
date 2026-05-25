'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, type ProductCategory } from '@/data/products';
import type { Product } from '@/data/products';
import { useBag } from '@/components/bag/BagContext';
import ProductCard from '@/components/products/ProductCard';
import styles from '@/styles/Shop.module.css';
import type { Metadata } from 'next';

type FilterValue = 'all' | ProductCategory;
type SortValue = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Tops', value: 'tops' },
  { label: 'Bottoms', value: 'bottoms' },
  { label: 'Outerwear', value: 'outerwear' },
];

const SORTS: { label: string; value: SortValue }[] = [
  { label: 'Sort: Featured', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A–Z', value: 'name-asc' },
];

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [sort, setSort] = useState<SortValue>('default');
  const { addItem } = useBag();

  const products = useMemo(() => {
    let list = filter === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === filter);

    if (sort === 'price-asc') list.sort((a, b) => a.priceNum - b.priceNum);
    else if (sort === 'price-desc') list.sort((a, b) => b.priceNum - a.priceNum);
    else if (sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [filter, sort]);

  const handleQuickAdd = (product: Product) => {
    addItem(product, product.sizes[0]);
  };

  return (
    <>
      {/* Shop Header */}
      <div className={styles.shopHeader}>
        <h1 className={styles.shopHeaderTitle}>All Products</h1>
        <span className={styles.shopHeaderCount}>
          {products.length} product{products.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarLeft}>
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              className={`${styles.filterBtn}${filter === value ? ` ${styles.filterBtnActive}` : ''}`}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
        </div>

        <select
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortValue)}
          aria-label="Sort products"
        >
          {SORTS.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {products.length === 0 ? (
          <div className={styles.noProducts}>No products found in this category.</div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={handleQuickAdd}
            />
          ))
        )}
      </div>
    </>
  );
}
