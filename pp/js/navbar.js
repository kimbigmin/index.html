const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.nav_bar');
const icons = document.querySelector('.side_i');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});