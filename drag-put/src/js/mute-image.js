document.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
        return false;
    }
});
