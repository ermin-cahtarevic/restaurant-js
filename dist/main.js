!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){var r=t(2),o=t(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(n,e){var t,r,o;if(e.singleton){var i=m++;t=h||(h=l(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){var r=t(4),o=t(5),i=t(6);e=r(!1);var a=o(i);e.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.home {\n  width: 100%;\n  height: 100vh;\n  background-image: url("+a+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.home h1 {\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  color: white;\n  font-family: 'Permanent Marker', cursive;\n  text-transform: uppercase;\n  font-size: 32px;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  background-color: #98090D;\n  border: 15px double white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-content {\n  /* background-color: rgba(152,9,13, 0.7); */\n  background-color: rgba(0, 0, 0, 0.85);\n  width: 70%;\n  height: 500px;\n  margin: 0 75px 0 0;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.red-text {\n  color: #98090D;\n  font-size: 18px;\n}\n\n.tagline {\n  color: white;\n  font-size: 20px;\n  margin: 30px 0 50px;\n}\n\n.h4 {\n  padding: 10px 40px;\n  color: white;\n  line-height: 1.5;\n  font-size: 18px;\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"e24e36b080fd505466f078a16a15ce75.jpg"},function(n,e,t){(e=t(4)(!1)).push([n.i,".navbar {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: fixed;\n}\n\n.navbar ul {\n  display: flex;\n  list-style: none;\n  margin: 40px 50px 0 0;\n}\n\n.navbar ul li {\n  color: white;\n  margin: 0 25px;\n  padding: 15px 20px;\n  font-size: 18px;\n  border-radius: 7px;\n  border: 1px solid white;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #98090D;\n  transition: all 0.3s ease;\n}\n\n.navbar ul li:hover {\n  background-color: white;\n  color: #98090D;\n  cursor: pointer;\n}\n\n.navbar ul li.active {\n  background-color: white;\n  color: #98090D;\n}",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);t(0);const r=document.createElement("nav"),o=document.createElement("ul"),i=document.createElement("li");i.innerHTML="Home",i.classList.add("active");const a=document.createElement("li");a.innerHTML="Menu";const c=document.createElement("li");c.innerHTML="Contact",o.appendChild(i),o.appendChild(a),o.appendChild(c),r.classList.add("navbar"),r.appendChild(o);var s=r;t(1);const l=document.createElement("div"),u=document.createElement("h1"),d=document.createElement("div"),f=document.createElement("h3"),p=document.createElement("h4");l.classList.add("home"),u.innerHTML="Burger Shack",f.classList.add("tagline"),f.innerHTML="The Burger Shack Promise",p.classList.add("h4"),p.innerHTML='The Burger Shack promise is to give people delicious, quality food in a setting that is \n  <span class="red-text">warm, inviting and unpretentious.</span> By using only the finest ingredients, we aim to deliver a dining \n  experience that cannot be found elsewhere.',d.classList.add("home-content"),d.appendChild(f),d.appendChild(p),l.appendChild(u),l.appendChild(d);var h=l;const m=document.querySelector(".content");m.appendChild(s),m.appendChild(h),document.body.appendChild(m)}]);