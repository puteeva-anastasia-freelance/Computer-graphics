(function() {
	"use strict";

	/**
	 * Класс для управления блоком "О нас"
	 */
	class About{
		constructor(){
			this.buttonEl = document.querySelector('.about__button');
			this.hiddenText = document.querySelector('.about__hidden-txt');
		}

		/**
		 * Метод добавляет кнопке "Читать дальше" слушатель события клика
		 */
		addButtonReadMoreClickListener(){
			this.buttonEl.addEventListener('click', () => {
				this.hiddenText.style.display = 'block';
				this.buttonEl.style.display = 'none';
			})
		}
	}

	window.addEventListener('load', () => {
		let about = new About();
		about.addButtonReadMoreClickListener();
	});


})();