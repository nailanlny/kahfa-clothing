// KAHFA — shop.js: Product rendering, filter, sort

let currentFilter = 'all';
let currentSort = 'default';

function getFilteredProducts() {
  let list = currentFilter === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentFilter);

  if (currentSort === 'price-asc') list.sort((a, b) => a.priceNum - b.priceNum);
  else if (currentSort === 'price-desc') list.sort((a, b) => b.priceNum - a.priceNum);
  else if (currentSort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const count = document.getElementById('product-count');
  if (!grid) return;

  const list = getFilteredProducts();
  if (count) count.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-products">No products found in this category.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-card__img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-card__badge${p.badge === 'Sold Out' ? ' product-card__badge--soldout' : ''}">${p.badge}</span>` : ''}
        <div class="product-card__overlay">
          <button class="quick-add-btn" onclick="showSizeSelect(${p.id})">Quick Add</button>
        </div>
      </div>
      <div class="product-card__info">
        <p class="product-card__name">${p.name}</p>
        <p class="product-card__price">${p.price}</p>
      </div>
    </div>
  `).join('');
}

function filterProducts(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function sortProducts(value) {
  currentSort = value;
  renderProducts();
}

function showSizeSelect(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = product.sizes[0];
  addToBag(productId, size);
}

// Init after main.js injectShared runs
document.addEventListener('DOMContentLoaded', () => {
  // Wait a tick for main.js to finish
  setTimeout(renderProducts, 50);
});
