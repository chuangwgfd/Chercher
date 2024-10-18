(function(){"use strict";var t={4638:function(t,e,i){var s=i(2856),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o=i(1656),r={},l=(0,o.A)(r,n,a,!1,null,null,null),c=l.exports,u=i(1594),p=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"news"},[e("img",{attrs:{src:t.img}})])},d=[],v=i.p+"img/4.02bc7986.jpg",m={name:"EyeView",components:{},data(){return{img:v,loading:!0}},mounted(){setTimeout((()=>{this.loading=!1}),2e3)}},g=m,f=(0,o.A)(g,p,d,!1,null,"5150e93e",null),h=f.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cher flex-col align-items-center"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.logo}})]),e("div",{staticClass:"wrap",class:{extend:t.isInputTrigger}},[e("div",{staticClass:"search flex align-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"search-input",attrs:{placeholder:"Search"},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleKeyUp.apply(null,arguments)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),e("Icon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"icon pointer cancel",attrs:{icon:"mi:close"},nativeOn:{click:function(e){return t.clearValue.apply(null,arguments)}}}),e("Icon",{staticClass:"icon pointer",attrs:{icon:"mi:search"},nativeOn:{click:function(e){return t.toResult.apply(null,arguments)}}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isInputTrigger,expression:"isInputTrigger"}],staticClass:"result"},[t._l(t.results,(function(i){return[e("div",{staticClass:"result-items flex align-items-center pointer"},[e("Icon",{staticClass:"icon",attrs:{icon:"mi:search"}}),e("span",[t._v(t._s(i))])],1)]}))],2)])])},_=[],y=(i(4114),i(8298)),b=i.p+"img/Logo.b97e3ce2.svg",w={name:"HomeView",components:{Icon:y.In},data(){return{logo:b,value:"",countKeyUp:0,results:["李霏歌手","李霏身高","李霏熱門歌曲","李霏新專輯","李霏電影"]}},computed:{isInputTrigger(){return"李霏"===this.value}},methods:{clearValue(){this.value=""},toResult(){this.$router.push("/search?ssp=eJzj4tTP1TcwykvLKjBg_李霏")},handleKeyUp(){this.countKeyUp++,console.log("handleKeyUp"),this.countKeyUp>1&&this.toResult()}}},x=w,k=(0,o.A)(x,C,_,!1,null,"8ecdb9cc",null),j=k.exports,I=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"result"},[e("div",{staticClass:"header flex-col justify-content-between"},[e("div",{staticClass:"flex align-items-center"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.logo}})]),e("div",{staticClass:"search flex align-items-center"},[e("span",[t._v("李霏")]),e("Icon",{staticClass:"icon pointer cancel",attrs:{icon:"mi:close"}}),e("Icon",{staticClass:"icon pointer",attrs:{icon:"mi:search"}})],1),e("div",{staticClass:"account"},[e("img",{attrs:{src:t.accountImg}})])]),e("div",{staticClass:"menu flex"},[e("div",{staticClass:"menu-item pointer active"},[t._v("全部")]),e("div",{staticClass:"menu-item pointer"},[t._v("新聞")]),e("div",{staticClass:"menu-item pointer"},[t._v("圖片")]),e("div",{staticClass:"menu-item pointer"},[t._v("影片")]),e("div",{staticClass:"menu-item pointer"},[t._v("網頁")]),e("div",{staticClass:"menu-item pointer more flex align-items-center"},[e("Icon",{staticClass:"icon",attrs:{icon:"pepicons-pencil:dots-y"}}),e("span",[t._v("更多")])],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"result-wrap"},[e("div",{staticClass:"photo-section"},[t._m(0),e("div",{staticClass:"singer"},[t._v("歌手 ⋮")]),e("div",{staticClass:"photos grid"},[e("div",{staticClass:"imgWrap",style:{gridArea:"left"}},[e("img",{staticClass:"pointer",attrs:{src:t.photo3}})]),e("div",{staticClass:"imgWrap",style:{gridArea:"top"}},[e("img",{staticClass:"pointer",attrs:{src:t.photo1}})]),e("div",{staticClass:"imgWrap",style:{gridArea:"right"}},[e("img",{staticClass:"pointer",attrs:{src:t.photo4}})]),e("div",{staticClass:"imgWrap",style:{gridArea:"bot"}},[e("img",{staticClass:"pointer",attrs:{src:t.photo2}})])])]),e("div",{staticClass:"img-under"},[e("img",{attrs:{src:t.searchImg}}),e("label",{staticClass:"link-text wiki pointer"},[t._v("李霏 - 維基百科")]),e("label",{staticClass:"link-text po1 pointer"},[t._v("《心跳的旋律》首秀發佈會不見李霏蹤影，引發熱議")]),e("label",{staticClass:"link-text po2 pointer"},[t._v("李霏『放鳥』電影《心跳的旋律》首秀發佈會，粉絲心急如焚")]),e("label",{staticClass:"link-text po3 pointer",on:{click:t.handleClickLink}},[t._v("完美女神李霏放鳥首部電影發佈會，經紀人爸稱太過疲勞？")]),e("label",{staticClass:"link-text po4 pointer"},[t._v("《心跳的旋律》發佈會被李霏大『放鳥』，外界傳與劇組關係不合")]),e("label",{staticClass:"link-text po5 pointer"},[t._v("李霏電影首秀發佈會突缺席，被指控耍大牌")]),e("label",{staticClass:"link-text po6 pointer"},[t._v("李霏電影首秀發佈會缺席，粉絲表達擔憂")]),e("label",{staticClass:"link-text po7 pointer"},[t._v("李霏缺席《心跳的旋律》發佈會引發爭議，粉絲質疑其態度")]),e("label",{staticClass:"link-text po8 pointer"},[t._v("李霏意外缺席發佈會，粉絲質疑大牌行為")])])])])},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("label",[t._v("李霏")]),e("div",{staticClass:"tags"},[e("span",{staticClass:"pointer"},[t._v("歌曲")]),e("span",{staticClass:"pointer"},[t._v("專輯")]),e("span",{staticClass:"pointer"},[t._v("節目")]),e("span",{staticClass:"pointer"},[t._v("影片")]),e("span",{staticClass:"pointer"},[t._v("相關報導")])])])}],T=i.p+"img/5.d80c9b72.jpg",A=i.p+"img/2.1d579edc.png",K=i.p+"img/logo.1ddd3d36.png",N=i(4927),P=i.n(N),S=i.p+"img/原圖_李霏照片_2-1.c630b619.jpg",U=i.p+"img/原圖_李霏照片_2-2.06fd3624.jpg",V=i.p+"img/原圖_李霏照片_2-3.9a9a046c.jpg",L=i.p+"img/原圖_李霏照片_2-4.89f137d8.jpg",R={name:"ResultView",components:{Icon:y.In},data(){return{logo:K,searchImg:T,accountImg:A,loading:!0,photo1:S,photo2:U,photo3:V,photo4:L}},mounted(){setTimeout((()=>{this.loading=!1}),1e3)},methods:{handleClickLink(){this.$router.push("/news?id=qkl1kl2j3k123k3590")}}},W=R,E=(0,o.A)(W,I,O,!1,null,"78e5ce4a",null),M=E.exports;s["default"].use(u.Ay);const $=[{path:"/",name:"main",component:j},{path:"/search",name:"result",component:M},{path:"/news",name:"news",component:h}],q=new u.Ay({mode:"history",routes:$});var z=q;s["default"].use(P()),s["default"].config.productionTip=!1,new s["default"]({router:z,render:t=>t(c)}).$mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,s,n,a){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],a=t[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,n,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p="/"}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var u=l(i)}for(e&&e(s);c<o.length;c++)a=o[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},s=self["webpackChunkchercher"]=self["webpackChunkchercher"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(4638)}));s=i.O(s)})();
//# sourceMappingURL=app.13dd447d.js.map