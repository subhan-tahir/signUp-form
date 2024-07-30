let userEmail = document.getElementById('email');
let pass = document.getElementById('password');
let confirm = document.getElementById('coPass');
let form = document.querySelector('form');
let emailField = document.querySelector('.email-error');
let passField = document.querySelector('.pass-error');
let confirmField = document.querySelector('.confirm-error');
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!userEmail.value.match(emailPattern)) {
        emailField.classList.add("invalid");
        emailField.classList.remove("success");
    } else {
        emailField.classList.remove("invalid");
        emailField.classList.add("success")
    }}
function checkPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pass.value.match(passPattern)) {
        passField.classList.add("invalid"); 
        passField.classList.remove("success");
    } else {
        passField.classList.remove("invalid");
        passField.classList.add("success");
    }}
function confirmPass() {
    if (pass.value !== confirm.value || confirm.value === "") {
        confirmField.classList.add("invalid");
        confirmField.classList.remove("success");
    } else {
        confirmField.classList.remove("invalid");
        confirmField.classList.add("success");
    }}
userEmail.addEventListener("keyup", checkEmail);
pass.addEventListener("keyup", checkPass);
confirm.addEventListener("keyup", confirmPass);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    checkPass();
    confirmPass();
});