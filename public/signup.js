//selectors for signup page
const signUpBtn = document.getElementById('signupBtn');
const userEmail = document.getElementById('email');
const passwordField = document.getElementById('password');
const userName = document.getElementById('userName');

signUpBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    console.log(userName.value, passwordField.value, userEmail.value)

});