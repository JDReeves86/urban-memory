// selectors for login page
const userName = document.getElementById('userName');
const signInBtn = document.getElementById('signinBtn');
const passwordField = document.getElementById('password');

const signinBtnHandler = () => {
    console.log(userName.value, passwordField.value)
}