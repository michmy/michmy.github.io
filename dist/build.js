!function(e){function n(u){if(t[u])return t[u].exports;var o=t[u]={i:u,l:!1,exports:{}};return e[u].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,n,t){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=0)}([function(e,n){"use strict";function t(e){function n(){document.documentElement.scrollTop+=1;var e=0!==document.documentElement.scrollTop?document.documentElement:document.body;return document.documentElement.scrollTop-=1,e}function t(){var e=Date.now(),n=Math.min(1,(e-a)/u),d=c[o](n);return i.scrollTop=d*(f-l)+l,i.scrollTop===f?void(r&&r()):void requestAnimationFrame(t)}var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",r=arguments[3],c={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=n(),l=i.scrollTop,a=Date.now(),d=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),m=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f=d-e.offsetTop<m?d-m:e.offsetTop;t()}document.getElementById("link-work").onclick=function(){t(document.getElementById("work"),350,"easeOutQuad"),event.preventDefault()}}]);