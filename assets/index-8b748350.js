(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();(()=>{const n={openMenuBtn:document.querySelector("[data-header-menu-open]"),closeMenuBtn:document.querySelector("[data-header-menu-close]"),menu:document.querySelector("[data-header-menu]")};n.openMenuBtn.addEventListener("click",t),n.closeMenuBtn.addEventListener("click",t);function t(){n.menu.classList.toggle("is-hidden")}})();const m=document.querySelector(".modal.buynow"),y=document.querySelector(".modal-hero");document.querySelectorAll(".buynow-submit");const l=document.forms.buynow;l.addEventListener("input",n=>{m.classList.contains("active")&&l.elements[0].value!==""&&l.elements[1].value!==""&&l.elements[2].value!==""&&l.elements[3].value!==""&&l.elements[4].value!==""&&l.addEventListener("submit",t=>{t.preventDefault(),m.classList.remove("active"),y.classList.add("active")})});$(document).ready(function(){$(".slider").slick({arrows:!1,dots:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,infinite:!0,responsive:[{breakpoint:375,settings:{variableWidth:!1,slidesToShow:1}}]})});const v=document.querySelector(".modal.modal-review"),h=document.querySelector(".modal-feedback");document.querySelectorAll(".modal-review-submit");const s=document.forms["reviews-form"];s.addEventListener("input",n=>{v.classList.contains("active")&&s.elements[0].value!==""&&s.elements[1].value!==""&&s.elements[2].value!==""&&s.elements[3].value!==""&&s.addEventListener("submit",t=>{t.preventDefault(),v.classList.remove("active"),h.classList.add("active")})});document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),a=document.querySelectorAll(".js-modal-close");n.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+o+'"]');c.classList.add("active"),t.classList.add("active")})}),a.forEach(function(r){r.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});var f=document.querySelectorAll(".phone-input"),p=document.querySelectorAll(".country-container");for(var i=0;i<f.length;i++){var d=f[i];p[i];var u=window.intlTelInput(d,{initialCountry:"ua",separateDialCode:!0,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"});d.addEventListener("change",function(){var n=u.getSelectedCountryData();n.dialCode;var t=u.getNumber();u.getNumber(intlTelInputUtils.numberFormat.E164);var a=t;d.value=a})}(()=>{({pushPlay:document.querySelector("[data-how-made-push-play]"),hide:document.querySelector("[data-how-made-hide]")}).pushPlay.addEventListener("click",t);function t(){document.querySelector("[data-how-made-hide]").classList.add("how-made-is-hidden");const r=document.querySelector(".how-made-video"),e=r.getAttribute("src");r.setAttribute("src",e+"?autoplay=1&mute=0&rel=0&showinfo=0")}})();const L=document.querySelectorAll('a[href*="#"]');for(let n of L)n.addEventListener("click",function(t){t.preventDefault();const a=n.getAttribute("href").substr(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})});
