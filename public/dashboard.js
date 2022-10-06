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

const removePostHandler = async (ev) => {
    const postID = ev.target.getAttribute('data-user');
    try {  
        const response = await fetch('api/posts/', {
            method: 'DELETE',
            body: JSON.stringify({ postID }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        }
        else console.log('Failed to remove.')
    }
    catch (err) {response.status(500).json(err)}
}

// const commentHandler = async (clickedPost, comment) => {

//     const commentData = {
//         comment,
//         post_id: clickedPost
//     }

//     const response = await fetch('api/comments/', {
//         method: 'POST',
//         body: JSON.stringify(commentData),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     if (response.ok) {
//         document.location.replace('/dashboard')
//     } else console.log('ur comment was bad and your should feel bad')
//     console.log(commentData)
// };

// const closeModal = (ev) => {
//     modal.setAttribute('class', 'modal');
// }

// const openModal = (clicked) => {
//     modal.setAttribute('class', 'modal is-active')
//     modal.setAttribute('data-post', clicked)
// }

// const saveComment = () => {
//     const comment = commentInput.value.trim()
//     const clicked = modal.getAttribute('data-post')
//     commentHandler(clicked, comment)
// }