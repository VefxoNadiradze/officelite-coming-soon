const selectPack = document.querySelector(".selectPackParent");
const select = document.querySelector(".select");
const options = document.querySelectorAll(".option");
const selected = document.querySelector(".selected");
const inputs = document.querySelectorAll(".inp");
const getBtn = document.querySelector(".getBtn");
const invalidValidIcons = document.querySelectorAll(".invalid-valid");

selectPack.addEventListener("click", () => {
  select.classList.toggle("activeSelect");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.innerHTML;
  });
});

getBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (input.value.length < 1) {
      input.nextElementSibling.src = "./assets/sign-up/icon-cross.svg";
    } else {
      input.nextElementSibling.src = "./assets/sign-up/icon-check.svg";
    }
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailInp = document.querySelector(".email");

  const email = emailInp.value;

  if (emailRegex.test(email)) {
    emailInp.nextElementSibling.src = "./assets/sign-up/icon-check.svg";
  } else {
    emailInp.nextElementSibling.src = "./assets/sign-up/icon-cross.svg";
  }
});
