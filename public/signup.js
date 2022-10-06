//selectors for signup page - Need to keep off scripts.js as selector element ids are same as ones used on sign-in page.
const makeAccountBtn = document.getElementById('makeAccount');
const userEmail = document.getElementById('email');
const passwordField = document.getElementById('password');
const userName = document.getElementById('userName');

//logic for making account
const makeAccountHandler = async () => {
    try{
        let newUser = {
            userName: userName.value,
            email: userEmail.value,
            password: passwordField.value,
        }
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        }
    } catch(err) {response.status(500).json(err)}
};

