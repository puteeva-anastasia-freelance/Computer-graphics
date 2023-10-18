(function () {
	"use strict";

	/**
	 * Класс управляет всплывающими окнами
	 */
	class PopUp {
		constructor() {
			this.buttonFeedbackElems = document.querySelectorAll('.button__feedback');
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');
			this.acceptedEl = document.querySelector('.accepted');
			this.mobileMenuEl = document.querySelector('.main-header__mobile-menu');
			this.mobileBurgerEl = document.querySelector('.main-header__mobile-burger');
			this.mainHeaderEl = document.querySelector('.main-header');
		}

		/**
		 * Метод добавляет кнопкам "Обратной связи" слушатель события клика
		 */
		addButtonsFeedbackClickListener() {
			let numberForm = 0;
			this.buttonFeedbackElems.forEach((button) => {
				button.addEventListener('click', () => {
					let nameForm = this.getNameForm(button);
					let formFeedback = this.getFormFeedback(button.textContent, nameForm, numberForm);
					this.popUpOverlayEl.classList.add('active-pop-up');
					this.acceptedEl.insertAdjacentHTML('beforebegin', formFeedback);
					this.addMaskPhone();
					this.addCloseElemsClickListener();
					this.addButtonsPopUpClickListener();
					this.checkComplianceWithPolicy();
					this.closeMobileMenu();
					this.addPopUpElemsClickListener();
					numberForm++;
				});
			});
		}

		/**
		 * Метод закрывает мобильное меню
		 */
		closeMobileMenu(){
			this.popUpOverlayEl.classList.remove('active-mobile-menu');
			this.mobileMenuEl.classList.remove('active');
			this.mobileBurgerEl.classList.remove('cross');
			this.mainHeaderEl.classList.remove('active');
		}

		/**
		 * Метод получает название формы
		 * @param {HTMLButtonElement} button кнопка, на которую нажали
		 * @returns {string} название формы
		 */
		getNameForm(button) {
			return button.dataset.value;
		}

		/**
		 * Метод получает форму для отправки заявки
		 * @param {string} textButton текст кнопки
		 * @param {string} nameForm название формы
		 * @param {number} numberForm номер формы
		 * @returns {string} html-разметка формы для отправки заявки
		 */
		getFormFeedback(textButton, nameForm, numberForm) {
			return `<div class="pop-up">
			<div class="pop-up__container">
				<div class="pop-up__body"
					style="background: 0 0 / cover no-repeat url(img/dist/bg-popup.jpg);">
					<h6 class="pop-up__title">Обратная связь</h6>
					<p class="txt pop-up__txt">Заполните форму и мы свяжемся с Вами!</p>
					<form class="pop-up__form form-application">
						<div class="pop-up__errors">
							<span class="txt pop-up__error pop-up__error-phone">Для отправки формы, пожалуйста, укажите Ваш номер телефона</span>
							<span class="policy__error pop-up__error">Для отправки данных подтвердите согласие на&nbsp;обработку персональных данных, нажав на&nbsp;кнопку ниже</span>	
						</div>
						<input type="hidden" name="name-form" value="${nameForm}">
						<div class="pop-up__name">
							<input type="text" class="pop-up__input" placeholder="Укажите Ваше имя" name="name">
						</div>
						<div class="pop-up__phone">
							<input required class="pop-up__input mask-phone" type="text" placeholder="Укажите Ваш номер телефона" name="phone">
						</div>
						<button type="submit" class="button button__accent pop-up__button">${textButton}</button>
						<div class="policy">
							<input class="policy__checkbox" id="pop-up-privacy-policy-${numberForm}" type="checkbox" name="privacy-policy" checked="">
							<label class="policy__label" for="pop-up-privacy-policy-${numberForm}">Нажимая на&nbsp;кнопку, вы&nbsp;даете согласие
								на&nbsp;<a href="agreement.pdf" target="_blank" class="policy__link" title="Ознакомиться с обработкой персональных данных">обработку персональных данных</a></label>
						</div>	
					</form>
					<button type="button" class="pop-up__close">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="pop-up__close-svg">
							<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>
		</div>`;
		}

		/**
		 * Метод добавляет кнопкам отправки формы слушатель события клика
		 */
		addButtonsPopUpClickListener() {
			let popUpButtonElems = document.querySelectorAll('.pop-up__button');
			popUpButtonElems.forEach((button) => {
				let popUpEl = button.closest('.pop-up');
				let popUpInputPhoneEl = popUpEl.querySelector('.mask-phone');
				let popUpErrorPhoneEl = popUpEl.querySelector('.pop-up__error-phone');

				button.addEventListener('click', () => {
					if (popUpInputPhoneEl.value == '') {
						popUpErrorPhoneEl.style.display = 'block';
					} else {
						popUpErrorPhoneEl.style.display = 'none';
					}
				});
			});			
		}

		/**
		 * Метод добавляет "Крестикам" слушатель события клика
		 */
		addCloseElemsClickListener() {
			let popUpCloseElems = document.querySelectorAll('.pop-up__close');

			popUpCloseElems.forEach((popUpCloseEl) => {
				popUpCloseEl.addEventListener('click', () => {
					let popUpEl = popUpCloseEl.closest('.pop-up');
					this.popUpOverlayEl.classList.remove('active-pop-up');
					popUpEl.style.display = 'none';
				});
			});
		}

		/**
		 * Метод добавляет маску телефона
		 */
		addMaskPhone() {
			let countDigits = 0;
			$('.mask-phone').mask('+9999999999?99');

			$('.pop-up .mask-phone').on("keyup", function () {
				countDigits = ($(this).val().match(/\d+/g).join('')).length;
				if (countDigits >= 10 && countDigits <= 12) {
					$('.pop-up__error-phone').css('display', 'none');
				}
			});
		}

		/**
		 * Метод проверяет согласие с обработкой персональных данных
		 */
		checkComplianceWithPolicy() {
			let formElems = document.querySelectorAll('.pop-up');
			formElems.forEach((formEl) => {
				let policyCheckboxEl = formEl.querySelector('.policy__checkbox');
				let policyErrorEl = formEl.querySelector('.policy__error');

				formEl.addEventListener('submit', (event) => {
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
			});
		}

		/**
		 * При клике на затемненный фон всплывающее окно закрывается
		 */
		addPopUpElemsClickListener() {
			let popUpElems = document.querySelectorAll('.pop-up');
			popUpElems.forEach((popUpEl) => {
				popUpEl.addEventListener('click', (event) => {
					let popUpContainerEl = popUpEl.querySelector('.pop-up__container');
					if (event.target == popUpContainerEl) {
						this.popUpOverlayEl.classList.remove('active-pop-up');
						popUpEl.style.display = 'none';
					}
				})
			});
		}
	}

	window.addEventListener('load', () => {
		let popUp = new PopUp();
		popUp.addButtonsFeedbackClickListener();
	});
})();