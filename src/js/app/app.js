// checkbox event
function checkBorder() {
  let checkBorder = document.querySelectorAll("input[name=checkborder]");
  let borderBox = document.querySelectorAll("div[name=imgborder]");

  for (let i = 0; i < checkBorder.length; i++) {
    if (checkBorder[i].checked) {
      borderBox[i].style.borderColor = "#E55400";
    } else {
      borderBox[i].style.borderColor = "transparent";
    }
  }
}

function initSwiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".my-swiper-next",
      prevEl: ".my-swiper-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

function adjustmentInputBackground() {
  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }
  $('input[type="range"]').on("input", handleInputChange);
}

function switchTab() {
  let index = 0;
  function switchContent(index) {
    $(".js-switch-content").hide();
    $(".js-switch-content").eq(index).fadeIn();
  }
  switchContent(index);
  $(".js-switch-select").on("change", function () {
    var index = $(this).val();
    switchContent(index);
  });
}

$(function () {
  initSwiper();
  adjustmentInputBackground();
  switchTab();
});
