// checkbox event
function checkBorder() {
  const checkBox1 = document.getElementById("checkborder1");
  const border1 = document.getElementById("imgborder1");

  if (checkBox1.checked) {
    border1.style.borderColor = "#E55400";
  } else {
    border1.style.borderColor = "transparent";
  }
}

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
