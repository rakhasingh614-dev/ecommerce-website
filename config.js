/*
  config.js
  --------------------
  Is file me app ki basic settings hoti hain
  jaise app name, currency, tax, etc.
*/

// App basic info
const APP_CONFIG = {
  appName: "MyShop",
  currency: "₹",
  taxPercent: 5,
  version: "1.0.0"
};

// Cart settings
const CART_CONFIG = {
  maxItems: 20,
  storageKey: "MYSHOP_CART"
};

// Auth settings (future use)
const AUTH_CONFIG = {
  loginRequired: true
};

// Console message (check karne ke liye)
console.log(APP_CONFIG.appName + " config loaded");