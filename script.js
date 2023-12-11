const spans = document.querySelectorAll('.color span');
const image = document.getElementById('image');

spans.forEach(span => {
    span.addEventListener('click', function() {
        spans.forEach(s => s.classList.remove('active'));
        this.classList.add('active');

        const imageUrl = this.getAttribute('data-image');
        image.src = imageUrl;
    });
});
