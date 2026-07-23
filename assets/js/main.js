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
    loop: true,
    speed: 4000,
    slidesPerView: 2,
    spaceBetween: 30,
    allowTouchMove: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

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
// ===================================================================
// =========================== VIDEO SWIPER ===========================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Инициализация Swiper
  const reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".review-next-btn",
    },
  });

  // 2. Логика видео модалки
  const videoBtns = document.querySelectorAll(".video-btn");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  const closeBtn = document.querySelector(".video-modal-close");
  const overlay = document.querySelector(".video-modal-overlay");

  // Открытие
  videoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const videoSrc = btn.getAttribute("data-video");
      iframe.setAttribute("src", videoSrc);
      modal.classList.add("active");
    });
  });

  // Закрытие
  const closeModal = () => {
    modal.classList.remove("active");
    iframe.setAttribute("src", ""); // Останавливаем воспроизведение видео
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  // Закрытие по клавише Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
