(function(t){function e(e){for(var o,r,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({about:"about",crucibleEncounters:"crucibleEncounters",whDice:"whDice",woodCostCalculator:"woodCostCalculator"}[t]||t)+"."+{about:"19905c68",crucibleEncounters:"759c76b9",whDice:"7894368f",woodCostCalculator:"fff097ec"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1,crucibleEncounters:1,whDice:1,woodCostCalculator:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",crucibleEncounters:"crucibleEncounters",whDice:"whDice",woodCostCalculator:"woodCostCalculator"}[t]||t)+"."+{about:"0958224d",crucibleEncounters:"23492d07",whDice:"4b23feb6",woodCostCalculator:"2fce708f"}[t]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"13e4":function(t,e,n){},"17bf":function(t,e,n){"use strict";var o=n("32d7"),r=n.n(o);r.a},"32d7":function(t,e,n){},"3a3d":function(t,e,n){},9184:function(t,e,n){"use strict";var o=n("3a3d"),r=n.n(o);r.a},bc26:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"main-window"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("InfoWindow"),n("Footer")],1)},a=[],c=n("9f12"),u=n("8b83"),i=n("c65a"),s=n("c03e"),l=n("9ab4"),f=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__buttons"},[n("router-link",{attrs:{tag:"button",to:"/"}},[n("img",{attrs:{src:"https://img.icons8.com/nolan/64/squared-menu.png"}})]),t._m(0),n("button",{on:{click:function(e){return t.OnInfoClick()}}},[n("img",{attrs:{src:"https://img.icons8.com/nolan/64/info-squared.png"}})])],1)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticStyle:{opacity:".25"}},[n("img",{attrs:{src:"https://img.icons8.com/nolan/64/menu-squared-2.png"}})])}],p=n("53fe"),b=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(p["a"])(e,[{key:"OnInfoClick",value:function(){this.$root.$emit("toggle-info")}}]),e}(f["b"]);b=l["a"]([f["a"]],b);var m=b,v=m,w=(n("e400"),n("2877")),g=Object(w["a"])(v,d,h,!1,null,null,null),y=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-window",class:t.shouldShow?"--show":"--hide"},[n("h1",[t._v(t._s(t.infoTitle))]),n("p",[t._v(t._s(t.infoContent))])])},O=[],j=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.shouldShow=!1,t.infoTitle="Title",t.infoContent="Infos",t}return Object(s["a"])(e,t),Object(p["a"])(e,[{key:"mounted",value:function(){var t=this;this.$root.$on("toggle-info",(function(){t.shouldShow=!t.shouldShow})),this.$root.$on("set-info",(function(e){t.shouldShow=!1,t.infoTitle=e.title,t.infoContent=e.info}))}}]),e}(f["b"]);j=l["a"]([f["a"]],j);var _=j,E=_,S=(n("e8ea"),Object(w["a"])(E,C,O,!1,null,null,null)),k=S.exports,T=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(f["b"]);T=l["a"]([Object(f["a"])({components:{Footer:y,InfoWindow:k}})],T);var D=T,$=D,x=(n("9184"),n("17bf"),n("d6db"),Object(w["a"])($,r,a,!1,null,null,null)),P=x.exports,A=(n("d3b7"),n("8c4f"));o["a"].use(A["a"]);var I=[{path:"/",name:"home",component:function(){return n.e("about").then(n.bind(null,"1c62"))}},{path:"/wh-dice",name:"whDice",component:function(){return n.e("whDice").then(n.bind(null,"1413"))}},{path:"/crucible-encounters",name:"crucibleEncounters",component:function(){return n.e("crucibleEncounters").then(n.bind(null,"56b5"))}},{path:"/wood-calculator",name:"woodCostCalculator",component:function(){return n.e("woodCostCalculator").then(n.bind(null,"4ba4"))}}],q=new A["a"]({routes:I}),L=q,N=n("2f62");o["a"].use(N["a"]);var M=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:L,store:M,render:function(t){return t(P)}}).$mount("#app")},d6db:function(t,e,n){"use strict";var o=n("13e4"),r=n.n(o);r.a},e400:function(t,e,n){"use strict";var o=n("bc26"),r=n.n(o);r.a},e8ea:function(t,e,n){"use strict";var o=n("e995"),r=n.n(o);r.a},e995:function(t,e,n){}});
//# sourceMappingURL=app.c232eb57.js.map