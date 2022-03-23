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
    nextEl: ".my-swiper-next",
    prevEl: ".my-swiper-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// add new items desktop
document.querySelector("#pushitemDes").onclick = function () {
  document.querySelector("#gradientsDes").innerHTML += `
              <div class="flex items-center w-full mb-4">
                <div class="select w-2/5 mr-5">
                  <select class="text-base" required>
                    <option value="" disabled selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
                <div class="select w-1/5 mr-5">
                  <select class="text-base" required>
                    <option value="" disabled selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
                <h4>～</h4>

                <div class="select w-1/5 mx-5">
                  <select class="text-base" required>
                    <option value="" disabled selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
                <h4>％</h4>

                <div class="select w-1/5 ml-5">
                  <select class="text-base" required>
                    <option value="" disabled selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
              </div>
  `;

  let currentlists = document.querySelector("#gradientsDes").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new items mobile
document.querySelector("#pushitemMob").onclick = function () {
  document.querySelector("#gradientsMob").innerHTML += `
  <div class="flex items-center w-full mb-3">
  <div class="select w-1/2 mr-3">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  <div class="select w-1/2">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  <h4 class="ml-3">～</h4>
</div>
<div class="flex items-center w-full mb-4">
  <div class="select w-1/2 mr-3">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  <h4>％</h4>

  <div class="select w-1/2 ml-3">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
</div>
  `;

  let currentlists = document.querySelector("#gradientsMob").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new function
document.querySelector("#pushfunction").onclick = function () {
  document.querySelector("#mutiFunction").innerHTML += `
  <div class="flex items-center w-full mb-4 gap-6">
  <div class="select w-full">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  <div class="select w-full">
    <select class="text-base" required>
      <option value="" disabled selected>請選擇</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
</div>
  `;

  let currentlists = document.querySelector("#mutiFunction").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new processing
document.querySelector("#pushProcess").onclick = function () {
  document.querySelector("#newProcess").innerHTML += `
  <div class="flex items-center w-full mb-4 gap-6">
                <div class="select w-1/2 md:w-4/5">
                  <select class="text-base" required>
                    <option value="" disabled selected>請選擇</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
                <div class="select w-1/2 md:w-1/5">
                  <select class="text-base" required>
                    <option value="" disabled selected>And</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
              </div>
  `;

  let currentlists = document.querySelector("#newProcess").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// input range
const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

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

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

numberInput.addEventListener("input", handleInputChange);

// select pagination
$(".pagination a").click(function (e) {
  e.preventDefault();
  $(".pagination .active").removeClass("active");
  $(this).parent().addClass("active");
});

$("#target").click(function (event) {
  alert("Handler for .click() called.");
});

// switch tab
function switchContent(index) {
  $(".js-switch-content").hide();
  $(".js-switch-content").eq(index).fadeIn();
}

// $(".js-switch-tab").eq(0).addClass("is-active");
$(".js-switch-content").eq(0).show();

// $(".js-switch-tab").on("click", function () {
//   console.log("hi");
//   var index = $(this).index();
//   switchContent(index);
//   $(this).addClass("is-active");
//   $(this).siblings().removeClass("is-active");
// });

$(".js-switch-select").on("change", function () {
  var index = $(this).val();
  switchContent(index);
});
