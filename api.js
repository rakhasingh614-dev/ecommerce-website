/*
  api.js
  --------------------
  Ye file backend / server API ko simulate karti hai
  Real backend aane par isi structure ko replace kiya ja sakta hai
*/

// Fake delay (real server jaisa feel)
function fakeDelay(ms = 800) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Products laane ka function
async function fetchProducts() {
  await fakeDelay();
  return PRODUCTS; // products.js se aa raha hai
}

// Order place karne ka function
async function placeOrder(cartItems, totalAmount) {
  await fakeDelay();

  if (!cartItems || cartItems.length === 0) {
    return {
      success: false,
      message: "Cart is empty"
    };
  }

  return {
    success: true,
    orderId: "ORD" + Math.floor(Math.random() * 100000),
    amount: totalAmount,
    message: "Order placed successfully"
  };
}

// User login simulation
async function loginUser(email, password) {
  await fakeDelay();

  if (email && password) {
    return {
      success: true,
      token: "fake-jwt-token",
      user: {
        name: "Demo User",
        email: email
      }
    };
  }

  return {
    success: false,
    message: "Invalid credentials"
  };
}

// Debug
console.log("api.js loaded");