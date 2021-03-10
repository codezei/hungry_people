// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel'


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')



document.addEventListener('DOMContentLoaded', () => {

	// Custom JS


	function toggleMenuCategory () {
		let menuCategories = document.querySelector('.categories')
		let menuItems = document.querySelectorAll('.menu-dish__section')
		let menuCategoriesBtn = document.querySelectorAll('.categories__btn')
		let categoryContainer = document.querySelector('.menu-dish')

		
		menuCategories.addEventListener('click', function(e) {
			if (e.target.classList.contains('categories__btn')) {
				menuCategoriesBtn.forEach(item=>{
					item.classList.remove('active')
				})
				e.target.classList.add('active')
				changeCategory(e.target.dataset.toggle, menuItems, categoryContainer)
			}
		})
	}
	function changeCategory (category, sections, container) {
		
		
		sections.forEach((item)=>{
			if (item.dataset.target === category) {
				item.style.display = 'flex'
				setTimeout(function(){
					item.classList.add('active')
				}, 200)
				container.style.height = item.getBoundingClientRect().height + 'px'
				
			} else {
				item.classList.remove('active')
				setTimeout(function(){
					item.style.display = ''
				}, 200)
			}
		})
	}

	toggleMenuCategory()

	function toggleMobMenu () {
		let menuBtn = document.querySelector('.mob-menu__btn')
		let closeMenuBtn = document.querySelector('.mob-menu__close')
		let overlay = document.querySelector('.overlay')
		menuBtn.addEventListener('click', function(){
			document.body.classList.add('overlay-open')
			setTimeout(function(){
				document.body.classList.add('menu-open')
			}, 100)
		})
		closeMenuBtn.addEventListener('click', function() {
			document.body.classList.remove('menu-open')
			setTimeout(function(){
				document.body.classList.remove('overlay-open')
			}, 400)

		})
		overlay.addEventListener('click', function(e) {
			if (e.target === e.currentTarget) {
				document.body.classList.remove('menu-open')
				setTimeout(function(){
					document.body.classList.remove('overlay-open')
				}, 400)
			}


		})
	}
	toggleMobMenu ()

	function smothScroll() {
		var linkNav = document.querySelectorAll('[href^="#"]'),
			V = 0.2;
		for (var i = 0; i < linkNav.length; i++) {
			linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
				e.preventDefault(); //отменяем стандартное поведение
				var w = window.pageYOffset; // производим прокрутка прокрутка
				var hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
				var t = document.querySelector(hash).getBoundingClientRect().top; // отступ от окна браузера до id
				var start = null;
				requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
				function step(time) {
					if (start === null) start = time;
					var progress = time - start;
					var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
					window.scrollTo(0, r);
					if (r != w + t) {
						requestAnimationFrame(step)
					} else {
						location.hash = hash // URL с хэшем
					}
				}
			}, false);
		}
	}
	smothScroll()

	$('.gallery__wrap').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false
	  });
})
