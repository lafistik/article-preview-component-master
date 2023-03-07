const btn = document.querySelector(".share");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  overlay.classList.toggle("active");
});
