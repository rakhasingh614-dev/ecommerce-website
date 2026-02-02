/*
  util.js
  --------------------
  Is file me helper / utility functions hote hain
  jo poori app me reuse kiye jaate hain.
*/

/**
 * Price ko currency format me convert karta hai
 * @param {number} price
 * @returns {string}
 */
function formatPrice(price) {
  return APP_CONFIG.currency + price.toLocaleString("en-IN");
}

/**
 * LocalStorage me data save karta hai
 * @param {string} key
 * @param {any} value
 */
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * LocalStorage se data read karta hai
 * @param {string} key
 * @returns {any}
 */
function getFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

/**
 * Simple unique ID generator
 * @returns {string}
 */
function generateId() {
  return "id-" + Date.now();
}

// Debug check
console.log("util.js loaded");