var navMain = document.querySelector('.site-header__nav');
var navToggle = document.querySelector('.site-header__menu-toggle');
var navMenu = document.querySelector('.site-header__menu-link');

var range = document.querySelector('.example__range');
var box = document.querySelector('.example__image--before');
var beforeButton = document.querySelector('.example__toggle-btn--before');
var afterButton = document.querySelector('.example__toggle-btn--after');
var barIndicator = document.querySelector('.example__toggle-bar');

navMain.classList.remove('site-header__nav--nojs');
navMenu.classList.remove('visually-hidden');

navMenu.addEventListener('click', function () {
  if (navMain.classList.contains('site-header__nav--closed')) {
    navMain.classList.remove('site-header__nav--closed');
    navMain.classList.add('site-header__nav--opened');
  } else {
    navMain.classList.add('site-header__nav--closed');
    navMain.classList.remove('site-header__nav--opened');
  }

  if (navToggle.classList.contains('site-header__menu-toggle--closed')) {
    navToggle.classList.remove('site-header__menu-toggle--closed');
    navToggle.classList.add('site-header__menu-toggle--opened');
  } else {
    navToggle.classList.add('site-header__menu-toggle--closed');
    navToggle.classList.remove('site-header__menu-toggle--opened');
  }
});

range.addEventListener('change', function () {
  box.style.width = 100 - range.value + '%';
});

beforeButton.addEventListener('click', function () {
  box.style.width = 100 + '%';
  range.value = 0;
  barIndicator.classList.remove('example__toggle-bar--after');
  barIndicator.classList.add('example__toggle-bar--before');
});

afterButton.addEventListener('click', function () {
  box.style.width = 0 + '%';
  range.value = 100;
  barIndicator.classList.remove('example__toggle-bar--before');
  barIndicator.classList.add('example__toggle-bar--after');
});
