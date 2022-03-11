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
    nextEl: ".my-swiper-next",
    prevEl: ".my-swiper-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// add new items
document.querySelector("#pushitem").onclick = function () {
  document.querySelector("#gradients").innerHTML += `
              <div class="flex items-center w-full mb-3">
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

  let currentlists = document.querySelector("#gradients").innerHTML;
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

// localStorage
// 取得我們要保留內容的text field元件
var field = document.getElementById("field");

// 檢查是否有之前的autosave的內容
// 這段程式碼會在瀏覽器進入該頁面時被執行
if (sessionStorage.getItem("autosave")) {
  // 還原先前的內容到指定的text field
  field.value = sessionStorage.getItem("autosave");
}

// 註冊事件監聽text field內容的變化
field.addEventListener("change", function () {
  // 並儲存變化後的內容至sessionStorage的物件裡
  sessionStorage.setItem("autosave", field.value);
});
