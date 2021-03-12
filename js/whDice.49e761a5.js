(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["whDice"],{1413:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dice-app"},[i("div",{staticClass:"dice-app__header"},e._l(e.numberList,(function(t){return i("div",{key:t},[i("button",{staticClass:"die",class:e.dieClass(t),attrs:{disabled:!e.diceCup.hasRolled||0===e.totalDiceAtValue(t)},on:{click:function(i){return e.updateSelected(t)}}}),i("br"),e._v("("+e._s(e.totalDiceAtValue(t))+") ")])})),0),i("div",{staticClass:"dice-app__body"},e._l(e.diceCup.dice,(function(t){return i("button",{key:t,staticClass:"die --small",class:e.dieClass(t.value)})})),0),i("div",{staticClass:"dice-app__footer"},[i("button",{staticClass:"die",on:{click:function(t){return e.rollDice()}}},[e._v("Roll ("+e._s(e.totalDice)+")")]),i("button",{staticClass:"die",attrs:{disabled:1!==e.selectedValues.length},on:{click:function(t){return e.removeAllBelowSelected()}}},[e._v("Rem."),i("br"),e._v("Below")]),i("button",{staticClass:"die die-icon",on:{click:function(t){return e.addDie()}}},[e._v("+")]),i("button",{staticClass:"die die-icon",on:{click:function(t){return e.removeDie()}}},[e._v("-")]),i("button",{staticClass:"die die-icon",on:{click:function(t){return e.setNumDice()}}},[e._v("#")]),i("button",{staticClass:"die",on:{click:function(t){return e.clearDice()}}},[e._v("Clear")])])])},c=[],a=(i("4de4"),i("4160"),i("45fc"),i("e25e"),i("159b"),i("9f12")),o=i("53fe"),l=i("8b83"),r=i("c65a"),s=i("c03e"),u=i("9ab4"),d=i("60a3"),f=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(l["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.diceCup={dice:[],hasRolled:!1},e.numberList=[1,2,3,4,5,6],e.selectedValues=[],e}return Object(s["a"])(t,e),Object(o["a"])(t,[{key:"dieClass",value:function(e){return{"--one":1===e,"--two":2===e,"--three":3===e,"--four":4===e,"--five":5===e,"--six":6===e,"--selected":this.selectedValues.some((function(t){return t===e}))}}},{key:"addDie",value:function(){var e={value:Math.floor(6*Math.random())+1};this.diceCup.dice.push(e),this.diceCup.hasRolled=!1}},{key:"removeDie",value:function(){this.diceCup.dice.pop(),this.selectedValues=[],this.diceCup.hasRolled=!1}},{key:"clearDice",value:function(){this.selectedValues=[],this.diceCup.dice=[],this.diceCup.hasRolled=!1}},{key:"setNumDice",value:function(){var e=window.prompt("Please enter the number of dice you want to roll"),t=parseInt(e,10);if(t>0&&t<=1e5){this.clearDice();for(var i=0;i<t;i++)this.addDie()}else alert("Number must be between 1 and 100000");this.diceCup.hasRolled=!1}},{key:"rollDice",value:function(){var e=this;0===this.selectedValues.length?this.diceCup.dice.forEach((function(e){e.value=Math.floor(6*Math.random())+1})):this.diceCup.dice.forEach((function(t){e.selectedValues.some((function(e){return e===t.value}))&&(t.value=Math.floor(6*Math.random())+1)})),this.selectedValues=[],this.diceCup.hasRolled=!0}},{key:"removeAllBelowSelected",value:function(){if(1===this.selectedValues.length){var e=this.selectedValues[0];this.diceCup.dice=this.diceCup.dice.filter((function(t){return t.value>=e}))}this.selectedValues=[]}},{key:"updateSelected",value:function(e){this.selectedValues.some((function(t){return t===e}))?this.selectedValues=this.selectedValues.filter((function(t){return t!==e})):this.selectedValues.push(e)}},{key:"totalDiceAtValue",value:function(e){return this.diceCup.hasRolled?this.diceCup.dice.filter((function(t){return t.value===e})).length:0}},{key:"mounted",value:function(){this.$root.$emit("set-info",{title:"WH Dice Roller",info:"While I don't play WH a buddy does and needed a dice roller. Hope it's handy.\n      \n      - Click '+' to add dice to the \"cup\" and '-' to remove dice. You can also set the number of dice with the '#' button.\n      \n      - Until dice have been rolled you cannot select any values.\n      \n      - When no values are selected all dice will be rolled. If values are selected, only those values will be re-rolled.\n\n      - The number in the parenthesis on the roll button is how many dice are going to be rolled.\n\n      - The numbers under each value is the count of how many dice currently have that value.\n      \n      - You can only use the Remove Below option if you've selected one value at the top."})}},{key:"totalDice",get:function(){if(0===this.selectedValues.length)return this.diceCup.dice.length;for(var e=0,t=0;t+1<=this.selectedValues.length;t++)e+=this.totalDiceAtValue(this.selectedValues[t]);return e}}]),t}(d["c"]);f=u["a"]([d["a"]],f);var h=f,v=h,p=(i("d3bb"),i("2877")),b=Object(p["a"])(v,n,c,!1,null,null,null);t["default"]=b.exports},"159b":function(e,t,i){var n=i("da84"),c=i("fdbc"),a=i("17c2"),o=i("9112");for(var l in c){var r=n[l],s=r&&r.prototype;if(s&&s.forEach!==a)try{o(s,"forEach",a)}catch(u){s.forEach=a}}},"17c2":function(e,t,i){"use strict";var n=i("b727").forEach,c=i("b301");e.exports=c("forEach")?function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(e,t,i){var n=i("d039"),c=i("b622"),a=i("60ae"),o=c("species");e.exports=function(e){return a>=51||!n((function(){var t=[],i=t.constructor={};return i[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4160:function(e,t,i){"use strict";var n=i("23e7"),c=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=c},{forEach:c})},"45fc":function(e,t,i){"use strict";var n=i("23e7"),c=i("b727").some,a=i("b301");n({target:"Array",proto:!0,forced:a("some")},{some:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,i){"use strict";var n=i("23e7"),c=i("b727").filter,a=i("1dde");n({target:"Array",proto:!0,forced:!a("filter")},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var n=i("1d80"),c=i("5899"),a="["+c+"]",o=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),r=function(e){return function(t){var i=String(n(t));return 1&e&&(i=i.replace(o,"")),2&e&&(i=i.replace(l,"")),i}};e.exports={start:r(1),end:r(2),trim:r(3)}},"7c2a":function(e,t,i){},b301:function(e,t,i){"use strict";var n=i("d039");e.exports=function(e,t){var i=[][e];return!i||!n((function(){i.call(null,t||function(){throw 1},1)}))}},d3bb:function(e,t,i){"use strict";var n=i("7c2a"),c=i.n(n);c.a},e25e:function(e,t,i){var n=i("23e7"),c=i("e583");n({global:!0,forced:parseInt!=c},{parseInt:c})},e583:function(e,t,i){var n=i("da84"),c=i("58a8").trim,a=i("5899"),o=n.parseInt,l=/^[+-]?0[Xx]/,r=8!==o(a+"08")||22!==o(a+"0x16");e.exports=r?function(e,t){var i=c(String(e));return o(i,t>>>0||(l.test(i)?16:10))}:o}}]);
//# sourceMappingURL=whDice.49e761a5.js.map