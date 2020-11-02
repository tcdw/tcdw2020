import './scss/main.scss';

const menuDesktop = document.getElementById('menu-dt');
const bannerHeight = 11;

const navTopStyle = () => {
    const scroll = window.pageYOffset;
    const fontSize = Number.parseInt(
        window.getComputedStyle(document.documentElement).fontSize, 10,
    );
    if (scroll > bannerHeight * fontSize) {
        menuDesktop.classList.remove('top');
    } else {
        menuDesktop.classList.add('top');
    }
};

window.addEventListener('scroll', navTopStyle, false);
navTopStyle();
