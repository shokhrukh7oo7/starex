// =========================== BURGER MENU ===========================
const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");

burgerBtn?.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

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

      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

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
// =========================== ACCORDION ===========================
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      accordionItems.forEach((el) => el.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
// ===================================================================
// =========================== CALCULATOR ===========================
document.addEventListener("DOMContentLoaded", () => {
  const routeSection = document.querySelector(".calc-route-section");
  const swapBtn = document.getElementById("swap-btn");

  const fromSelect = document.getElementById("from-city");
  const toSelect = document.getElementById("to-city");

  const fromCard = document.getElementById("from-card");
  const toCard = document.getElementById("to-card");

  function updateActiveTag(cardElement, selectedValue) {
    const tags = cardElement.querySelectorAll(".tag-btn");
    tags.forEach((tag) => {
      if (tag.dataset.city === selectedValue) {
        tag.classList.add("active");
      } else {
        tag.classList.remove("active");
      }
    });
  }

  function setupTagClicks(cardElement, selectElement) {
    const tags = cardElement.querySelectorAll(".tag-btn");
    tags.forEach((tag) => {
      tag.addEventListener("click", () => {
        const cityName = tag.dataset.city;
        selectElement.value = cityName;
        updateActiveTag(cardElement, cityName);
      });
    });
  }

  setupTagClicks(fromCard, fromSelect);
  setupTagClicks(toCard, toSelect);

  if (fromSelect) {
    fromSelect.addEventListener("change", (e) =>
      updateActiveTag(fromCard, e.target.value),
    );
  }
  if (toSelect) {
    toSelect.addEventListener("change", (e) =>
      updateActiveTag(toCard, e.target.value),
    );
  }
  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      routeSection.classList.toggle("is-swapped");

      const tempValue = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = tempValue;

      updateActiveTag(fromCard, fromSelect.value);
      updateActiveTag(toCard, toSelect.value);
    });
  }
});
// ===================================================================
// =========================== CURIER ===========================
document.addEventListener("DOMContentLoaded", () => {
  // 1. SWAP
  const swapBtn = document.getElementById("swap-route-btn");
  const routeSection = document.querySelector(".route-section");

  const fromCard = document.getElementById("from-card");
  const toCard = document.getElementById("to-card");

  const getCardFields = (card) => ({
    name: card.querySelector(".field-name"),
    phone: card.querySelector(".field-phone"),
    region: card.querySelector(".field-region"),
    district: card.querySelector(".field-district"),
    street: card.querySelector(".field-street"),
    house: card.querySelector(".field-house"),
    apt: card.querySelector(".field-apt"),
    ref: card.querySelector(".field-ref"),
  });

  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      routeSection.classList.toggle("is-swapped");

      const from = getCardFields(fromCard);
      const to = getCardFields(toCard);

      const swapValue = (fieldA, fieldB) => {
        const temp = fieldA.value;
        fieldA.value = fieldB.value;
        fieldB.value = temp;
      };

      swapValue(from.name, to.name);
      swapValue(from.phone, to.phone);
      swapValue(from.region, to.region);
      swapValue(from.district, to.district);
      swapValue(from.street, to.street);
      swapValue(from.house, to.house);
      swapValue(from.apt, to.apt);
      swapValue(from.ref, to.ref);
    });
  }

  // 2.СЧЕТЧИКИ
  const counterGroups = document.querySelectorAll(".counter-group");

  counterGroups.forEach((group) => {
    const input = group.querySelector(".counter-input");
    const btnMinus = group.querySelector(".minus");
    const btnPlus = group.querySelector(".plus");

    btnPlus.addEventListener("click", () => {
      let val = parseInt(input.value) || 0;
      input.value = val + 1;
    });

    btnMinus.addEventListener("click", () => {
      let val = parseInt(input.value) || 0;
      if (val > 0) {
        input.value = val - 1;
      }
    });
  });
});
// ===================================================================
// =========================== VIDEO SWIPER ===========================
document.addEventListener("DOMContentLoaded", () => {
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

  const videoBtns = document.querySelectorAll(".video-btn");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  const closeBtn = document.querySelector(".video-modal-close");
  const overlay = document.querySelector(".video-modal-overlay");

  videoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const videoSrc = btn.getAttribute("data-video");
      iframe.setAttribute("src", videoSrc);
      modal.classList.add("active");
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    iframe.setAttribute("src", "");
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
