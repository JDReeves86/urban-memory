

const blogPreviewHandler = async (ev) => {
    const clicked = ev.target.getAttribute('data-post');
    document.location.replace(`/${clicked}`)
}