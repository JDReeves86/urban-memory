const blogText = document.getElementById('blogPost');
const blogPostBtn = document.getElementById('blogPostBtn');

blogPostBtn.addEventListener('click', (ev) => {
    ev.preventDefault(ev)
    console.log(blogText.value)
})