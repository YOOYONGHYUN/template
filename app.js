// do something!
//localstorage에 저장된 상태에 따라 visibility 변경
if (localStorage.getItem("active") === "true") {
  document.querySelector("nav").classList.add("active");
  document.body.style.visibility = "visible";
} else {
  document.body.style.visibility = "visible";
}

let tg = document.querySelector("i");
//toggle-side & localstoage에 상태 저장
tg.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  if (document.querySelector("nav").classList.contains("active") === true) {
    localStorage.setItem("active", "true");
  } else {
    localStorage.setItem("active", "false");
  }
});

//preload
window.addEventListener("load", function () {
  document.body.classList.remove("preload");
});
