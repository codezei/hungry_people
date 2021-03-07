// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS


	function toggleMenuCategory () {
		let menuCategories = document.querySelector('.categories')
		let menuItems = document.querySelectorAll('.menu__section')
		
		menuCategories.addEventListener('click', function(e) {
			if (e.target.classList.contains('categories__btn')) {
				changeCategory(e.target.dataset.toggle, menuItems)
			}
		})
	}
	function changeCategory (category, sections) {
		
		sections.forEach((item, index)=>{
			if (item.dataset.target === category) {
				item.style.display = 'flex'
				setTimeout(function(){
					item.classList.add('active')
				}, 200)
				
			} else {
				item.classList.remove('active')
				setTimeout(function(){
					item.style.display = ''
				}, 200)
			}
		})
	}

	toggleMenuCategory()

})
