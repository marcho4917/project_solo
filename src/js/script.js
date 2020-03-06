
document.querySelector('.burg').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
  
function toggleMenu(visible){
  document.querySelector('.sidebar').classList.toggle('show', visible);
}
