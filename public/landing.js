
//logic for landing page where blog titles are presented.
const blogPreviewHandler = async (ev) => {
    const clicked = ev.target.getAttribute('data-post');
    document.location.replace(`/${clicked}`)
};