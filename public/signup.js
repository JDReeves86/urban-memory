//selectors for signup page
const makeAccountBtn = document.getElementById('makeAccount');
const userEmail = document.getElementById('email');
const passwordField = document.getElementById('password');
const userName = document.getElementById('userName');

const makeAccountHandler = async () => {
    // console.log(userName.value, passwordField.value, userEmail.value)
    try{
        let newUser = {
            userName: userName.value,
            email: userEmail.value,
            password: passwordField.value,
        }
        console.log(newUser)
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
        });
    } catch(err) {response.status(500).json(err)}
};

