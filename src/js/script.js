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
const links = document.querySelectorAll('.sidebar__links a');

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