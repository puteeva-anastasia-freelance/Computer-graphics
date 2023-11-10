!function(){"use strict";class e{constructor(){this.wrapEl=document.querySelector(".benefit__container")}insertBenefitsIntoPage(e){let t="";for(var i of e)t+=this.getBenefitMarkup(i);this.wrapEl.insertAdjacentHTML("beforeend",t)}getBenefitMarkup(e){return`
			<div class="benefit__item">
				<div class="benefit__inner">
					<div class="benefit__img">
						${e.image}
					</div>
				</div>
				<h3 class="h4">${e.name}</h3>
				<p class="benefit__txt">${e.description}</p>
			</div>
			`}}window.addEventListener("load",()=>{(new e).insertBenefitsIntoPage(benefits)})}();