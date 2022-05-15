const header = document.querySelector(".header");

// Function Header Fixed
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

// Function ButtonGoToTop

const btnTop = document.querySelector(".top");

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

btnTop.addEventListener("click", goToTop);
