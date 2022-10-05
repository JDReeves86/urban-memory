const postBtnHandler = async () => {
    const response = await fetch('/post', {
        method: 'GET'
    });
    try {    
        if (response.ok) {
            document.location.replace('/post')
        }
        else console.log('ERRRORRRRRRR')
    }
    catch (err) {response.status(500).json(err)}
};