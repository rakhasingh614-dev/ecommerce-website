/*
  app.js
  --------------------
  Ye main controller file hai
  - Products render karti hai
  - Cart handle karti hai
  - Button events manage karti hai
*/

let cart = getFromStorage("cart") || [];

/**
 * Products ko homepage par dikhata hai
 */
function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  productGrid.innerHTML = "";

  PRODUCTS.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${formatPrice(product.price)}</p>
      <button onclick="addToCart('${product.id}')">
        Add to Cart
      </button>
    `;

    productGrid.appendChild(card);
  });
}

/**
 * Cart me product add karta hai
 * @param {string} productId
 */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveToStorage("cart", cart);
  updateCartCount();
  alert("Product added to cart");
}

/**
 * Cart items count update karta hai
 */
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
}

/**
 * App start hote hi run hota hai
 */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();
});

// Debug
console.log("app.js loaded");