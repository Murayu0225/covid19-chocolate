(window.webpackJsonp=window.webpackJsonp||[]).push([[16,18],{412:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5e22af2d",content,!0,{sourceMap:!1})},427:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("4509a34d",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n.r(e);n(48),n(49);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(454),l=n(10);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},454:function(t,e,n){"use strict";var o=n(412),r=n.n(o);n.d(e,"default",(function(){return r.a}))},455:function(t,e,n){var o=n(30)(!1);o.push([t.i,".parent_25AIV{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_25AIV"},t.exports=o},477:function(t,e,n){"use strict";var o=n(427),r=n.n(o);n.d(e,"default",(function(){return r.a}))},478:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.container_3XjJx{width:100%;color:#085c6c;line-height:1.35;padding-left:0!important}.container_3XjJx,.container_3XjJx *{box-sizing:border-box}.container_3XjJx ul{padding-left:0}.group_1p13o{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #085c6c;border-left:3px solid #085c6c}.content_2oIg7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #085c6c}.content_2oIg7>span{display:block;font-size:1.4rem}.content_2oIg7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_2oIg7>span:not(:last-child){word-wrap:break-word}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{display:block;margin-top:3px}.box_1PPAr.parent_3YN05{border-top:3px solid #085c6c;border-left:3px solid #085c6c;position:relative;padding-left:29px}.box_1PPAr.parent_3YN05:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_1p13o{padding-left:.238vw!important;border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c}.content_2oIg7{padding:.396vw .792vw;border:.238vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.08vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.238vw}.box_1PPAr.parent_3YN05{border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c;padding-left:2.296vw}.box_1PPAr.parent_3YN05:after{width:2.534vw;border-bottom:.238vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_1p13o{padding-left:.313vw!important;border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c}.content_2oIg7{padding:.521vw 1.042vw;border:.313vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.105vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.313vw}.box_1PPAr.parent_3YN05{border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c;padding-left:3.02vw}.box_1PPAr.parent_3YN05:after{width:3.334vw;border-bottom:.313vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_1p13o{padding-left:.5vw!important;border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c}.content_2oIg7{padding:.834vw 1.667vw;border:.5vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.167vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.5vw}.box_1PPAr.parent_3YN05{border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c;padding-left:4.834vw}.box_1PPAr.parent_3YN05:after{width:5.334vw;border-bottom:.5vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_3XjJx",group:"group_1p13o",content:"content_2oIg7",unit:"unit_2PKD5",box:"box_1PPAr",parent:"parent_3YN05"},t.exports=o},506:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(445),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(477),d=n(10);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（１）人口10万人当たりの累積陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["人口10万人当たりの累積陽性者数"].value,unit:t.items["人口10万人当たりの累積陽性者数"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人口10万人当たりの累積陽性者数（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["人口10万人当たりの累積陽性者数（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（２）陽性患者増加比")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["陽性患者増加比"].value,unit:t.items["陽性患者増加比"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性患者増加比（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["陽性患者増加比（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（３）感染経路不明者の割合")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["感染経路不明者の割合"].value,unit:t.items["感染経路不明者の割合"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("感染経路不明者の割合（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["感染経路不明者の割合（参考値）"].value))])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports}}]);