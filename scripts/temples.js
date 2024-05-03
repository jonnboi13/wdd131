document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('header-nav');

    console.log(hamburgerButton);
    hamburgerButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        hamburgerButton.classList.toggle('open');
    });
});
