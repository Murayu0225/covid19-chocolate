(window.webpackJsonp=window.webpackJsonp||[]).push([[56,55,57],{415:function(t,e,n){"use strict";var r=n(1);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},c=e.value,l="object"===Object(r.a)(c)?c:{handler:c,options:{}},f=l.handler,d=l.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var c=e.some((function(t){return t.isIntersecting}));!f||n.quiet&&!t._observe.init||n.once&&!c&&t._observe.init||f(e,r,c),c&&n.once?o(t):t._observe.init=!0}}),d);t._observe={init:!1,observer:h},h.observe(t)}},unbind:o};e.a=c},422:function(t,e,n){"use strict";n(87);var r=n(7),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),c=Object(r.e)(this.maxHeight),l=Object(r.e)(this.maxWidth),f=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),f&&(t.width=f),t}}})},428:function(t,e,n){"use strict";n(17),n(24),n(30),n(32);var r=n(2),o=(n(87),n(22),n(36),n(70),n(271),n(20),n(38),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(39),n(45),n(10),n(71),n(285),n(0)),c=n(102),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),O=h.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(O)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},487:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5a537a67",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";n(487)},512:function(t,e,n){var r=n(26)(!1);r.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;justify-content:space-between;align-items:center;display:flex;flex-wrap:wrap;font-size:1.2rem}.StaticInfo span{white-space:pre-wrap;font-weight:600}.StaticInfo-Button{flex:1 0 auto;text-align:right;display:inline-block}.StaticInfo-Button>a{text-decoration:none;color:#085c6c!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #085c6c;color:#085c6c;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#085c6c;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=r},524:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(92),c=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),l=(n(511),n(9)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},551:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("06ec895b",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(22),n(17),n(24),n(30),n(10),n(32);var r=n(2),o=n(422),c=n(183),l=n(415),f=n(48),d=n(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(o.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(d.p)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},602:function(t,e,n){"use strict";n(551)},603:function(t,e,n){var r=n(26)(!1);r.push([t.i,".Consultation[data-v-3ff661e4]{padding:3px 18px;min-height:5.5em}",""]),t.exports=r},713:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(524),c=r.default.extend({components:{StaticInfo:o.default}}),l=(n(602),n(9)),f=n(59),d=n.n(f),h=n(428),v=n(552),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-lazy",[n("static-info",{staticClass:"Consultation",attrs:{url:"https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019896.html",text:t.$t("自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)],1)}),[],!1,null,"3ff661e4",null);e.default=component.exports;d()(component,{VCol:h.a,VLazy:v.a})}}]);