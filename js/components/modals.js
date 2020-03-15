const modal = document.querySelector('.modal--quit');
const modLogs = document.querySelectorAll('.profile');
const close = document.querySelector('.modal--quit i');

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