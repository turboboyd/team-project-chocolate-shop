(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-header-menu-open]"),closeMenuBtn:document.querySelector("[data-header-menu-close]"),menu:document.querySelector("[data-header-menu]")};t.openMenuBtn.addEventListener("click",o),t.closeMenuBtn.addEventListener("click",o);function o(){t.menu.classList.toggle("is-hidden")}})();(function(){const t=document.querySelector("#modal-backdrop");document.addEventListener("click",o);function o(e){const c=e.target.closest(".js-modal");if(c){const u=c.dataset.modal;n(document.querySelector(u))}const a=e.target.closest(".modal-close");a&&(e.preventDefault(),r(a.closest(".modal-window"))),e.target.matches("#modal-backdrop")&&r(document.querySelector(".modal-window.show"))}function n(e){e.classList.add("show"),t.classList.remove("hidden")}function r(e){e.classList.remove("show"),t.classList.add("hidden")}})();$(document).ready(function(){$(".slider").slick({arrows:!1,dots:!0,variableWidth:!0,speed:1e3,infinite:!1})});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(o){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof t.closest!="function"&&(t.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var c=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+c+'"]');a.classList.add("active"),o.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var c=this.closest(".modal");c.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});var i=document.querySelectorAll(".phone-input"),m=document.querySelectorAll(".country-container");for(var s=0;s<i.length;s++){var l=i[s];m[s];var d=window.intlTelInput(l,{initialCountry:"ua",separateDialCode:!0,utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"});l.addEventListener("change",function(){var t=d.getSelectedCountryData();t.dialCode;var o=d.getNumber();d.getNumber(intlTelInputUtils.numberFormat.E164);var n=o;l.value=n})}(()=>{({pushPlay:document.querySelector("[data-how-made-push-play]"),hide:document.querySelector("[data-how-made-hide]")}).pushPlay.addEventListener("click",o);function o(){document.querySelector("[data-how-made-hide]").classList.add("how-made-is-hidden");const r=document.querySelector(".how-made-video"),e=r.getAttribute("src");r.setAttribute("src",e+"?autoplay=1&mute=0&rel=0&showinfo=0")}})();$(document).ready(function(){$(".buynow-slider").slick({arrows:!1,dots:!0,variableWidth:!0,speed:1e3,infinite:!1})});
