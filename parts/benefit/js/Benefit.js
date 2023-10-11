(function() {
	"use strict";

	/**
	 * Класс для отрисовки преимуществ
	 */
	class Benefit{
		constructor(){
			this.wrapEl = document.querySelector('.benefit__container');
		}

		/**
		 * Метод вставляет карточки преимуществ на страницу
		 * @param {BenefitDTO[]} benefits массив преимуществ из файла benefits.js
		 */
		insertBenefitsIntoPage(benefits) {
			let benefitsMarkup = '';

			for(let benefit of benefits){
				benefitsMarkup += this.getBenefitMarkup(benefit);
			}

			this.wrapEl.insertAdjacentHTML('beforeend', benefitsMarkup);
		}

		/**
		 * Метод получает разметку одной карточки преимущества
		 * @param {BenefitDTO} benefit объект с информацией о преимуществе
		 * @returns {string} html-разметка карточки преимущества
		 */
		getBenefitMarkup(benefit){
			return `
			<div class="benefit__item">
				<div class="benefit__inner">
					<div class="benefit__img">
						${benefit.image}
					</div>
				</div>
				<h4 class="h4">${benefit.name}</h4>
				<p class="benefit__txt">${benefit.description}</p>
			</div>
			`;
		}
		
	}

	window.addEventListener('load', () => {
		let benefit = new Benefit();
		benefit.insertBenefitsIntoPage(benefits);
	});


})();