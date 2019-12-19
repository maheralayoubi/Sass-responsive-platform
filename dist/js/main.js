// Select DOM Items
const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');


// Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
    } else {

    }
}