// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamburger = document.querySelector('#hamburgerBtn');

hamburger.addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('open');
});