var  openButton  = document.querySelector('.hamburger');

var openMenu = document.querySelector('.navmenu__listbox')

var noJS = document.querySelector('.body--nojs')

noJS.classList.remove('body--nojs')
openButton.addEventListener( 'click', function(){
  openButton.classList.toggle('is-active');
  openMenu.classList.toggle('navmenu__listbox--open');
});