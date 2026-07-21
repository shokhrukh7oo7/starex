// =========================== BURGER MENU ===========================
const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");

// открыть бургер
burgerBtn?.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// закрыть бургер
mobileClose?.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
// ===================================================================

// ===================================================================