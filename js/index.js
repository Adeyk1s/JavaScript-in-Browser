const showMoreBtn = document.querySelector(".show-more");
const container = document.querySelector(".brands.high-resolution");
const items = document.querySelectorAll(".brand__item.high-resolution");
let isMoreVisible = false;

function initSlider() {
  if (window.innerWidth < 767) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

function showItems() {
  let toShow = window.innerWidth <= 1000 ? 6 : 8;

  items.forEach((item, index) => {
    if (index < toShow) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function toggleMoreItems() {
  isMoreVisible = !isMoreVisible;

  items.forEach((item, index) => {
    if (index >= (window.innerWidth < 1120 ? 6 : 8)) {
      item.style.display = isMoreVisible ? "flex" : "none";
    }
  });

  showMoreBtn.innerHTML = isMoreVisible
    ? "<img src='./img/expand-false.svg' alt=''> Скрыть"
    : "<img src='./img/expand-true.svg' alt=''> Показать все";
}

showMoreBtn.addEventListener("click", toggleMoreItems);
document.addEventListener("DOMContentLoaded", showItems);
document.addEventListener("DOMContentLoaded", initSlider);
window.addEventListener("resize", showItems);
window.addEventListener("resize", initSlider);
