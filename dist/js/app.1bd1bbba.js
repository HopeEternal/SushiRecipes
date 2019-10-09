(function(e){function t(t){for(var i,s,u=t[0],o=t[1],l=t[2],d=0,c=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&c.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);h&&h(t);while(c.length)c.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},r={app:0},a=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0f7ae347":"256c9ad5"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-0f7ae347":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-0f7ae347":"55acdbeb"}[e]+".css",r=o.p+i,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return t()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){l=c[u],d=l.getAttribute("data-href");if(d===i||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete s[e],h.parentNode.removeChild(h),n(a)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){s[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=u(e);var c=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var h=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"032d":function(e,t,n){"use strict";var i=n("59ca"),s=(n("e71f"),{apiKey:"AIzaSyCDtmyxfU85BSheE4uRtkt5jhmt8UegyEo",authDomain:"sushi-recipes.firebaseapp.com",projectId:"sushi-recipes-19628"}),r=i["initializeApp"](s);t["a"]=r.firestore()},"2adb":function(e,t,n){"use strict";var i=n("9573"),s=n.n(i);s.a},"30d6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("nav",{staticClass:"nav-extended indigo darken-2"},[n("div",{staticClass:"nav-content"},[n("router-link",{attrs:{to:{name:"Home"}}},[n("span",{staticClass:"nav-title"},[e._v("Sushi Recipes")])]),n("a",{staticClass:"btn-floating btn-large halfway-fab pink",attrs:{href:""}},[n("router-link",{attrs:{to:{name:"AddSushi"}}},[n("i",{staticClass:"material-icons"},[e._v("add")])])],1)],1)])])},u=[],o={name:"Navbar",data:function(){return{}}},l=o,d=(n("5dfc"),n("2877")),c=Object(d["a"])(l,a,u,!1,null,null,null),h=c.exports,f={name:"App",components:{Navbar:h}},p=f,v=Object(d["a"])(p,s,r,!1,null,null,null),m=v.exports,g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-sushi container"},[n("h2",{staticClass:"center-align indigo-text"},[e._v("Add New Sushi Recipe")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.AddSushi(t)}}},[n("div",{staticClass:"field title"},[n("label",{attrs:{for:"title"}},[e._v("Sushi Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._l(e.ingredients,(function(t,i){return n("div",{key:i,staticClass:"field"},[n("label",{attrs:{for:"ingredient"}},[e._v("Ingredient:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients[i],expression:"ingredients[index]"}],attrs:{type:"text",name:"ingredient"},domProps:{value:e.ingredients[i]},on:{input:function(t){t.target.composing||e.$set(e.ingredients,i,t.target.value)}}}),n("i",{staticClass:"material-icons delete",on:{click:function(n){return e.deleteIng(t)}}},[e._v("delete")])])})),n("div",{staticClass:"field add-ingredient"},[n("label",{attrs:{for:"add-ingredient"}},[e._v("Add an Ingredient (press Tab key to save each one):")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.another,expression:"another"}],attrs:{type:"text",name:"add-ingredient"},domProps:{value:e.another},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIng(t))},input:function(t){t.target.composing||(e.another=t.target.value)}}})]),n("div",{staticClass:"field center-align"},[e.feedback?n("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),n("button",{staticClass:"btn pink"},[e._v("Add Sushi")])])],2)])},y=[],k=n("032d"),_=n("3666"),C=n.n(_),x={name:"AddSushi",data:function(){return{title:null,another:null,ingredients:[],feedback:null,slug:null}},methods:{AddSushi:function(){var e=this;this.title?(this.feedback=null,this.slug=C()(this.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),k["a"].collection("sushis").add({title:this.title,ingredients:this.ingredients,slug:this.slug}).then((function(){e.$router.push({name:"Home"})})).catch((function(e){console.log(e)}))):this.feedback="You must enter a sushi title!"},addIng:function(){this.another?(this.ingredients.push(this.another),this.another=null,this.feedback=null):this.feedback="You must enter a value to add an ingredient!"},deleteIng:function(e){this.ingredients=this.ingredients.filter((function(t){return t!=e}))}}},w=x,S=(n("85f1"),Object(d["a"])(w,b,y,!1,null,null,null)),E=S.exports;n("ef4e");i["a"].use(g["a"]);var A=new g["a"]({routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-0f7ae347").then(n.bind(null,"86d6"))}},{path:"/add-sushi",name:"AddSushi",component:E},{path:"/edit-sushi/:sushi_slug",name:"EditSushi",component:function(){return Promise.resolve().then(n.bind(null,"ef4e"))}}]});i["a"].config.productionTip=!1,new i["a"]({router:A,render:function(e){return e(m)}}).$mount("#app")},"5dfc":function(e,t,n){"use strict";var i=n("30d6"),s=n.n(i);s.a},6110:function(e,t,n){},"85f1":function(e,t,n){"use strict";var i=n("6110"),s=n.n(i);s.a},9573:function(e,t,n){},ef4e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sushi?n("div",{staticClass:"edit-sushi container"},[n("h2",[e._v("Edit "+e._s(e.sushi.title)+" sushi")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.EditSushi(t)}}},[n("div",{staticClass:"field title"},[n("label",{attrs:{for:"title"}},[e._v("Sushi Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sushi.title,expression:"sushi.title"}],attrs:{type:"text",name:"title"},domProps:{value:e.sushi.title},on:{input:function(t){t.target.composing||e.$set(e.sushi,"title",t.target.value)}}})]),e._l(e.sushi.ingredients,(function(t,i){return n("div",{key:i,staticClass:"field"},[n("label",{attrs:{for:"ingredient"}},[e._v("Ingredient:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sushi.ingredients[i],expression:"sushi.ingredients[index]"}],attrs:{type:"text",name:"ingredient"},domProps:{value:e.sushi.ingredients[i]},on:{input:function(t){t.target.composing||e.$set(e.sushi.ingredients,i,t.target.value)}}}),n("i",{staticClass:"material-icons delete",on:{click:function(n){return e.deleteIng(t)}}},[e._v("delete")])])})),n("div",{staticClass:"field add-ingredient"},[n("label",{attrs:{for:"add-ingredient"}},[e._v("Add an Ingredient (press Tab key to save each one):")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.another,expression:"another"}],attrs:{type:"text",name:"add-ingredient"},domProps:{value:e.another},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIng(t))},input:function(t){t.target.composing||(e.another=t.target.value)}}})]),n("div",{staticClass:"field center-align"},[e.feedback?n("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),n("button",{staticClass:"btn pink"},[e._v("Update Sushi")])])],2)]):e._e()},s=[],r=(n("ac6a"),n("032d")),a=n("3666"),u=n.n(a),o={name:"EditSushi",data:function(){return{sushi:null,another:null,feedback:null}},methods:{EditSushi:function(){var e=this;this.sushi.title?(this.feedback=null,this.sushi.slug=u()(this.sushi.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),r["a"].collection("sushis").doc(this.sushi.id).update({title:this.sushi.title,ingredients:this.sushi.ingredients,slug:this.sushi.slug}).then((function(){e.$router.push({name:"Home"})})).catch((function(e){console.log(e)}))):this.feedback="You must enter a sushi title!"},addIng:function(){this.another?(this.sushi.ingredients.push(this.another),this.another=null,this.feedback=null):this.feedback="You must enter a value to add an ingredient!"},deleteIng:function(e){this.sushi.ingredients=this.sushi.ingredients.filter((function(t){return t!=e}))}},created:function(){var e=this,t=r["a"].collection("sushis").where("slug","==",this.$route.params.sushi_slug);t.get().then((function(t){t.forEach((function(t){e.sushi=t.data(),e.sushi.id=t.id}))}))}},l=o,d=(n("2adb"),n("2877")),c=Object(d["a"])(l,i,s,!1,null,null,null);t["default"]=c.exports}});
//# sourceMappingURL=app.1bd1bbba.js.map