(function () {
	'use strict';

	/**
	 * Класс для отрисовки карточек услуг
	 */
	class Service {
		constructor() {
			this.pathToServicesImages = 'img/dist/services';
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');
			this.wrapperEl = document.querySelector('.swiper-wrapper');
			this.serviceEl = document.querySelector('.service');

			this.settings = {
				slidesPerView: 'auto',
				speed: 1200,
				freeMode: true,
				scrollbar: {
					el: '.swiper-scrollbar.service-scrollbar',
					draggable: true,
				},
				breakpoints: {
					320: {
						spaceBetween: 10,
					},
					768: {
						spaceBetween: 35,
					},
					1200: {
						spaceBetween: 52.5,
					},
				}
			}
		}

		/**
		 * Метод вставляет карточки услуг на страницу
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		insertServicesIntoPage(services) {
			let servicesMarkup = '';

			for (let service of services) {
				servicesMarkup += this.getServiceMarkup(service);
			}

			this.wrapperEl.insertAdjacentHTML('beforeend', servicesMarkup);

			this.addCardsHoverListener(services);

			let sliderServices = this.addSliderServices();

			this.addWindowResizeListener(sliderServices);
		}

		/**
		 * Метод получает разметку одной карточки услуги
		 * @param {ServiceDTO} service объект с информацией об услуге
		 * @returns {string} html-разметка карточки услуги
		 */
		getServiceMarkup(service) {
			return `
			<div class="swiper-slide">
				<div class="service__item" style="background: url(${this.pathToServicesImages}/${service.id}/${service.image}) center / cover no-repeat;" data-id="${service.id}">
					<div class="service__inner">
						<div>
							<h5 class="h5">${service.name}</h5>
							<p class="service__txt">${service.description}</p>
						</div>
						<button type="button" class="button service__button button__feedback" data-value="Заказать: ${service.name}">заказать услугу</button>
					</div>
				</div>
			</div>
			`;
		}

		/**
		 * Метод добавляет карточкам слушатель события наведения
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		addCardsHoverListener(services) {
			let itemElems = document.querySelectorAll('.service__item');

			itemElems.forEach((item) => {
				for (let service of services) {
					if (item.dataset.id == service.id) {
						item.addEventListener('mouseover', () => {
							item.style.backgroundImage = `url(${this.pathToServicesImages}/${service.id}/${service.imageHover})`;
						});
						item.addEventListener('mouseout', () => {
							item.style.backgroundImage = `url(${this.pathToServicesImages}/${service.id}/${service.image})`;
						});
					}
				}
			});
		}

		/**
		 * Метод добавляет окну браузера слушатель события изменения размеров окна браузера
		 * @param {Swiper} sliderServices слайдер услуг
		 */
		addWindowResizeListener(sliderServices) {
			this.checkWidthWidth(sliderServices);

			window.addEventListener('resize', () => {
				this.checkWidthWidth(sliderServices);
			});
		}

		/**
		 * Метод проверяет ширину экрана
		 * @param {Swiper} sliderServices слайдер услуг
		 */
		checkWidthWidth(sliderServices) {
			let windowWidth = +this.serviceEl.getBoundingClientRect().width.toFixed(1);

			if (windowWidth > 904) {
				sliderServices.allowTouchMove = false;
			} else {
				sliderServices.allowTouchMove = true;
			}

			this.setHeightCards();
		}

		/**
		 * Метод добавляет слайдер услугам
		 * @returns {Swiper} слайдер услуг
		 */
		addSliderServices() {
			return new Swiper('.service-slider', this.settings);
		}

		/**
		 * Метод устанавливает высоту карточкам
		 */
		setHeightCards() {
			let itemElems = document.querySelectorAll('.service__item');

			itemElems.forEach((itemEl) => {
				let widthItemEl = itemEl.offsetWidth;
				itemEl.style.height = `${widthItemEl * 0.98}px`;
			});
		}
	}

	window.addEventListener('load', () => {
		let service = new Service();
		service.insertServicesIntoPage(services);
	});
})();