(window.webpackJsonp=window.webpackJsonp||[]).push([[10,53],{443:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("8ce8012e",content,!0,{sourceMap:!1})},445:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("dc5dcad0",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var r=new(n(0).default),l="TOGGLE_TAB"},461:function(t,e,n){"use strict";n.r(e);n(24),n(33),n(40),n(10);var r=n(34),l=n.n(r),o=n(0),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{formatDate:function(t){var e=l()(new Date(t));return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=o.default.extend(d),h=(n(475),n(9)),f=n(59),y=n.n(f),v=n(880),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,l){return n("td",{key:l,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;y()(component,{VDataTable:v.a})},462:function(t,e,n){"use strict";n.r(e);n(64);var r=n(447),l={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},o=(n(479),n(9)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable",attrs:{tabindex:"0"}},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"15777dc0",null);e.default=component.exports},466:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return v}));var r={strokeColor:"#053c47",fillColor:"#c8dae1"},l={strokeColor:"#053c47",fillColor:"#085c6c"},o={strokeColor:"#16A308",fillColor:"#D9EADC"},d={strokeColor:"#1b454d",fillColor:"#c8dae1"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1b454d",fillColor:"#1b454d"},f={strokeColor:"#053c47",fillColor:"#e2eee2"};function y(t){switch(t){case 1:return[l];case 2:return[r,o];case 4:return[r,l,o,f];default:return[r,l,o]}}function v(t){return{A:r,B:l,C:o,D:d,E:c,F:h,G:f}[t]}},472:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2e935788",content,!0,{sourceMap:!1})},475:function(t,e,n){"use strict";n(443)},476:function(t,e,n){var r=n(26)(!1);r.push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=r},479:function(t,e,n){"use strict";n(445)},480:function(t,e,n){var r=n(26)(!1);r.push([t.i,".LegendStickyChart[data-v-15777dc0]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-15777dc0]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-15777dc0]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=r},575:function(t,e,n){"use strict";var r=n(472),l=n.n(r);n.d(e,"default",(function(){return l.a}))},576:function(t,e,n){var r=n(26)(!1);r.push([t.i,".GraphLegend_1a84N{text-align:center;list-style:none;padding:0!important}.GraphLegend_1a84N li{display:inline-block;margin:0 3px}.GraphLegend_1a84N li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_1a84N li button{color:#707070;font-size:1.2rem}",""]),r.locals={GraphLegend:"GraphLegend_1a84N"},t.exports=r},596:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(93),o=(n(33),n(18),n(40),n(0)),d=n(421),c=n(461),h=n(462),f=n(145),y=n(466),v=o.default.extend({components:{DataView:d.default,DataViewTable:c.default,ScrollableChart:h.default},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"agency-bar-chart"},chartData:{type:Object,default:function(){return{date:"",periods:[],datasets:[]}}},date:{type:String,default:""},labels:{type:Array,default:function(){return[]}},periods:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},unit:{type:String,required:!1,default:""}},data:function(){return{colors:Object(y.b)(3),canvas:!0,yAxesBgPlugin:f.b,displayLegends:[!0,!0,!0]}},computed:{displayData:function(){var t=this;return{labels:this.labels,datasets:this.chartData.datasets.map((function(e,n){var label=t.items[n],data=e.data,r=t.colors[n];return{label:label,data:data,backgroundColor:r.fillColor,borderColor:r.strokeColor,borderWidth:1}}))}},displayOption:function(){var t=this,e={maintainAspectRatio:!1,tooltips:{displayColors:!1,callbacks:{title:function(e){var n=t.periods[e[0].index];return t.$t("期間: {duration}",{duration:n})},label:function(e,data){var n=e.datasetIndex,title=t.$t(data.datasets[n].label),r=parseInt(e.value).toLocaleString(),l=t.$t(t.unit);return"".concat(title,": ").concat(r," ").concat(l)}}},legend:{display:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"#808080",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"year",displayFormats:{year:"YYYY"}}}],yAxes:[{stacked:!0,gridLines:{display:!0},ticks:{fontSize:9,fontColor:"#808080",maxTicksLimit:10,callback:function(label){return"".concat(label).concat(t.unit)}}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){var t=this;return{labels:this.labels,datasets:this.chartData.datasets.map((function(e,n){return{label:t.items[n],data:e.data,backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){var t=this;return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"transparent",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"year"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,fontColor:"#808080",maxTicksLimit:10,callback:function(label){return"".concat(label).concat(t.unit)}}}]},animation:{duration:0}}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(l.a)(this.displayData.datasets.map((function(text,t){return{text:text.label,value:String(t),align:"end"}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.periods[i]}].concat(Object(l.a)(t.displayData.datasets.map((function(e,n){return Object(r.a)({},n,t.displayData.datasets[n].data[i].toLocaleString())})))))})).reverse()}},created:function(){this.canvas=!0},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}}}),m=n(575),k=n(9);var component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,width:"20px"}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v("\n          "+t._s(e)+"\n        ")])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData,"is-weekly":!0},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:280,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,"display-legends":t.displayLegends,plugins:t.yAxesBgPlugin,height:280}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports},717:function(t,e,n){"use strict";n.r(e);n(33),n(18);var r=n(0),l=n(596),o=n(142),d=r.default.extend({components:{Chart:l.default},data:function(){return{agencyItems:[this.$t("１回目接種済み"),this.$t("２回目接種済み")]}},computed:{agency:function(){return this.$store.state.agency},date:function(){return this.agency.date},all:function(){return this.agency.all},labels:function(){return this.agency.periods.map((function(p){return Object(o.a)(p.begin)}))},periods:function(){var t=this;return this.agency.periods.map((function(p){var e=t.$d(p.begin,"dateWithoutYear"),n=t.$d(p.end,"dateWithoutYear");return"".concat(e,"~").concat(n)}))}}}),c=n(9),h=n(59),f=n.n(h),y=n(428),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard Vaccine7Card",attrs:{cols:"12",md:"6"}},[n("client-only",[n("chart",{attrs:{title:t.$t("ワクチン接種者数の推移（累計・週報）"),"title-id":"vaccine-7","chart-id":"vaccine-7","chart-data":t.agency,date:t.date,labels:t.labels,periods:t.periods,items:t.agencyItems,unit:t.$t("人")},scopedSlots:t._u([{key:"description",fn:function(){return[n("span",[t._v("\n          "+t._s(t.$t("接種対象者数 661,738人"))+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n          "+t._s(t.$t("現在の総接種者数 "))+"\n          "+t._s(t.$t("{all}人",{all:t.all.toLocaleString()}))+"\n        ")])]},proxy:!0},{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("接種対象者数は、満12歳以上の者である（2021年6月30日時点）"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("現在の総接種者数は、グラフ上における１回目接種済み者と２回目接種済み者を累計したものである"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("２回目の接種を完了した者は、「１回目接種済み」から除外している"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("グラフ上にて確認しにくい数値は、下記の「テーブルを表示」より確認可能である"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:y.a})}}]);