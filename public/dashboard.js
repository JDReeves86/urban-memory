// logic for the dashboard partial

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
    const postID = ev.target.getAttribute('data-post');
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
};

const openBlogModal = (clicked) => {
    modalEditPost.setAttribute('class', 'modal is-active')
    modalEditPost.setAttribute('data-post', clicked)
};

const closeModal = (ev) => {
    modalEditPost.setAttribute('class', 'modal');
};

const saveEdit = () => {
    const post = editPostInput.value.trim();
    const title = editPostTitle.value.trim();
    const clicked = modalEditPost.getAttribute('data-post');
    // console.log(post, title, clicked)
    editPostHandler(clicked, post, title)
};

const editPostHandler = async (clicked, post, title) => {
    const editedPost = {
        title,
        post,
        id: clicked
    };

    const response = await fetch('api/posts/', {
        method: 'PUT',
        body: JSON.stringify(editedPost),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace(`/dashboard`)
    } else {console.log('bad post my dude')}
};