const clickChecker = (ev) => {
    ev.preventDefault()
    switch (ev.target.id) {
        case 'homeBtn':
            homeHandler(ev);
            break;
        case 'dashboardBtn':
            dashboardHandler(ev);
            break;
        case 'loginBtn':
            loginHandler(ev);
            break;
        case 'logoutBtn':
            logoutHandler(ev);
            break;
        case 'signUpBtn':
            signupHandler(ev);
            break;
        case 'postBtn':
            postBtnHandler(ev);
            break;
        case 'blogPostBtn':
            blogPostBtnHandler(ev);
            break;
        case 'makeAccount':
            makeAccountHandler(ev);
            break;
    };
};

document.body.addEventListener('click', clickChecker);

const dashboardHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/dashboard', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/dashboard')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const homeHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const loginHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/login', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/login')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const signupHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/signup', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/signup')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};

const logoutHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/logout', {
        method: 'GET'
    });
    await fetch('/logout', {
        method: 'POST'
    });
    try {    
        if (response.ok) {
            document.location.replace('/logout')
            console.log(req.session.loggedIn)
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
}
