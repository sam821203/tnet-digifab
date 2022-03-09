// checkbox event
// function checking() {
//   const checkBox = document.getElementById("checking");
//   const border = document.getElementById("imgborder");

//   if (checkBox.checked) {
//     border.style.borderStyle = "dotted";
//   } else {
//     border.style.borderStyle = "none";
//   }
// }

// swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
