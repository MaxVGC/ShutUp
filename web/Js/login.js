const login = document.getElementById("login");
const btn_to_signup = document.getElementById("btn-to-signup");

btn_to_signup.addEventListener("click", changeForm);

function changeForm() {
    login.style.display = "none";
}