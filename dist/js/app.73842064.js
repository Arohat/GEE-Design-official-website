(function(t){function e(e){for(var a,o,s=e[0],l=e[1],i=e[2],u=0,d=[];u<s.length;u++)o=s[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r={app:0},c=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2f4b":"637257aa","chunk-3e7e":"2c0b9fa7","chunk-6747":"4a92e01e","chunk-aed0":"bde6a0d1","chunk-d107":"93c00a53"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-2f4b":1,"chunk-3e7e":1,"chunk-6747":1,"chunk-aed0":1,"chunk-d107":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2f4b":"025b4da4","chunk-3e7e":"5f1af6f7","chunk-6747":"e3ca4672","chunk-aed0":"3dca9d8a","chunk-d107":"f36122ff"}[t]+".css",o=l.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===a||i===o))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],i=s.getAttribute("data-href");if(i===a||i===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,n(r)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=c);var i,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t),i=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",style:"background-image:url("+t.imageSrc+")",attrs:{id:"header"}},[n("div",{staticClass:"text-box"},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.des))])])])},o=[],r={name:"Header",props:{title:String,des:String,imageSrc:String}},c=r,s=(n("5e40"),n("2877")),l=Object(s["a"])(c,a,o,!1,null,"292307d0",null);l.options.__file="Header.vue";e["a"]=l.exports},"061e":function(t,e,n){"use strict";var a=n("7c61"),o=n.n(a);o.a},"193f":function(t,e,n){},2856:function(t,e,n){},"2b98":function(t,e,n){t.exports=n.p+"img/6.c6d50efc.jpg"},"2d23":function(t,e,n){t.exports=n.p+"img/icon-menu.65a9c580.svg"},"30ae":function(t,e,n){t.exports=n.p+"img/brand8.e450259b.png"},"31b3":function(t,e,n){"use strict";var a=n("3bef"),o=n.n(a);o.a},"3bef":function(t,e,n){},"43cb":function(t,e,n){"use strict";var a=n("8553"),o=n.n(a);o.a},"4c95":function(t,e,n){"use strict";var a=n("4e1c"),o=n.n(a);o.a},"4e1c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SideBar"),n("MobileMenu"),n("router-view")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar",attrs:{id:"sidebar"}},[t._m(0),n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:"/brand"}},[n("span",[t._v("极验品牌")]),n("i")]),n("router-link",{attrs:{to:"/make"}},[n("span",[t._v("极验制造")]),n("i")]),n("router-link",{attrs:{to:"/product"}},[n("span",[t._v("安全矩阵")]),n("i")]),n("router-link",{attrs:{to:"/interface"}},[n("span",[t._v("用户界面")]),n("i")]),n("router-link",{attrs:{to:"/download"}},[n("span",[t._v("资源下载")]),n("i")]),n("router-link",{attrs:{to:"/about"}},[n("span",[t._v("关于我们")]),n("i")]),t._m(1)],1),t._m(2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("a",{attrs:{href:"/brand"}},[a("img",{attrs:{src:n("9b19"),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("span"),n("a",{attrs:{target:"_blank",href:"https://geetest.com"}},[t._v("极验官网")]),n("a",{attrs:{target:"_blank",href:"https://dribbble.com/geetest"}},[t._v("Dribbble")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("img",{attrs:{src:n("bc8e"),alt:""}}),a("p",[t._v("Copyright © 2018 GEETEST")])])}],l={data:function(){return{active:0}}},i=l,u=(n("061e"),n("2877")),d=Object(u["a"])(i,c,s,!1,null,"215d26f0",null);d.options.__file="SideBar.vue";var p=d.exports,f=n("0418"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-box"},[a("div",{staticClass:"mobile-menu",attrs:{id:"menu"}},[a("img",{staticClass:"icon-close",attrs:{id:"icon-close",src:n("bf37"),alt:""},on:{click:t.closeMenu}}),t._m(0),a("div",{staticClass:"wrap",on:{click:t.closeMenu}},[a("router-link",{attrs:{to:"/brand"}},[a("span",[t._v("极验品牌")]),a("i")]),a("router-link",{attrs:{to:"/make"}},[a("span",[t._v("极验制造")]),a("i")]),a("router-link",{attrs:{to:"/product"}},[a("span",[t._v("安全矩阵")]),a("i")]),a("router-link",{attrs:{to:"/interface"}},[a("span",[t._v("用户界面")]),a("i")]),a("router-link",{attrs:{to:"/download"}},[a("span",[t._v("资源下载")]),a("i")]),a("router-link",{attrs:{to:"/about"}},[a("span",[t._v("关于我们")]),a("i")]),t._m(1)],1),t._m(2)]),a("div",{staticClass:"mobile-header",attrs:{id:"mobile-header"}},[a("div",{staticClass:"touch-box",on:{click:t.showMenu}},[a("img",{staticClass:"icon-menu",attrs:{id:"icon-menu",src:n("2d23"),alt:""}})]),t._m(3)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("9b19"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("a",{attrs:{target:"_blank",href:"https://geetest.com"}},[t._v("极验官网")]),n("a",{attrs:{target:"_blank",href:"https://dribbble.com/geetest"}},[t._v("Dribbble")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("img",{attrs:{src:n("bc8e"),alt:""}}),a("p",[t._v("Copyright © 2018 GEETEST")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("9b19"),alt:""}})])}],v={data:function(){return{active:0}},methods:{showMenu:function(){var t=document.querySelector("#menu");t.style.display="flex",t.style.zIndex="1000"},closeMenu:function(){var t=document.querySelector("#menu");t.style.display="none",t.style.zIndex="-1"}}},h=v,g=(n("9d3e"),Object(u["a"])(h,m,b,!1,null,"7c53d7f6",null));g.options.__file="MobileMenu.vue";var _=g.exports,k={name:"home",components:{SideBar:p,Header:f["a"],MobileMenu:_}},y=k,C=(n("5c0b"),Object(u["a"])(y,o,r,!1,null,null,null));C.options.__file="App.vue";var x=C.exports,w=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand main",attrs:{id:"main"}},[a("Header",{attrs:{title:"极验品牌",des:"Geetest Brand VI",imageSrc:t.imageSrc}}),a("div",{staticClass:"container"},[a("div",{staticClass:"overview bottom-80 article",attrs:{id:"anchor-"+t.jsonData[0].id}},[a("h3",[t._v("\n        品牌概述\n      ")]),a("p",{staticClass:"bottom-30"},[t._v("\n        极验是全球领先的交互安全技术服务提供商，于 2012 年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和 APP 提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。\n      ")]),a("img",{attrs:{src:n("a100"),alt:""}})]),a("div",{staticClass:"logo bottom-80 article",attrs:{id:"anchor-"+t.jsonData[1].id}},[a("h3",[t._v("品牌标志")]),a("p",{staticClass:"bottom-30"},[t._v("\n          极验 (Geetest) 标志由两元素组成：图形标志、文字标志。其元素间的相对大小和位置是固定的，并且文字标志不能单独使用。极验的标志只能从设计软件文件中直接拷贝使用，而不是重新绘制或者擅自组合。本规范的各种电子格式文件可在极验用户体验设计中心的资源下载页面进行下载。\n        ")]),a("p",{staticClass:"bottom-40"},[t._v("\n          极验标志的组合形式有四种：1. 标准标识；2. 带有 Slogan 的标识；3. 中文标识；4. 单独的图形。这四种组合的标识根据不同的场景来使用，除此以外，不允许擅自组合。\n        ")]),a("img",{staticClass:"bottom-30  box-border",attrs:{src:n("a3c2"),alt:""}}),t._m(0),a("img",{staticClass:"bottom-40  box-border",attrs:{src:n("e9f1"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("\n              为了保证品牌标志的完整性以及保持品牌统一性，极验标志在不同的场景中，要避免不规范的使用样式。\n            ")]),a("img",{attrs:{src:n("db3e"),alt:""}})]),a("div",{staticClass:"color bottom-80 article",attrs:{id:"anchor-"+t.jsonData[2].id}},[a("h3",[t._v("品牌标准色")]),a("p",{staticClass:"bottom-40"},[t._v("\n                下图所示为极验品牌的规范颜色色板，这些颜色可以运用在任何品牌有关的产品设计和衍生物料中。极验标识由极验蓝、极验蓝黑构成；极验产品由极验蓝、极验青、极验淡紫和极验橘红色构成；极验视觉的延展由极验白、极验浅灰等构成。Web 色以 RGB 色值为准，平面物料以四色印刷 CMYK 色值为准。\n              ")]),a("div",{staticClass:"colorpanel-wrap bottom-40"},[a("ColorPanel",{attrs:{color:t.color.blue,colorName:"极验蓝",hexVal:"#3873FF",rgbVal:"56, 115, 255",cmykVal:"79, 56, 0, 0"}}),a("ColorPanel",{attrs:{color:t.color.blueLight,colorName:"极验水蓝",hexVal:"#26B9FF",rgbVal:"38, 185, 255",cmykVal:"67, 13, 0, 0"}}),a("ColorPanel",{attrs:{color:t.color.white,colorName:"极验白",hexVal:"#FFFFFF",rgbVal:"255, 255, 255",cmykVal:"0, 0, 0, 0"}}),a("ColorPanel",{attrs:{color:t.color.green,colorName:"极验青",hexVal:"#35D2A2",rgbVal:"53, 210, 162",cmykVal:"65, 0, 51, 0"}}),a("ColorPanel",{attrs:{color:t.color.purpel,colorName:"极验淡紫",hexVal:"#9B5CF5",rgbVal:"155, 92, 245",cmykVal:"63, 67, 0, 0"}}),a("ColorPanel",{attrs:{color:t.color.orange,colorName:"极验橘红",hexVal:"#FD6F2A",rgbVal:"253, 111, 42",cmykVal:"0, 70, 82, 0"}}),a("ColorPanel",{attrs:{color:t.color.black,colorName:"极验蓝黑",hexVal:"#292F3A",rgbVal:"41, 47, 58",cmykVal:"85, 79, 65, 42"}}),a("ColorPanel",{attrs:{color:t.color.gray,colorName:"极验浅灰",hexVal:"#D8DDE6",rgbVal:"216, 221, 230",cmykVal:"18, 11, 7, 0"}})],1),a("p",{staticClass:"bottom-40"},[t._v("\n                合适恰当的颜色比例使用可确保所有用户正确认知极验品牌。使用极验品牌色时，极验蓝 (01) 应做为品牌主色；极验蓝 (01) 与大面积的极验白 (03) 一起使用，可体现清新干净的极验品牌形象；极验白 (03)和极验蓝黑 (07) 一起使用会有利于浏览的高对比性；其它的辅色则有助于极验产品和平面应用的使用和延展。\n              ")]),a("img",{attrs:{src:n("5f3a"),alt:""}})]),a("div",{staticClass:"fontface article",attrs:{id:"anchor-"+t.jsonData[3].id}},[a("h3",[t._v("品牌专用字体")]),a("p",{staticClass:"bottom-40"},[t._v("\n                  思源黑体 (SourceHanSansSc) 做为极验的中文品牌专用字体，被用于极验产品及视觉传达中。我们需要遵循下图所述的品牌字体运用示例，以确保极验品牌视觉设计传达的一致性。\n                ")]),a("img",{staticClass:"bottom-30  box-border",attrs:{src:n("30ae"),alt:""}}),a("img",{staticClass:"box-border",attrs:{src:n("75a3"),alt:""}})]),t._m(1),a("AnchorScroll",{attrs:{jsonData:t.jsonData}}),a("Back-top")],1)],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pic-wrap bottom-30"},[a("div",[a("img",{staticClass:"box-border",attrs:{src:n("acb2"),alt:""}})]),a("div",[a("img",{staticClass:"box-border",attrs:{src:n("5bb9"),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-info"},[n("span",{staticClass:"timestamp bottom-info"},[t._v("更新于 2018.9.1")]),n("span",{staticClass:"copyright bottom-info"},[t._v("Copyright © 2018 Geetest Inc. All Rights Reserved.")])])}],T=n("9208"),V=n("ea19"),j=n("8102"),F=n("2b98"),P=n.n(F),A={name:"brand",data:function(){return{imageSrc:P.a,color:{blue:"#3873FF;",blueLight:"#26B9FF;",white:"#fff; border: 1px solid #F1F3F4;",green:"#35D2A2;",purpel:"#9B5CF5;",orange:"#FD6F2A;",black:"#292F3A;",gray:"#D8DDE6;"},jsonData:[{title:"品牌概述",id:"overview"},{title:"品牌标志",id:"sign"},{title:"标准色",id:"color"},{title:"字体",id:"fonts"}]}},components:{Header:f["a"],AnchorScroll:j["a"],BackTop:T["a"],ColorPanel:V["a"]}},B=A,D=(n("4c95"),Object(u["a"])(B,E,S,!1,null,"a5114082",null));D.options.__file="Brand.vue";var $=D.exports;a["a"].use(w["a"]);var M=new w["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/brand"},{path:"/brand",name:"brand",component:$},{path:"/make",name:"make",component:function(){return n.e("chunk-3e7e").then(n.bind(null,"62a7"))}},{path:"/product",name:"product",component:function(){return n.e("chunk-aed0").then(n.bind(null,"d2f1"))}},{path:"/interface",name:"interface",component:function(){return n.e("chunk-2f4b").then(n.bind(null,"d9db"))}},{path:"/download",name:"download",component:function(){return n.e("chunk-6747").then(n.bind(null,"3971"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-d107").then(n.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(x)}}).$mount("#app"),M.beforeEach(function(t,e,n){window.scrollTo(0,0),n()})},5746:function(t,e,n){t.exports=n.p+"img/icon_toparrow.64d1435e.svg"},"5bb9":function(t,e,n){t.exports=n.p+"img/brand4.c57b9e90.png"},"5c0b":function(t,e,n){"use strict";var a=n("2856"),o=n.n(a);o.a},"5e40":function(t,e,n){"use strict";var a=n("88e9"),o=n.n(a);o.a},"5f3a":function(t,e,n){t.exports=n.p+"img/brand7.de8c7479.png"},"75a3":function(t,e,n){t.exports=n.p+"img/brand9.23658b6f.png"},"7c61":function(t,e,n){},8102:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anchor-wrap"},[n("ul",{staticClass:"ul scroll"},t._l(t.jsonData,function(e,a){return n("li",{key:a},[n("a",{class:{active:a===t.nowSubIndex},attrs:{href:"javascript:void(0)"},on:{click:function(n){t.goAnchor("#anchor-"+e.id,a)}}},[t._v(t._s(e.title))])])}))])},o=[],r=(n("ac6a"),n("cadf"),n("551c"),n("097d"),{name:"AnchorScroll",data:function(){return{nowSubIndex:0}},props:{jsonData:Array},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this,e=document.documentElement.scrollTop||document.body.scrollTop,n=document.querySelectorAll(".article");n.forEach(function(n,a){e>=n.offsetTop-40&&(t.nowSubIndex=a)})},goAnchor:function(t,e){this.nowSubIndex=e;var n=document.querySelector(t),a=n.offsetTop,o=document.documentElement.scrollTop||document.body.scrollTop,r=a/50>>0;if(a>o)s();else{var c=o-a;r=c/50>>0,l()}function s(){o<a?(o+=r,document.body.scrollTop=document.documentElement.scrollTop=o,setTimeout(s,10)):document.body.scrollTop=document.documentElement.scrollTop=a}function l(){o>a?(o-=r,document.body.scrollTop=document.documentElement.scrollTop=o,setTimeout(l,10)):document.body.scrollTop=document.documentElement.scrollTop=a}}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),c=r,s=(n("b608"),n("2877")),l=Object(s["a"])(c,a,o,!1,null,"3ea8ff1d",null);l.options.__file="AnchorScroll.vue";e["a"]=l.exports},8553:function(t,e,n){},"88e9":function(t,e,n){},9208:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Back-top"},[a("a",{attrs:{href:"#body"}},[a("img",{attrs:{src:n("5746"),alt:""}})])])}],r={name:"BackTop",props:{},created:function(){window.onscroll=function(){var t=document.querySelector(".Back-top");document.documentElement.scrollTop+document.body.scrollTop>100?t.style.display="block":t.style.display="none"}}},c=r,s=(n("43cb"),n("2877")),l=Object(s["a"])(c,a,o,!1,null,"7c2a3a4d",null);l.options.__file="BackTop.vue";e["a"]=l.exports},"9b19":function(t,e,n){t.exports=n.p+"img/logo.490e025c.svg"},"9d3e":function(t,e,n){"use strict";var a=n("eb17"),o=n.n(a);o.a},a100:function(t,e,n){t.exports=n.p+"img/brand1.1847d2e4.png"},a3c2:function(t,e,n){t.exports=n.p+"img/brand2.0bae9ad8.png"},acb2:function(t,e,n){t.exports=n.p+"img/brand3.ccacb6c7.png"},b608:function(t,e,n){"use strict";var a=n("193f"),o=n.n(a);o.a},bc8e:function(t,e,n){t.exports=n.p+"img/logo_watermask.208e6a00.svg"},bf37:function(t,e,n){t.exports=n.p+"img/close.72753b7b.svg"},db3e:function(t,e,n){t.exports=n.p+"img/brand6.33db0198.png"},e9f1:function(t,e,n){t.exports=n.p+"img/brand5.63f10ed8.png"},ea19:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"colorpanel"},[n("div",{staticClass:"color-wrap"},[n("div",{staticClass:"colorpanel-color",style:"background-color:"+t.color}),n("p",[t._v(t._s(t.colorName))])]),n("div",{staticClass:"tag-wrap"},[n("div",{staticClass:"color-tag"},[n("span",[t._v("HEX")]),n("p",{staticClass:"color-val copy"},[t._v(t._s(t.hexVal))])]),n("div",{staticClass:"color-tag"},[n("span",[t._v("RGB")]),n("p",{staticClass:"color-val copy"},[t._v(t._s(t.rgbVal))])]),n("div",{staticClass:"color-tag",attrs:{id:"cmyk"}},[n("span",[t._v("CMYK")]),n("p",{staticClass:"color-val copy"},[t._v(t._s(t.cmykVal))])])])])},o=[],r={name:"ColorPanel",props:{color:String,colorName:String,hexVal:String,rgbVal:String,cmykVal:String}},c=r,s=(n("31b3"),n("2877")),l=Object(s["a"])(c,a,o,!1,null,"6581621c",null);l.options.__file="ColorPanel.vue";e["a"]=l.exports},eb17:function(t,e,n){}});
//# sourceMappingURL=app.73842064.js.map