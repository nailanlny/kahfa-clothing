// KAHFA — main.js: Shared logic for all pages

const PRODUCTS = [
  { id: 1, name: 'Kahfa Essential Tee — Black', price: 'Rp 299.000', priceNum: 299000, category: 'tops', img: 'assets/images/product_tshirt_black.png', badge: null, sizes: ['S','M','L','XL'] },
  { id: 2, name: 'Kahfa Essential Tee — Cream', price: 'Rp 299.000', priceNum: 299000, category: 'tops', img: 'assets/images/product_tshirt_cream.png', badge: null, sizes: ['S','M','L','XL'] },
  { id: 3, name: 'Kahfa Bomber Jacket — Black', price: 'Rp 749.000', priceNum: 749000, category: 'outerwear', img: 'assets/images/product_jacket_black.png', badge: 'New', sizes: ['S','M','L'] },
  { id: 4, name: 'Kahfa Wide-Leg Trousers', price: 'Rp 449.000', priceNum: 449000, category: 'bottoms', img: 'assets/images/product_pants_black.png', badge: null, sizes: ['S','M','L','XL'] },
  { id: 5, name: 'Kahfa Oversized Hoodie', price: 'Rp 499.000', priceNum: 499000, category: 'tops', img: 'assets/images/product_tshirt_black.png', badge: 'Low Stock', sizes: ['M','L'] },
  { id: 6, name: 'Kahfa Linen Shirt — Cream', price: 'Rp 379.000', priceNum: 379000, category: 'tops', img: 'assets/images/product_tshirt_cream.png', badge: null, sizes: ['S','M','L','XL'] }
];

// ── Bag ──────────────────────────────────────────────────────
let bag = JSON.parse(localStorage.getItem('kahfa-bag') || '[]');

function saveBag() { localStorage.setItem('kahfa-bag', JSON.stringify(bag)); }

function addToBag(productId, size) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = bag.find(i => i.id === productId && i.size === size);
  if (existing) existing.qty++;
  else bag.push({ ...product, size: size || 'M', qty: 1 });
  saveBag(); updateBagCount(); renderBagItems(); openBag();
}

function removeFromBag(productId, size) {
  bag = bag.filter(i => !(i.id === productId && i.size === size));
  saveBag(); updateBagCount(); renderBagItems();
}

function changeQty(productId, size, delta) {
  const item = bag.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromBag(productId, size);
  else { saveBag(); renderBagItems(); }
}

function getBagCount() { return bag.reduce((s, i) => s + i.qty, 0); }
function getBagTotal() {
  const t = bag.reduce((s, i) => s + i.priceNum * i.qty, 0);
  return 'Rp ' + t.toLocaleString('id-ID');
}
function updateBagCount() {
  document.querySelectorAll('.bag-count').forEach(el => el.textContent = getBagCount());
}

function renderBagItems() {
  const container = document.getElementById('bag-items');
  const footer = document.getElementById('bag-footer');
  const empty = document.getElementById('bag-empty');
  if (!container) return;
  if (bag.length === 0) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (footer) footer.style.display = 'block';
  container.innerHTML = bag.map(item => `
    <div class="bag-item">
      <div class="bag-item__img"><img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;"></div>
      <div>
        <div class="bag-item__name">${item.name}</div>
        <div class="bag-item__meta">Size: ${item.size}</div>
        <div class="bag-item__qty">
          <button onclick="changeQty(${item.id},'${item.size}',-1)">−</button>
          <span style="font-size:12px;font-weight:300;">${item.qty}</span>
          <button onclick="changeQty(${item.id},'${item.size}',1)">+</button>
          <button onclick="removeFromBag(${item.id},'${item.size}')" style="margin-left:auto;font-size:10px;color:#999;border:none;background:none;cursor:pointer;letter-spacing:1px;text-transform:uppercase;">Remove</button>
        </div>
      </div>
      <div class="bag-item__price">${item.price}</div>
    </div>`).join('');
  const sub = document.getElementById('bag-subtotal');
  if (sub) sub.textContent = getBagTotal();
}

// ── Overlays ────────────────────────────────────────────────
function openBag() {
  document.getElementById('bag-overlay')?.classList.add('is-open');
  document.getElementById('bag-drawer')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeBag() {
  document.getElementById('bag-overlay')?.classList.remove('is-open');
  document.getElementById('bag-drawer')?.classList.remove('is-open');
  document.body.style.overflow = '';
}
function openSearch() {
  document.getElementById('search-overlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('search-input')?.focus(), 100);
}
function closeSearch() {
  document.getElementById('search-overlay')?.classList.remove('is-open');
  document.body.style.overflow = '';
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  renderSearchResults('');
}

function renderSearchResults(query) {
  const pagesEl = document.getElementById('search-pages');
  const prodsEl = document.getElementById('search-products');
  if (!pagesEl || !prodsEl) return;
  const pages = [
    { name: 'Home', url: 'index.html' },
    { name: 'Shop', url: 'shop.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Gallery', url: 'gallery.html' }
  ];
  const q = query.toLowerCase().trim();
  const filteredPages = q ? pages.filter(p => p.name.toLowerCase().includes(q)) : pages;
  const filteredProds = q ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q)) : PRODUCTS.slice(0, 3);
  pagesEl.innerHTML = filteredPages.length
    ? filteredPages.map(p => `<a href="${p.url}" class="search-results__item">${p.name}</a>`).join('')
    : `<div style="color:rgba(255,255,255,0.3);font-size:11px;letter-spacing:1px;">No pages found</div>`;
  prodsEl.innerHTML = filteredProds.length
    ? filteredProds.slice(0, 4).map(p => `
        <div class="search-results__item" onclick="window.location='shop.html'" style="cursor:pointer;">
          <div class="search-results__thumb"><img src="${p.img}" alt="" style="width:100%;height:100%;object-fit:cover;"></div>
          <span>${p.name}<br><small style="opacity:0.5;">${p.price}</small></span>
        </div>`).join('')
    : `<div style="color:rgba(255,255,255,0.3);font-size:11px;letter-spacing:1px;">No products found</div>`;
}

// ── Inject Shared HTML ───────────────────────────────────────
function injectShared() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (p) => page === p ? 'active' : '';

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="search-overlay" id="search-overlay">
      <button class="search-overlay__close" onclick="closeSearch()">×</button>
      <div class="search-overlay__input-wrap">
        <input type="text" class="search-overlay__input" id="search-input" placeholder="Search products..." autocomplete="off">
      </div>
      <div class="search-results">
        <div><div class="search-results__title">Pages</div><div id="search-pages"></div></div>
        <div><div class="search-results__title">Products</div><div id="search-products"></div></div>
      </div>
    </div>
    <div class="bag-overlay" id="bag-overlay" onclick="closeBag()"></div>
    <div class="bag-drawer" id="bag-drawer">
      <div class="bag-drawer__header">
        <span class="bag-drawer__title">My Bag (<span class="bag-count">0</span>)</span>
        <button class="bag-drawer__close" onclick="closeBag()">×</button>
      </div>
      <div class="bag-drawer__empty" id="bag-empty" style="display:flex;">
        <span class="empty-icon">🛍</span>
        <span>Your bag is empty</span>
        <a href="shop.html" onclick="closeBag()" style="font-size:10px;letter-spacing:2px;text-transform:uppercase;text-decoration:underline;margin-top:4px;">Shop Now</a>
      </div>
      <div class="bag-drawer__items" id="bag-items"></div>
      <div class="bag-drawer__footer" id="bag-footer" style="display:none;">
        <div class="bag-drawer__subtotal"><span>Subtotal</span><strong id="bag-subtotal">Rp 0</strong></div>
        <button class="bag-drawer__checkout">Checkout</button>
      </div>
    </div>
    <div class="ticker"><div class="ticker__track">
      <span class="ticker__item"><span>Free Shipping</span> For All Orders Above Rp 500.000</span>
      <span class="ticker__item">New Collection — SS'25 Now Available</span>
      <span class="ticker__item"><span>Free Shipping</span> For All Orders Above Rp 500.000</span>
      <span class="ticker__item">Timeless Essentials Made to Last</span>
      <span class="ticker__item"><span>Free Shipping</span> For All Orders Above Rp 500.000</span>
      <span class="ticker__item">New Collection — SS'25 Now Available</span>
      <span class="ticker__item"><span>Free Shipping</span> For All Orders Above Rp 500.000</span>
      <span class="ticker__item">Timeless Essentials Made to Last</span>
    </div></div>
    <header class="site-header">
      <nav class="site-header__nav site-header__nav--left">
        <a href="index.html" class="nav-link ${isActive('index.html')}">Home</a>
        <a href="shop.html" class="nav-link ${isActive('shop.html')}">Shop</a>
        <a href="about.html" class="nav-link ${isActive('about.html')}">About</a>
      </nav>
      <a href="index.html" class="site-header__logo">Kahfa</a>
      <nav class="site-header__nav site-header__nav--right">
        <a href="gallery.html" class="nav-link ${isActive('gallery.html')}">Gallery</a>
        <button class="nav-link" onclick="openSearch()" style="background:none;border:none;cursor:pointer;padding:0;font-family:inherit;">Search</button>
        <button class="nav-link" onclick="openBag()" style="background:none;border:none;cursor:pointer;padding:0;font-family:inherit;">My Bag (<span class="bag-count">0</span>)</button>
      </nav>
    </header>`);

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <div class="site-footer__top">
        <nav class="site-footer__nav">
          <a href="index.html" class="footer-link">Home</a>
          <a href="shop.html" class="footer-link">Shop</a>
          <a href="about.html" class="footer-link">About</a>
        </nav>
        <nav class="site-footer__nav site-footer__nav--right">
          <a href="#" class="footer-link">Instagram</a>
          <a href="#" class="footer-link">Newsletter</a>
          <a href="about.html" class="footer-link">Contact</a>
        </nav>
      </div>
      <div class="site-footer__bottom">
        KAHFA © 2025 &nbsp;·&nbsp; <a href="#" style="color:inherit;">Refund Policy</a> &nbsp;·&nbsp; <a href="#" style="color:inherit;">Privacy Policy</a> &nbsp;·&nbsp; <a href="#" style="color:inherit;">Terms of Service</a>
      </div>
    </footer>`);

  document.getElementById('search-input')?.addEventListener('input', e => renderSearchResults(e.target.value));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); closeBag(); }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  renderSearchResults('');
  updateBagCount();
  renderBagItems();
}

document.addEventListener('DOMContentLoaded', injectShared);
