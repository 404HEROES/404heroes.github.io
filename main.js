!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){document.querySelector(".love").remove()}),444),setTimeout((function(){document.getElementById("load-screen").remove()}),1e3),document.body.style.display="",console.log("<3");var e,t=document.getElementById("cover-image-one"),n=document.getElementById("logo");e=Math.floor(10*Math.random()+0),t.src=e%2==0?"https://i.postimg.cc/5bS0DSC0/M2-3-COLOR-JPG.jpg":"https://i.postimg.cc/KcjWKwkz/M2-2-JPG.jpg",Math.floor(10*Math.random()+0)%2==0?(console.log("logo1"),n.src="https://i.postimg.cc/D2PJmyX2/LOGO-1.png"):(console.log("logo2"),n.src="https://i.postimg.cc/C5bMTSYY/LOGO-3.png"),document.getElementById("item-one").onclick=function(){return document.getElementById("container").remove(),o.style.display="none",t.style.filter="grayscale(0)",t.style.transition="opacity 2s",t.style.opacity="0",setTimeout((function(){i.style.display="",i.style.opacity="1"}),750),console.log("test help."),!1},document.getElementById("item-two").onclick=function(){var e=document.getElementById("container");return e.remove(),o.style.display="none",t.style.filter="grayscale(0)",t.style.transition="opacity 1s",t.style.opacity="0",e.remove(),setTimeout((function(){a.style.display="",a.style.opacity="1"}),750),console.log("test help."),!1},document.getElementById("item-three").onclick=function(){return document.getElementById("container").remove(),o.style.display="none",t.style.filter="grayscale(0)",t.style.transition="opacity 1s",t.style.opacity="0",setTimeout((function(){r.style.display="",r.style.opacity="1"}),750),console.log("test three."),!1};document.getElementById("load-screen");var o=document.getElementById("main-menu"),i=document.getElementById("days-one-three-story"),a=document.getElementById("day-two-story"),r=document.getElementById("days-one-three-audio");t=document.getElementById("cover-images")}))},function(e,t,n){var o=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);e.exports=i.locals||{}},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function c(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],s=t.base?a[0]+t.base:a[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:d,updater:g(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var y=null,m=0;function g(e,t){var n,o,i;if(t.singleton){var a=m++;n=y||(y=l(t)),o=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=l(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);r[i].references--}for(var a=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"*{margin:0;padding:0}@-webkit-keyframes fadeOut{0%{opacity:100%}100%{opacity:0%}}@keyframes fadeOut{0%{opacity:100%}100%{opacity:0%}}@-webkit-keyframes fadeIn{0%{opacity:0%}100%{opacity:100%}}@keyframes fadeIn{0%{opacity:0%}100%{opacity:100%}}html{background-color:#000}html body{height:100dvh;width:100dvw;font-family:helvetica, arial, sans-serif;color:white;overflow:hidden}#load-screen{position:fixed;top:0;background-color:#000;height:100dvh;width:100dvw;-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:3s;animation-duration:3s;opacity:0}#cover-images{position:fixed;top:0;z-index:-1;width:100dvw;display:grid;justify-content:center;-webkit-filter:grayscale(1);filter:grayscale(1)}#cover-images #cover-image-one{height:100vh}#logo-container{position:fixed;top:3vh;width:100dvw;display:grid;justify-content:center}#logo-container #logo{width:225px;-webkit-filter:drop-shadow(2px 2px 2px black);filter:drop-shadow(2px 2px 2px black)}#container .content{display:grid;height:100dvh;width:100dvw;align-items:center;justify-content:center;text-align:center;font-weight:normal;font-style:normal;font-size:16px;line-height:1.25em;letter-spacing:0.08em}#container .content a{text-decoration:none}#container .content p{color:blue;text-shadow:1px 1px 1.5px #000}#container .content .main-item{font-size:45px;color:#dcdcdc;text-decoration:none;transition:text-shadow 0.25s ease-in-out}#container .content .main-item:hover{text-shadow:1px 1px 10px #fff,1px 1px 10px #fff}#container .page{display:grid;height:100dvh;width:100dvw;align-items:center;justify-content:center;font-style:normal;font-size:16px;line-height:1.25em;letter-spacing:0.08em;text-align:justify}#container .page .page-content{align-self:center;justify-self:center;width:300px}#container .page img{height:100dvh;width:auto}#days-one-three-story,#day-two-story,#days-one-three-audio{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:2s;animation-duration:2s}#title-page{display:grid;height:100dvh;width:100dvw;font-style:italic}.title{justify-self:center;align-self:center;text-align:center;font-size:50px;font-weight:bold}.written-by{font-size:16px;font-weight:normal;letter-spacing:0.08em}#title-caption{position:absolute;bottom:13dvh;justify-self:center;font-style:normal;letter-spacing:0.08em}#story-content{display:grid;width:100dvw;justify-content:center;letter-spacing:0.08em;line-height:1.75em;text-align:justify}.story{width:425px;text-indent:30px}.story p{font-size:16px;margin:0;padding:0}.story p img{height:auto;width:425px}.italic{font-style:italic}.no-indent{text-indent:0px}#back-button{position:fixed;top:35px;left:20px;color:#fff;text-decoration:none;opacity:0.25;transition:opacity 1s;z-index:99}#back-button:hover{opacity:.75}.love{display:flex;justify-content:center;align-items:center;position:fixed;top:0;height:100dvh;width:100dvw;background-color:#000;z-index:99}.hidden{-webkit-animation-name:fadeInOut;animation-name:fadeInOut;-webkit-animation-duration:2s;animation-duration:2s}@-webkit-keyframes fadeInOut{0%{opacity:0}100%{opacity:0}50%{opacity:1}}@keyframes fadeInOut{0%{opacity:0}100%{opacity:0}50%{opacity:1}}@media only screen and (max-width: 720px){.story{width:85dvw}.story p{font-size:16px;margin:0;padding:0}.story p img{height:auto;width:85dvw}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var r,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}}]);