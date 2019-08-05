var navMain = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.toggle');

window.onload = function () {
  navToggle.classList.remove('toggle--nojs');
  navMain.classList.add('site-navigation--closed');
};

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
    navToggle.classList.remove('toggle--closed');
    navToggle.classList.add('toggle--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
    navToggle.classList.remove('toggle--opened');
    navToggle.classList.add('toggle--closed');
  }
  });
