const section1 = new Swiper(".section1", {
  // 옵션
  autoplay: {
    delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼
    prevEl: '.swiper-button-prev', // 이전 버튼
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
    clickable: true, // 버튼 클릭 여부
  },
  effect: "fade", // 페이드 효과
  fadeEffect: {
    crossFade: true,
  },
  loop: true, // 슬라이드 반복 여부
});

const most = new Swiper(".most", {
  // 옵션
  autoplay: {
    delay: 0, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 5000, // 슬라이드 동작 속도
  loop: true, // 슬라이드 반복 여부

  slidesPerView: 4, // 한 슬라이드에 보여줄 갯수
  spaceBetween: 100, // 슬라이드 사이 여백

  breakpoints: {
    0: {
      // 가로해상도가 0px 이상
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    675: {
      // 가로해상도가 675px 이상
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      // 가로해상도가 768px 이상
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      // 가로해상도가 1300px 이상
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


const sables = new Swiper(".sables", {
  // 옵션
  autoplay: {
    delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  loop: true, // 슬라이드 반복 여부

  breakpoints: {
    0: {
      // 가로해상도가 0px 이상
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true, // 첫번째 슬라이드 가운데 배치
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    600: {
      // 가로해상도가 600px 이상
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false, // 첫번째 슬라이드 가운데 배치
    },
    675: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    900: {
      // 가로해상도가 950px 이상
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      // 가로해상도가 1300px 이상
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});