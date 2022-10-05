// selectors for login page
const userName = document.getElementById('userName');
// const signInBtn = document.getElementById('signinBtn');
const passwordField = document.getElementById('password');


const signinBtnHandler = async (ev) => {
    ev.preventDefault();
    const user = userName.value.trim();
    const password = passwordField.value.trim();

    // console.log({ user, password })
    if (user && password) {
        const response = await fetch('api/users/login', {
            method: "POST",
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {alert('log in failed')};
    };
}