var navMenu = document.querySelector(".nav");
var navToggle = document.querySelector(".nav__toggle");

navMenu.classList.remove("nav--nojs");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("nav--opened");
});

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init);
  var map;
  function init() {
    map = new ymaps.Map("map", {
      center: [59.93944115603922, 30.32302403991186],
      zoom: 16,
      controls: ["zoomControl"]
    });
    var placemark = new ymaps.Placemark([59.938633647616214, 30.32304549758399], {}, {
      iconLayout: "default#image",
      iconImageHref: "../img/decor/map-pin.png",
      iconImageSize: [55, 53],
      iconImageOffset: [-33, -101]
    });
    map.behaviors.disable("scrollZoom"),
      map.geoObjects.add(placemark);
  }
});
