let elMenuBtn = document.querySelector('.site-header__menu-div');
let elMenuSpan= document.querySelector('.site-header__menu');
let elNav = document.querySelector('.nav');
let elNavItem = document.querySelector('.nav__item');
let elPlusBtn = document.querySelector('.nav__item-plus');

elMenuBtn.addEventListener('click' , function(){
  elNav.classList.toggle('open');
  elMenuSpan.classList.toggle('exit')
})
elPlusBtn.addEventListener('click' , function(){
  elNavItem.classList.toggle('open-nav');
})
