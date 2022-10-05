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

const commentHandler = async (ev) => {
    const clickedPost = ev.target.getAttribute('data-user')

    // <<<<<====== NEED A MORE ELEGENT WAY TO CAPTURE THIS ===========>>>>>>>>>
    const comment = prompt('What you got to say?', 'Nevermind').trim()

    const commentData = {
        comment,
        post_id: clickedPost
    }

    const response = await fetch('api/comments/', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    } else console.log('ur comment was bad and your should feel bad')
    console.log(commentData)
};