"use strict";

// checkbox event
function checkBorder() {
  var checkBorder = document.querySelectorAll("input[name=checkborder]");
  var borderBox = document.querySelectorAll("div[name=imgborder]");

  for (var i = 0; i < checkBorder.length; i++) {
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
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".my-swiper-next",
    prevEl: ".my-swiper-prev"
  },
  thumbs: {
    swiper: swiper
  }
});

// add new items desktop
document.querySelector("#pushitemDes").onclick = function () {
  document.querySelector("#gradientsDes").innerHTML += "\n              <div class=\"flex items-center w-full mb-4\">\n                <div class=\"select w-2/5 mr-5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n                <div class=\"select w-1/5 mr-5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n                <h4>\uFF5E</h4>\n\n                <div class=\"select w-1/5 mx-5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n                <h4>\uFF05</h4>\n\n                <div class=\"select w-1/5 ml-5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n              </div>\n  ";

  var currentlists = document.querySelector("#gradientsDes").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new items mobile
document.querySelector("#pushitemMob").onclick = function () {
  document.querySelector("#gradientsMob").innerHTML += "\n  <div class=\"flex items-center w-full mb-3\">\n  <div class=\"select w-1/2 mr-3\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n  <div class=\"select w-1/2\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n  <h4 class=\"ml-3\">\uFF5E</h4>\n</div>\n<div class=\"flex items-center w-full mb-4\">\n  <div class=\"select w-1/2 mr-3\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n  <h4>\uFF05</h4>\n\n  <div class=\"select w-1/2 ml-3\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n</div>\n  ";

  var currentlists = document.querySelector("#gradientsMob").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new function
document.querySelector("#pushfunction").onclick = function () {
  document.querySelector("#mutiFunction").innerHTML += "\n  <div class=\"flex items-center w-full mb-4 gap-6\">\n  <div class=\"select w-full\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n  <div class=\"select w-full\">\n    <select class=\"text-base\" required>\n      <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n    </select>\n  </div>\n</div>\n  ";

  var currentlists = document.querySelector("#mutiFunction").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// add new processing
document.querySelector("#pushProcess").onclick = function () {
  document.querySelector("#newProcess").innerHTML += "\n  <div class=\"flex items-center w-full mb-4 gap-6\">\n                <div class=\"select w-1/2 md:w-4/5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>\u8ACB\u9078\u64C7</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n                <div class=\"select w-1/2 md:w-1/5\">\n                  <select class=\"text-base\" required>\n                    <option value=\"\" disabled selected>And</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                  </select>\n                </div>\n              </div>\n  ";

  var currentlists = document.querySelector("#newProcess").innerHTML;
  var setsession = window.sessionStorage.setItem("items", "currentlists");
  var getsession = window.sessionStorage.getItem("items");
  console.log(getsession);
};

// input range
var rangeInputs = document.querySelectorAll('input[type="range"]');
var numberInput = document.querySelector('input[type="number"]');

function handleInputChange(e) {
  var target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  var min = target.min;
  var max = target.max;
  var val = target.value;

  target.style.backgroundSize = (val - min) * 100 / (max - min) + "% 100%";
}

rangeInputs.forEach(function (input) {
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

$(".js-switch-tab").eq(0).addClass("is-active");
$(".js-switch-content").eq(0).show();
$(".js-switch-tab").on("click", function () {
  var index = $(this).index();
  switchContent(index);
  $(this).addClass("is-active");
  $(this).siblings().removeClass("is-active");
});

$(".js-switch-select").on("change", function () {
  var index = $(this).val();
  switchContent(index);
});

var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements 
  // (children of gallerySelector)
  var parseThumbnailElements = function parseThumbnailElements(el) {
    var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

    for (var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes 
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function onThumbnailsClick(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
    });

    if (!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function photoswipeParseHash() {
    var hash = window.location.hash.substring(1),
        params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function getThumbBoundsFn(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0],
            // find thumbnail
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      }

    };

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used 
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');