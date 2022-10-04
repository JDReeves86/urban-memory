// const User = require('../models/User');
// const Post = require('../models/Post');
// const Comment = require('../models/Comment');

const clickChecker = (ev) => {
    ev.preventDefault()
    switch (ev.target.id) {
        case 'homeBtn':
            homeHandler()
            break;
        case 'dashboardBtn':
            dashboardHandler()
            break;
        case 'loginBtn':
            loginHandler()
            break;
        case 'logoutBtn':
            break;
        case 'signupBtn':
            signupHandler()
            break;
    };
};

document.body.addEventListener('click', clickChecker)


const dashboardHandler = async (ev) => {
    // ev.preventDefault();
    const response = await fetch('/pages/dashboard', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/pages/dashboard')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const homeHandler = async () => {
    const response = await fetch('/pages/', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/pages/')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const loginHandler = async () => {
    const response = await fetch('/pages/login', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/pages/login')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const signupHandler = async () => {
    const response = await fetch('/pages/signup', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/pages/signup')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

