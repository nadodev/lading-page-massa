const header = document.querySelector(".header");

// Language: javascript
console.log(window.pageYOffset);
function scrollHeader() {
  const windowTop = window.pageYOffset;
  if (windowTop > 100) {
    header.classList.add("fixed");
  }
  if (windowTop < 100) {
    header.classList.remove("fixed");
  }
}

window.addEventListener("scroll", () => {
  scrollHeader();
});
