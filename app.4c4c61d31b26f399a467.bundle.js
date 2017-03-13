webpackJsonp([0,2],[,,function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=e(0);e(16),exports.app=n.module("app",["ngSanitize",e(11).name])},function(t,exports){!function(t){"use strict";t.bootstrap(document,["app"],{})}(window.angular)},,,,,,,function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.Init=function(){this.api=impress(),this.api.init()},t.prototype.getApi=function(){return this.api},t}();exports.ImpressService=n;var o=function(){function t(t,e,n,o){this.$element=t,this.$scope=e,this.hotkeys=n,this.Impress=o,t.attr("id","impress"),o.Init()}return t.prototype.$onInit=function(){var t=this.Impress.getApi();this.hotkeys.bindTo(this.$scope).add({combo:"1",description:"Route To 1",callback:function(){t.goto(0)}}).add({combo:"2",description:"Route To 2",callback:function(){t.goto(2)}}).add({combo:"3",description:"Route To 3",callback:function(){t.goto(3)}}).add({combo:"4",description:"Route To 4",callback:function(){t.goto(4)}}).add({combo:"5",description:"Route To 5",callback:function(){t.goto(5)}}).add({combo:"6",description:"Route To 6",callback:function(){t.goto(6)}}).add({combo:"7",description:"Route To 7",callback:function(){t.goto(7)}}).add({combo:"8",description:"Route To 8",callback:function(){t.goto(8)}}).add({combo:"9",description:"Route To 9",callback:function(){t.goto(9)}}).add({combo:"0",description:"Route To Overview",callback:function(){t.goto("overview")}})},t}();o.$inject=["$element","$scope","hotkeys","Impress"];var i=function(){function t(){this.template=e(18),this.controller=o}return t}();exports.ImpressComponent=i},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=e(0),o=n.module("app.impress",["cfp.hotkeys"]),i=e(10),s=e(97),r=e(101),a=e(100),c=e(102),p=e(95),u=e(98),l=e(94),d=e(96),f=e(99);o.component("impress",new i.ImpressComponent),o.component("stepList",new s.ListComponent),o.service("Impress",i.ImpressService),o.component("stepRey",new r.ReyComponent),o.component("stepPr",new a.PRComponent),o.component("stepWeb",new c.WebComponent),o.component("stepCode",new p.CodeComponent),o.component("stepParamount",new u.ParamountComponent),o.component("stepGreetings",new u.GreetingsComponent),o.component("stepAccesso",new l.AccessoComponent),o.component("stepHobbies",new d.HobbiesComponent),o.component("stepPets",new f.PetsComponent),t.exports=o},,,,,function(t,exports){},,function(t,exports){t.exports="<step-list></step-list><step-rey></step-rey><step-pr></step-pr><step-web></step-web><step-code></step-code><step-paramount></step-paramount><step-greetings></step-greetings><step-accesso></step-accesso><step-hobbies></step-hobbies><step-pets></step-pets><div id=overview class=step data-x=3000 data-y=1500 data-scale=10></div>"},,,,,function(t,exports,e){e(2),t.exports=e(3)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,exports){function e(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=l[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(a(o.parts[s],e))}else{for(var r=[],s=0;s<o.parts.length;s++)r.push(a(o.parts[s],e));l[o.id]={id:o.id,refs:1,parts:r}}}}function n(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],r=i[1],a=i[2],c=i[3],p={css:r,media:a,sourceMap:c};n[s]?n[s].parts.push(p):e.push(n[s]={id:s,parts:[p]})}return e}function o(t,e){var n=b(),o=h[h.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function r(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function a(t,e){var n,o,a;if(e.singleton){var l=g++;n=m||(m=s(e)),o=c.bind(null,n,l,!1),a=c.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=r(e),o=u.bind(null,n),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=p.bind(null,n),a=function(){i(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else a()}}function c(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var s=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function p(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function u(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var l={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},f=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,h=[];t.exports=function(t,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");o=o||{},void 0===o.singleton&&(o.singleton=f()),void 0===o.insertAt&&(o.insertAt="bottom");var i=n(t);return e(i,o),function(t){for(var s=[],r=0;r<i.length;r++){var a=i[r],c=l[a.id];c.refs--,s.push(c)}if(t){e(n(t),o)}for(var r=0;r<s.length;r++){var c=s[r];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete l[c.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(122);var n=function(){function t(t){this.$scope=t}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope"];var o=function(){function t(){this.template=e(112),this.controller=n}return t}();exports.AccessoComponent=o},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(123);var n=function(){function t(t,e,n){this.$scope=t,this.hotkeys=e,this.impress=n}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope","hotkeys","Impress"];var o=function(){function t(){this.template=e(113),this.controller=n}return t}();exports.CodeComponent=o},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(124);var n=function(){function t(t){this.$scope=t}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope"];var o=function(){function t(){this.template=e(114),this.controller=n}return t}();exports.HobbiesComponent=o},function(t,exports,e){"use strict";(function($){Object.defineProperty(exports,"__esModule",{value:!0}),e(125);var t=function(){function t(t,e){this.$scope=t,this.hotkeys=e}return t.prototype.$onInit=function(){this.hotkeys.bindTo(this.$scope).add({combo:"a",description:"Enter rey",callback:function(){$(".rey .name").addClass("enter")}}).add({combo:"j",description:"Done rey",callback:function(){$(".rey .name").addClass("strikethrough")}}).add({combo:"s",description:"Enter rey",callback:function(){$(".rey .job").addClass("enter")}}).add({combo:"k",description:"Done job",callback:function(){$(".rey .job").addClass("strikethrough")}}).add({combo:"d",description:"Enter Github",callback:function(){$(".rey .github").addClass("enter")}}).add({combo:"l",description:"Done github",callback:function(){$(".rey .github").addClass("strikethrough")}}).add({combo:"f",description:"Enter Cars",callback:function(){$(".rey .cars").addClass("enter")}}).add({combo:";",description:"Done Cars",callback:function(){$(".rey .cars").addClass("strikethrough")}}).add({combo:"g",description:"Enter pets",callback:function(){$(".rey .pets").addClass("enter")}}).add({combo:"'",description:"Done pets",callback:function(){$(".rey .pets").addClass("strikethrough")}})},t}();t.$inject=["$scope","hotkeys"];var n=function(){function n(){this.template=e(115),this.controller=t}return n}();exports.ListComponent=n}).call(exports,e(9))},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(126);var n=function(){function t(t){this.$scope=t}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope"];var o=function(){function t(){this.template=e(117),this.controller=n}return t}();exports.ParamountComponent=o;var i=function(){function t(){this.template=e(116),this.controller=n}return t}();exports.GreetingsComponent=i},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(127);var n=function(){function t(t){this.$scope=t}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope"];var o=function(){function t(){this.template=e(118),this.controller=n}return t}();exports.PetsComponent=o},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(128);var n=function(){function t(t,e,n){this.$scope=t,this.hotkeys=e,this.impress=n}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope","hotkeys","Impress"];var o=function(){function t(){this.template=e(119),this.controller=n}return t}();exports.PRComponent=o},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(129);var n=function(){function t(){this.template=e(120)}return t}();exports.ReyComponent=n},function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),e(130);var n=function(){function t(t,e,n){this.$scope=t,this.hotkeys=e,this.impress=n}return t.prototype.$onInit=function(){},t}();n.$inject=["$scope","hotkeys","Impress"];var o=function(){function t(){this.template=e(121),this.controller=n}return t}();exports.WebComponent=o},function(t,exports,e){t.exports="step-accesso #accesso {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(132)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\n"},function(t,exports,e){t.exports="step-code #code {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(133)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n"},function(t,exports,e){t.exports="step-hobbies #hobbies {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(138)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\n"},function(t,exports){t.exports="step-list .rey {\n  margin: 0% 10%;\n  overflow: hidden;\n  opacity: 0;\n  animation: fade 0.1s ease-in-out forwards;\n  /* fade in */\n}\nstep-list .rey li {\n  opacity: 0;\n  margin-bottom: 15px;\n}\nstep-list .rey li.strikethrough:after {\n  content: '';\n  position: absolute;\n  width: 160px;\n  height: 3px;\n  background-color: red;\n  left: -50px;\n  top: 37px;\n  transform: rotateZ(3deg);\n}\nstep-list .rey li.enter {\n  animation: fade 2s ease-in-out forwards;\n  animation-delay: 1s;\n}\n@keyframes fade {\n  100% {\n    opacity: 1;\n  }\n}\n"},function(t,exports,e){t.exports="step-paramount #paramount {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(135)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\nstep-greetings #greetings {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(134)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\n"},function(t,exports,e){t.exports="step-pets #pets {\n  text-align: center;\n  height: 700px;\n  background-image: url("+e(136)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\n"},function(t,exports,e){t.exports="step-pr #pr {\n  width: 500px;\n  height: 165px;\n  text-align: center;\n  background-image: url("+e(137)+");\n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\nstep-pr #pr .rey {\n  background-image: url("+e(139)+");\n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: 65px;\n  width: 100px;\n  height: 100px;\n}\n"},function(t,exports,e){t.exports="step-rey #rey {\n  font-size: 50px;\n  background-image: url("+e(140)+");\n  background-position: bottom left;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nstep-rey #rey > p {\n  margin-top: 20px;\n}\nstep-rey #rey .footnote {\n  font-size: 25px;\n  left: 400px;\n  position: absolute;\n  bottom: 40px;\n}\n"},function(t,exports,e){t.exports="step-web #abe {\n  text-align: center;\n}\nstep-web #abe .abe {\n  width: 100%;\n  height: 350px;\n  background-image: url("+e(131)+");\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: 583px;\n}\n"},function(t,exports){t.exports="<div id=accesso class=step data-x=4500 data-y=0 data-scale=1></div>"},function(t,exports){t.exports="<div id=code class=step data-x=3500 data-y=2300 data-rotate=180 data-scale=2></div>"},function(t,exports){t.exports="<div id=hobbies class=step data-x=-500 data-y=2000 data-scale=2></div>"},function(t,exports){t.exports='<div id=list class=step data-x=0 data-y=0 data-scale=1><div class=rey><ul class=fa-ul><li class=name><i class="fa-li fa fa-user"></i>i am rey</li><li class=job><i class="fa-li fa fa-laptop"></i>i build things on the web</li><li class=github><i class="fa-li fa fa-github"></i>i code for fun</li><li class=cars><i class="fa-li fa fa-car"></i>i like to play rc cars</li><li class=pets><i class="fa-li fa fa-paw"></i>i have lots of pets</li></ul></div></div>'},function(t,exports){t.exports='<div id=greetings class="step slide" data-x=3000 data-y=0 data-scale=1></div>'},function(t,exports){t.exports='<div id=paramount class="step slide" data-x=1500 data-y=0 data-scale=1></div>'},function(t,exports){t.exports="<div id=pets class=step data-x=-500 data-y=4000 data-scale=2></div>"},function(t,exports){t.exports="<div id=pr class=step data-x=-500 data-y=-2200 data-z=-3000 data-rotate=50 data-scale=1><div class=rey></div></div>"},function(t,exports){t.exports='<div id=rey class="step slide" data-x=0 data-y=-1500></div>'},function(t,exports){t.exports='<div id=abe class=step data-x=1500 data-y=2300 data-rotate=90 data-scale=2><q><a href=http://github.com/reyramos>github.com/reyramos</a></q> <q><a href="https://bitbucket.org/reyramos/">bitbucket.com/reyramos</a></q> <q><a href=https://gitlab.com/reyramos>gitlab.com/reyramos</a></q><div class=abe></div></div>'},function(t,exports,e){var n=e(103);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(104);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(105);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(106);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(107);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(108);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(109);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(110);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){var n=e(111);"string"==typeof n&&(n=[[t.i,n,""]]);e(92)(n,{});n.locals&&(t.exports=n.locals)},function(t,exports,e){t.exports=e.p+"src/img/abe.png"},function(t,exports,e){t.exports=e.p+"src/img/accesso.png"},function(t,exports,e){t.exports=e.p+"src/img/collage-2017-03-11.png"},function(t,exports,e){t.exports=e.p+"src/img/greetings.png"},function(t,exports,e){t.exports=e.p+"src/img/paramount.png"},function(t,exports,e){t.exports=e.p+"src/img/pets.png"},function(t,exports,e){t.exports=e.p+"src/img/puerto-rico-map-outline-silhouette.png"},function(t,exports,e){t.exports=e.p+"src/img/rc.png"},function(t,exports,e){t.exports=e.p+"src/img/rey.jpg"},function(t,exports,e){t.exports=e.p+"src/img/rey.png"}],[23]);