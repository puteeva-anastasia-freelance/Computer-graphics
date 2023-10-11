(function(){
	"use strict";

	/**
	 * Метод управляет блоком "Обратная связь"
	 */
	class Order{
		constructor(){
			this.buttonEl = document.querySelector('.order__button');
			this.inputPhoneEl = document.querySelector('.order .mask-phone');
			this.errorPhone = document.querySelector('.order__error-phone');
			this.formEl = document.querySelector('.order__form');
		}

		/**
		 * Инициализация управления блоком "Обратная связь"
		 */
		init(){
			this.addButtonClickListener();
			this.addMaskPhone();
			this.checkComplianceWithPolicy();
		}

		/**
		 * Метод добавляет кнопке отправки формы слушатель события клика
		 */
		addButtonClickListener(){
			this.buttonEl.addEventListener('click', () => {
				if(this.inputPhoneEl.value == ''){
					this.errorPhone.style.display = 'block';
				} else{
					this.errorPhone.style.display = 'none';
				}
			});
		}

		/**
		 * Метод добавляет маску телефона
		 */
		addMaskPhone() {
			$('.order .mask-phone').mask('+9999999999?99');

			$('.order .mask-phone').on( "keyup", function() {
				let countDigits = ($('.order .mask-phone').val().match( /\d+/g ).join('')).length;
				if (countDigits >= 10 && countDigits <= 12){	
					$('.order__error-phone').css('display', 'none');
				}	
			});
		}

		/**
		 * Метод проверяет согласие с обработкой персональных данных
		 */
		checkComplianceWithPolicy() {
			let policyCheckboxEl = this.formEl.querySelector('.policy__checkbox');
			let policyErrorEl = this.formEl.querySelector('.policy__error');

			this.formEl.addEventListener('submit', (event) => {
				if (policyCheckboxEl.checked == false) {
					event.preventDefault();
				}
			});

			policyCheckboxEl.addEventListener('click', () => {
				if (policyCheckboxEl.checked == true) {
					policyErrorEl.style.display = 'none';
				} else {
					policyErrorEl.style.display = 'block';
				}
			});
		}
	}

	window.addEventListener('load', () => {
		let order = new Order();
		order.init();
	});
})();