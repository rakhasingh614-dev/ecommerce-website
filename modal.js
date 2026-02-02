/*
  modal.js
  --------------------
  Ye file popup / modal ka logic handle karti hai
  Cart, Login, Order Success jaise popups isi se open honge
*/

const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const modalContent = document.getElementById("modalContent");

// Modal open
function openModal(htmlContent) {
  modalContent.innerHTML = htmlContent;
  modalOverlay.classList.add("active");
}

// Modal close
function closeModal() {
  modalOverlay.classList.remove("active");
  modalContent.innerHTML = "";
}

// Close on overlay click
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Debug
console.log("modal.js loaded");