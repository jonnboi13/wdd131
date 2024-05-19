document.getElementById('lastModified').textContent = document.lastModified;

let images = document.querySelectorAll('.lazyload');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.classList.add('fadeIn');
        }
    });
});

images.forEach(img => {
    observer.observe(img);
});