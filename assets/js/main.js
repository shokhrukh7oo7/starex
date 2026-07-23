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
// =========================== CALCULATOR TABS ===========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-wrapper .tab");
  const panes = document.querySelectorAll(".tab-wrapper .tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;

      // Снимаем active со всех кнопок и панелей
      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

      // Активируем текущую кнопку и нужный блок
      tab.classList.add("active");
      document.getElementById(targetId)?.classList.add("active");
    });
  });
});
// ===================================================================
// =========================== PARTNER SWIPER ===========================
document.addEventListener("DOMContentLoaded", () => {
  const partnersSwiper = new Swiper(".partners-slider", {
    loop: true, // Бесконечный цикл
    speed: 4000, // Скорость движения в миллисекундах (чем больше, тем плавнее)
    slidesPerView: 2, // Количество логотипов на мобильных
    spaceBetween: 30, // Отступ между логотипами
    allowTouchMove: false, // Отключаем ручной свайп для стабильного автоскролла

    autoplay: {
      delay: 0, // Задержка 0 = постоянное движение
      disableOnInteraction: false,
    },

    // Адаптив для разных экранов
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });
});
