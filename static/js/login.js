const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignUp.addEventListener("click", e => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});


btnSignIn.addEventListener("click", e => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});

