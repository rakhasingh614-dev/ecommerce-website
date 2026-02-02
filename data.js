/*
  data.js
  --------------------
  Is file me saare products ka data hota hai.
  Ye database ka demo version samajh lo.
*/

// Product list (sample data)
const PRODUCTS = [
  {
    id: 1,
    name: "Smart Phone",
    price: 9999,
    image: "https://via.placeholder.com/150",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2999,
    image: "https://via.placeholder.com/150",
    category: "Wearables"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1499,
    image: "https://via.placeholder.com/150",
    category: "Audio"
  }
];

// Check (debug)
console.log("Products loaded:", PRODUCTS.length);