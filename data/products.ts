// KAHFA — Product data
// Single source of truth untuk semua produk

export type ProductCategory = 'tops' | 'bottoms' | 'outerwear';
export type ProductBadge = 'New' | 'Low Stock' | 'Sold Out' | null;

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  category: ProductCategory;
  img: string;
  badge: ProductBadge;
  sizes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'essential-tee-black',
    name: 'Kahfa Essential Tee — Black',
    price: 'Rp 299.000',
    priceNum: 299000,
    category: 'tops',
    img: '/images/product_tshirt_black.png',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    slug: 'essential-tee-cream',
    name: 'Kahfa Essential Tee — Cream',
    price: 'Rp 299.000',
    priceNum: 299000,
    category: 'tops',
    img: '/images/product_tshirt_cream.png',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    slug: 'bomber-jacket-black',
    name: 'Kahfa Bomber Jacket — Black',
    price: 'Rp 749.000',
    priceNum: 749000,
    category: 'outerwear',
    img: '/images/product_jacket_black.png',
    badge: 'New',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    slug: 'wide-leg-trousers',
    name: 'Kahfa Wide-Leg Trousers',
    price: 'Rp 449.000',
    priceNum: 449000,
    category: 'bottoms',
    img: '/images/product_pants_black.png',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    slug: 'oversized-hoodie',
    name: 'Kahfa Oversized Hoodie',
    price: 'Rp 499.000',
    priceNum: 499000,
    category: 'tops',
    img: '/images/product_tshirt_black.png',
    badge: 'Low Stock',
    sizes: ['M', 'L'],
  },
  {
    id: 6,
    slug: 'linen-shirt-cream',
    name: 'Kahfa Linen Shirt — Cream',
    price: 'Rp 379.000',
    priceNum: 379000,
    category: 'tops',
    img: '/images/product_tshirt_cream.png',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export const LOOKBOOK_IMAGES = [
  { src: '/images/lookbook_01.png', alt: 'Kahfa Lookbook 01', label: "SS'25 — 01" },
  { src: '/images/lookbook_02.png', alt: 'Kahfa Lookbook 02', label: "SS'25 — 02" },
  { src: '/images/lookbook_03.png', alt: 'Kahfa Lookbook 03', label: "SS'25 — 03" },
  { src: '/images/lookbook_04.png', alt: 'Kahfa Lookbook 04', label: "SS'25 — 04" },
  { src: '/images/lookbook_05.png', alt: 'Kahfa Lookbook 05', label: "SS'25 — 05" },
  { src: '/images/lookbook_06.png', alt: 'Kahfa Lookbook 06', label: "SS'25 — 06" },
];
