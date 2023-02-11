let menuBtn = document.querySelector('.header__menubtn');
let menu = document.querySelector('.header__menu');
let body = document.body;
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('noscroll');
})