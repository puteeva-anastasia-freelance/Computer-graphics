!function(){"use strict";class e{constructor(){this.pathToServicesImages="img/dist/services",this.popUpOverlayEl=document.querySelector(".pop-up__overlay"),this.wrapperEl=document.querySelector(".swiper-wrapper"),this.serviceEl=document.querySelector(".service"),this.settings={slidesPerView:"auto",speed:1200,freeMode:!0,scrollbar:{el:".swiper-scrollbar.service-scrollbar",draggable:!0},breakpoints:{320:{spaceBetween:10},768:{spaceBetween:35},1200:{spaceBetween:52.5}}}}insertServicesIntoPage(e){let t="";for(var i of e)t+=this.getServiceMarkup(i);this.wrapperEl.insertAdjacentHTML("beforeend",t),this.addCardsHoverListener(e);e=this.addSliderServices();this.addWindowResizeListener(e)}getServiceMarkup(e){return`
			<div class="swiper-slide">
				<div class="service__item" style="background: url(${this.pathToServicesImages}/${e.id}/${e.image}) center / cover no-repeat;" data-id="${e.id}">
					<div class="service__inner">
						<div>
							<h3 class="h5">${e.name}</h3>
							<p class="service__txt">${e.description}</p>
						</div>
						<button type="button" class="button service__button button__feedback" data-value="Заказать: ${e.name}">заказать услугу</button>
					</div>
				</div>
			</div>
			`}addCardsHoverListener(i){document.querySelectorAll(".service__item").forEach(t=>{for(let e of i)t.dataset.id==e.id&&(t.addEventListener("mouseover",()=>{t.style.backgroundImage=`url(${this.pathToServicesImages}/${e.id}/${e.imageHover})`}),t.addEventListener("mouseout",()=>{t.style.backgroundImage=`url(${this.pathToServicesImages}/${e.id}/${e.image})`}))})}addWindowResizeListener(e){this.checkWidthWidth(e),window.addEventListener("resize",()=>{this.checkWidthWidth(e)})}checkWidthWidth(e){var t=+this.serviceEl.getBoundingClientRect().width.toFixed(1);e.allowTouchMove=!(904<t),this.setHeightCards()}addSliderServices(){return new Swiper(".service-slider",this.settings)}setHeightCards(){document.querySelectorAll(".service__item").forEach(e=>{var t=e.offsetWidth;e.style.height=.98*t+"px"})}}window.addEventListener("load",()=>{(new e).insertServicesIntoPage(services)})}();