(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],f=0,p=[];f<o.length;f++)u=o[f],a[u]&&p.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"458f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=n("5c96"),c=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},o=[],i={components:{}},s=i,l=(n("5c0b"),n("2877")),f=Object(l["a"])(s,u,o,!1,null,null,null),p=f.exports,d=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("el-select",{model:{value:e.kType,callback:function(t){e.kType=t},expression:"kType"}},e._l(e.kTypes,function(e,t){return n("el-option",{key:t,attrs:{value:e,label:e}})}),1),n("el-select",{on:{change:e.onSectorChange},model:{value:e.sector,callback:function(t){e.sector=t},expression:"sector"}},e._l(e.sectors,function(e,t){return n("el-option",{key:t,attrs:{value:e.val,label:e.label}})}),1)],1),n("div",{staticClass:"row k-charts"},e._l(e.stockList,function(t,r){return n("div",{key:r,staticClass:"item"},[n("div",{staticClass:"ticker"},[e._v(e._s(t.name))]),n("el-image",{attrs:{src:t[e.kType],fit:"fit",lazy:""}})],1)}),0)])},h=[],b=(n("7f7f"),n("96cf"),n("3b8d")),y=n("d225"),m=n("b0b4"),g=n("bc3a"),k=n.n(g),w=function(){function e(){Object(y["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getStockListBySector",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/data/".concat(t,"-sector.json"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",[]);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllStockList",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/stock_list");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",[]);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),j=function(){function e(){Object(y["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getKChartUrl",value:function(t,n){var r=e.getTradeCenter(t);return"http://image.sinajs.cn/newchart/".concat(n,"/n/").concat(r).concat(t,".gif")}},{key:"getTradeCenter",value:function(e){return/^[023]/.test(e)?"sz":"sh"}}]),e}(),O={data:function(){return{kType:"dailyK",kTypes:["minK","dailyK","weeklyK","monthlyK"],stockList:[],sector:"security",sectors:[{label:"证券",val:"security"},{label:"白酒",val:"alcohol"},{label:"保险",val:"assurance"}]}},methods:{onSectorChange:function(){this.requestData()},requestData:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.getStockListBySector(this.sector);case 2:t=e.sent,this.stockList=t.map(function(e){return{name:e.name,code:e.code,sector:e.sector,minK:j.getKChartUrl(e.code,"min"),dailyK:j.getKChartUrl(e.code,"daily"),weeklyK:j.getKChartUrl(e.code,"weekly"),monthlyK:j.getKChartUrl(e.code,"monthly")}});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.requestData();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},x=O,_=(n("925b"),Object(l["a"])(x,v,h,!1,null,"810e9e34",null)),C=_.exports;r["default"].use(d["a"]);var K=new d["a"]({routes:[{path:"/",name:"security",component:C}]});n("abe2"),n("0fae");r["default"].config.productionTip=!1,r["default"].use(c.a),new r["default"]({router:K,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("458f"),a=n.n(r);a.a},7050:function(e,t,n){},"925b":function(e,t,n){"use strict";var r=n("7050"),a=n.n(r);a.a},abe2:function(e,t,n){}});
//# sourceMappingURL=app.59b6877a.js.map