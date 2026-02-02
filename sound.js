/*
  sound.js
  --------------------
  Ye file sound effects handle karti hai
  App ko professional & interactive feel deti hai
*/

// Audio files
const clickSound = new Audio("assets/sounds/click.mp3");
const cartSound = new Audio("assets/sounds/cart.mp3");
const successSound = new Audio("assets/sounds/success.mp3");

// Play click sound
function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Play add to cart sound
function playCartSound() {
  cartSound.currentTime = 0;
  cartSound.play();
}

// Play success sound
function playSuccessSound() {
  successSound.currentTime = 0;
  successSound.play();
}

// Debug
console.log("sound.js loaded");