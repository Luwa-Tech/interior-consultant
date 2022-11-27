const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.bar');


navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('visible');
    navMenu.classList.toggle('visible');
})