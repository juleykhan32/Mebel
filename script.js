let priceCard = document.querySelectorAll(".price__card");
let catalogBtn = document.querySelector(".catalog__link");
let dropDownMenu = document.querySelector(".catalog__kitchen");

priceCard.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
    elem.addEventListener("mouseout", () => {
      elem.classList.remove("active");
    });
  });
});

catalogBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
});

let burger = document.querySelector(".burger__btn");
let menuClose = document.querySelector(".exit");
let menuOpen = document.querySelector(".header__menu");
let bodyLock = document.querySelector("body");

burger.addEventListener("click", () => {
  menuOpen.classList.add("open");
  bodyLock.classList.add("lock");
});

menuClose.addEventListener("click", () => {
  menuOpen.classList.remove("open");
  bodyLock.classList.remove("lock");
});
