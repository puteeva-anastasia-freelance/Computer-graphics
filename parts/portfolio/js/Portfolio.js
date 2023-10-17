(function () {
	'use strict';

	/**
	 * Класс для отрисовки портфолио
	 */
	class Portfolio {
		constructor() {
			this.pathToWorksImages = 'img/dist/works';
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');
			this.wrapperShowreelsEl = document.querySelector('#portfolio-showreels .swiper-wrapper');
			this.wrapperProjectsEl = document.querySelector('#portfolio-projects .swiper-wrapper');
			this.acceptedEl = document.querySelector('.accepted');
			this.portfolioEl = document.querySelector('.portfolio');
			this.showreelsEl = document.querySelector('#portfolio-showreels');
			this.projectsEl = document.querySelector('#portfolio-projects');

			this.settings = {
				slidesPerView: 'auto',
				speed: 1200,
				freeMode: true,
				breakpoints: {
					320: {
						spaceBetween: 17,
					},
					601: {
						spaceBetween: 30,
					},
					1501: {
						spaceBetween: 0,
					},
				}
			};

			this.numberOfCardsOnDesktop = 8;
		}

		/**
		 * Метод вставляет портфолио на страницу
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		insertPortfolioIntoPage(works) {
			this.insertShowreelsIntoPage(works);
			this.insertProjectsIntoPage(works);
			this.addCardsClickListener(works);
			let sliderShowreels = this.addSliderShowreels();
			let sliderProjects = this.addSliderProjects();
			this.checkWidthWidth(sliderShowreels, sliderProjects);
			this.setHeightCards();
			this.addButtonsMore(works);

			window.addEventListener('resize', () => {
				this.insertShowreelsIntoPage(works);
				this.insertProjectsIntoPage(works);
				this.addCardsClickListener(works);
				sliderShowreels.update();
				sliderProjects.update();
				this.checkWidthWidth(sliderShowreels, sliderProjects);
				this.setHeightCards();
				this.addButtonsMore(works);
			});
		}

		/**
		 * Метод вставляет шоурилы на страницу
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		insertShowreelsIntoPage(works) {
			let windowWidth = window.innerWidth;
			let count = 0;
			let showreelsMarkup = '';
			this.wrapperShowreelsEl.innerHTML = '';

			for (let work of works) {
				if (work.type == 'showreel') {
					if (windowWidth > 1500 && count < this.numberOfCardsOnDesktop) {
						showreelsMarkup += this.getCardMarkup(work, 'Смотреть шоурил');
						count++;
					} else if (windowWidth <= 1500) {
						showreelsMarkup += this.getCardMarkup(work, 'Смотреть шоурил');
					}
				}
			}

			this.wrapperShowreelsEl.insertAdjacentHTML('beforeend', showreelsMarkup);
		}

		/**
		 * Метод вставляет проекты на страницу
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		insertProjectsIntoPage(works) {
			let windowWidth = window.innerWidth;
			let count = 0;
			let projectsMarkup = '';
			this.wrapperProjectsEl.innerHTML = '';

			for (let work of works) {
				if (work.type == 'project') {
					if (windowWidth > 1500 && count < this.numberOfCardsOnDesktop) {
						projectsMarkup += this.getCardMarkup(work, 'Смотреть трейлер');
						count++;
					} else if (windowWidth <= 1500) {
						projectsMarkup += this.getCardMarkup(work, 'Смотреть трейлер');
					}
				}
			}

			this.wrapperProjectsEl.insertAdjacentHTML('beforeend', projectsMarkup);
		}

		/**
		 * Метод получает разметку карточки выполненной работы
		 * @param {WorkDTO} work объект с информацией о выполненной работе
		 * @param {string} textHover текст, отображающийся при наведнии на карточку
		 * @returns {string} html-разметка карточки выполненной работы
		 */
		getCardMarkup(work, textHover) {
			return `
			<div class="swiper-slide">
				<div class="portfolio__item" data-id="${work.id}">
					<div class="portfolio__img" style="background: url(${this.pathToWorksImages}/${work.image}) 0 0 / cover no-repeat" >
						<button type="button" class="portfolio__play">
							<span class="portfolio__play-txt">${textHover}</span>
							<svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.8333 0.333252H49.1667C54.9434 0.333252 59.6642 4.85477 59.9829 10.5518L60 11.1666V42.8333C60 48.61 55.4785 53.3307 49.7814 53.6494L49.1667 53.6666H10.8333C5.05656 53.6666 0.335847 49.1451 0.0171494 43.448L0 42.8333V11.1666C0 5.38981 4.52152 0.669098 10.2186 0.350401L10.8333 0.333252H49.1667H10.8333ZM23.5093 18.9513C23.3936 19.1827 23.3333 19.4379 23.3333 19.6966V34.3032C23.3333 35.2237 24.0795 35.9699 25 35.9699C25.2587 35.9699 25.5139 35.9096 25.7454 35.7939L40.3519 28.4906C41.1752 28.079 41.5089 27.0779 41.0973 26.2546C40.936 25.932 40.6745 25.6705 40.3519 25.5092L25.7454 18.2059C24.9221 17.7943 23.9209 18.128 23.5093 18.9513Z" fill="#F18B36"/>
							</svg>
						</button>
					</div>
					<span class="portfolio__sign">${work.name}</span>
				</div>
			</div>`;
		}

		/**
		 * Метод добавляет карточкам слушатель события клика
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		addCardsClickListener(works) {
			let cardsElems = document.querySelectorAll('.portfolio__item');
			
			cardsElems.forEach((card) => {
				for (let work of works) {
					if (card.dataset.id == work.id) {
						card.addEventListener('click', () => {
							let popUpWithVideo = this.getPopUpWithVideo(work);
							this.popUpOverlayEl.classList.add('active-pop-up');
							this.acceptedEl.insertAdjacentHTML('beforebegin', popUpWithVideo);
							this.addCloseElemsClickListener();
							this.addVideoElemsClickListener();
						});
					}
				}
			});
		}

		/**
		 * Метод добавляет "Крестикам" слушатель события клика
		 */
		addCloseElemsClickListener() {
			let videoCloseElems = document.querySelectorAll('.video__close');
			videoCloseElems.forEach((videoCloseEl) => {
				videoCloseEl.addEventListener('click', () => {
					let videoEl = videoCloseEl.closest('.video');
					this.popUpOverlayEl.classList.remove('active-pop-up');
					videoEl.style.display = 'none';
				});
			});
		}

		/**
		 * При клике на затемненный фон всплывающее окно с видео закрывается
		 */
		addVideoElemsClickListener() {
			let videoElems = document.querySelectorAll('.video');
			videoElems.forEach((videoEl) => {
				videoEl.addEventListener('click', () => {
					this.popUpOverlayEl.classList.remove('active-pop-up');
					videoEl.style.display = 'none';
				})
			});
		}

		/**
		 * Метод получает поп-ап с видео
		 * @param {WorkDTO} work объект с информацией о выполненной работе
		 * @returns {string} html-разметка поп-апа с видео
		 */
		getPopUpWithVideo(work) {
			return `
			<div class="video">
				<div class="video__body">
					<iframe width="1200" height="90%" src="${work.youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<button type="button" class="video__close">
					<svg width="27" height="27" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" class="video__close-icon">
						<path d="M1.9375 1.9375L25.0625 25.0625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M25.0625 1.9375L1.9375 25.0625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>`;
		}

		/**
		 * Метод добавляет слайдер шоурилам
		 * @returns {Swiper} sliderShowreels слайдер шоурилов
		 */
		addSliderShowreels() {
			let sliderShowreels = new Swiper('#portfolio-showreels', {
				...this.settings,
				scrollbar: {
					draggable: true,
					el: '.showreels-scrollbar'
				}
			});
			return sliderShowreels;
		}

		/**
		 * Метод добавляет слайдер проектам
		 * @returns {Swiper} sliderProjects слайдер проектов
		 */
		addSliderProjects() {
			let sliderProjects = new Swiper('#portfolio-projects', {
				...this.settings,
				scrollbar: {
					draggable: true,
					el: '.projects-scrollbar'
				}
			});
			return sliderProjects;
		}

		/**
		 * Метод проверяет ширину экрана
		 * @param {Swiper} sliderShowreels слайдер шоурилов
		 * @param {Swiper} sliderProjects слайдер проектов
		 */
		checkWidthWidth(sliderShowreels, sliderProjects) {
			let windowWidth = +this.portfolioEl.getBoundingClientRect().width.toFixed(1);

			if (windowWidth > 1500) {
				sliderShowreels.allowTouchMove = false;
				sliderProjects.allowTouchMove = false;
			} else {
				sliderShowreels.allowTouchMove = true;
				sliderProjects.allowTouchMove = true;
			}
		}

		/**
		 * Метод устанавливает высоту карточкам
		 */
		setHeightCards() {
			let imgElems = document.querySelectorAll('.portfolio__img');

			imgElems.forEach((imgEl) => {
				let widthImgEl = imgEl.offsetWidth;
				imgEl.style.height = `${widthImgEl * 1.515}px`;
			});
		}

		/**
		 * Метод добавляет кнопки "Смотреть еще"
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		addButtonsMore(works) {
			let numberCardsShowreels = document.querySelectorAll('#portfolio-showreels .portfolio__item').length;
			let numberCardsProjects = document.querySelectorAll('#portfolio-projects .portfolio__item').length;

			let countShowreels = this.findNumberWorks(works, 'showreel');
			let countProjects = this.findNumberWorks(works, 'project');

			if (countShowreels > numberCardsShowreels) {
				this.showreelsEl.insertAdjacentHTML('afterend', '<div class="portfolio__button-wrap"><button type="button" class="button portfolio__button" id="more-showreels">Показать еще</button></div>')
			}

			if (countProjects > numberCardsProjects) {
				this.projectsEl.insertAdjacentHTML('afterend', '<div class="portfolio__button-wrap"><button type="button" class="button portfolio__button" id="more-projects">Показать еще</button></div>')
			}

			this.addButtonsMoreClickListener();
		}

		addButtonsMoreClickListener(){
			let moreShowreelsEl = document.querySelector('#more-showreels');
			if(moreShowreelsEl){
				moreShowreelsEl.addEventListener('click', () => {
					let showreelsMarkup = '';
					this.wrapperShowreelsEl.innerHTML = '';
	
					for (let work of works) {
						if (work.type == 'project') {
							showreelsMarkup += this.getCardMarkup(work, 'Смотреть трейлер');
						}
					}
	
					this.wrapperProjectsEl.insertAdjacentHTML('beforeend', showreelsMarkup);
					this.addCardsClickListener(works);
					this.setHeightCards();
					moreShowreelsEl.style.display = 'none';
				});
			}

			let moreProjectsEl = document.querySelector('#more-projects');
			if(moreProjectsEl){
				moreProjectsEl.addEventListener('click', () => {
					let projectsMarkup = '';
					this.wrapperProjectsEl.innerHTML = '';
	
					for (let work of works) {
						if (work.type == 'project') {
							projectsMarkup += this.getCardMarkup(work, 'Смотреть трейлер');
						}
					}
	
					this.wrapperProjectsEl.insertAdjacentHTML('beforeend', projectsMarkup);
					this.addCardsClickListener(works);
					this.setHeightCards();
					moreProjectsEl.style.display = 'none';
				});
			}
		}

		/**
		 * Метод находит число выполненных
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 * @param {string} type тип работы
		 * @returns {number} количество выполненных работ
		 */
		findNumberWorks(works, type) {
			return works.filter(function (work) {
				return work.type == type;
			}).length;
		}
	}

	window.addEventListener('load', () => {
		let portfolio = new Portfolio();
		portfolio.insertPortfolioIntoPage(works);
	});
})();