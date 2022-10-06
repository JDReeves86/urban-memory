const commentHandler = async (clickedPost, comment) => {
    const commentData = {
        comment,
        post_id: clickedPost
    }
    console.log(commentData)

    const response = await fetch('api/comments/', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace(`/${clickedPost}`)
    } else console.log('ur comment was bad and your should feel bad')
};

const closeModal = (ev) => {
    modal.setAttribute('class', 'modal');
}

const openModal = (clicked) => {
    modal.setAttribute('class', 'modal is-active')
    modal.setAttribute('data-post', clicked)
}

const saveComment = () => {
    const comment = commentInput.value.trim()
    const clicked = modal.getAttribute('data-post')
    commentHandler(clicked, comment)
}