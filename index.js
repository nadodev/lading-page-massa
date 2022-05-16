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

// function login
const form = document.querySelector(".signin");
const loginBox = document.querySelector(".login");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const btnLogin = document.querySelector(".btn-entrar");
const btnSair = document.querySelector(".btn-sair");
const modal = document.querySelector(".modal");
const modalSair = document.querySelector(".modal-sair");
const overlay = document.querySelector(".overlay");
const btnFecharModal = document.querySelector(".close");
const btnFecharModalSair = document.querySelector(".close-sair");
const user = document.querySelector(".user");

function handleSubmit(e) {
  e.preventDefault();
  login();
}

function login() {
  if (email.value === "" || senha.value === "") {
    alert("Preencha todos os campos");

    return;
  }

  let textEmail = email.value;
  let textSenha = senha.value;

  if (textEmail !== null && !textSenha !== null) {
    openModal();
    const storage = localStorage.setItem("email", textEmail);
    console.log(storage);
  }
}

function verificaLogin() {
  const storage = localStorage.getItem("email");

  if (storage !== null) {
    form.style.display = "none";
    loginBox.style.display = "flex";
    user.innerHTML = storage;
  }
}
verificaLogin();

function signin() {
  storage = localStorage.getItem("email");

  if (storage !== null) {
    openSair();
  }
}

btnSair.addEventListener("click", signin);

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  window.location.reload();
}

function openSair() {
  modalSair.classList.add("active");
  overlay.classList.add("active");
  email.value = "";
  senha.value = "";
}

function closeSair() {
  modalSair.classList.remove("active");
  overlay.classList.remove("active");
  localStorage.removeItem("email");
  window.location.reload();
}

btnFecharModal.addEventListener("click", closeModal);
btnFecharModalSair.addEventListener("click", closeSair);
