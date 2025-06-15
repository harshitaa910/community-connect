function submitPost() {
    const textArea = document.querySelector('#forum textarea');
    const postText = textArea.value.trim();
    if (postText !== '') {
        const postDiv = document.createElement('div');
        postDiv.textContent = postText;
        postDiv.className = 'post';
        document.getElementById('forum-posts').prepend(postDiv);
        textArea.value = '';
    }
}
