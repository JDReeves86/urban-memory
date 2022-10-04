const postBtnHandler = async () => {
    const response = await fetch('/pages/post', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/pages/post')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};