(function () {
	"use strict";

	/**
	 * Класс управляет всплывающим окном "Ваша заявка принята"
	 */
	class Accepted {
		constructor() {
			this.acceptedEl = document.querySelector('.accepted');
			this.acceptedHiddenEl = document.querySelector('#accepted-hidden');
			this.acceptedCloseEl = document.querySelector('.accepted__close');
		}

		/**
		 * Инициализация вспывающего окна "Ваша заявка принята"
		 */
		init() {
			this.addAcceptedHiddenElClickListener();
			this.addAcceptedCloseElClickListener();
			this.addAcceptedElClickListener();
		}

		/**
		 * Метод добавляет скрытому полю всплывающего окна "Ваша заявка принята" слушатель события клика
		 */
		addAcceptedHiddenElClickListener() {
			this.acceptedHiddenEl.addEventListener('click', () => {
				this.acceptedEl.classList.add('active');
			});
		}

		/**
		 * Метод добавляет крестику всплывающего окна "Ваша заявка принята" слушатель события клика
		 */
		addAcceptedCloseElClickListener() {
			this.acceptedCloseEl.addEventListener('click', () => {
				this.acceptedEl.classList.remove('active');
			});
		}

		/**
		 * При клике на затемненный фон всплывающее окно "Ваша заявка принята" закрывается
		 */
		addAcceptedElClickListener() {
			this.acceptedEl.addEventListener('click', (event) => {
				if (event.target == this.acceptedEl) {
					this.acceptedEl.classList.remove('active');
				}
			});
		}
	}

	window.addEventListener('load', () => {
		let accepted = new Accepted();
		accepted.init();
	});
})();