document.querySelector('.burg').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
  
function toggleMenu(visible){
  document.querySelector('.sidebar').classList.toggle('show', visible);
}

flatpickr('#rangeDate', {
  mode: 'range'
});
  
const modal = document.querySelector('.modal--quit');
const modLogs = document.querySelectorAll('.profile');
const pages = document.querySelector('#pages').children;
const links = document.querySelectorAll('.sidebar-links a');
const close = document.querySelector('.modal--quit i');
const hamburger = document.querySelector('.hamburger i');
const sidebar = document.querySelector('.sidebar-screen');
const menuArrow = document.querySelector('.icon-arrow-right, .show-arrow');
const changeView = document.querySelector('.main-content, header');

for (let modLog of modLogs) {
  modLog.addEventListener('click', function() {
    modal.style.display = 'flex';
  });
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    modal.style.display = 'none';
  }
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

hamburger.addEventListener('click', function() {
  sidebar.classList.add('hide');
  menuArrow.classList.add('show-arrow');
  changeView.classList.add('viewer');
});

menuArrow.addEventListener('click', function() {
  sidebar.classList.remove('hide');
  sidebar.style.display = 'block';
  menuArrow.classList.remove('show-arrow');
  changeView.classList.remove('viewer');
});



activatePage(pages[0].id);

function initPage() {  
  for(let link of links) {
    link.addEventListener('click', function (event) {
      const clickedElement = this;
      event.preventDefault();
      const id = clickedElement.getAttribute('href').replace('#', '');
      activatePage(id);
    });
  }
}
initPage();

function activatePage(pageId) {
  for( let page of pages) {
    if(page.id == pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  }
}