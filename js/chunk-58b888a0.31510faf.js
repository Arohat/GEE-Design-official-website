(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b888a0"],{"0323":function(t,o,e){t.exports=e.p+"img/interface6.e3d2c7e1.png"},"0e6c":function(t,o,e){t.exports=e.p+"img/interface1.1d745ed8.png"},"17e0":function(t,o,e){},"193c":function(t,o,e){t.exports=e.p+"img/interface5.c4ca746d.png"},"29ce":function(t,o,e){},"31b3":function(t,o,e){"use strict";var a=e("c45d"),s=e.n(a);s.a},3811:function(t,o,e){t.exports=e.p+"img/interface8.d46bbdec.png"},"3f80":function(t,o,e){"use strict";var a=e("29ce"),s=e.n(a);s.a},"4e1b":function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"Scroll"},[e("a",{staticClass:"Scroll-link",attrs:{id:t.id,href:t.href}},[t._v(t._s(t.des))])])},s=[],c={name:"Scroll",props:{id:String,href:String,des:String}},n=c,i=(e("3f80"),e("2877")),r=Object(i["a"])(n,a,s,!1,null,"23e05435",null);o["a"]=r.exports},"5b19":function(t,o,e){t.exports=e.p+"img/3.085b6bef.jpg"},"650e":function(t,o,e){t.exports=e.p+"img/interface2.1c2eba6d.gif"},8102:function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"anchor-wrap"},[e("ul",{staticClass:"ul scroll"},t._l(t.jsonData,function(o,a){return e("li",{key:a},[e("a",{class:{active:a===t.nowSubIndex},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.goAnchor("#anchor-"+o.id,a)}}},[t._v(t._s(o.title))])])}))])},s=[],c=(e("ac6a"),{name:"AnchorScroll",data:function(){return{nowSubIndex:0}},props:{jsonData:Array},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this,o=document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelectorAll(".article");e.forEach(function(e,a){o>=e.offsetTop-40&&(t.nowSubIndex=a)})},goAnchor:function(t,o){this.nowSubIndex=o;var e=document.querySelector(t),a=e.offsetTop,s=document.documentElement.scrollTop||document.body.scrollTop,c=a/50>>0;if(a>s)i();else{var n=s-a;c=n/50>>0,r()}function i(){s<a?(s+=c,document.body.scrollTop=document.documentElement.scrollTop=s,setTimeout(i,10)):document.body.scrollTop=document.documentElement.scrollTop=a}function r(){s>a?(s-=c,document.body.scrollTop=document.documentElement.scrollTop=s,setTimeout(r,10)):document.body.scrollTop=document.documentElement.scrollTop=a}}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}),n=c,i=e("2877"),r=Object(i["a"])(n,a,s,!1,null,"3ea8ff1d",null);o["a"]=r.exports},"90e9":function(t,o,e){t.exports=e.p+"img/interface7.cd4d5c5c.png"},ac6a:function(t,o,e){for(var a=e("cadf"),s=e("0d58"),c=e("2aba"),n=e("7726"),i=e("32e9"),r=e("84f2"),l=e("2b4c"),u=l("iterator"),d=l("toStringTag"),m=r.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(p),b=0;b<f.length;b++){var v,g=f[b],C=p[g],_=n[g],S=_&&_.prototype;if(S&&(S[u]||i(S,u,m),S[d]||i(S,d,g),r[g]=m,C))for(v in a)S[v]||c(S,v,a[v],!0)}},b974:function(t,o,e){"use strict";var a=e("17e0"),s=e.n(a);s.a},c45d:function(t,o,e){},ca2f:function(t,o,e){t.exports=e.p+"img/interface9.e2c83671.png"},d9db:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"interface main",attrs:{id:"main"}},[a("Header",{attrs:{title:"用户界面设计",des:"User Interface Design",imageSrc:t.imageSrc}}),a("div",{staticClass:"container"},[a("div",{staticClass:"overview bottom-80 article",attrs:{id:"anchor-"+t.jsonData[0].id}},[a("h3",[t._v("\n        行为验证产品概述\n      ")]),a("p",{staticClass:"bottom-10"},[t._v("\n        行为验证是基于生物的行为特征，结合人工智能技术的验证安全解决方案，帮助全球 26 万家网站和 APP 智能区分人机，杜绝恶意程序带来的业务损失，每日在用户察觉不到的地方用 AI 抵挡饿了上亿机器脚本攻击。\n      ")]),a("p",{staticClass:"bottom-40"},[t._v("行为验证让安全性有了质的飞跃，同时让用户通过验证平均时长降到 1.82 秒，极大的提高了用户的体验。从 2012 年正式推出行为验证产品以来，目前已经有超过 26 万家网站和 APP 使用极验的交互安全服务，每天提供超过 8 亿次的交互安全服务，为上亿网民节约近 30 万小时的宝贵时间。")]),a("img",{staticClass:"box-border",attrs:{src:e("0e6c"),alt:""}})]),a("div",{staticClass:"ui-base bottom-80 article",attrs:{id:"anchor-"+t.jsonData[1].id}},[a("h3",[t._v("UI 基础")]),t._m(0),a("img",{staticClass:"bottom-40",attrs:{src:e("650e"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("我们设计了一个全新而独特的验证按钮，它作为网站与用户的交互控件，提供了安全检验的触发和状态的显示作用。通过前端个性化样式的设置，验证按钮可以很好的放置在客户网站表单中，用户可以清楚的了解到目前的验证状态。相比传统的字符验证码，验证按钮在视觉和交互体验上都要更友好。")]),a("img",{staticClass:"bottom-40",attrs:{src:e("f2aa"),alt:""}}),a("p",{staticClass:"bottom-10"},[t._v("\n        在按钮的整个交互流程中，我们设计一套符合逻辑、感知流畅的“小球”动效：按钮上的“雷达”会跟随着用户的鼠标而移动，这是极验服务端收集全页面数据的视觉体现；点击按钮后，扫描动画表示极验正在智能检测当前用户和设备的风险等级；在快速的检测之后，按钮会给出检测结果动画，普通用户便能轻松的“一点即过”，整个验证过程不到 1 秒钟。\n      ")]),a("p",{staticClass:"bottom-40"},[t._v("\n        由于用户风险等级、群体架构、语言、以及交互习惯的不同，我们精心设计了多种验证形式，在保证网站安全的同时，提供给 C 端用户较好的验证体验。\n      ")]),a("img",{staticClass:"bottom-40 box-border",attrs:{src:e("db94"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("为了保证验证形式视觉和交互的一致性，我们设计了一套通用的验证面板，实现了同类型验证码的快速开发，不同设备的适配，规范定制化 UI 需求，提高了灵活性和开发效率。")]),a("img",{staticClass:"box-border",attrs:{src:e("193c"),alt:""}})]),a("div",{staticClass:"ui-element article",attrs:{id:"anchor-"+t.jsonData[2].id}},[a("h3",[t._v("UI 元素")]),t._m(1),a("p",{staticClass:"bottom-40"},[t._v("我们设计了一套直观的、符合自然映射的 UI 控件。我们将滑块控件设计得能更好的引导用户去操作，至 2012 年以来，“滑块拼图行为验证”慢慢改变了用户的使用习惯，将难认、难用的“字符验证码”推下历史舞台。在验证的状态指示上，我们也进行了精心的设计，尽量用图像、动效来替代文字，引导用户的操作，让一切变得“自然”。")]),a("img",{staticClass:"bottom-40",attrs:{src:e("0323"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("我们设计了能灵活调用的功能条，可以高效率的进行调整，满足各种需求。")]),a("img",{staticClass:"bottom-40",attrs:{src:e("90e9"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("反馈条能直观的向用户展示结果，给予用户一定的成就感和指导用户操作。")]),a("img",{staticClass:"bottom-40",attrs:{src:e("3811"),alt:""}}),a("p",{staticClass:"bottom-40"},[t._v("“行为验证”验证产品的 UI 元素能统一更改主题色的，甚至进行个性化的定制，满足客户在业务上的需求。")]),a("div",{staticClass:"color-wrap bottom-30"},[a("ColorPanel",{attrs:{color:t.color.bilibili,colorName:"bilibili",hexVal:"#FFCA55",rgbVal:"255, 202, 85"}})],1),a("img",{staticClass:"box-border",attrs:{src:e("ca2f"),alt:""}})]),t._m(2),a("AnchorScroll",{attrs:{jsonData:t.jsonData}}),a("Back-top")],1)],1)},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"bottom-40"},[t._v("\n        “行为验证”验证产品的 UI 基础："),e("strong",[t._v("验证按钮(Test-Button)、验证面板(Test-Card)")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"bottom-30"},[t._v("“行为验证”验证产品的 UI 元素：\n        "),e("strong",[t._v("验证控件(Controls)、功能组件(Insert Group)、反馈条(Check Bar)")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"footer-info"},[e("span",{staticClass:"timestamp bottom-info"},[t._v("更新于 2018.9.1")]),e("span",{staticClass:"copyright bottom-info"},[t._v("Copyright © 2018 Geetest Inc. All Rights Reserved.")])])}],c=e("0418"),n=e("4e1b"),i=e("9208"),r=e("ea19"),l=e("8102"),u=e("5b19"),d=e.n(u),m={name:"interface",data:function(){return{imageSrc:d.a,color:{bilibili:"#EF5C8C;"},jsonData:[{title:"产品概述",id:"overview"},{title:"UI 基础",id:"base"},{title:"UI 元素",id:"element"}]}},components:{Header:c["a"],Scroll:n["a"],BackTop:i["a"],ColorPanel:r["a"],AnchorScroll:l["a"]},mounted:function(){var t=document.querySelector("#cmyk");t.style.display="none"}},p=m,f=(e("b974"),e("2877")),b=Object(f["a"])(p,a,s,!1,null,"a85c69ca",null);o["default"]=b.exports},db94:function(t,o,e){t.exports=e.p+"img/interface4.eb8f767e.png"},ea19:function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"colorpanel"},[e("div",{staticClass:"color-wrap"},[e("div",{staticClass:"colorpanel-color",style:"background-color:"+t.color}),e("p",[t._v(t._s(t.colorName))])]),e("div",{staticClass:"tag-wrap"},[e("div",{staticClass:"color-tag"},[e("span",[t._v("HEX")]),e("p",{staticClass:"color-val copy"},[t._v(t._s(t.hexVal))])]),e("div",{staticClass:"color-tag"},[e("span",[t._v("RGB")]),e("p",{staticClass:"color-val copy"},[t._v(t._s(t.rgbVal))])]),e("div",{staticClass:"color-tag",attrs:{id:"cmyk"}},[e("span",[t._v("CMYK")]),e("p",{staticClass:"color-val copy"},[t._v(t._s(t.cmykVal))])])])])},s=[],c={name:"ColorPanel",props:{color:String,colorName:String,hexVal:String,rgbVal:String,cmykVal:String}},n=c,i=(e("31b3"),e("2877")),r=Object(i["a"])(n,a,s,!1,null,"6581621c",null);o["a"]=r.exports},f2aa:function(t,o,e){t.exports=e.p+"img/interface3.af4b09fe.png"}}]);
//# sourceMappingURL=chunk-58b888a0.31510faf.js.map