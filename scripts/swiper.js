let swiper1 = new Swiper(".leftSwiper", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  direction: "vertical",
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: { eventsTarget: "body" },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  effect: "creative",
  loop: true,
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, "100%", 0],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "-100%", 0],
    },
  },
});

let swiper2 = new Swiper(".rightSwiper", {
  allowTouchMove: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: { eventsTarget: "body" },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: " ",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, "-100%", 0],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: [0, "100%", 0],
    },
  },
});

// $('.swiper-menu').on('click',  '.swiper-menu__item', function() {
//   const index = $(this).data('index')
//   mySwiper.slideTo(index)
// });

//////////////////////////
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
// при нажатии добавляется бургер белый
burger.onclick = () => {
  burgerMenu.classList.add("active");
}

document.querySelector(".krest").onclick = () => {
  burgerMenu.classList.remove("active");
}

let swiperMenu = document.querySelectorAll(".swiper-menu__item");

for (let i of swiperMenu) {
  i.onclick = () => {
    swiper1.slideTo(i.dataset.index);
    swiper2.slideTo(i.dataset.index);
    burgerMenu.classList.remove("active");
  };
}

////////////////////

const mediaQuery = window.matchMedia("(max-width: 1280px)");
if (mediaQuery.matches) {
  let swiper1 = new Swiper(".leftSwiper", {
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    direction: "vertical",
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: { eventsTarget: "body" },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "coverflow",
    effect: "creative",
    loop: true,
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, "-100%", 0],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: [0, "100%", 0],
      },
    },
  });
}


