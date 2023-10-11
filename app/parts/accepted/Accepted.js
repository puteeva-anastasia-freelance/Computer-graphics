(function () {
	"use strict";

	class Accepted {
		constructor() {
			this.acceptedEl = document.querySelector('.accepted');
			this.acceptedHiddenEl = document.querySelector('#accepted-hidden');
			this.acceptedCloseEl = document.querySelector('.accepted__close');
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
		addAcceptedCloseElClickListener(){
			this.acceptedCloseEl.addEventListener('click', () => {
				this.acceptedEl.classList.remove('active');
			});
		}
	}

	window.addEventListener('load', () => {
		let accepted = new Accepted();
		accepted.addAcceptedHiddenElClickListener();
		accepted.addAcceptedCloseElClickListener();
	});

})();