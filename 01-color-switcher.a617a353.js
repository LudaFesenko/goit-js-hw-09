!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.setAttribute("disabled",!0),t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r(),n=setInterval((function(){r()}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.a617a353.js.map
