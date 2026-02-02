/*
  data.js
  --------------------
  Ye file products ka data store karti hai
  Future me backend / API se replace ho sakti hai
*/

const PRODUCTS = [
  {
    id: "p1",
    name: "Wireless Headphones",
    price: 1999,
    image: "assets/products/headphone.jpg",
    category: "electronics"
  },
  {
    id: "p2",
    name: "Smart Watch",
    price: 2999,
    image: "assets/products/watch.jpg",
    category: "electronics"
  },
  {
    id: "p3",
    name: "Men Casual Shoes",
    price: 2499,
    image: "assets/products/shoes.jpg",
    category: "fashion"
  },
  {
    id: "p4",
    name: "Women Handbag",
    price: 1799,
    image: "assets/products/bag.jpg",
    category: "fashion"
  },
  {
    id: "p5",
    name: "Bluetooth Speaker",
    price: 1599,
    image: "assets/products/speaker.jpg",
    category: "electronics"
  },
  {
    id: "p6",
    name: "Cotton T-Shirt",
    price: 799,
    image: "assets/products/tshirt.jpg",
    category: "fashion"
  }
];

// Debug
console.log("data.js loaded with", PRODUCTS.length, "products");