/*
  auth.js
  --------------------
  Ye file login, logout aur user session manage karti hai
  Real backend ke liye easily extend ho sakti hai
*/

let currentUser = null;

// Login function
async function login(email, password) {
  const response = await loginUser(email, password); // api.js

  if (response.success) {
    currentUser = response.user;
    localStorage.setItem("user", JSON.stringify(currentUser));
    return true;
  } else {
    alert(response.message);
    return false;
  }
}

// Logout function
function logout() {
  currentUser = null;
  localStorage.removeItem("user");
  alert("Logged out successfully");
}

// Load user on refresh
function loadUser() {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
}

// Check login status
function isLoggedIn() {
  return currentUser !== null;
}

// Init
loadUser();

// Debug
console.log("auth.js loaded", currentUser);