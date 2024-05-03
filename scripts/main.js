const menu = {
  isOpen: false,
  menu: document.querySelector(".menu"),
  menuToggle: document.querySelector(".menu__toggle"),
  menuCloseBtn: document.querySelector(".menu__close"),
};

const cart = {
  isOpen: false,
  cartCard: document.querySelector(".cart__card"),
  cartToggle: document.querySelector(".cart__toggle"),
};

const overlay = document.querySelector(".overlay");

//MENU
menu.menuToggle.addEventListener("click", () => {
  menu.isOpen = !menu.isOpen;
  menu.menu.style.display = menu.isOpen ? "block" : "none";

  overlay.style.display = menu.isOpen ? "block" : "none";

  document.documentElement.style.overflowY = menu.isOpen ? "hidden" : "visible";
});

menu.menuCloseBtn.addEventListener("click", () => {
  menu.isOpen = false;
  menu.menu.style.display = "none";
  overlay.style.display = "none";
  document.documentElement.style.overflowY = "visible";
});

//CART
cart.cartToggle.addEventListener("click", () => {
  cart.isOpen = !cart.isOpen;
  cart.cartCard.style.display = cart.isOpen ? "block" : "none";
});
