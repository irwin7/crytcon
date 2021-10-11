let elMenuBtn = document.querySelector('.site-header__menu-div');
let elMenuSpan= document.querySelector('.site-header__menu');
let elNav = document.querySelector('.nav');
let elNavItem = document.querySelector('.nav__item:nth-child(1)');
let elNavItem2 = document.querySelector('.nav__item:nth-child(2)');
let elPlusBtn = document.querySelector('.nav__item-plus');
let elPlusBtn2 = document.querySelector('.nav__item-plus-sec');

elMenuBtn.addEventListener('click' , function(){
  elNav.classList.toggle('open');
  elMenuSpan.classList.toggle('exit')
})
elPlusBtn.addEventListener('click' , function(){
  elNavItem.classList.toggle('open-nav');
})
elPlusBtn2.addEventListener('click' , function(){
  elNavItem2.classList.toggle('open-nav');
})
