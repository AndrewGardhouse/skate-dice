(function(e){function t(t){for(var i,a,o=t[0],c=t[1],r=t[2],u=0,_=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&_.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(_.length)_.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},l=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://sk8diceapp.com/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var d=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"dice"},e._l(e.allDice,(function(t,i){return n(t,{key:t+"-"+i,tag:"component",attrs:{"selected-side-index":e.selectedSides[i],"toggle-roll":e.toggleRoll}})})),1),n("div",{staticClass:"rolldice"},[n("button",{staticClass:"rolldice__button",attrs:{type:"button",name:"button"},on:{click:e.rollDice}},[e._v("ROLL 'EM")])]),n("mode-switch")],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",{staticClass:"title__sk8"},[e._v("SK8")]),n("h1",{staticClass:"title__dice"},[e._v("DICE")])])}],a=n("2ef0"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Die",{attrs:{sides:["Wild","SkateDice","FrontSide","BackSide","FrontSide","BackSide"],"selected-side-index":e.selectedSideIndex,"toggle-roll":e.toggleRoll}})},c=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"die",class:{"die--roll":e.toggleRoll}},[n(e.selectedSide,{tag:"component"})],1)},d=[],u=(n("a9e3"),function(e,t){t._c;return t._m(0)}),_=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("FAKIE")])])}],f={},p=f,b=n("2877"),v=Object(b["a"])(p,u,_,!0,null,null,null),g=v.exports,m=function(e,t){t._c;return t._m(0)},h=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face die__face--nollie"},[n("span",[t._v("NOLLIE")])])}],O={},y=O,C=Object(b["a"])(y,m,h,!0,null,null,null),S=C.exports,x=function(e,t){t._c;return t._m(0)},j=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face die__face--switch"},[n("span",[t._v("SWITCH")])])}],E={},k=E,D=Object(b["a"])(k,x,j,!0,null,null,null),w=D.exports,M=function(e,t){t._c;return t._m(0)},F=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face die__face--regular"},[n("span",[t._v("REGULAR")])])}],R={},I=R,P=Object(b["a"])(I,M,F,!0,null,null,null),T=P.exports,A=function(e,t){t._c;return t._m(0)},K=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face die__face--backside"},[n("span",[t._v("BACK")]),n("span",[t._v("SIDE")])])}],N={},W=N,$=Object(b["a"])(W,A,K,!0,null,null,null),L=$.exports,B=function(e,t){t._c;return t._m(0)},H=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face die__face--frontside"},[n("span",[t._v("FRONT")]),n("span",[t._v("SIDE")])])}],q={},J=q,U=Object(b["a"])(J,B,H,!0,null,null,null),G=U.exports,z=function(e,t){t._c;return t._m(0)},Q=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("HEEL")]),n("span",[t._v("FLIP")])])}],V={},X=V,Y=Object(b["a"])(X,z,Q,!0,null,null,null),Z=Y.exports,ee=function(e,t){t._c;return t._m(0)},te=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("KICK")]),n("span",[t._v("FLIP")])])}],ne={},ie=ne,se=Object(b["a"])(ie,ee,te,!0,null,null,null),le=se.exports,ae=function(e,t){t._c;return t._m(0)},oe=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("360")])])}],ce={},re=ce,de=Object(b["a"])(re,ae,oe,!0,null,null,null),ue=de.exports,_e=function(e,t){t._c;return t._m(0)},fe=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("180")])])}],pe={},be=pe,ve=Object(b["a"])(be,_e,fe,!0,null,null,null),ge=ve.exports,me=function(e,t){t._c;return t._m(0)},he=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("span",[t._v("SK8")]),n("span",[t._v("DICE")])])}],Oe={},ye=Oe,Ce=Object(b["a"])(ye,me,he,!0,null,null,null),Se=Ce.exports,xe=function(e,t){t._c;return t._m(0)},je=[function(e,t){var n=t._c;return n("div",{staticClass:"die__face"},[n("div",{staticClass:"board board--top"},[n("div",{staticClass:"board__bolts board__bolts--left"},[n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"})]),n("div",{staticClass:"board__bolts board__bolts--right"},[n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"})])]),n("div",{staticClass:"board board--bottom"},[n("div",{staticClass:"board__bolts board__bolts--left"},[n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"})]),n("div",{staticClass:"board__bolts board__bolts--right"},[n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"}),n("div",{staticClass:"board__bolt"})])])])}],Ee={},ke=Ee,De=(n("9ac2"),Object(b["a"])(ke,xe,je,!0,null,"375b6cf5",null)),we=De.exports,Me={props:{sides:{type:Array,required:!0},selectedSideIndex:{type:Number},toggleRoll:{type:Boolean}},components:{Fakie:g,Nollie:S,StanceSwitch:w,Regular:T,BackSide:L,FrontSide:G,Heelflip:Z,Kickflip:le,ThreeSixty:ue,OneEighty:ge,SkateDice:Se,Wild:we},computed:{selectedSide:function(){return this.sides[this.selectedSideIndex]}}},Fe=Me,Re=(n("99f5"),Object(b["a"])(Fe,r,d,!1,null,null,null)),Ie=Re.exports,Pe={props:{selectedSideIndex:{type:Number,required:!0},toggleRoll:{type:Boolean}}},Te={mixins:[Pe],components:{Die:Ie}},Ae=Te,Ke=Object(b["a"])(Ae,o,c,!1,null,null,null),Ne=Ke.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Die",{attrs:{sides:e.sides,"selected-side-index":e.selectedSideIndex,"toggle-roll":e.toggleRoll}})},$e=[],Le=n("5530"),Be=n("2f62"),He={computed:Object(Le["a"])(Object(Le["a"])({},Object(Be["c"])(["isEasyMode"])),{},{sides:function(){return this.isEasyMode?this.easyModeFaces:this.standardModeFaces}})},qe={mixins:[He,Pe],components:{Die:Ie},data:function(){return{easyModeFaces:["Wild","SkateDice","OneEighty","OneEighty","OneEighty","SkateDice"],standardModeFaces:["Wild","SkateDice","OneEighty","ThreeSixty","OneEighty","ThreeSixty"]}}},Je=qe,Ue=Object(b["a"])(Je,We,$e,!1,null,null,null),Ge=Ue.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Die",{attrs:{sides:["Wild","SkateDice","Kickflip","Heelflip","Kickflip","Heelflip"],"selected-side-index":e.selectedSideIndex,"toggle-roll":e.toggleRoll}})},Qe=[],Ve={mixins:[Pe],components:{Die:Ie}},Xe=Ve,Ye=Object(b["a"])(Xe,ze,Qe,!1,null,null,null),Ze=Ye.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Die",{attrs:{sides:e.sides,"selected-side-index":e.selectedSideIndex,"toggle-roll":e.toggleRoll}})},tt=[],nt={mixins:[He,Pe],components:{Die:Ie},data:function(){return{easyModeFaces:["Wild","SkateDice","Regular","Regular","Fakie","Fakie"],standardModeFaces:["Wild","SkateDice","StanceSwitch","Regular","Fakie","Nollie"]}}},it=nt,st=Object(b["a"])(it,et,tt,!1,null,null,null),lt=st.exports,at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mode"},[n("div",{staticClass:"mode__switch",class:{"mode__switch--is-easy-mode":e.isEasyMode},on:{click:e.toggleEasyMode}},[n("div",{staticClass:"mode__switch-button"})]),n("div",{staticClass:"mode__label"},[e._v("WARM-UP MODE")])])},ot=[],ct={computed:Object(Le["a"])({},Object(Be["c"])(["isEasyMode"])),methods:Object(Le["a"])({},Object(Be["b"])(["toggleEasyMode"]))},rt=ct,dt=(n("9891"),Object(b["a"])(rt,at,ot,!1,null,"5bd4571e",null)),ut=dt.exports,_t={name:"App",components:{SpinDegreeDie:Ge,DirectionDie:Ne,FlipTrickDie:Ze,StanceDie:lt,ModeSwitch:ut},data:function(){return{selectedSides:[0,1,1,0],allDice:[lt,Ne,Ge,Ze],toggleRoll:!1}},methods:{rollDice:function(){var e=this;this.toggleRoll=!this.toggleRoll,setTimeout((function(){e.selectedSides=[Object(a["random"])(0,5),Object(a["random"])(0,5),Object(a["random"])(0,5),Object(a["random"])(0,5)],e.allDice=Object(a["shuffle"])(e.allDice)}),499)}}},ft=_t,pt=(n("5c0b"),Object(b["a"])(ft,s,l,!1,null,null,null)),bt=pt.exports,vt=n("0e44");i["a"].use(Be["a"]);var gt=new Be["a"].Store({state:{isEasyMode:!1},mutations:{toggleEasyMode:function(e){e.isEasyMode=!e.isEasyMode}},plugins:[Object(vt["a"])({key:"sk8dice",paths:["isEasyMode"]})]}),mt=n("9483");Object(mt["a"])("".concat("https://sk8diceapp.com/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({store:gt,render:function(e){return e(bt)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"77cc":function(e,t,n){},9891:function(e,t,n){"use strict";var i=n("77cc"),s=n.n(i);s.a},"99f5":function(e,t,n){"use strict";var i=n("a94e"),s=n.n(i);s.a},"9ac2":function(e,t,n){"use strict";var i=n("f077"),s=n.n(i);s.a},"9c0c":function(e,t,n){},a94e:function(e,t,n){},f077:function(e,t,n){}});
//# sourceMappingURL=app.d081120a.js.map