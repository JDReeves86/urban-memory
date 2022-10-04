// selectors for login page
const userName = document.getElementById('userName');
const signInBtn = document.getElementById('signinBtn');
const passwordField = document.getElementById('password');

signInBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    console.log(userName.value, passwordField.value)

});