!function(){"use strict";class e{constructor(){this.buttonFeedbackElems=document.querySelectorAll(".button__feedback"),this.popUpOverlayEl=document.querySelector(".pop-up__overlay"),this.acceptedEl=document.querySelector(".accepted"),this.mobileMenuEl=document.querySelector(".main-header__mobile-menu"),this.mobileBurgerEl=document.querySelector(".main-header__mobile-burger"),this.mainHeaderEl=document.querySelector(".main-header")}addButtonsFeedbackClickListener(){let o=0;this.buttonFeedbackElems.forEach(t=>{t.addEventListener("click",()=>{var e=this.getNameForm(t),e=this.getFormFeedback(t.textContent,e,o);this.popUpOverlayEl.classList.add("active-pop-up"),this.acceptedEl.insertAdjacentHTML("beforebegin",e),this.addMaskPhone(),this.addCloseElemsClickListener(),this.addButtonsPopUpClickListener(),this.checkComplianceWithPolicy(),this.closeMobileMenu(),this.addPopUpElemsClickListener(),o++})})}closeMobileMenu(){this.popUpOverlayEl.classList.remove("active-mobile-menu"),this.mobileMenuEl.classList.remove("active"),this.mobileBurgerEl.classList.remove("cross"),this.mainHeaderEl.classList.remove("active")}getNameForm(e){return e.dataset.value}getFormFeedback(e,t,o){return`<div class="pop-up">
			<div class="pop-up__container">
				<div class="pop-up__body"
					style="background: 0 0 / cover no-repeat url(img/dist/bg-popup.webp);">
					<h6 class="pop-up__title">Обратная связь</h6>
					<p class="txt pop-up__txt">Заполните форму и мы свяжемся с Вами!</p>
					<form class="pop-up__form form-application">
						<div class="pop-up__errors">
							<span class="txt pop-up__error pop-up__error-phone">Для отправки формы, пожалуйста, укажите Ваш номер телефона</span>
							<span class="policy__error pop-up__error">Для отправки данных подтвердите согласие на&nbsp;обработку персональных данных, нажав на&nbsp;кнопку ниже</span>	
						</div>
						<input type="hidden" name="name-form" value="${t}">
						<div class="pop-up__name">
							<input type="text" class="pop-up__input" placeholder="Укажите Ваше имя" name="name">
						</div>
						<div class="pop-up__phone">
							<input required class="pop-up__input mask-phone" type="text" placeholder="Укажите Ваш номер телефона" name="phone">
						</div>
						<button type="submit" class="button button__accent pop-up__button">${e}</button>
						<div class="policy">
							<input class="policy__checkbox" id="pop-up-privacy-policy-${o}" type="checkbox" name="privacy-policy" checked="">
							<label class="policy__label" for="pop-up-privacy-policy-${o}">Нажимая на&nbsp;кнопку, вы&nbsp;даете согласие
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
		</div>`}addButtonsPopUpClickListener(){document.querySelectorAll(".pop-up__button").forEach(e=>{var t=e.closest(".pop-up");let o=t.querySelector(".mask-phone"),p=t.querySelector(".pop-up__error-phone");e.addEventListener("click",()=>{""==o.value?p.style.display="block":p.style.display="none"})})}addCloseElemsClickListener(){document.querySelectorAll(".pop-up__close").forEach(t=>{t.addEventListener("click",()=>{var e=t.closest(".pop-up");this.popUpOverlayEl.classList.remove("active-pop-up"),e.style.display="none"})})}addMaskPhone(){let e;$(".mask-phone").mask("+9999999999?99"),$(".pop-up .mask-phone").on("keyup",function(){10<=(e=$(this).val().match(/\d+/g).join("").length)&&e<=12&&$(".pop-up__error-phone").css("display","none")})}checkComplianceWithPolicy(){document.querySelectorAll(".pop-up").forEach(e=>{let t=e.querySelector(".policy__checkbox"),o=e.querySelector(".policy__error");e.addEventListener("submit",e=>{0==t.checked&&e.preventDefault()}),t.addEventListener("click",()=>{1==t.checked?o.style.display="none":o.style.display="block"})})}addPopUpElemsClickListener(){document.querySelectorAll(".pop-up").forEach(o=>{o.addEventListener("click",e=>{var t=o.querySelector(".pop-up__container");e.target==t&&(this.popUpOverlayEl.classList.remove("active-pop-up"),o.style.display="none")})})}}window.addEventListener("load",()=>{(new e).addButtonsFeedbackClickListener()})}();