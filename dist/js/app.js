import {classNames } from './settings.js';
import {initChart} from './components/chart.js';

const app = {
  initPage: function() { 
    const thisApp = this; 
    thisApp.pages = document.querySelector('#pages').children;
    thisApp.links = document.querySelectorAll('.sidebar-links a');

    for(let link of thisApp.links) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
      });
    }
    thisApp.activatePage(thisApp.pages[0].id);
  },
  activatePage: function (pageId) {
    const thisApp = this;

    for( let page of thisApp.pages) {
      if(page.id == pageId) {
        page.classList.add(classNames.page.active);
      } else {
        page.classList.remove(classNames.page.active);
      }
    }
      
  },
  toggleMenu: function (visible) {
    document.querySelector('.burg').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.sidebar').classList.toggle(classNames.sidebar.show, visible);
    });
  },
  init: function () {
    const thisApp = this;
    thisApp.initPage();
    thisApp.toggleMenu();
    initChart();
  },
};
app.init();