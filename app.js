// do something!
let tg = document.querySelector("i");

tg.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});

window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
