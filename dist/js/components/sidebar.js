import { classNames } from '../settings.js';

const hamburger = document.querySelector('.hamburger i');
const sidebar = document.querySelector('.sidebar-screen');
const menuArrow = document.querySelector('.icon-arrow-right, .show-arrow');
const changeView = document.querySelector('.main-content');


hamburger.addEventListener('click', function() {
  sidebar.classList.add(classNames.sidebar.hidden);
  menuArrow.classList.add(classNames.menuArrow.show);
  changeView.classList.add(classNames.changeView.allScreenWidth);
});

menuArrow.addEventListener('click', function() {
  sidebar.classList.remove(classNames.sidebar.hidden);
  sidebar.style.display = 'block';
  menuArrow.classList.remove(classNames.menuArrow.show);
  changeView.classList.remove(classNames.changeView.allScreenWidth);
});