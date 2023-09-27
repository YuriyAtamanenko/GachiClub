import{g as qr,O as Ge,R as d,d as E,P as o,S as zr,b as Ua,T as Kr,j as l,I as fe,U as Jr,u as Xr,V as Qr}from"./index-51503fb6.js";import{s as y}from"./styled-components.browser.esm-9a7008cb.js";import{w as Zr,F as en,a as R,E as tn,c as an,b as xa,e as Oe,f as rn,d as nn}from"./index.esm-79c7e826.js";const on=y.div`
  padding-top: 40px;
`,ln=y.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  margin-bottom: 40px;
  
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
  }
`,cn=y.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;function Ba(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ba(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function rt(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=Ba(e))&&(a&&(a+=" "),a+=t);return a}var sn="Expected a function",Ga="__lodash_hash_undefined__",un="[object Function]",dn="[object GeneratorFunction]",fn=/[\\^$.*+?()[\]{}|]/g,vn=/^\[object .+?Constructor\]$/,hn=typeof Ge=="object"&&Ge&&Ge.Object===Object&&Ge,mn=typeof self=="object"&&self&&self.Object===Object&&self,Ha=hn||mn||Function("return this")();function gn(e,t){return e==null?void 0:e[t]}function pn(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var yn=Array.prototype,bn=Function.prototype,qa=Object.prototype,Et=Ha["__core-js_shared__"],wa=function(){var e=/[^.]+$/.exec(Et&&Et.keys&&Et.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),za=bn.toString,Ht=qa.hasOwnProperty,xn=qa.toString,wn=RegExp("^"+za.call(Ht).replace(fn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dn=yn.splice,_n=Ka(Ha,"Map"),ke=Ka(Object,"create");function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function On(){this.__data__=ke?ke(null):{}}function Sn(e){return this.has(e)&&delete this.__data__[e]}function jn(e){var t=this.__data__;if(ke){var r=t[e];return r===Ga?void 0:r}return Ht.call(t,e)?t[e]:void 0}function kn(e){var t=this.__data__;return ke?t[e]!==void 0:Ht.call(t,e)}function Tn(e,t){var r=this.__data__;return r[e]=ke&&t===void 0?Ga:t,this}ae.prototype.clear=On;ae.prototype.delete=Sn;ae.prototype.get=jn;ae.prototype.has=kn;ae.prototype.set=Tn;function pe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Cn(){this.__data__=[]}function En(e){var t=this.__data__,r=nt(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():Dn.call(t,r,1),!0}function An(e){var t=this.__data__,r=nt(t,e);return r<0?void 0:t[r][1]}function Nn(e){return nt(this.__data__,e)>-1}function Ln(e,t){var r=this.__data__,a=nt(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}pe.prototype.clear=Cn;pe.prototype.delete=En;pe.prototype.get=An;pe.prototype.has=Nn;pe.prototype.set=Ln;function re(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Pn(){this.__data__={hash:new ae,map:new(_n||pe),string:new ae}}function Mn(e){return it(this,e).delete(e)}function Wn(e){return it(this,e).get(e)}function In(e){return it(this,e).has(e)}function Rn(e,t){return it(this,e).set(e,t),this}re.prototype.clear=Pn;re.prototype.delete=Mn;re.prototype.get=Wn;re.prototype.has=In;re.prototype.set=Rn;function nt(e,t){for(var r=e.length;r--;)if(Un(e[r][0],t))return r;return-1}function Yn(e){if(!Ja(e)||$n(e))return!1;var t=Bn(e)||pn(e)?wn:vn;return t.test(Fn(e))}function it(e,t){var r=e.__data__;return Vn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ka(e,t){var r=gn(e,t);return Yn(r)?r:void 0}function Vn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $n(e){return!!wa&&wa in e}function Fn(e){if(e!=null){try{return za.call(e)}catch{}try{return e+""}catch{}}return""}function qt(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(sn);var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],i=r.cache;if(i.has(n))return i.get(n);var c=e.apply(this,a);return r.cache=i.set(n,c),c};return r.cache=new(qt.Cache||re),r}qt.Cache=re;function Un(e,t){return e===t||e!==e&&t!==t}function Bn(e){var t=Ja(e)?xn.call(e):"";return t==un||t==dn}function Ja(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var Gn=qt;const Xa=qr(Gn);function Qa(e){return JSON.stringify(e)}function Hn(e){return typeof e=="string"}function qn(e,t,r){return r.indexOf(e)===t}function zn(e){return e.toLowerCase()===e}function Da(e){return e.indexOf(",")===-1?e:e.split(",")}function Mt(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],r=t===void 0?"":t;return Mt(r)}if(e.indexOf("@")!==-1){var a=e.split("@")[0],r=a===void 0?"":a;return Mt(r)}if(e.indexOf("-")===-1||!zn(e))return e;var n=e.split("-"),i=n[0],c=n[1],s=c===void 0?"":c;return"".concat(i,"-").concat(s.toUpperCase())}function Kn(e){var t=e===void 0?{}:e,r=t.useFallbackLocale,a=r===void 0?!0:r,n=t.fallbackLocale,i=n===void 0?"en-US":n,c=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],u=[],f=0,v=s;f<v.length;f++){var h=v[f];u=u.concat(Da(h))}var m=navigator.language,g=m&&Da(m);c=c.concat(u,g)}return a&&c.push(i),c.filter(Hn).map(Mt).filter(qn)}var Jn=Xa(Kn,Qa);function Xn(e){return Jn(e)[0]||null}var Za=Xa(Xn,Qa);function z(e,t,r){return function(n,i){i===void 0&&(i=r);var c=e(n)+i;return t(c)}}function Ae(e){return function(r){return new Date(e(r).getTime()-1)}}function Ne(e,t){return function(a){return[e(a),t(a)]}}function _(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function Z(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Le(e){var t=_(e),r=t+(-t+1)%100,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var Qn=z(_,Le,-100),er=z(_,Le,100),zt=Ae(er),Zn=z(_,zt,-100),tr=Ne(Le,zt);function ne(e){var t=_(e),r=t+(-t+1)%10,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var ar=z(_,ne,-10),Kt=z(_,ne,10),lt=Ae(Kt),rr=z(_,lt,-10),nr=Ne(ne,lt);function ye(e){var t=_(e),r=new Date;return r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}var ir=z(_,ye,-1),Jt=z(_,ye,1),ct=Ae(Jt),or=z(_,ct,-1),ei=Ne(ye,ct);function Xt(e,t){return function(a,n){n===void 0&&(n=t);var i=_(a),c=Z(a)+n,s=new Date;return s.setFullYear(i,c,1),s.setHours(0,0,0,0),e(s)}}function ie(e){var t=_(e),r=Z(e),a=new Date;return a.setFullYear(t,r,1),a.setHours(0,0,0,0),a}var lr=Xt(ie,-1),Qt=Xt(ie,1),Pe=Ae(Qt),cr=Xt(Pe,-1),ti=Ne(ie,Pe);function ai(e,t){return function(a,n){n===void 0&&(n=t);var i=_(a),c=Z(a),s=ot(a)+n,u=new Date;return u.setFullYear(i,c,s),u.setHours(0,0,0,0),e(u)}}function Me(e){var t=_(e),r=Z(e),a=ot(e),n=new Date;return n.setFullYear(t,r,a),n.setHours(0,0,0,0),n}var ri=ai(Me,1),Zt=Ae(ri),ni=Ne(Me,Zt);function sr(e){return ot(Pe(e))}var Se,D={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},ve={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},ii=(Se={},Se[D.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Se[D.HEBREW]=["he","he-IL"],Se[D.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Se),ea=[0,1,2,3,4,5,6],At=new Map;function oi(e){return function(r,a){var n=r||Za();At.has(n)||At.set(n,new Map);var i=At.get(n);return i.has(e)||i.set(e,new Intl.DateTimeFormat(n||void 0,e).format),i.get(e)(a)}}function li(e){var t=new Date(e);return new Date(t.setHours(12))}function oe(e){return function(t,r){return oi(e)(t,li(r))}}var ci={day:"numeric"},si={day:"numeric",month:"long",year:"numeric"},ui={month:"long"},di={month:"long",year:"numeric"},fi={weekday:"short"},vi={weekday:"long"},hi={year:"numeric"},mi=oe(ci),gi=oe(si),pi=oe(ui),ur=oe(di),yi=oe(fi),bi=oe(vi),st=oe(hi),xi=ea[0],wi=ea[5],_a=ea[6];function Te(e,t){t===void 0&&(t=D.ISO_8601);var r=e.getDay();switch(t){case D.ISO_8601:return(r+6)%7;case D.ISLAMIC:return(r+1)%7;case D.HEBREW:case D.GREGORY:return r;default:throw new Error("Unsupported calendar type.")}}function Di(e){var t=Le(e);return _(t)}function _i(e){var t=ne(e);return _(t)}function Wt(e,t){t===void 0&&(t=D.ISO_8601);var r=_(e),a=Z(e),n=e.getDate()-Te(e,t);return new Date(r,a,n)}function Oi(e,t){t===void 0&&(t=D.ISO_8601);var r=t===D.GREGORY?D.GREGORY:D.ISO_8601,a=Wt(e,t),n=_(e)+1,i,c;do i=new Date(n,0,r===D.ISO_8601?4:1),c=Wt(i,t),n-=1;while(e<c);return Math.round((a.getTime()-c.getTime())/(864e5*7))+1}function te(e,t){switch(e){case"century":return Le(t);case"decade":return ne(t);case"year":return ye(t);case"month":return ie(t);case"day":return Me(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Si(e,t){switch(e){case"century":return Qn(t);case"decade":return ar(t);case"year":return ir(t);case"month":return lr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function dr(e,t){switch(e){case"century":return er(t);case"decade":return Kt(t);case"year":return Jt(t);case"month":return Qt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ji(e,t){switch(e){case"decade":return ar(t,-100);case"year":return ir(t,-10);case"month":return lr(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function ki(e,t){switch(e){case"decade":return Kt(t,100);case"year":return Jt(t,10);case"month":return Qt(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function fr(e,t){switch(e){case"century":return zt(t);case"decade":return lt(t);case"year":return ct(t);case"month":return Pe(t);case"day":return Zt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"century":return Zn(t);case"decade":return rr(t);case"year":return or(t);case"month":return cr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return rr(t,-100);case"year":return or(t,-10);case"month":return cr(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Oa(e,t){switch(e){case"century":return tr(t);case"decade":return nr(t);case"year":return ei(t);case"month":return ti(t);case"day":return ni(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t,r){var a=[t,r].sort(function(n,i){return n.getTime()-i.getTime()});return[te(e,a[0]),fr(e,a[1])]}function vr(e,t,r){return t===void 0&&(t=st),r.map(function(a){return t(e,a)}).join(" – ")}function Ai(e,t,r){return vr(e,t,tr(r))}function hr(e,t,r){return vr(e,t,nr(r))}function Ni(e){return e.getDay()===new Date().getDay()}function mr(e,t){t===void 0&&(t=D.ISO_8601);var r=e.getDay();switch(t){case D.ISLAMIC:case D.HEBREW:return r===wi||r===_a;case D.ISO_8601:case D.GREGORY:return r===_a||r===xi;default:throw new Error("Unsupported calendar type.")}}var H="react-calendar__navigation";function Li(e){var t=e.activeStartDate,r=e.drillUp,a=e.formatMonthYear,n=a===void 0?ur:a,i=e.formatYear,c=i===void 0?st:i,s=e.locale,u=e.maxDate,f=e.minDate,v=e.navigationAriaLabel,h=v===void 0?"":v,m=e.navigationAriaLive,g=e.navigationLabel,b=e.next2AriaLabel,O=b===void 0?"":b,x=e.next2Label,w=x===void 0?"»":x,k=e.nextAriaLabel,N=k===void 0?"":k,L=e.nextLabel,ee=L===void 0?"›":L,Y=e.prev2AriaLabel,q=Y===void 0?"":Y,W=e.prev2Label,be=W===void 0?"«":W,B=e.prevAriaLabel,We=B===void 0?"":B,K=e.prevLabel,Ie=K===void 0?"‹":K,le=e.setActiveStartDate,ht=e.showDoubleView,I=e.view,mt=e.views,gt=mt.indexOf(I)>0,J=I!=="century",A=Si(I,t),X=J?ji(I,t):void 0,ce=dr(I,t),xe=J?ki(I,t):void 0,Re=function(){if(A.getFullYear()<0)return!0;var C=Ti(I,t);return f&&f>=C}(),pt=J&&function(){if(X.getFullYear()<0)return!0;var C=Ci(I,t);return f&&f>=C}(),Ye=u&&u<ce,we=J&&u&&u<xe;function De(){le(A,"prev")}function Q(){le(X,"prev2")}function yt(){le(ce,"next")}function bt(){le(xe,"next2")}function Ve(C){var _e=function(){switch(I){case"century":return Ai(s,c,C);case"decade":return hr(s,c,C);case"year":return c(s,C);case"month":return n(s,C);default:throw new Error("Invalid view: ".concat(I,"."))}}();return g?g({date:C,label:_e,locale:s||Za()||void 0,view:I}):_e}function xt(){var C="".concat(H,"__label");return d.createElement("button",{"aria-label":h,"aria-live":m,className:C,disabled:!gt,onClick:r,style:{flexGrow:1},type:"button"},d.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--from")},Ve(t)),ht?d.createElement(d.Fragment,null,d.createElement("span",{className:"".concat(C,"__divider")}," – "),d.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--to")},Ve(ce))):null)}return d.createElement("div",{className:H},be!==null&&J?d.createElement("button",{"aria-label":q,className:"".concat(H,"__arrow ").concat(H,"__prev2-button"),disabled:pt,onClick:Q,type:"button"},be):null,Ie!==null&&d.createElement("button",{"aria-label":We,className:"".concat(H,"__arrow ").concat(H,"__prev-button"),disabled:Re,onClick:De,type:"button"},Ie),xt(),ee!==null&&d.createElement("button",{"aria-label":N,className:"".concat(H,"__arrow ").concat(H,"__next-button"),disabled:Ye,onClick:yt,type:"button"},ee),w!==null&&J?d.createElement("button",{"aria-label":O,className:"".concat(H,"__arrow ").concat(H,"__next2-button"),disabled:we,onClick:bt,type:"button"},w):null)}var he=globalThis&&globalThis.__assign||function(){return he=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},he.apply(this,arguments)},Pi=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Sa(e){return"".concat(e,"%")}function ta(e){var t=e.children,r=e.className,a=e.count,n=e.direction,i=e.offset,c=e.style,s=e.wrap,u=Pi(e,["children","className","count","direction","offset","style","wrap"]);return d.createElement("div",he({className:r,style:he({display:"flex",flexDirection:n,flexWrap:s?"wrap":"nowrap"},c)},u),d.Children.map(t,function(f,v){var h=i&&v===0?Sa(100*i/a):null;return d.cloneElement(f,he(he({},f.props),{style:{flexBasis:Sa(100/a),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:h,marginInlineStart:h,marginInlineEnd:0}}))}))}var se;function Mi(e,t,r){return t&&t>e?t:r&&r<e?r:e}function Ce(e,t){return t[0]<=e&&t[1]>=e}function Wi(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function gr(e,t){return Ce(e[0],t)||Ce(e[1],t)}function ja(e,t,r){var a=gr(t,e),n=[];if(a){n.push(r);var i=Ce(e[0],t),c=Ce(e[1],t);i&&n.push("".concat(r,"Start")),c&&n.push("".concat(r,"End")),i&&c&&n.push("".concat(r,"BothEnds"))}return n}function Ii(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Ri(e){if(!e)throw new Error("args is required");var t=e.value,r=e.date,a=e.hover,n="react-calendar__tile",i=[n];if(!r)return i;var c=new Date,s=function(){if(Array.isArray(r))return r;var g=e.dateType;if(!g)throw new Error("dateType is required when date is not an array of two dates");return Oa(g,r)}();if(Ce(c,s)&&i.push("".concat(n,"--now")),!t||!Ii(t))return i;var u=function(){if(Array.isArray(t))return t;var g=e.valueType;if(!g)throw new Error("valueType is required when value is not an array of two dates");return Oa(g,t)}();Wi(u,s)?i.push("".concat(n,"--active")):gr(u,s)&&i.push("".concat(n,"--hasActive"));var f=ja(u,s,"".concat(n,"--range"));i.push.apply(i,f);var v=Array.isArray(t)?t:[t];if(a&&v.length===1){var h=a>u[0]?[u[0],a]:[a,u[0]],m=ja(h,s,"".concat(n,"--hover"));i.push.apply(i,m)}return i}var Yi=(se={},se[ve.ARABIC]=D.ISLAMIC,se[ve.HEBREW]=D.HEBREW,se[ve.ISO_8601]=D.ISO_8601,se[ve.US]=D.GREGORY,se);function Vi(e){return e!==void 0&&e in ve}var ka=!1;function ut(e){if(Vi(e)){var t=Yi[e];return Zr(ka,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),ka=!0,t}return e}function dt(e){for(var t=e.className,r=e.count,a=r===void 0?3:r,n=e.dateTransform,i=e.dateType,c=e.end,s=e.hover,u=e.offset,f=e.renderTile,v=e.start,h=e.step,m=h===void 0?1:h,g=e.value,b=e.valueType,O=[],x=v;x<=c;x+=m){var w=n(x);O.push(f({classes:Ri({date:w,dateType:i,hover:s,value:g,valueType:b}),date:w}))}return d.createElement(ta,{className:t,count:a,offset:u,wrap:!0},O)}function ft(e){var t=e.activeStartDate,r=e.children,a=e.classes,n=e.date,i=e.formatAbbr,c=e.locale,s=e.maxDate,u=e.maxDateTransform,f=e.minDate,v=e.minDateTransform,h=e.onClick,m=e.onMouseOver,g=e.style,b=e.tileClassName,O=e.tileContent,x=e.tileDisabled,w=e.view,k=E.useMemo(function(){var L={activeStartDate:t,date:n,view:w};return typeof b=="function"?b(L):b},[t,n,b,w]),N=E.useMemo(function(){var L={activeStartDate:t,date:n,view:w};return typeof O=="function"?O(L):O},[t,n,O,w]);return d.createElement("button",{className:rt(a,k),disabled:f&&v(f)>n||s&&u(s)<n||x&&x({activeStartDate:t,date:n,view:w}),onClick:h?function(L){return h(n,L)}:void 0,onFocus:m?function(){return m(n)}:void 0,onMouseOver:m?function(){return m(n)}:void 0,style:g,type:"button"},i?d.createElement("abbr",{"aria-label":i(c,n)},r):r,N)}var It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},It.apply(this,arguments)},$i=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ta=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},Fi="react-calendar__century-view__decades__decade";function Ui(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?st:a,i=$i(e,["classes","formatYear"]),c=i.date,s=i.locale;return d.createElement(ft,It({},i,{classes:Ta(Ta([],r,!0),[Fi],!1),maxDateTransform:lt,minDateTransform:ne,view:"century"}),hr(s,n,c))}var Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rt.apply(this,arguments)},Ca=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Bi(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Ca(e,["activeStartDate","hover","value","valueType"]),c=Di(t),s=c+99;return d.createElement(dt,{className:"react-calendar__century-view__decades",dateTransform:ne,dateType:"decade",end:s,hover:r,renderTile:function(u){var f=u.date,v=Ca(u,["date"]);return d.createElement(Ui,Rt({key:f.getTime()},i,v,{activeStartDate:t,date:f}))},start:c,step:10,value:a,valueType:n})}var Ea=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},Gi=Object.values(D),Hi=Object.values(ve),Yt=["century","decade","year","month"],pr=o.oneOf(Ea(Ea([],Gi,!0),Hi,!0)),Xe=o.oneOfType([o.string,o.arrayOf(o.string)]),aa=function(t,r,a){var n=t,i=r,c=n[i];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.maxDate;return s&&c>s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, minDate cannot be larger than maxDate.")):null},ra=function(t,r,a){var n=t,i=r,c=n[i];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.minDate;return s&&c<s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, maxDate cannot be smaller than minDate.")):null},qi=o.oneOfType([o.func,o.exact({current:o.any})]),zi=o.arrayOf(o.oneOfType([o.instanceOf(Date),o.oneOf([null])]).isRequired),Ki=o.oneOfType([o.instanceOf(Date),o.oneOf([null]),zi]);o.arrayOf(o.oneOf(Yt));var Qe=function(t,r,a){var n=t,i=r,c=n[i];return c!==void 0&&(typeof c!="string"||Yt.indexOf(c)===-1)?new Error("Invalid prop `".concat(r,"` of value `").concat(c,"` supplied to `").concat(a,"`, expected one of [").concat(Yt.map(function(s){return'"'.concat(s,'"')}).join(", "),"].")):null};Qe.isRequired=function(t,r,a,n,i){var c=t,s=r,u=c[s];return u?Qe(t,r,a):new Error("The prop `".concat(r,"` is marked as required in `").concat(a,"`, but its value is `").concat(u,"`."))};var Ji=function(e){return o.arrayOf(e)},vt={activeStartDate:o.instanceOf(Date).isRequired,hover:o.instanceOf(Date),locale:o.string,maxDate:ra,minDate:aa,onClick:o.func,onMouseOver:o.func,tileClassName:o.oneOfType([o.func,Xe]),tileContent:o.oneOfType([o.func,o.node]),value:Ki,valueType:o.oneOf(["century","decade","year","month","day"]).isRequired};o.instanceOf(Date).isRequired,o.arrayOf(o.string.isRequired).isRequired,o.instanceOf(Date).isRequired,o.string,o.func,o.func,o.objectOf(o.oneOfType([o.string,o.number])),o.oneOfType([o.func,Xe]),o.oneOfType([o.func,o.node]),o.func;var Ze=globalThis&&globalThis.__assign||function(){return Ze=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ze.apply(this,arguments)},yr=function(t){function r(){return d.createElement(Bi,Ze({},t))}return d.createElement("div",{className:"react-calendar__century-view"},r())};yr.propTypes=Ze({},vt);const Xi=yr;var Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vt.apply(this,arguments)},Qi=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Aa=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},Zi="react-calendar__decade-view__years__year";function eo(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?st:a,i=Qi(e,["classes","formatYear"]),c=i.date,s=i.locale;return d.createElement(ft,Vt({},i,{classes:Aa(Aa([],r,!0),[Zi],!1),maxDateTransform:ct,minDateTransform:ye,view:"decade"}),n(s,c))}var $t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$t.apply(this,arguments)},Na=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function to(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Na(e,["activeStartDate","hover","value","valueType"]),c=_i(t),s=c+9;return d.createElement(dt,{className:"react-calendar__decade-view__years",dateTransform:ye,dateType:"year",end:s,hover:r,renderTile:function(u){var f=u.date,v=Na(u,["date"]);return d.createElement(eo,$t({key:f.getTime()},i,v,{activeStartDate:t,date:f}))},start:c,value:a,valueType:n})}var et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},et.apply(this,arguments)},br=function(t){function r(){return d.createElement(to,et({},t))}return d.createElement("div",{className:"react-calendar__decade-view"},r())};br.propTypes=et({},vt);const ao=br;var Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ft.apply(this,arguments)},ro=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},La=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},no="react-calendar__year-view__months__month";function io(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatMonth,n=a===void 0?pi:a,i=e.formatMonthYear,c=i===void 0?ur:i,s=ro(e,["classes","formatMonth","formatMonthYear"]),u=s.date,f=s.locale;return d.createElement(ft,Ft({},s,{classes:La(La([],r,!0),[no],!1),formatAbbr:c,maxDateTransform:Pe,minDateTransform:ie,view:"year"}),n(f,u))}var Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ut.apply(this,arguments)},Pa=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function oo(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Pa(e,["activeStartDate","hover","value","valueType"]),c=0,s=11,u=_(t);return d.createElement(dt,{className:"react-calendar__year-view__months",dateTransform:function(f){var v=new Date;return v.setFullYear(u,f,1),ie(v)},dateType:"month",end:s,hover:r,renderTile:function(f){var v=f.date,h=Pa(f,["date"]);return d.createElement(io,Ut({key:v.getTime()},i,h,{activeStartDate:t,date:v}))},start:c,value:a,valueType:n})}var tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},tt.apply(this,arguments)},xr=function(t){function r(){return d.createElement(oo,tt({},t))}return d.createElement("div",{className:"react-calendar__year-view"},r())};xr.propTypes=tt({},vt);const lo=xr;var Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Bt.apply(this,arguments)},co=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},He="react-calendar__month-view__days__day";function so(e){var t=e.calendarType,r=e.classes,a=r===void 0?[]:r,n=e.currentMonthIndex,i=e.formatDay,c=i===void 0?mi:i,s=e.formatLongDate,u=s===void 0?gi:s,f=co(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),v=ut(t),h=f.date,m=f.locale,g=[];return a&&g.push.apply(g,a),He&&g.push(He),mr(h,v)&&g.push("".concat(He,"--weekend")),h.getMonth()!==n&&g.push("".concat(He,"--neighboringMonth")),d.createElement(ft,Bt({},f,{classes:g,formatAbbr:u,maxDateTransform:Zt,minDateTransform:Me,view:"month"}),c(m,h))}var Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Gt.apply(this,arguments)},Ma=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function uo(e){var t=e.activeStartDate,r=e.calendarType,a=e.hover,n=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,c=e.value,s=e.valueType,u=Ma(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),f=ut(r),v=_(t),h=Z(t),m=n||i,g=Te(t,f),b=m?0:g,O=(m?-g:0)+1,x=function(){if(n)return O+6*7-1;var w=sr(t);if(i){var k=new Date;k.setFullYear(v,h,w),k.setHours(0,0,0,0);var N=7-Te(k,f)-1;return w+N}return w}();return d.createElement(dt,{className:"react-calendar__month-view__days",count:7,dateTransform:function(w){var k=new Date;return k.setFullYear(v,h,w),Me(k)},dateType:"day",hover:a,end:x,renderTile:function(w){var k=w.date,N=Ma(w,["date"]);return d.createElement(so,Gt({key:k.getTime()},u,N,{activeStartDate:t,currentMonthIndex:h,date:k}))},offset:b,start:O,value:c,valueType:s})}var wr="react-calendar__month-view__weekdays",Nt="".concat(wr,"__weekday");function fo(e){for(var t=e.calendarType,r=e.formatShortWeekday,a=r===void 0?yi:r,n=e.formatWeekday,i=n===void 0?bi:n,c=e.locale,s=e.onMouseLeave,u=ut(t),f=new Date,v=ie(f),h=_(v),m=Z(v),g=[],b=1;b<=7;b+=1){var O=new Date(h,m,b-Te(v,u)),x=i(c,O);g.push(d.createElement("div",{key:b,className:rt(Nt,Ni(O)&&"".concat(Nt,"--current"),mr(O,u)&&"".concat(Nt,"--weekend"))},d.createElement("abbr",{"aria-label":x,title:x},a(c,O).replace(".",""))))}return d.createElement(ta,{className:wr,count:7,onFocus:s,onMouseOver:s},g)}var at=globalThis&&globalThis.__assign||function(){return at=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},at.apply(this,arguments)},Wa=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ia="react-calendar__tile";function vo(e){var t=e.onClickWeekNumber,r=e.weekNumber,a=d.createElement("span",null,r);if(t){var n=e.date,i=e.onClickWeekNumber,c=e.weekNumber,s=Wa(e,["date","onClickWeekNumber","weekNumber"]);return d.createElement("button",at({},s,{className:Ia,onClick:function(u){return i(c,n,u)},type:"button"}),a)}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Wa(e,["date","onClickWeekNumber","weekNumber"]);return d.createElement("div",at({},s,{className:Ia}),a)}}function ho(e){var t=e.activeStartDate,r=e.calendarType,a=e.onClickWeekNumber,n=e.onMouseLeave,i=e.showFixedNumberOfWeeks,c=ut(r),s=function(){if(i)return 6;var v=sr(t),h=Te(t,c),m=v-(7-h);return 1+Math.ceil(m/7)}(),u=function(){for(var v=_(t),h=Z(t),m=ot(t),g=[],b=0;b<s;b+=1)g.push(Wt(new Date(v,h,m+b*7),c));return g}(),f=u.map(function(v){return Oi(v,c)});return d.createElement(ta,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},f.map(function(v,h){var m=u[h];if(!m)throw new Error("date is not defined");return d.createElement(vo,{key:v,date:m,onClickWeekNumber:a,weekNumber:v})}))}var Ee=globalThis&&globalThis.__assign||function(){return Ee=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ee.apply(this,arguments)},mo=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function go(e){if(e)for(var t=0,r=Object.entries(ii);t<r.length;t++){var a=r[t],n=a[0],i=a[1];if(i.includes(e))return n}return D.ISO_8601}var Dr=function(t){var r=t.activeStartDate,a=t.locale,n=t.onMouseLeave,i=t.showFixedNumberOfWeeks,c=t.calendarType,s=c===void 0?go(a):c,u=t.formatShortWeekday,f=t.formatWeekday,v=t.onClickWeekNumber,h=t.showWeekNumbers,m=mo(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function g(){return d.createElement(fo,{calendarType:s,formatShortWeekday:u,formatWeekday:f,locale:a,onMouseLeave:n})}function b(){return h?d.createElement(ho,{activeStartDate:r,calendarType:s,onClickWeekNumber:v,onMouseLeave:n,showFixedNumberOfWeeks:i}):null}function O(){return d.createElement(uo,Ee({calendarType:s},m))}var x="react-calendar__month-view";return d.createElement("div",{className:rt(x,h?"".concat(x,"--weekNumbers"):"")},d.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},b(),d.createElement("div",{style:{flexGrow:1,width:"100%"}},g(),O())))};Dr.propTypes=Ee(Ee({},vt),{calendarType:pr,formatDay:o.func,formatLongDate:o.func,formatShortWeekday:o.func,formatWeekday:o.func,onClickWeekNumber:o.func,onMouseLeave:o.func,showFixedNumberOfWeeks:o.bool,showNeighboringMonth:o.bool,showWeekNumbers:o.bool});const po=Dr;var me=globalThis&&globalThis.__assign||function(){return me=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},me.apply(this,arguments)},qe="react-calendar",ge=["century","decade","year","month"],yo=["decade","year","month","day"],na=new Date;na.setFullYear(1,0,1);na.setHours(0,0,0,0);var bo=new Date(864e13);function je(e){return e instanceof Date?e:new Date(e)}function _r(e,t){return ge.slice(ge.indexOf(e),ge.indexOf(t)+1)}function xo(e,t,r){var a=_r(t,r);return a.indexOf(e)!==-1}function ia(e,t,r){return e&&xo(e,t,r)?e:r}function Or(e){var t=ge.indexOf(e);return yo[t]}function wo(e,t){var r=Array.isArray(e)?e[t]:e;if(!r)return null;var a=je(r);if(isNaN(a.getTime()))throw new Error("Invalid date: ".concat(e));return a}function Sr(e,t){var r=e.value,a=e.minDate,n=e.maxDate,i=e.maxDetail,c=wo(r,t);if(!c)return null;var s=Or(i),u=function(){switch(t){case 0:return te(s,c);case 1:return fr(s,c);default:throw new Error("Invalid index value: ".concat(t))}}();return Mi(u,a,n)}var oa=function(e){return Sr(e,0)},jr=function(e){return Sr(e,1)},Do=function(e){return[oa,jr].map(function(t){return t(e)})};function kr(e){var t=e.maxDate,r=e.maxDetail,a=e.minDate,n=e.minDetail,i=e.value,c=e.view,s=ia(c,n,r),u=oa({value:i,minDate:a,maxDate:t,maxDetail:r})||new Date;return te(s,u)}function _o(e){var t=e.activeStartDate,r=e.defaultActiveStartDate,a=e.defaultValue,n=e.defaultView,i=e.maxDate,c=e.maxDetail,s=e.minDate,u=e.minDetail,f=e.value,v=e.view,h=ia(v,u,c),m=t||r;return m?te(h,m):kr({maxDate:i,maxDetail:c,minDate:s,minDetail:u,value:f||a,view:v||n})}function Lt(e){return e&&(!Array.isArray(e)||e.length===1)}function ze(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Tr=E.forwardRef(function(t,r){var a=t.activeStartDate,n=t.allowPartialRange,i=t.calendarType,c=t.className,s=t.defaultActiveStartDate,u=t.defaultValue,f=t.defaultView,v=t.formatDay,h=t.formatLongDate,m=t.formatMonth,g=t.formatMonthYear,b=t.formatShortWeekday,O=t.formatWeekday,x=t.formatYear,w=t.goToRangeStartOnSelect,k=w===void 0?!0:w,N=t.inputRef,L=t.locale,ee=t.maxDate,Y=ee===void 0?bo:ee,q=t.maxDetail,W=q===void 0?"month":q,be=t.minDate,B=be===void 0?na:be,We=t.minDetail,K=We===void 0?"century":We,Ie=t.navigationAriaLabel,le=t.navigationAriaLive,ht=t.navigationLabel,I=t.next2AriaLabel,mt=t.next2Label,gt=t.nextAriaLabel,J=t.nextLabel,A=t.onActiveStartDateChange,X=t.onChange,ce=t.onClickDay,xe=t.onClickDecade,Re=t.onClickMonth,pt=t.onClickWeekNumber,Ye=t.onClickYear,we=t.onDrillDown,De=t.onDrillUp,Q=t.onViewChange,yt=t.prev2AriaLabel,bt=t.prev2Label,Ve=t.prevAriaLabel,xt=t.prevLabel,C=t.returnValue,_e=C===void 0?"start":C,V=t.selectRange,$e=t.showDoubleView,la=t.showFixedNumberOfWeeks,ca=t.showNavigation,Ar=ca===void 0?!0:ca,sa=t.showNeighboringMonth,Nr=sa===void 0?!0:sa,Lr=t.showWeekNumbers,Pr=t.tileClassName,Mr=t.tileContent,Wr=t.tileDisabled,wt=t.value,ua=t.view,da=E.useState(s),Ir=da[0],Fe=da[1],fa=E.useState(null),Rr=fa[0],va=fa[1],ha=E.useState(Array.isArray(u)?u.map(function(p){return p!==null?je(p):null}):u!=null?je(u):null),Dt=ha[0],Yr=ha[1],ma=E.useState(f),Vr=ma[0],ga=ma[1],P=a||Ir||_o({activeStartDate:a,defaultActiveStartDate:s,defaultValue:u,defaultView:f,maxDate:Y,maxDetail:W,minDate:B,minDetail:K,value:wt,view:ua}),M=function(){var p=function(){return V&&Lt(Dt)?Dt:wt!==void 0?wt:Dt}();return p?Array.isArray(p)?p.map(function(j){return j!==null?je(j):null}):p!==null?je(p):null:null}(),Ue=Or(W),S=ia(ua||Vr,K,W),G=_r(K,W),$r=V?Rr:null,_t=G.indexOf(S)<G.length-1,pa=G.indexOf(S)>0,ya=E.useCallback(function(p){var j=function(){switch(_e){case"start":return oa;case"end":return jr;case"range":return Do;default:throw new Error("Invalid returnValue.")}}();return j({maxDate:Y,maxDetail:W,minDate:B,value:p})},[Y,W,B,_e]),Ot=E.useCallback(function(p,j){Fe(p);var T={action:j,activeStartDate:p,value:M,view:S};A&&!ze(P,p)&&A(T)},[P,A,M,S]),Be=E.useCallback(function(p,j){var T=function(){switch(S){case"century":return xe;case"decade":return Ye;case"year":return Re;case"month":return ce;default:throw new Error("Invalid view: ".concat(S,"."))}}();T&&T(p,j)},[ce,xe,Re,Ye,S]),St=E.useCallback(function(p,j){if(_t){Be(p,j);var T=G[G.indexOf(S)+1];if(!T)throw new Error("Attempted to drill down from the lowest view.");Fe(p),ga(T);var $={action:"drillDown",activeStartDate:p,value:M,view:T};A&&!ze(P,p)&&A($),Q&&S!==T&&Q($),we&&we($)}},[P,_t,A,Be,we,Q,M,S,G]),jt=E.useCallback(function(){if(pa){var p=G[G.indexOf(S)-1];if(!p)throw new Error("Attempted to drill up from the highest view.");var j=te(p,P);Fe(j),ga(p);var T={action:"drillUp",activeStartDate:j,value:M,view:p};A&&!ze(P,j)&&A(T),Q&&S!==p&&Q(T),De&&De(T)}},[P,pa,A,De,Q,M,S,G]),kt=E.useCallback(function(p,j){var T=M;Be(p,j);var $=V&&!Lt(T),F;if(V)if($)F=te(Ue,p);else{if(!T)throw new Error("previousValue is required");if(Array.isArray(T))throw new Error("previousValue must not be an array");F=Ei(Ue,T,p)}else F=ya(p);var Ct=!V||$||k?kr({maxDate:Y,maxDetail:W,minDate:B,minDetail:K,value:F,view:S}):null;j.persist(),Fe(Ct),Yr(F);var Gr={action:"onChange",activeStartDate:Ct,value:F,view:S};if(A&&!ze(P,Ct)&&A(Gr),X)if(V){var Hr=Lt(F);if(!Hr)X(F||null,j);else if(n){if(Array.isArray(F))throw new Error("value must not be an array");X([F||null,null],j)}}else X(F||null,j)},[P,n,ya,k,Y,W,B,K,A,X,Be,V,M,Ue,S]);function Fr(p){va(p)}function Tt(){va(null)}E.useImperativeHandle(r,function(){return{activeStartDate:P,drillDown:St,drillUp:jt,onChange:kt,setActiveStartDate:Ot,value:M,view:S}},[P,St,jt,kt,Ot,M,S]);function ba(p){var j=p?dr(S,P):te(S,P),T=_t?St:kt,$={activeStartDate:j,hover:$r,locale:L,maxDate:Y,minDate:B,onClick:T,onMouseOver:V?Fr:void 0,tileClassName:Pr,tileContent:Mr,tileDisabled:Wr,value:M,valueType:Ue};switch(S){case"century":return d.createElement(Xi,me({formatYear:x},$));case"decade":return d.createElement(ao,me({formatYear:x},$));case"year":return d.createElement(lo,me({formatMonth:m,formatMonthYear:g},$));case"month":return d.createElement(po,me({calendarType:i,formatDay:v,formatLongDate:h,formatShortWeekday:b,formatWeekday:O,onClickWeekNumber:pt,onMouseLeave:V?Tt:void 0,showFixedNumberOfWeeks:typeof la<"u"?la:$e,showNeighboringMonth:Nr,showWeekNumbers:Lr},$));default:throw new Error("Invalid view: ".concat(S,"."))}}function Ur(){return Ar?d.createElement(Li,{activeStartDate:P,drillUp:jt,formatMonthYear:g,formatYear:x,locale:L,maxDate:Y,minDate:B,navigationAriaLabel:Ie,navigationAriaLive:le,navigationLabel:ht,next2AriaLabel:I,next2Label:mt,nextAriaLabel:gt,nextLabel:J,prev2AriaLabel:yt,prev2Label:bt,prevAriaLabel:Ve,prevLabel:xt,setActiveStartDate:Ot,showDoubleView:$e,view:S,views:G}):null}var Br=Array.isArray(M)?M:[M];return d.createElement("div",{className:rt(qe,V&&Br.length===1&&"".concat(qe,"--selectRange"),$e&&"".concat(qe,"--doubleView"),c),ref:N},Ur(),d.createElement("div",{className:"".concat(qe,"__viewContainer"),onBlur:V?Tt:void 0,onMouseLeave:V?Tt:void 0},ba(),$e?ba(!0):null))}),Ra=o.instanceOf(Date),Ya=o.oneOfType([o.string,o.instanceOf(Date)]),Va=o.oneOfType([Ya,Ji(Ya)]);Tr.propTypes={activeStartDate:Ra,allowPartialRange:o.bool,calendarType:pr,className:Xe,defaultActiveStartDate:Ra,defaultValue:Va,defaultView:Qe,formatDay:o.func,formatLongDate:o.func,formatMonth:o.func,formatMonthYear:o.func,formatShortWeekday:o.func,formatWeekday:o.func,formatYear:o.func,goToRangeStartOnSelect:o.bool,inputRef:qi,locale:o.string,maxDate:ra,maxDetail:o.oneOf(ge),minDate:aa,minDetail:o.oneOf(ge),navigationAriaLabel:o.string,navigationAriaLive:o.oneOf(["off","polite","assertive"]),navigationLabel:o.func,next2AriaLabel:o.string,next2Label:o.node,nextAriaLabel:o.string,nextLabel:o.node,onActiveStartDateChange:o.func,onChange:o.func,onClickDay:o.func,onClickDecade:o.func,onClickMonth:o.func,onClickWeekNumber:o.func,onClickYear:o.func,onDrillDown:o.func,onDrillUp:o.func,onViewChange:o.func,prev2AriaLabel:o.string,prev2Label:o.node,prevAriaLabel:o.string,prevLabel:o.node,returnValue:o.oneOf(["start","end","range"]),selectRange:o.bool,showDoubleView:o.bool,showFixedNumberOfWeeks:o.bool,showNavigation:o.bool,showNeighboringMonth:o.bool,showWeekNumbers:o.bool,tileClassName:o.oneOfType([o.func,Xe]),tileContent:o.oneOfType([o.func,o.node]),tileDisabled:o.func,value:Va,view:Qe};const Oo=Tr,So=y(en)`
  label {
    position: relative;
  }
  @media screen and (min-width: 1440px) {
    padding-right: 64px;
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    width: 760px;
  }
`,ue=y(R)`
  width: 100%;
  padding: 14px;
  background-color: transparent;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);
  margin-bottom: 8px;

  &[name='email'] {
    color: rgba(239, 237, 232, 0.6);
  }
  &[name='birthday'] {
    z-index: -1;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    &[name='email'] {
      width: calc(50% - 7px);
    }
    &[name='name'] {
      width: calc(50% - 7px);
      margin-right: 14px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 14px;
    }
  }
`,Ke=y.label`
  width: calc(50% - 7px);
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 10.5px);
  }
`,de=y.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;

  &[id='calendar'] {
    color: transparent;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
  }
`,jo=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 12px;
`,ko=y(Oo)`
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus,
  .react-calendar__navigation button:disabled {
    background-color: transparent;
  }

  .react-calendar__tile--hasActive {
    background: black;
    border-radius: 50%;
  }

  .react-calendar__century-view__decades__decade {
    flex: auto !important;
  }
  &.react-calendar {
    width: 215px;
    border-radius: 8px;
    background: #ef8964;
    padding: 13px;
    z-index: 1;
  }

  .react-calendar__navigation {
    height: auto;
    padding-bottom: 14px;
    margin: 0;
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-calendar__navigation button {
    min-width: 0;
  }

  .react-calendar__navigation__label__labelText--from {
    color: #efede8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  .react-calendar__navigation__label {
    padding: 0;
    height: max-content;
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__tile {
    color: #efede8;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    padding: 5px 0 5px 0;
    position: relative;
  }

  .react-calendar__tile > abbr {
    position: relative;
    z-index: 3;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(239, 237, 232, 0.2);
  }

  .react-calendar__navigation__next-button {
    height: fit-content;
  }
  .react-calendar__navigation__prev-button {
    height: fit-content;
  }

  .react-calendar__navigation__arrow {
    color: white;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    text-transform: none;
    color: rgba(239, 237, 232, 0.5);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  .react-calendar__tile--active::before {
    content: '';
    position: absolute;
    z-index: 2;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .react-calendar__tile--now {
    background-color: transparent;
  }

  .react-calendar__tile--active {
    background-color: transparent;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: transparent;
  }
`,To=y.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  height: ${e=>e["data-isopen"]==="close"?"0px":"260px"};
  overflow: hidden;
  transition: height 0.5s ease;
`,Co=y.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translate(0, -15%);
  stroke: rgba(239, 237, 232, 1);
`,Eo=y.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;

  :has(> [value='4']) {
    margin-right: 10px; /* Змініть значення margin-right на те, яке вам потрібно */
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 32px;

    label:not(:first-child) {
      margin-left: 8px;
    }
    label:nth-child(4) {
      margin-right: 32px;
    }
  }
`,U=y.label`
  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  font-size: 17px;
  user-select: none;

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 2px solid #636366;
    border-radius: 50%;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  input:checked ~ span {
    border-color: #ef8964;
  }

  input:checked ~ span:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #ef8964;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    color: #efede8;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }

  &:has([name='activity']) span {
    top: 50%;
    transform: translate(0, -50%);
  }

  @media screen and (min-width: 768px) {
    span {
      height: 20px;
      width: 20px;
    }

    input:checked ~ span:before {
      width: 12px;
      height: 12px;
    }
  }
`,Ao=y.div`
  margin-bottom: 40px;
  label {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,No=y.button`
  width: 114px;
  height: 42px;
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 66px;

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }
  &:hover {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
    width: 144px;
    height: 56px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`,Je=y(tn)`
  position: absolute;
  color: red;

  &[id='name'] {
    top: 58%;
    font-size: 14px;
    transform: translate(0, -50%);
    line-height: 0;
    left: 35px;
  }
`;const Lo=an().shape({name:xa().required("Введіть імя користувача").min(2,"Ім'я повинно містити принаймні 2 символи"),height:Oe().required("Введіть висоту користувача"),currentWeight:Oe().required("Введіть поточну вагу користувача"),desiredWeight:Oe().required("Введіть бажану вагу користувача"),birthday:rn().required("Введіть дату народження користувача"),blood:Oe().required("Виберіть групу крові користувача"),sex:xa().required("Виберіть стать користувача"),levelActivity:Oe().required("Виберіть рівень активності користувача")}),Po=e=>["Su","Mo","Tu","We","Th","Fr","Sa"][e.getDay()],Cr=({handleSubmit:e,dataUser:t,selectedAvatar:r})=>{const[a,n]=E.useState(!1),{isLoadingUpdate:i}=Ua(Kr),{name:c,email:s,bodyData:u}=t,{height:f,birthday:v,blood:h,currentWeight:m,desiredWeight:g,levelActivity:b,sex:O}=u,x={name:c,height:f,currentWeight:m,desiredWeight:g,blood:String(h),sex:O,levelActivity:String(b),birthday:new Date(v),avatarUrl:r},w=x.avatarUrl!==null&&typeof x.avatarUrl!="string",k=()=>{n(!a)};return l.jsx(nn,{initialValues:x,onSubmit:e,validationSchema:Lo,children:({values:N,setFieldValue:L,dirty:ee})=>{const Y=w||ee;return l.jsxs(So,{children:[l.jsx(de,{children:"Basic info"}),l.jsxs("label",{children:[l.jsx(ue,{type:"text",name:"name"}),l.jsx(Je,{id:"name",name:"name",component:"div",className:"error"})]}),l.jsx("label",{children:l.jsx(ue,{disabled:!0,value:s,type:"text",name:"email"})}),l.jsxs(jo,{children:[l.jsxs(Ke,{children:[l.jsx(de,{children:"Height"}),l.jsx(ue,{type:"text",name:"height"}),l.jsx(Je,{id:"heigth",name:"heigth",component:"div",className:"error"})]}),l.jsxs(Ke,{children:[l.jsx(de,{children:"Current Weight"}),l.jsx(ue,{type:"text",name:"currentWeight"}),l.jsx(Je,{id:"currentWeight",name:"currentWeight",component:"div",className:"error"})]}),l.jsxs(Ke,{children:[l.jsx(de,{children:"Desired Weight"}),l.jsx(ue,{type:"text",name:"desiredWeight"}),l.jsx(Je,{id:"desiredWeight",name:"desiredWeight",component:"div",className:"error"})]}),l.jsxs(Ke,{onClick:k,children:[l.jsx(de,{id:"calendarTitle",children:"Calendar"}),l.jsx(Co,{children:l.jsx("use",{href:fe+"#icon-calendar"})}),l.jsx(ue,{disabled:!0,onChange:q=>L("birthday",q),value:`${N.birthday.getDate()}.${N.birthday.getMonth()+1}.${N.birthday.getFullYear()}`,type:"text",name:"birthday"})]}),l.jsx(To,{"data-isopen":`${a?"open":"close"}`,children:l.jsx(R,{name:"birthday",children:()=>l.jsx(ko,{locale:"en-US",onChange:q=>L("birthday",q),value:N.birthday,formatShortWeekday:(q,W)=>Po(W),onClickDay:k})})})]}),l.jsx(de,{children:"Blood"}),l.jsxs(Eo,{children:[l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"blood",value:"1"})," ",l.jsx("p",{children:"1"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"blood",value:"2"}),l.jsx("p",{children:"2"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"blood",value:"3"}),l.jsx("p",{children:"3"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"blood",value:"4"}),l.jsx("p",{children:"4"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"sex",value:"male"}),l.jsx("p",{children:"Male"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(R,{type:"radio",name:"sex",value:"female"}),l.jsx("p",{children:"Female"}),l.jsx("span",{})]})]}),l.jsxs(Ao,{children:[l.jsxs(U,{children:[l.jsx("p",{children:"Sedentary lifestyle (little or no physical activity)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"1"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Light activity (light exercises/sports 1-3 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"2"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"3"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Very active (intense exercises/sports 6-7 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"4"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Extremely active (very strenuous exercises/sports and physical work)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"5"}),l.jsx("span",{})]})]}),l.jsx(No,{disabled:!Y,id:"submitButton",type:"submit",children:i?"Loading":"Save"})]})}})};Cr.propTypes={selectedAvatar:zr.any,dataUser:o.object.isRequired,handleSubmit:o.func.isRequired};const Mo=y.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid var(--bright-accent-color);
  background-color: rgba(48, 48, 48, 0.3);
  margin-bottom: 31px;
  contain: content;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Wo=y.div`
  position: relative;
`,Io=y.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ro=y.button`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 50%;
  top: 77px;
  padding: 0;
  border: none;
  transform: translate(-50%, 0);
  background-color: transparent;
  z-index: 1;
  overflow: hidden;

  & input {
    position: absolute;
    right: -50px;
    color: transparent;
    cursor: pointer;
    height: 24px;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    top: 133px;
    width: 32px;
    height: 32px;
    & svg {
      width: 32px;
      height: 32px;
    }
    & input {
      height: 34px;
    }
  }
`,Yo=y.p`
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 116.667% */
    margin-bottom: 8px;
  }
`,Vo=y.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`,$o=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  & > :first-child {
    margin-right: 14px;
  }
`,$a=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 214px;
  height: 96px;
  padding: 13px;
  background-color: var(--bright-accent-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 211px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Fa=y.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`,Fo=y.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 41px;

  img {
    margin-top: -5px;
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    max-width: 439px;
    margin-left: auto;
    margin-right: auto;
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Uo=y.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 18px;
`,Bo=y.svg`
  width: 61px;
  height: 62px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;y.svg`
  width: 24px;
  height: 24px;
`;y.div`
  width: 24px;
  height: 24px;
`;const Pt=y.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`,Go="/GachiClub/assets/tabler_exclamation-mark-2580bad6.svg",Ho={display:"flex",justifyContent:"center",alignItems:"center",margin:"0",padding:"0",gap:"8px",color:"#efede8",backgroundColor:"transparent",border:"none",marginLeft:"auto !important",marginBottom:"36px"},Er=({dataUser:e,changeAvatar:t,selectedAvatar:r})=>{const{name:a,dailyRateCalories:n,dailySportMin:i,avatarUrl:c}=e,s=u=>{const f=u.target.files[0];t(f)};return l.jsxs("div",{children:[l.jsxs(Wo,{children:[l.jsx(Mo,{children:r===null?l.jsx(Bo,{children:l.jsx("use",{xlinkHref:`${fe}#icon-user`})}):l.jsx(Io,{src:typeof r!="object"?c:URL.createObjectURL(r),alt:"scelet user"})}),l.jsxs(Ro,{children:[l.jsx("input",{type:"file",id:"sendAvatar",accept:"image/*",onChange:s}),l.jsx("svg",{viewBox:"0 0 32 32",children:l.jsx("use",{xlinkHref:`${fe}#icon-addPhoto`})})]})]}),l.jsx(Yo,{children:a}),l.jsx(Vo,{children:"User"}),l.jsxs($o,{children:[l.jsxs($a,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx(Pt,{children:l.jsx("use",{xlinkHref:`${fe}#icon-fork`})}),l.jsx(Fa,{children:"Daily calorie intake"})]}),l.jsx("p",{children:n||2200})]}),l.jsxs($a,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx(Pt,{children:l.jsx("use",{xlinkHref:`${fe}#icon-dumbbell `})}),l.jsx(Fa,{children:"Daily norm of sports"})]}),l.jsxs("p",{children:[i||110," min"]})]})]}),l.jsxs(Fo,{children:[l.jsx(Pt,{children:l.jsx("use",{xlinkHref:`${fe}#icon-mark`})}),l.jsx("img",{src:Go,alt:"exclamation mark"}),l.jsx(Uo,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),l.jsx(Jr,{customStyles:Ho})]})};Er.propTypes={dataUser:o.object.isRequired,changeAvatar:o.func,selectedAvatar:o.oneOfType([o.object,o.string])};const Jo=()=>{const e=Ua(c=>c.auth.bodyData),[t,r]=E.useState(e.avatarUrl),a=Xr();E.useEffect(()=>{r(e.avatarUrl)},[e.avatarUrl,a]);const n=c=>`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`,i=c=>{const s=new FormData;t!==null&&typeof t!="string"&&s.append("avatar",t,t.name);for(const u in c){if(u==="birthday"){s.append(u,n(new Date(c[u])));continue}u!=="avatarUrl"&&s.append(u,c[u])}s.birthday=n(new Date(c.birthday)),c.avatarUrl=null,a(Qr(s))};return l.jsxs(on,{children:[l.jsx(ln,{children:"Profile Settings"}),l.jsxs(cn,{children:[l.jsx(Er,{dataUser:e,selectedAvatar:t,changeAvatar:r}),l.jsx(Cr,{dataUser:e,handleSubmit:i,selectedAvatar:t})]})]})};export{Jo as default};
