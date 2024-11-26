// Responzivní menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

// Formulář
const formular = document.querySelector("form");
const fullName = document.querySelector(".full-name");
const email = document.querySelector(".email");
const notName = document.querySelector(".notification-name");
const notEmail = document.querySelector(".notification-email");
const repeatEmail = document.querySelector(".repeat-email");
const notRepeatEmail = document.querySelector(".notification-repeated-email");
const formMessage = document.querySelector(".form-message");
const textareaForm = document.querySelector(".user-message");

formular.addEventListener("submit", (e) => {
  e.preventDefault();

  notName.style.display = "none";
  notEmail.style.display = "none";
  notRepeatEmail.style.display = "none";
  formMessage.style.display = "none";

  if (fullName.value === "") {
    notName.style.display = "block";
  }

  if (email.value === "") {
    notEmail.style.display = "block";
  }

  // Kontrola shody e-mailů
  if (
    email.value !== "" &&
    repeatEmail.value !== "" &&
    email.value !== repeatEmail.value
  ) {
    notRepeatEmail.style.display = "block";
  }

  // Zpráva po odeslání
  if (
    fullName.value !== "" &&
    email.value !== "" &&
    email.value === repeatEmail.value
  ) {
    formMessage.style.display = "block";
    notName.style.display = "none";
    notEmail.style.display = "none";
    notRepeatEmail.style.display = "none";
  }

  if (formMessage.style.display === "block") {
    formular.reset();
    counterParagraph.textContent = "0 / 100";
  }
});

// Počítadlo znaků
const counterParagraph = document.querySelector(".text-counter");

textareaForm.addEventListener("input", () => {
  let lettersCount = textareaForm.value.length;
  counterParagraph.textContent = lettersCount + "/ 100";
});

// Back-to-top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Dark/Light Mode
const switcher = document.querySelector(".switch input");
const header = document.querySelector("header");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");
const logo = document.querySelector(".logo");

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    logo.style.visibility = "hidden";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    logo.style.visibility = "visible";
  }
};

switcher.addEventListener("change", switchTheme);
