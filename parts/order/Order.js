!function(){"use strict";class e{constructor(){this.buttonEl=document.querySelector(".order__button"),this.inputPhoneEl=document.querySelector(".order .mask-phone"),this.errorPhone=document.querySelector(".order__error-phone"),this.formEl=document.querySelector(".order__form")}init(){this.addButtonClickListener(),this.addMaskPhone(),this.checkComplianceWithPolicy()}addButtonClickListener(){this.buttonEl.addEventListener("click",()=>{""==this.inputPhoneEl.value?this.errorPhone.style.display="block":this.errorPhone.style.display="none"})}addMaskPhone(){$(".order .mask-phone").mask("+9999999999?99"),$(".order .mask-phone").on("keyup",function(){var e=$(".order .mask-phone").val().match(/\d+/g).join("").length;10<=e&&e<=12&&$(".order__error-phone").css("display","none")})}checkComplianceWithPolicy(){let o=this.formEl.querySelector(".policy__checkbox"),e=this.formEl.querySelector(".policy__error");this.formEl.addEventListener("submit",e=>{0==o.checked&&e.preventDefault()}),o.addEventListener("click",()=>{1==o.checked?e.style.display="none":e.style.display="block"})}}window.addEventListener("load",()=>{(new e).init()})}();