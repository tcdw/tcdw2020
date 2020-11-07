import './scss/main.scss';

const desktopMenu = document.getElementById('menu-dt');
const mobileMenu = document.getElementById('menu-sm');
const burgerMenu = document.getElementById('burger-menu');
const titleElem = document.querySelector('body > header h1');
const overlay = document.createElement('div');
const menuItems = mobileMenu.querySelectorAll('li a');
let menuTimer;
let menuOpen = false;

const navTopStyle = () => {
    const scroll = window.pageYOffset;
    const fontSize = Number.parseInt(
        window.getComputedStyle(document.documentElement).fontSize, 10,
    );
    if (scroll > ((titleElem.getBoundingClientRect().y + scroll) - fontSize * 5)) {
        desktopMenu.classList.add('focus');
        mobileMenu.classList.add('focus');
    } else {
        desktopMenu.classList.remove('focus');
        mobileMenu.classList.remove('focus');
    }
};

window.addEventListener('scroll', navTopStyle, false);
navTopStyle();

// 手机菜单操作逻辑

function closeMobileMenu() {
    clearTimeout(menuTimer);
    mobileMenu.classList.remove('opened');
    burgerMenu.className = 'burger-menu step-2 step-2-3';
    overlay.className = 'overlay';
    menuTimer = setTimeout(() => {
        burgerMenu.className = 'burger-menu';
    }, 150);
}

function openMobileMenu() {
    clearTimeout(menuTimer);
    mobileMenu.classList.add('opened');
    burgerMenu.className = 'burger-menu step-2';
    overlay.className = 'overlay active';
    menuTimer = setTimeout(() => {
        burgerMenu.className = 'burger-menu step-3 step-2-3';
    }, 150);
}

function closeMobileMenuEvent() {
    closeMobileMenu();
    menuOpen = false;
}

burgerMenu.addEventListener('click', () => {
    if (menuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
    menuOpen = !menuOpen;
});

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeMobileMenuEvent);
}

overlay.className = 'overlay';
overlay.ariaHidden = true;
overlay.addEventListener('click', closeMobileMenuEvent);
document.body.appendChild(overlay);
