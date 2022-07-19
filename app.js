// do something!
if (localStorage.getItem("active") === "true") {
  document.querySelector("nav").classList.add("active");
  document.body.style.visibility = "visible";
} else (localStorage.getItem("active") === "false") {
  document.body.style.visibility = "visible";
}

let tg = document.querySelector("i");

tg.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  if (document.querySelector("nav").classList.contains("active") === true) {
    localStorage.setItem("active", "true");
  } else {
    localStorage.setItem("active", "false");
  }
});

window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
