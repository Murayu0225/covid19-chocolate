(window.webpackJsonp=window.webpackJsonp||[]).push([[40,39,55,93],{406:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("dc0628f2",content,!0,{sourceMap:!1})},407:function(t,e,n){var r=n(26)(!1);r.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}",""]),t.exports=r},408:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("e23b7040",content,!0,{sourceMap:!1})},409:function(t,e,n){var r=n(26)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},411:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},415:function(t,e,n){"use strict";var r=n(1);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},c=e.value,d="object"===Object(r.a)(c)?c:{handler:c,options:{}},l=d.handler,h=d.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var c=e.some((function(t){return t.isIntersecting}));!l||n.quiet&&!t._observe.init||n.once&&!c&&t._observe.init||l(e,r,c),c&&n.once?o(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:v},v.observe(t)}},unbind:o};e.a=c},422:function(t,e,n){"use strict";n(87);var r=n(7),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),c=Object(r.e)(this.maxHeight),d=Object(r.e)(this.maxWidth),l=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),d&&(t.maxWidth=d),l&&(t.width=l),t}}})},426:function(t,e,n){"use strict";var r=n(2),o=(n(87),n(406),n(419)),c=n(75),d=n(418),l=n(420),h=n(423),v=n(183),f=n(7),m=n(25),_=n(48);e.a=Object(_.a)(c.a,d.a,l.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(r+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.e)(this.maxWidth),minWidth:Object(f.e)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.q)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.u.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},427:function(t,e,n){"use strict";n(22),n(17),n(24),n(30),n(10),n(32);var r=n(2),o=(n(87),n(270),n(408),n(417)),c=n(424),d=n(414),l=n(48);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},428:function(t,e,n){"use strict";n(17),n(24),n(30),n(32);var r=n(2),o=(n(87),n(22),n(36),n(70),n(271),n(20),n(38),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(39),n(45),n(10),n(71),n(285),n(0)),c=n(102),d=n(7);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(_)};function x(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,d=(e.parent,"");for(var l in n)d+=String(n[l]);var h=$.get(d);return h||function(){var t,e;for(e in h=[],y)y[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&h.push(o)}));var o=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),$.set(d,h)}(),t(n.tag,Object(c.a)(data,{class:h}),o)}})},460:function(t,e,n){t.exports=function(){"use strict";var t,s,e=1e3,i=6e4,n=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,c=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:u,months:c,days:r,hours:n,minutes:i,seconds:e,milliseconds:1,weeks:6048e5},l=function(t){return t instanceof p},h=function(t,s,e){return new p(t,e,s.$l)},v=function(t){return s.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},_=function(t){return Math.abs(t)},g=function(t,s){return t?f(t)?{negative:!0,format:""+_(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function f(t,s,e){var i=this;if(this.$d={},this.$l=e,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return h(t*d[v(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[v(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var n=t.match(a);if(n){var r=n.slice(2).map((function(t){return Number(t)}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var _=f.prototype;return _.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,e){return s+(t.$d[e]||0)*d[e]}),0)},_.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/u),t%=u,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/n),t%=n,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/e),t%=e,this.$d.milliseconds=t},_.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),e=+this.$d.days||0;this.$d.weeks&&(e+=7*this.$d.weeks);var i=g(e,"D"),n=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),c=t.negative||s.negative||i.negative||n.negative||r.negative||u.negative,a=n.format||r.format||u.format?"T":"",d=(c?"-":"")+"P"+t.format+s.format+i.format+a+n.format+r.format+u.format;return"P"===d||"-P"===d?"P0D":d},_.toJSON=function(){return this.toISOString()},_.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return e.replace(o,(function(t,s){return s||String(i[t])}))},_.as=function(t){return this.$ms/d[v(t)]},_.get=function(t){var s=this.$ms,e=v(t);return"milliseconds"===e?s%=1e3:s="weeks"===e?m(s/d[e]):this.$d[e],0===s?0:s},_.add=function(t,s,e){var i;return i=s?t*d[v(s)]:l(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(e?-1:1),this)},_.subtract=function(t,s){return this.add(t,s,!0)},_.locale=function(t){var s=this.clone();return s.$l=t,s},_.clone=function(){return h(this.$ms,this)},_.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},f}();return function(e,i,n){t=n,s=n().$utils(),n.duration=function(t,s){var e=n.locale();return h(t,{$l:e},s)},n.isDuration=l;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return l(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return l(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}()},649:function(t,e,n){"use strict";n.r(e);n(33),n(40);var r=n(34),o=n.n(r),c=n(460),d=n.n(c),l=n(0),h=n(492),v=n(437);o.a.extend(d.a);var f=l.default.extend({components:{Chart:h.default},data:function(){return{chartLabels:[this.$t("接種件数（１回目）"),this.$t("接種件数（２回目）")],getFormatter:function(){return Object(v.c)()}}},computed:{date:function(){return this.vaccine1264.date},vaccinationLabels:function(){var t=this;return this.vaccinationDatasets.map((function(e){var n=e.period.end;return t.getWeekEndLabel(n)}))},vaccinationDatasets:function(){return this.vaccine1264.datasets},p1:function(){return this.vaccine1264.p1},p2:function(){return this.vaccine1264.p2},vaccinationData:function(){var t=this.vaccine1264.datasets;return{lastPeriod:t.slice(-1)[0].period,labels:t.map((function(t){return t.period.end})),chartData:[t.map((function(t){return t.data.cumulative1StDose})),t.map((function(t){return t.data.cumulative2NdDose}))]}},vaccine1264:function(){return this.$store.state.vaccine1264}},methods:{getWeekEndLabel:function(t){var e=this.$d(o()(t).toDate(),"dateWithoutYear");return"~".concat(e)}}}),m=n(9),_=n(59),y=n.n(_),x=n(428),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard Vaccine1264Card",attrs:{cols:"12",md:"6"}},[n("client-only",[n("chart",{attrs:{title:t.$t("ワクチン接種件数（12～64歳・累計）"),"title-id":"vaccine-12-64","info-titles":[t.$t("接種件数（１回目)"),t.$t("接種件数（２回目）")],"chart-id":"vaccination-chart","chart-data":t.vaccinationData.chartData,"get-formatter":t.getFormatter,date:t.date,labels:t.vaccinationData.labels,periods:t.vaccinationLabels,"data-labels":t.chartLabels,"last-period":t.vaccinationData.lastPeriod,unit:t.$t(" 件")},scopedSlots:t._u([{key:"description",fn:function(){return[n("span",[t._v(t._s(t.$t("対象者 466,791人")))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n          "+t._s(t.$t("１回目の接種割合は、{p1}％",{p1:t.p1}))+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n          "+t._s(t.$t("２回目の接種割合は、{p2}％",{p2:t.p2}))+"\n        ")])]},proxy:!0},{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("土曜日、日曜日、祝日は更新しない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("ワクチン接種記録システム（VRS）のデータを基に、接種券の発行市町村別に集計している。登録にタイムラグがあるため、同じ日の接種実績でも、確認時点によって数値が異なる"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("12歳以上64歳以下の人口を分母にして接種率を出している"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("医療従事者等の記録は含まれている。職域接種の記録は、接種券がVRSに読み取られた記録についてのみ反映されている"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCol:x.a})}}]);