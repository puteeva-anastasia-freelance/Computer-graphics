(function(){
	"use strict";

	/**
	 * Класс управляет блоком "Узнать стоимость работы"
	 */
	class Calculator{
		constructor(){
			this.buttonEl = document.querySelector('.calculator__button');
			this.inputPhoneEl = document.querySelector('.calculator .mask-phone');
			this.errorPhone = document.querySelector('.calculator__error-phone');
			this.serviceEmptyEl = document.querySelector('.service-empty');
			this.formEl = document.querySelector('.calculator__form');
		}

		/**
		 * Инициализация блока "Узнать стоимость работы"
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		init(services){
			this.addButtonClickListener();
			this.addMaskPhone();
			this.loadServicesInSelect(services);
			this.addSelectizeService();;
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
			$('.calculator .mask-phone').mask('+9999999999?99');

			$('.calculator .mask-phone').on( "keyup", function() {
				let countDigits = ($('.calculator .mask-phone').val().match( /\d+/g ).join('')).length;
				if (countDigits >= 10 && countDigits <= 12){	
					$('.calculator__error-phone').css('display', 'none');
				}	
			});
		}

		/**
		 * Метод загружает услуги в выпадающий список
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		loadServicesInSelect(services){
			let servicesMarkup = '';

			for(let service of services){
				servicesMarkup += `<option value="${service.name}">${service.name}</option>`
			}

			this.serviceEmptyEl.insertAdjacentHTML('afterend', servicesMarkup);
		}

		/**
		 * Метод добавляет плагин selectize выпадающему списку услуг
		 */
		addSelectizeService(){
			$('#service').selectize({
				placeholder: 'Укажите нужную услугу	'
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
		let calculator = new Calculator();
		calculator.init(services);
	});
})();
