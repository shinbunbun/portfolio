(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(t,n,e){var o=e(3);n.f=o},259:function(t,n,e){"use strict";var o=e(2),r=e(4),c=e(30),l=e(26),f=e(16),h=e(110),d=e(171),m=e(5),y=e(15),v=e(74),w=e(11),C=e(7),S=e(24),O=e(28),j=e(71),x=e(41),_=e(75),k=e(54),P=e(106),z=e(260),N=e(109),E=e(40),$=e(22),J=e(70),F=e(23),I=e(18),L=e(107),T=e(72),D=e(73),M=e(108),Q=e(3),W=e(258),A=e(261),B=e(42),G=e(29),H=e(33).forEach,K=T("hidden"),R=Q("toPrimitive"),U=G.set,V=G.getterFor("Symbol"),X=Object.prototype,Y=r.Symbol,Z=c("JSON","stringify"),tt=E.f,nt=$.f,it=z.f,et=J.f,ot=L("symbols"),st=L("op-symbols"),at=L("string-to-symbol-registry"),ct=L("symbol-to-string-registry"),ut=L("wks"),lt=r.QObject,ft=!lt||!lt.prototype||!lt.prototype.findChild,pt=f&&m((function(){return 7!=_(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,n,e){var o=tt(X,n);o&&delete X[n],nt(t,n,e),o&&t!==X&&nt(X,n,o)}:nt,gt=function(t,n){var symbol=ot[t]=_(Y.prototype);return U(symbol,{type:"Symbol",tag:t,description:n}),f||(symbol.description=n),symbol},ht=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},bt=function(t,n,e){t===X&&bt(st,n,e),C(t);var o=j(n,!0);return C(e),y(ot,o)?(e.enumerable?(y(t,K)&&t[K][o]&&(t[K][o]=!1),e=_(e,{enumerable:x(0,!1)})):(y(t,K)||nt(t,K,x(1,{})),t[K][o]=!0),pt(t,o,e)):nt(t,o,e)},mt=function(t,n){C(t);var e=O(n),o=k(e).concat(Ct(e));return H(o,(function(n){f&&!yt.call(e,n)||bt(t,n,e[n])})),t},yt=function(t){var n=j(t,!0),e=et.call(this,n);return!(this===X&&y(ot,n)&&!y(st,n))&&(!(e||!y(this,n)||!y(ot,n)||y(this,K)&&this[K][n])||e)},vt=function(t,n){var e=O(t),o=j(n,!0);if(e!==X||!y(ot,o)||y(st,o)){var r=tt(e,o);return!r||!y(ot,o)||y(e,K)&&e[K][o]||(r.enumerable=!0),r}},wt=function(t){var n=it(O(t)),e=[];return H(n,(function(t){y(ot,t)||y(D,t)||e.push(t)})),e},Ct=function(t){var n=t===X,e=it(n?st:O(t)),o=[];return H(e,(function(t){!y(ot,t)||n&&!y(X,t)||o.push(ot[t])})),o};(h||(I((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=M(t),e=function(t){this===X&&e.call(st,t),y(this,K)&&y(this[K],n)&&(this[K][n]=!1),pt(this,n,x(1,t))};return f&&ft&&pt(X,n,{configurable:!0,set:e}),gt(n,t)}).prototype,"toString",(function(){return V(this).tag})),I(Y,"withoutSetter",(function(t){return gt(M(t),t)})),J.f=yt,$.f=bt,E.f=vt,P.f=z.f=wt,N.f=Ct,W.f=function(t){return gt(Q(t),t)},f&&(nt(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),l||I(X,"propertyIsEnumerable",yt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Y}),H(k(ut),(function(t){A(t)})),o({target:"Symbol",stat:!0,forced:!h},{for:function(t){var n=String(t);if(y(at,n))return at[n];var symbol=Y(n);return at[n]=symbol,ct[symbol]=n,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(y(ct,t))return ct[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),o({target:"Object",stat:!0,forced:!h,sham:!f},{create:function(t,n){return void 0===n?_(t):mt(_(t),n)},defineProperty:bt,defineProperties:mt,getOwnPropertyDescriptor:vt}),o({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:wt,getOwnPropertySymbols:Ct}),o({target:"Object",stat:!0,forced:m((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(S(t))}}),Z)&&o({target:"JSON",stat:!0,forced:!h||m((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,n,e){for(var o,r=[t],c=1;arguments.length>c;)r.push(arguments[c++]);if(o=n,(w(n)||void 0!==t)&&!ht(t))return v(n)||(n=function(t,n){if("function"==typeof o&&(n=o.call(this,t,n)),!ht(n))return n}),r[1]=n,Z.apply(null,r)}});Y.prototype[R]||F(Y.prototype,R,Y.prototype.valueOf),B(Y,"Symbol"),D[K]=!0},260:function(t,n,e){var o=e(28),r=e(106).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return r(t)}catch(t){return l.slice()}}(t):r(o(t))}},261:function(t,n,e){var path=e(170),o=e(15),r=e(258),c=e(22).f;t.exports=function(t){var n=path.Symbol||(path.Symbol={});o(n,t)||c(n,t,{value:r.f(t)})}},262:function(t,n,e){"use strict";var o=e(2),r=e(16),c=e(4),l=e(15),f=e(11),h=e(22).f,d=e(169),m=c.Symbol;if(r&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var y={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof v?new m(t):void 0===t?m():m(t);return""===t&&(y[n]=!0),n};d(v,m);var w=v.prototype=m.prototype;w.constructor=v;var C=w.toString,S="Symbol(test)"==String(m("test")),O=/^Symbol\((.*)\)[^)]+$/;h(w,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=C.call(symbol);if(l(y,symbol))return"";var desc=S?t.slice(7,-1):t.replace(O,"$1");return""===desc?void 0:desc}}),o({global:!0,forced:!0},{Symbol:v})}},268:function(t,n,e){var content=e(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("5840678b",content,!0,{sourceMap:!1})},283:function(t,n,e){"use strict";e(268)},284:function(t,n,e){(n=e(9)(!1)).push([t.i,"img[data-v-1a5cedfc]{max-width:100%}",""]),t.exports=n},307:function(t,n,e){"use strict";e.r(n);e(259),e(262);var o={data:function(){return{meta:{title:"Photos",description:"フォトギャラリー",type:"article",url:"https://shinbunbun.info/photos/",image:"https://shinbunbun.info/images/ogp.png"},pictureCount:21,btnClass:{min:"btn-light",mid:"btn-secondary",big:"btn-light"},images:[],imgClass:"col-6 col-md-4"}},mounted:function(){for(var t=this.pictureCount,n=this.images,i=0;i<t;i++)n.push({src:"/images/photos/".concat(t-i,".jpeg"),thumb:"/images/photos/".concat(t-i,".jpeg")});this.images=n},methods:{showLightbox:function(t){this.$refs.lightbox.showImage(t)},sizeChange:function(t){switch(t.target.value){case"min":this.btnClass={min:"btn-secondary",mid:"btn-light",big:"btn-light"},this.imgClass="col-4 col-md-3";break;case"mid":this.btnClass={min:"btn-light",mid:"btn-secondary",big:"btn-light"},this.imgClass="col-6 col-md-4";break;case"big":this.btnClass={min:"btn-light",mid:"btn-light",big:"btn-secondary"},this.imgClass="col-12 col-md-6"}}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:type",property:"og:type",content:this.meta.type},{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:this.meta.url},{hid:"og:image",property:"og:image",content:this.meta.image}]}}},r=(e(283),e(8)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"py-4"}),t._v(" "),e("h1",[t._v("Photos")]),t._v(" "),e("div",{staticClass:"py-4"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"btn-group border rounded",attrs:{role:"group"}},[e("button",{staticClass:"btn size-btn",class:t.btnClass.min,attrs:{type:"button",value:"min"},on:{click:t.sizeChange}},[t._v("\n            小\n          ")]),t._v(" "),e("button",{staticClass:"btn size-btn",class:t.btnClass.mid,attrs:{type:"button",value:"mid"},on:{click:t.sizeChange}},[t._v("\n            中\n          ")]),t._v(" "),e("button",{staticClass:"btn size-btn",class:t.btnClass.big,attrs:{type:"button",value:"big"},on:{click:t.sizeChange}},[t._v("\n            大\n          ")])])])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.pictureCount,(function(n){return e("div",{key:n,staticClass:"py-3",class:t.imgClass},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/photos/"+(t.pictureCount-n+1)+".jpeg",expression:"`/images/photos/${pictureCount - index + 1}.jpeg`"}],on:{click:function(e){return t.showLightbox(n-1)}}})])})),0),t._v(" "),e("client-only",[e("light-box",{ref:"lightbox",attrs:{media:t.images,"show-light-box":!1}})],1)],1)])}),[],!1,null,"1a5cedfc",null);n.default=component.exports}}]);