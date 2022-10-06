
// logic for posting a new blog post.
const blogPostBtnHandler = async () => {
    const postData = {
        post: blogPost.value,
        title: blogTitle.value
    }
    console.log(postData)
    const response = await fetch('api/posts/',{
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    } else console.log('post failed bruh')
}