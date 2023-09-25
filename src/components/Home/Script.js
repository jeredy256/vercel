const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const submenuItems = document.querySelectorAll('#menu .has-submenu');

submenuItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
