const navButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});