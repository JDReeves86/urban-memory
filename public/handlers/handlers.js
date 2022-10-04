const dashboardHandler = async (ev) => {
    ev.preventDefault();
    const response = await fetch('/pages/dashboard', {
        method: 'GET'
    });
    if (response.ok) {
        document.replace('/')
    }
}

module.exports = {
    dashboardHandler
}