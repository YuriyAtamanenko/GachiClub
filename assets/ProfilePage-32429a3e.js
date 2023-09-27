import{g as zr,K as Be,R as v,d as E,P as o,M as Kr,b as Je,O as Ba,j as l,I as Pt,S as Jr,T as Xr,u as Qr,U as Zr,V as en}from"./index-f763d59d.js";import{s as y}from"./styled-components.browser.esm-b9c4bdfe.js";import{w as tn,F as an,a as R,E as rn,c as nn,b as xa,e as _e,f as on,d as ln}from"./index.esm-4599f1c8.js";const cn=y.div`
  padding-top: 40px;
`,sn=y.h1`
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
`,un=y.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;function Ga(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ga(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function rt(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=Ga(e))&&(a&&(a+=" "),a+=t);return a}var dn="Expected a function",Ha="__lodash_hash_undefined__",fn="[object Function]",vn="[object GeneratorFunction]",hn=/[\\^$.*+?()[\]{}|]/g,mn=/^\[object .+?Constructor\]$/,gn=typeof Be=="object"&&Be&&Be.Object===Object&&Be,pn=typeof self=="object"&&self&&self.Object===Object&&self,qa=gn||pn||Function("return this")();function yn(e,t){return e==null?void 0:e[t]}function bn(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var xn=Array.prototype,wn=Function.prototype,za=Object.prototype,Et=qa["__core-js_shared__"],wa=function(){var e=/[^.]+$/.exec(Et&&Et.keys&&Et.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ka=wn.toString,Ht=za.hasOwnProperty,Dn=za.toString,_n=RegExp("^"+Ka.call(Ht).replace(hn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),On=xn.splice,Sn=Ja(qa,"Map"),je=Ja(Object,"create");function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function jn(){this.__data__=je?je(null):{}}function Tn(e){return this.has(e)&&delete this.__data__[e]}function kn(e){var t=this.__data__;if(je){var r=t[e];return r===Ha?void 0:r}return Ht.call(t,e)?t[e]:void 0}function Cn(e){var t=this.__data__;return je?t[e]!==void 0:Ht.call(t,e)}function En(e,t){var r=this.__data__;return r[e]=je&&t===void 0?Ha:t,this}ae.prototype.clear=jn;ae.prototype.delete=Tn;ae.prototype.get=kn;ae.prototype.has=Cn;ae.prototype.set=En;function pe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function An(){this.__data__=[]}function Nn(e){var t=this.__data__,r=nt(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():On.call(t,r,1),!0}function Ln(e){var t=this.__data__,r=nt(t,e);return r<0?void 0:t[r][1]}function Pn(e){return nt(this.__data__,e)>-1}function Mn(e,t){var r=this.__data__,a=nt(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}pe.prototype.clear=An;pe.prototype.delete=Nn;pe.prototype.get=Ln;pe.prototype.has=Pn;pe.prototype.set=Mn;function re(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Wn(){this.__data__={hash:new ae,map:new(Sn||pe),string:new ae}}function In(e){return it(this,e).delete(e)}function Rn(e){return it(this,e).get(e)}function Yn(e){return it(this,e).has(e)}function Vn(e,t){return it(this,e).set(e,t),this}re.prototype.clear=Wn;re.prototype.delete=In;re.prototype.get=Rn;re.prototype.has=Yn;re.prototype.set=Vn;function nt(e,t){for(var r=e.length;r--;)if(Gn(e[r][0],t))return r;return-1}function Fn(e){if(!Xa(e)||Un(e))return!1;var t=Hn(e)||bn(e)?_n:mn;return t.test(Bn(e))}function it(e,t){var r=e.__data__;return $n(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ja(e,t){var r=yn(e,t);return Fn(r)?r:void 0}function $n(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Un(e){return!!wa&&wa in e}function Bn(e){if(e!=null){try{return Ka.call(e)}catch{}try{return e+""}catch{}}return""}function qt(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(dn);var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],i=r.cache;if(i.has(n))return i.get(n);var c=e.apply(this,a);return r.cache=i.set(n,c),c};return r.cache=new(qt.Cache||re),r}qt.Cache=re;function Gn(e,t){return e===t||e!==e&&t!==t}function Hn(e){var t=Xa(e)?Dn.call(e):"";return t==fn||t==vn}function Xa(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var qn=qt;const Qa=zr(qn);function Za(e){return JSON.stringify(e)}function zn(e){return typeof e=="string"}function Kn(e,t,r){return r.indexOf(e)===t}function Jn(e){return e.toLowerCase()===e}function Da(e){return e.indexOf(",")===-1?e:e.split(",")}function Mt(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],r=t===void 0?"":t;return Mt(r)}if(e.indexOf("@")!==-1){var a=e.split("@")[0],r=a===void 0?"":a;return Mt(r)}if(e.indexOf("-")===-1||!Jn(e))return e;var n=e.split("-"),i=n[0],c=n[1],s=c===void 0?"":c;return"".concat(i,"-").concat(s.toUpperCase())}function Xn(e){var t=e===void 0?{}:e,r=t.useFallbackLocale,a=r===void 0?!0:r,n=t.fallbackLocale,i=n===void 0?"en-US":n,c=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],u=[],d=0,f=s;d<f.length;d++){var h=f[d];u=u.concat(Da(h))}var m=navigator.language,g=m&&Da(m);c=c.concat(u,g)}return a&&c.push(i),c.filter(zn).map(Mt).filter(Kn)}var Qn=Qa(Xn,Za);function Zn(e){return Qn(e)[0]||null}var er=Qa(Zn,Za);function K(e,t,r){return function(n,i){i===void 0&&(i=r);var c=e(n)+i;return t(c)}}function Ee(e){return function(r){return new Date(e(r).getTime()-1)}}function Ae(e,t){return function(a){return[e(a),t(a)]}}function D(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function ee(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function ot(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Ne(e){var t=D(e),r=t+(-t+1)%100,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var ei=K(D,Ne,-100),tr=K(D,Ne,100),zt=Ee(tr),ti=K(D,zt,-100),ar=Ae(Ne,zt);function ne(e){var t=D(e),r=t+(-t+1)%10,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var rr=K(D,ne,-10),Kt=K(D,ne,10),lt=Ee(Kt),nr=K(D,lt,-10),ir=Ae(ne,lt);function ye(e){var t=D(e),r=new Date;return r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}var or=K(D,ye,-1),Jt=K(D,ye,1),ct=Ee(Jt),lr=K(D,ct,-1),ai=Ae(ye,ct);function Xt(e,t){return function(a,n){n===void 0&&(n=t);var i=D(a),c=ee(a)+n,s=new Date;return s.setFullYear(i,c,1),s.setHours(0,0,0,0),e(s)}}function ie(e){var t=D(e),r=ee(e),a=new Date;return a.setFullYear(t,r,1),a.setHours(0,0,0,0),a}var cr=Xt(ie,-1),Qt=Xt(ie,1),Le=Ee(Qt),sr=Xt(Le,-1),ri=Ae(ie,Le);function ni(e,t){return function(a,n){n===void 0&&(n=t);var i=D(a),c=ee(a),s=ot(a)+n,u=new Date;return u.setFullYear(i,c,s),u.setHours(0,0,0,0),e(u)}}function Pe(e){var t=D(e),r=ee(e),a=ot(e),n=new Date;return n.setFullYear(t,r,a),n.setHours(0,0,0,0),n}var ii=ni(Pe,1),Zt=Ee(ii),oi=Ae(Pe,Zt);function ur(e){return ot(Le(e))}var Oe,w={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},ve={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},li=(Oe={},Oe[w.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],Oe[w.HEBREW]=["he","he-IL"],Oe[w.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],Oe),ea=[0,1,2,3,4,5,6],At=new Map;function ci(e){return function(r,a){var n=r||er();At.has(n)||At.set(n,new Map);var i=At.get(n);return i.has(e)||i.set(e,new Intl.DateTimeFormat(n||void 0,e).format),i.get(e)(a)}}function si(e){var t=new Date(e);return new Date(t.setHours(12))}function oe(e){return function(t,r){return ci(e)(t,si(r))}}var ui={day:"numeric"},di={day:"numeric",month:"long",year:"numeric"},fi={month:"long"},vi={month:"long",year:"numeric"},hi={weekday:"short"},mi={weekday:"long"},gi={year:"numeric"},pi=oe(ui),yi=oe(di),bi=oe(fi),dr=oe(vi),xi=oe(hi),wi=oe(mi),st=oe(gi),Di=ea[0],_i=ea[5],_a=ea[6];function Te(e,t){t===void 0&&(t=w.ISO_8601);var r=e.getDay();switch(t){case w.ISO_8601:return(r+6)%7;case w.ISLAMIC:return(r+1)%7;case w.HEBREW:case w.GREGORY:return r;default:throw new Error("Unsupported calendar type.")}}function Oi(e){var t=Ne(e);return D(t)}function Si(e){var t=ne(e);return D(t)}function Wt(e,t){t===void 0&&(t=w.ISO_8601);var r=D(e),a=ee(e),n=e.getDate()-Te(e,t);return new Date(r,a,n)}function ji(e,t){t===void 0&&(t=w.ISO_8601);var r=t===w.GREGORY?w.GREGORY:w.ISO_8601,a=Wt(e,t),n=D(e)+1,i,c;do i=new Date(n,0,r===w.ISO_8601?4:1),c=Wt(i,t),n-=1;while(e<c);return Math.round((a.getTime()-c.getTime())/(864e5*7))+1}function te(e,t){switch(e){case"century":return Ne(t);case"decade":return ne(t);case"year":return ye(t);case"month":return ie(t);case"day":return Pe(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ti(e,t){switch(e){case"century":return ei(t);case"decade":return rr(t);case"year":return or(t);case"month":return cr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function fr(e,t){switch(e){case"century":return tr(t);case"decade":return Kt(t);case"year":return Jt(t);case"month":return Qt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ki(e,t){switch(e){case"decade":return rr(t,-100);case"year":return or(t,-10);case"month":return cr(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ci(e,t){switch(e){case"decade":return Kt(t,100);case"year":return Jt(t,10);case"month":return Qt(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function vr(e,t){switch(e){case"century":return zt(t);case"decade":return lt(t);case"year":return ct(t);case"month":return Le(t);case"day":return Zt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ei(e,t){switch(e){case"century":return ti(t);case"decade":return nr(t);case"year":return lr(t);case"month":return sr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ai(e,t){switch(e){case"decade":return nr(t,-100);case"year":return lr(t,-10);case"month":return sr(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Oa(e,t){switch(e){case"century":return ar(t);case"decade":return ir(t);case"year":return ai(t);case"month":return ri(t);case"day":return oi(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ni(e,t,r){var a=[t,r].sort(function(n,i){return n.getTime()-i.getTime()});return[te(e,a[0]),vr(e,a[1])]}function hr(e,t,r){return t===void 0&&(t=st),r.map(function(a){return t(e,a)}).join(" – ")}function Li(e,t,r){return hr(e,t,ar(r))}function mr(e,t,r){return hr(e,t,ir(r))}function Pi(e){return e.getDay()===new Date().getDay()}function gr(e,t){t===void 0&&(t=w.ISO_8601);var r=e.getDay();switch(t){case w.ISLAMIC:case w.HEBREW:return r===_i||r===_a;case w.ISO_8601:case w.GREGORY:return r===_a||r===Di;default:throw new Error("Unsupported calendar type.")}}var z="react-calendar__navigation";function Mi(e){var t=e.activeStartDate,r=e.drillUp,a=e.formatMonthYear,n=a===void 0?dr:a,i=e.formatYear,c=i===void 0?st:i,s=e.locale,u=e.maxDate,d=e.minDate,f=e.navigationAriaLabel,h=f===void 0?"":f,m=e.navigationAriaLive,g=e.navigationLabel,x=e.next2AriaLabel,_=x===void 0?"":x,O=e.next2Label,b=O===void 0?"»":O,k=e.nextAriaLabel,Y=k===void 0?"":k,M=e.nextLabel,V=M===void 0?"›":M,N=e.prev2AriaLabel,le=N===void 0?"":N,W=e.prev2Label,H=W===void 0?"«":W,F=e.prevAriaLabel,Me=F===void 0?"":F,J=e.prevLabel,We=J===void 0?"‹":J,ce=e.setActiveStartDate,ht=e.showDoubleView,I=e.view,mt=e.views,gt=mt.indexOf(I)>0,X=I!=="century",A=Ti(I,t),Q=X?ki(I,t):void 0,se=fr(I,t),be=X?Ci(I,t):void 0,Ie=function(){if(A.getFullYear()<0)return!0;var C=Ei(I,t);return d&&d>=C}(),pt=X&&function(){if(Q.getFullYear()<0)return!0;var C=Ai(I,t);return d&&d>=C}(),Re=u&&u<se,xe=X&&u&&u<be;function we(){ce(A,"prev")}function Z(){ce(Q,"prev2")}function yt(){ce(se,"next")}function bt(){ce(be,"next2")}function Ye(C){var De=function(){switch(I){case"century":return Li(s,c,C);case"decade":return mr(s,c,C);case"year":return c(s,C);case"month":return n(s,C);default:throw new Error("Invalid view: ".concat(I,"."))}}();return g?g({date:C,label:De,locale:s||er()||void 0,view:I}):De}function xt(){var C="".concat(z,"__label");return v.createElement("button",{"aria-label":h,"aria-live":m,className:C,disabled:!gt,onClick:r,style:{flexGrow:1},type:"button"},v.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--from")},Ye(t)),ht?v.createElement(v.Fragment,null,v.createElement("span",{className:"".concat(C,"__divider")}," – "),v.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--to")},Ye(se))):null)}return v.createElement("div",{className:z},H!==null&&X?v.createElement("button",{"aria-label":le,className:"".concat(z,"__arrow ").concat(z,"__prev2-button"),disabled:pt,onClick:Z,type:"button"},H):null,We!==null&&v.createElement("button",{"aria-label":Me,className:"".concat(z,"__arrow ").concat(z,"__prev-button"),disabled:Ie,onClick:we,type:"button"},We),xt(),V!==null&&v.createElement("button",{"aria-label":Y,className:"".concat(z,"__arrow ").concat(z,"__next-button"),disabled:Re,onClick:yt,type:"button"},V),b!==null&&X?v.createElement("button",{"aria-label":_,className:"".concat(z,"__arrow ").concat(z,"__next2-button"),disabled:xe,onClick:bt,type:"button"},b):null)}var he=globalThis&&globalThis.__assign||function(){return he=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},he.apply(this,arguments)},Wi=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Sa(e){return"".concat(e,"%")}function ta(e){var t=e.children,r=e.className,a=e.count,n=e.direction,i=e.offset,c=e.style,s=e.wrap,u=Wi(e,["children","className","count","direction","offset","style","wrap"]);return v.createElement("div",he({className:r,style:he({display:"flex",flexDirection:n,flexWrap:s?"wrap":"nowrap"},c)},u),v.Children.map(t,function(d,f){var h=i&&f===0?Sa(100*i/a):null;return v.cloneElement(d,he(he({},d.props),{style:{flexBasis:Sa(100/a),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:h,marginInlineStart:h,marginInlineEnd:0}}))}))}var ue;function Ii(e,t,r){return t&&t>e?t:r&&r<e?r:e}function ke(e,t){return t[0]<=e&&t[1]>=e}function Ri(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function pr(e,t){return ke(e[0],t)||ke(e[1],t)}function ja(e,t,r){var a=pr(t,e),n=[];if(a){n.push(r);var i=ke(e[0],t),c=ke(e[1],t);i&&n.push("".concat(r,"Start")),c&&n.push("".concat(r,"End")),i&&c&&n.push("".concat(r,"BothEnds"))}return n}function Yi(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Vi(e){if(!e)throw new Error("args is required");var t=e.value,r=e.date,a=e.hover,n="react-calendar__tile",i=[n];if(!r)return i;var c=new Date,s=function(){if(Array.isArray(r))return r;var g=e.dateType;if(!g)throw new Error("dateType is required when date is not an array of two dates");return Oa(g,r)}();if(ke(c,s)&&i.push("".concat(n,"--now")),!t||!Yi(t))return i;var u=function(){if(Array.isArray(t))return t;var g=e.valueType;if(!g)throw new Error("valueType is required when value is not an array of two dates");return Oa(g,t)}();Ri(u,s)?i.push("".concat(n,"--active")):pr(u,s)&&i.push("".concat(n,"--hasActive"));var d=ja(u,s,"".concat(n,"--range"));i.push.apply(i,d);var f=Array.isArray(t)?t:[t];if(a&&f.length===1){var h=a>u[0]?[u[0],a]:[a,u[0]],m=ja(h,s,"".concat(n,"--hover"));i.push.apply(i,m)}return i}var Fi=(ue={},ue[ve.ARABIC]=w.ISLAMIC,ue[ve.HEBREW]=w.HEBREW,ue[ve.ISO_8601]=w.ISO_8601,ue[ve.US]=w.GREGORY,ue);function $i(e){return e!==void 0&&e in ve}var Ta=!1;function ut(e){if($i(e)){var t=Fi[e];return tn(Ta,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Ta=!0,t}return e}function dt(e){for(var t=e.className,r=e.count,a=r===void 0?3:r,n=e.dateTransform,i=e.dateType,c=e.end,s=e.hover,u=e.offset,d=e.renderTile,f=e.start,h=e.step,m=h===void 0?1:h,g=e.value,x=e.valueType,_=[],O=f;O<=c;O+=m){var b=n(O);_.push(d({classes:Vi({date:b,dateType:i,hover:s,value:g,valueType:x}),date:b}))}return v.createElement(ta,{className:t,count:a,offset:u,wrap:!0},_)}function ft(e){var t=e.activeStartDate,r=e.children,a=e.classes,n=e.date,i=e.formatAbbr,c=e.locale,s=e.maxDate,u=e.maxDateTransform,d=e.minDate,f=e.minDateTransform,h=e.onClick,m=e.onMouseOver,g=e.style,x=e.tileClassName,_=e.tileContent,O=e.tileDisabled,b=e.view,k=E.useMemo(function(){var M={activeStartDate:t,date:n,view:b};return typeof x=="function"?x(M):x},[t,n,x,b]),Y=E.useMemo(function(){var M={activeStartDate:t,date:n,view:b};return typeof _=="function"?_(M):_},[t,n,_,b]);return v.createElement("button",{className:rt(a,k),disabled:d&&f(d)>n||s&&u(s)<n||O&&O({activeStartDate:t,date:n,view:b}),onClick:h?function(M){return h(n,M)}:void 0,onFocus:m?function(){return m(n)}:void 0,onMouseOver:m?function(){return m(n)}:void 0,style:g,type:"button"},i?v.createElement("abbr",{"aria-label":i(c,n)},r):r,Y)}var It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},It.apply(this,arguments)},Ui=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},ka=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},Bi="react-calendar__century-view__decades__decade";function Gi(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?st:a,i=Ui(e,["classes","formatYear"]),c=i.date,s=i.locale;return v.createElement(ft,It({},i,{classes:ka(ka([],r,!0),[Bi],!1),maxDateTransform:lt,minDateTransform:ne,view:"century"}),mr(s,n,c))}var Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rt.apply(this,arguments)},Ca=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Hi(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Ca(e,["activeStartDate","hover","value","valueType"]),c=Oi(t),s=c+99;return v.createElement(dt,{className:"react-calendar__century-view__decades",dateTransform:ne,dateType:"decade",end:s,hover:r,renderTile:function(u){var d=u.date,f=Ca(u,["date"]);return v.createElement(Gi,Rt({key:d.getTime()},i,f,{activeStartDate:t,date:d}))},start:c,step:10,value:a,valueType:n})}var Ea=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},qi=Object.values(w),zi=Object.values(ve),Yt=["century","decade","year","month"],yr=o.oneOf(Ea(Ea([],qi,!0),zi,!0)),Xe=o.oneOfType([o.string,o.arrayOf(o.string)]),aa=function(t,r,a){var n=t,i=r,c=n[i];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.maxDate;return s&&c>s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, minDate cannot be larger than maxDate.")):null},ra=function(t,r,a){var n=t,i=r,c=n[i];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.minDate;return s&&c<s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, maxDate cannot be smaller than minDate.")):null},Ki=o.oneOfType([o.func,o.exact({current:o.any})]),Ji=o.arrayOf(o.oneOfType([o.instanceOf(Date),o.oneOf([null])]).isRequired),Xi=o.oneOfType([o.instanceOf(Date),o.oneOf([null]),Ji]);o.arrayOf(o.oneOf(Yt));var Qe=function(t,r,a){var n=t,i=r,c=n[i];return c!==void 0&&(typeof c!="string"||Yt.indexOf(c)===-1)?new Error("Invalid prop `".concat(r,"` of value `").concat(c,"` supplied to `").concat(a,"`, expected one of [").concat(Yt.map(function(s){return'"'.concat(s,'"')}).join(", "),"].")):null};Qe.isRequired=function(t,r,a,n,i){var c=t,s=r,u=c[s];return u?Qe(t,r,a):new Error("The prop `".concat(r,"` is marked as required in `").concat(a,"`, but its value is `").concat(u,"`."))};var Qi=function(e){return o.arrayOf(e)},vt={activeStartDate:o.instanceOf(Date).isRequired,hover:o.instanceOf(Date),locale:o.string,maxDate:ra,minDate:aa,onClick:o.func,onMouseOver:o.func,tileClassName:o.oneOfType([o.func,Xe]),tileContent:o.oneOfType([o.func,o.node]),value:Xi,valueType:o.oneOf(["century","decade","year","month","day"]).isRequired};o.instanceOf(Date).isRequired,o.arrayOf(o.string.isRequired).isRequired,o.instanceOf(Date).isRequired,o.string,o.func,o.func,o.objectOf(o.oneOfType([o.string,o.number])),o.oneOfType([o.func,Xe]),o.oneOfType([o.func,o.node]),o.func;var Ze=globalThis&&globalThis.__assign||function(){return Ze=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ze.apply(this,arguments)},br=function(t){function r(){return v.createElement(Hi,Ze({},t))}return v.createElement("div",{className:"react-calendar__century-view"},r())};br.propTypes=Ze({},vt);const Zi=br;var Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vt.apply(this,arguments)},eo=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Aa=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},to="react-calendar__decade-view__years__year";function ao(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?st:a,i=eo(e,["classes","formatYear"]),c=i.date,s=i.locale;return v.createElement(ft,Vt({},i,{classes:Aa(Aa([],r,!0),[to],!1),maxDateTransform:ct,minDateTransform:ye,view:"decade"}),n(s,c))}var Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ft.apply(this,arguments)},Na=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function ro(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Na(e,["activeStartDate","hover","value","valueType"]),c=Si(t),s=c+9;return v.createElement(dt,{className:"react-calendar__decade-view__years",dateTransform:ye,dateType:"year",end:s,hover:r,renderTile:function(u){var d=u.date,f=Na(u,["date"]);return v.createElement(ao,Ft({key:d.getTime()},i,f,{activeStartDate:t,date:d}))},start:c,value:a,valueType:n})}var et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},et.apply(this,arguments)},xr=function(t){function r(){return v.createElement(ro,et({},t))}return v.createElement("div",{className:"react-calendar__decade-view"},r())};xr.propTypes=et({},vt);const no=xr;var $t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$t.apply(this,arguments)},io=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},La=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,i;a<n;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))},oo="react-calendar__year-view__months__month";function lo(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatMonth,n=a===void 0?bi:a,i=e.formatMonthYear,c=i===void 0?dr:i,s=io(e,["classes","formatMonth","formatMonthYear"]),u=s.date,d=s.locale;return v.createElement(ft,$t({},s,{classes:La(La([],r,!0),[oo],!1),formatAbbr:c,maxDateTransform:Le,minDateTransform:ie,view:"year"}),n(d,u))}var Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ut.apply(this,arguments)},Pa=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function co(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,i=Pa(e,["activeStartDate","hover","value","valueType"]),c=0,s=11,u=D(t);return v.createElement(dt,{className:"react-calendar__year-view__months",dateTransform:function(d){var f=new Date;return f.setFullYear(u,d,1),ie(f)},dateType:"month",end:s,hover:r,renderTile:function(d){var f=d.date,h=Pa(d,["date"]);return v.createElement(lo,Ut({key:f.getTime()},i,h,{activeStartDate:t,date:f}))},start:c,value:a,valueType:n})}var tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},tt.apply(this,arguments)},wr=function(t){function r(){return v.createElement(co,tt({},t))}return v.createElement("div",{className:"react-calendar__year-view"},r())};wr.propTypes=tt({},vt);const so=wr;var Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Bt.apply(this,arguments)},uo=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ge="react-calendar__month-view__days__day";function fo(e){var t=e.calendarType,r=e.classes,a=r===void 0?[]:r,n=e.currentMonthIndex,i=e.formatDay,c=i===void 0?pi:i,s=e.formatLongDate,u=s===void 0?yi:s,d=uo(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),f=ut(t),h=d.date,m=d.locale,g=[];return a&&g.push.apply(g,a),Ge&&g.push(Ge),gr(h,f)&&g.push("".concat(Ge,"--weekend")),h.getMonth()!==n&&g.push("".concat(Ge,"--neighboringMonth")),v.createElement(ft,Bt({},d,{classes:g,formatAbbr:u,maxDateTransform:Zt,minDateTransform:Pe,view:"month"}),c(m,h))}var Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Gt.apply(this,arguments)},Ma=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function vo(e){var t=e.activeStartDate,r=e.calendarType,a=e.hover,n=e.showFixedNumberOfWeeks,i=e.showNeighboringMonth,c=e.value,s=e.valueType,u=Ma(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=ut(r),f=D(t),h=ee(t),m=n||i,g=Te(t,d),x=m?0:g,_=(m?-g:0)+1,O=function(){if(n)return _+6*7-1;var b=ur(t);if(i){var k=new Date;k.setFullYear(f,h,b),k.setHours(0,0,0,0);var Y=7-Te(k,d)-1;return b+Y}return b}();return v.createElement(dt,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var k=new Date;return k.setFullYear(f,h,b),Pe(k)},dateType:"day",hover:a,end:O,renderTile:function(b){var k=b.date,Y=Ma(b,["date"]);return v.createElement(fo,Gt({key:k.getTime()},u,Y,{activeStartDate:t,currentMonthIndex:h,date:k}))},offset:x,start:_,value:c,valueType:s})}var Dr="react-calendar__month-view__weekdays",Nt="".concat(Dr,"__weekday");function ho(e){for(var t=e.calendarType,r=e.formatShortWeekday,a=r===void 0?xi:r,n=e.formatWeekday,i=n===void 0?wi:n,c=e.locale,s=e.onMouseLeave,u=ut(t),d=new Date,f=ie(d),h=D(f),m=ee(f),g=[],x=1;x<=7;x+=1){var _=new Date(h,m,x-Te(f,u)),O=i(c,_);g.push(v.createElement("div",{key:x,className:rt(Nt,Pi(_)&&"".concat(Nt,"--current"),gr(_,u)&&"".concat(Nt,"--weekend"))},v.createElement("abbr",{"aria-label":O,title:O},a(c,_).replace(".",""))))}return v.createElement(ta,{className:Dr,count:7,onFocus:s,onMouseOver:s},g)}var at=globalThis&&globalThis.__assign||function(){return at=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},at.apply(this,arguments)},Wa=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ia="react-calendar__tile";function mo(e){var t=e.onClickWeekNumber,r=e.weekNumber,a=v.createElement("span",null,r);if(t){var n=e.date,i=e.onClickWeekNumber,c=e.weekNumber,s=Wa(e,["date","onClickWeekNumber","weekNumber"]);return v.createElement("button",at({},s,{className:Ia,onClick:function(u){return i(c,n,u)},type:"button"}),a)}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=Wa(e,["date","onClickWeekNumber","weekNumber"]);return v.createElement("div",at({},s,{className:Ia}),a)}}function go(e){var t=e.activeStartDate,r=e.calendarType,a=e.onClickWeekNumber,n=e.onMouseLeave,i=e.showFixedNumberOfWeeks,c=ut(r),s=function(){if(i)return 6;var f=ur(t),h=Te(t,c),m=f-(7-h);return 1+Math.ceil(m/7)}(),u=function(){for(var f=D(t),h=ee(t),m=ot(t),g=[],x=0;x<s;x+=1)g.push(Wt(new Date(f,h,m+x*7),c));return g}(),d=u.map(function(f){return ji(f,c)});return v.createElement(ta,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},d.map(function(f,h){var m=u[h];if(!m)throw new Error("date is not defined");return v.createElement(mo,{key:f,date:m,onClickWeekNumber:a,weekNumber:f})}))}var Ce=globalThis&&globalThis.__assign||function(){return Ce=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ce.apply(this,arguments)},po=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function yo(e){if(e)for(var t=0,r=Object.entries(li);t<r.length;t++){var a=r[t],n=a[0],i=a[1];if(i.includes(e))return n}return w.ISO_8601}var _r=function(t){var r=t.activeStartDate,a=t.locale,n=t.onMouseLeave,i=t.showFixedNumberOfWeeks,c=t.calendarType,s=c===void 0?yo(a):c,u=t.formatShortWeekday,d=t.formatWeekday,f=t.onClickWeekNumber,h=t.showWeekNumbers,m=po(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function g(){return v.createElement(ho,{calendarType:s,formatShortWeekday:u,formatWeekday:d,locale:a,onMouseLeave:n})}function x(){return h?v.createElement(go,{activeStartDate:r,calendarType:s,onClickWeekNumber:f,onMouseLeave:n,showFixedNumberOfWeeks:i}):null}function _(){return v.createElement(vo,Ce({calendarType:s},m))}var O="react-calendar__month-view";return v.createElement("div",{className:rt(O,h?"".concat(O,"--weekNumbers"):"")},v.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},x(),v.createElement("div",{style:{flexGrow:1,width:"100%"}},g(),_())))};_r.propTypes=Ce(Ce({},vt),{calendarType:yr,formatDay:o.func,formatLongDate:o.func,formatShortWeekday:o.func,formatWeekday:o.func,onClickWeekNumber:o.func,onMouseLeave:o.func,showFixedNumberOfWeeks:o.bool,showNeighboringMonth:o.bool,showWeekNumbers:o.bool});const bo=_r;var me=globalThis&&globalThis.__assign||function(){return me=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},me.apply(this,arguments)},He="react-calendar",ge=["century","decade","year","month"],xo=["decade","year","month","day"],na=new Date;na.setFullYear(1,0,1);na.setHours(0,0,0,0);var wo=new Date(864e13);function Se(e){return e instanceof Date?e:new Date(e)}function Or(e,t){return ge.slice(ge.indexOf(e),ge.indexOf(t)+1)}function Do(e,t,r){var a=Or(t,r);return a.indexOf(e)!==-1}function ia(e,t,r){return e&&Do(e,t,r)?e:r}function Sr(e){var t=ge.indexOf(e);return xo[t]}function _o(e,t){var r=Array.isArray(e)?e[t]:e;if(!r)return null;var a=Se(r);if(isNaN(a.getTime()))throw new Error("Invalid date: ".concat(e));return a}function jr(e,t){var r=e.value,a=e.minDate,n=e.maxDate,i=e.maxDetail,c=_o(r,t);if(!c)return null;var s=Sr(i),u=function(){switch(t){case 0:return te(s,c);case 1:return vr(s,c);default:throw new Error("Invalid index value: ".concat(t))}}();return Ii(u,a,n)}var oa=function(e){return jr(e,0)},Tr=function(e){return jr(e,1)},Oo=function(e){return[oa,Tr].map(function(t){return t(e)})};function kr(e){var t=e.maxDate,r=e.maxDetail,a=e.minDate,n=e.minDetail,i=e.value,c=e.view,s=ia(c,n,r),u=oa({value:i,minDate:a,maxDate:t,maxDetail:r})||new Date;return te(s,u)}function So(e){var t=e.activeStartDate,r=e.defaultActiveStartDate,a=e.defaultValue,n=e.defaultView,i=e.maxDate,c=e.maxDetail,s=e.minDate,u=e.minDetail,d=e.value,f=e.view,h=ia(f,u,c),m=t||r;return m?te(h,m):kr({maxDate:i,maxDetail:c,minDate:s,minDetail:u,value:d||a,view:f||n})}function Lt(e){return e&&(!Array.isArray(e)||e.length===1)}function qe(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Cr=E.forwardRef(function(t,r){var a=t.activeStartDate,n=t.allowPartialRange,i=t.calendarType,c=t.className,s=t.defaultActiveStartDate,u=t.defaultValue,d=t.defaultView,f=t.formatDay,h=t.formatLongDate,m=t.formatMonth,g=t.formatMonthYear,x=t.formatShortWeekday,_=t.formatWeekday,O=t.formatYear,b=t.goToRangeStartOnSelect,k=b===void 0?!0:b,Y=t.inputRef,M=t.locale,V=t.maxDate,N=V===void 0?wo:V,le=t.maxDetail,W=le===void 0?"month":le,H=t.minDate,F=H===void 0?na:H,Me=t.minDetail,J=Me===void 0?"century":Me,We=t.navigationAriaLabel,ce=t.navigationAriaLive,ht=t.navigationLabel,I=t.next2AriaLabel,mt=t.next2Label,gt=t.nextAriaLabel,X=t.nextLabel,A=t.onActiveStartDateChange,Q=t.onChange,se=t.onClickDay,be=t.onClickDecade,Ie=t.onClickMonth,pt=t.onClickWeekNumber,Re=t.onClickYear,xe=t.onDrillDown,we=t.onDrillUp,Z=t.onViewChange,yt=t.prev2AriaLabel,bt=t.prev2Label,Ye=t.prevAriaLabel,xt=t.prevLabel,C=t.returnValue,De=C===void 0?"start":C,$=t.selectRange,Ve=t.showDoubleView,la=t.showFixedNumberOfWeeks,ca=t.showNavigation,Nr=ca===void 0?!0:ca,sa=t.showNeighboringMonth,Lr=sa===void 0?!0:sa,Pr=t.showWeekNumbers,Mr=t.tileClassName,Wr=t.tileContent,Ir=t.tileDisabled,wt=t.value,ua=t.view,da=E.useState(s),Rr=da[0],Fe=da[1],fa=E.useState(null),Yr=fa[0],va=fa[1],ha=E.useState(Array.isArray(u)?u.map(function(p){return p!==null?Se(p):null}):u!=null?Se(u):null),Dt=ha[0],Vr=ha[1],ma=E.useState(d),Fr=ma[0],ga=ma[1],L=a||Rr||So({activeStartDate:a,defaultActiveStartDate:s,defaultValue:u,defaultView:d,maxDate:N,maxDetail:W,minDate:F,minDetail:J,value:wt,view:ua}),P=function(){var p=function(){return $&&Lt(Dt)?Dt:wt!==void 0?wt:Dt}();return p?Array.isArray(p)?p.map(function(j){return j!==null?Se(j):null}):p!==null?Se(p):null:null}(),$e=Sr(W),S=ia(ua||Fr,J,W),q=Or(J,W),$r=$?Yr:null,_t=q.indexOf(S)<q.length-1,pa=q.indexOf(S)>0,ya=E.useCallback(function(p){var j=function(){switch(De){case"start":return oa;case"end":return Tr;case"range":return Oo;default:throw new Error("Invalid returnValue.")}}();return j({maxDate:N,maxDetail:W,minDate:F,value:p})},[N,W,F,De]),Ot=E.useCallback(function(p,j){Fe(p);var T={action:j,activeStartDate:p,value:P,view:S};A&&!qe(L,p)&&A(T)},[L,A,P,S]),Ue=E.useCallback(function(p,j){var T=function(){switch(S){case"century":return be;case"decade":return Re;case"year":return Ie;case"month":return se;default:throw new Error("Invalid view: ".concat(S,"."))}}();T&&T(p,j)},[se,be,Ie,Re,S]),St=E.useCallback(function(p,j){if(_t){Ue(p,j);var T=q[q.indexOf(S)+1];if(!T)throw new Error("Attempted to drill down from the lowest view.");Fe(p),ga(T);var U={action:"drillDown",activeStartDate:p,value:P,view:T};A&&!qe(L,p)&&A(U),Z&&S!==T&&Z(U),xe&&xe(U)}},[L,_t,A,Ue,xe,Z,P,S,q]),jt=E.useCallback(function(){if(pa){var p=q[q.indexOf(S)-1];if(!p)throw new Error("Attempted to drill up from the highest view.");var j=te(p,L);Fe(j),ga(p);var T={action:"drillUp",activeStartDate:j,value:P,view:p};A&&!qe(L,j)&&A(T),Z&&S!==p&&Z(T),we&&we(T)}},[L,pa,A,we,Z,P,S,q]),Tt=E.useCallback(function(p,j){var T=P;Ue(p,j);var U=$&&!Lt(T),B;if($)if(U)B=te($e,p);else{if(!T)throw new Error("previousValue is required");if(Array.isArray(T))throw new Error("previousValue must not be an array");B=Ni($e,T,p)}else B=ya(p);var Ct=!$||U||k?kr({maxDate:N,maxDetail:W,minDate:F,minDetail:J,value:B,view:S}):null;j.persist(),Fe(Ct),Vr(B);var Hr={action:"onChange",activeStartDate:Ct,value:B,view:S};if(A&&!qe(L,Ct)&&A(Hr),Q)if($){var qr=Lt(B);if(!qr)Q(B||null,j);else if(n){if(Array.isArray(B))throw new Error("value must not be an array");Q([B||null,null],j)}}else Q(B||null,j)},[L,n,ya,k,N,W,F,J,A,Q,Ue,$,P,$e,S]);function Ur(p){va(p)}function kt(){va(null)}E.useImperativeHandle(r,function(){return{activeStartDate:L,drillDown:St,drillUp:jt,onChange:Tt,setActiveStartDate:Ot,value:P,view:S}},[L,St,jt,Tt,Ot,P,S]);function ba(p){var j=p?fr(S,L):te(S,L),T=_t?St:Tt,U={activeStartDate:j,hover:$r,locale:M,maxDate:N,minDate:F,onClick:T,onMouseOver:$?Ur:void 0,tileClassName:Mr,tileContent:Wr,tileDisabled:Ir,value:P,valueType:$e};switch(S){case"century":return v.createElement(Zi,me({formatYear:O},U));case"decade":return v.createElement(no,me({formatYear:O},U));case"year":return v.createElement(so,me({formatMonth:m,formatMonthYear:g},U));case"month":return v.createElement(bo,me({calendarType:i,formatDay:f,formatLongDate:h,formatShortWeekday:x,formatWeekday:_,onClickWeekNumber:pt,onMouseLeave:$?kt:void 0,showFixedNumberOfWeeks:typeof la<"u"?la:Ve,showNeighboringMonth:Lr,showWeekNumbers:Pr},U));default:throw new Error("Invalid view: ".concat(S,"."))}}function Br(){return Nr?v.createElement(Mi,{activeStartDate:L,drillUp:jt,formatMonthYear:g,formatYear:O,locale:M,maxDate:N,minDate:F,navigationAriaLabel:We,navigationAriaLive:ce,navigationLabel:ht,next2AriaLabel:I,next2Label:mt,nextAriaLabel:gt,nextLabel:X,prev2AriaLabel:yt,prev2Label:bt,prevAriaLabel:Ye,prevLabel:xt,setActiveStartDate:Ot,showDoubleView:Ve,view:S,views:q}):null}var Gr=Array.isArray(P)?P:[P];return v.createElement("div",{className:rt(He,$&&Gr.length===1&&"".concat(He,"--selectRange"),Ve&&"".concat(He,"--doubleView"),c),ref:Y},Br(),v.createElement("div",{className:"".concat(He,"__viewContainer"),onBlur:$?kt:void 0,onMouseLeave:$?kt:void 0},ba(),Ve?ba(!0):null))}),Ra=o.instanceOf(Date),Ya=o.oneOfType([o.string,o.instanceOf(Date)]),Va=o.oneOfType([Ya,Qi(Ya)]);Cr.propTypes={activeStartDate:Ra,allowPartialRange:o.bool,calendarType:yr,className:Xe,defaultActiveStartDate:Ra,defaultValue:Va,defaultView:Qe,formatDay:o.func,formatLongDate:o.func,formatMonth:o.func,formatMonthYear:o.func,formatShortWeekday:o.func,formatWeekday:o.func,formatYear:o.func,goToRangeStartOnSelect:o.bool,inputRef:Ki,locale:o.string,maxDate:ra,maxDetail:o.oneOf(ge),minDate:aa,minDetail:o.oneOf(ge),navigationAriaLabel:o.string,navigationAriaLive:o.oneOf(["off","polite","assertive"]),navigationLabel:o.func,next2AriaLabel:o.string,next2Label:o.node,nextAriaLabel:o.string,nextLabel:o.node,onActiveStartDateChange:o.func,onChange:o.func,onClickDay:o.func,onClickDecade:o.func,onClickMonth:o.func,onClickWeekNumber:o.func,onClickYear:o.func,onDrillDown:o.func,onDrillUp:o.func,onViewChange:o.func,prev2AriaLabel:o.string,prev2Label:o.node,prevAriaLabel:o.string,prevLabel:o.node,returnValue:o.oneOf(["start","end","range"]),selectRange:o.bool,showDoubleView:o.bool,showFixedNumberOfWeeks:o.bool,showNavigation:o.bool,showNeighboringMonth:o.bool,showWeekNumbers:o.bool,tileClassName:o.oneOfType([o.func,Xe]),tileContent:o.oneOfType([o.func,o.node]),tileDisabled:o.func,value:Va,view:Qe};const jo=Cr,To=y(an)`
  label {
    position: relative;
  }
  @media screen and (min-width: 1440px) {
    padding-right: 64px;
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    width: 760px;
  }
`,de=y(R)`
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
`,ze=y.label`
  width: calc(50% - 7px);
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 10.5px);
  }
`,fe=y.p`
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
`,ko=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 12px;
`,Co=y(jo)`
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
`,Eo=y.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  height: ${e=>e["data-isopen"]==="close"?"0px":"260px"};
  overflow: hidden;
  transition: height 0.5s ease;
`,Ao=y.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translate(0, -15%);
  stroke: rgba(239, 237, 232, 1);
`,No=y.div`
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
`,G=y.label`
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
`,Lo=y.div`
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
`,Po=y.button`
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
`,Ke=y(rn)`
  position: absolute;
  color: red;

  &[id='name'] {
    top: 58%;
    font-size: 14px;
    transform: translate(0, -50%);
    line-height: 0;
    left: 35px;
  }
`;const Er=({handleSubmit:e,dataUser:t,selectedAvatar:r})=>{const a=nn().shape({name:xa().required("Введіть імя користувача").min(2,"Ім'я повинно містити принаймні 2 символи"),height:_e().required("Введіть висоту користувача"),currentWeight:_e().required("Введіть поточну вагу користувача"),desiredWeight:_e().required("Введіть бажану вагу користувача"),birthday:on().required("Введіть дату народження користувача"),blood:_e().required("Виберіть групу крові користувача"),sex:xa().required("Виберіть стать користувача"),levelActivity:_e().required("Виберіть рівень активності користувача")}),[n,i]=E.useState(!1),{isLoadingUpdate:c}=Je(Ba),{name:s,email:u,bodyData:d}=t,{height:f,birthday:h,blood:m,currentWeight:g,desiredWeight:x,levelActivity:_,sex:O}=d,b={name:s,height:f,currentWeight:g,desiredWeight:x,blood:String(m),sex:O,levelActivity:String(_),birthday:new Date(h),avatarUrl:r},k=b.avatarUrl!==null&&typeof b.avatarUrl!="string",Y=()=>{i(!n)},M=V=>["Su","Mo","Tu","We","Th","Fr","Sa"][V.getDay()];return l.jsx(ln,{initialValues:b,onSubmit:e,validationSchema:a,children:({values:V,setFieldValue:N,dirty:le})=>{const W=k||le;return l.jsxs(To,{children:[l.jsx(fe,{children:"Basic info"}),l.jsxs("label",{children:[l.jsx(de,{type:"text",name:"name"}),l.jsx(Ke,{id:"name",name:"name",component:"div",className:"error"})]}),l.jsx("label",{children:l.jsx(de,{disabled:!0,value:u,type:"text",name:"email"})}),l.jsxs(ko,{children:[l.jsxs(ze,{children:[l.jsx(fe,{children:"Height"}),l.jsx(de,{type:"text",name:"height"}),l.jsx(Ke,{id:"heigth",name:"heigth",component:"div",className:"error"})]}),l.jsxs(ze,{children:[l.jsx(fe,{children:"Current Weight"}),l.jsx(de,{type:"text",name:"currentWeight"}),l.jsx(Ke,{id:"currentWeight",name:"currentWeight",component:"div",className:"error"})]}),l.jsxs(ze,{children:[l.jsx(fe,{children:"Desired Weight"}),l.jsx(de,{type:"text",name:"desiredWeight"}),l.jsx(Ke,{id:"desiredWeight",name:"desiredWeight",component:"div",className:"error"})]}),l.jsxs(ze,{onClick:Y,children:[l.jsx(fe,{id:"calendarTitle",children:"Calendar"}),l.jsx(Ao,{children:l.jsx("use",{href:Pt+"#icon-calendar"})}),l.jsx(de,{disabled:!0,onChange:H=>N("birthday",H),value:`${V.birthday.getDate()}.${V.birthday.getMonth()+1}.${V.birthday.getFullYear()}`,type:"text",name:"birthday"})]}),l.jsx(Eo,{"data-isopen":`${n?"open":"close"}`,children:l.jsx(R,{name:"birthday",children:()=>l.jsx(Co,{locale:"en-US",onChange:H=>N("birthday",H),value:V.birthday,formatShortWeekday:(H,F)=>M(F),onClickDay:Y})})})]}),l.jsx(fe,{children:"Blood"}),l.jsxs(No,{children:[l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"blood",value:"1"})," ",l.jsx("p",{children:"1"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"blood",value:"2"}),l.jsx("p",{children:"2"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"blood",value:"3"}),l.jsx("p",{children:"3"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"blood",value:"4"}),l.jsx("p",{children:"4"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"sex",value:"male"}),l.jsx("p",{children:"Male"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx(R,{type:"radio",name:"sex",value:"female"}),l.jsx("p",{children:"Female"}),l.jsx("span",{})]})]}),l.jsxs(Lo,{children:[l.jsxs(G,{children:[l.jsx("p",{children:"Sedentary lifestyle (little or no physical activity)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"1"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx("p",{children:"Light activity (light exercises/sports 1-3 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"2"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx("p",{children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"3"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx("p",{children:"Very active (intense exercises/sports 6-7 days per week)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"4"}),l.jsx("span",{})]}),l.jsxs(G,{children:[l.jsx("p",{children:"Extremely active (very strenuous exercises/sports and physical work)"}),l.jsx(R,{type:"radio",name:"levelActivity",value:"5"}),l.jsx("span",{})]})]}),l.jsx(Po,{disabled:!W,id:"submitButton",type:"submit",children:c?"Loading":"Save"})]})}})};Er.propTypes={selectedAvatar:Kr.any,dataUser:o.object.isRequired,handleSubmit:o.func.isRequired};const Mo=y.div`
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
  height: 100%;
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
`,Fo=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  & > :first-child {
    margin-right: 14px;
  }
`,Fa=y.div`
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
`,$a=y.img`
  margin-right: 8px;
`,Ua=y.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`,$o=y.div`
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
`,Go="/GachiClub/assets/tabler_exclamation-mark-2580bad6.svg",Ho="/GachiClub/assets/spoon_fork-1250d3b9.svg",qo="/GachiClub/assets/favicon-f5a438b0.svg",Ar=({userData:e,changeAvatar:t,selectedAvatar:r})=>{const{name:a,dailyRateCalories:n,dailySportMin:i,avatarUrl:c}=e,s=d=>{const f=d.target.files[0];t(f)},u={display:"flex",justifyContent:"center",alignItems:"center",margin:"0",padding:"0",gap:"8px",color:"#efede8",backgroundColor:"transparent",border:"none",marginLeft:"auto !important",marginBottom:"36px"};return l.jsxs("div",{children:[l.jsxs(Wo,{children:[l.jsx(Mo,{children:r===null?l.jsx(Bo,{children:l.jsx("use",{xlinkHref:`${Pt}#icon-user`})}):l.jsx(Io,{src:typeof r!="object"?c:URL.createObjectURL(r),alt:"scelet user"})}),l.jsxs(Ro,{children:[l.jsx("input",{type:"file",id:"sendAvatar",accept:"image/*",onChange:s}),l.jsx("svg",{viewBox:"0 0 32 32",children:l.jsx("use",{xlinkHref:`${Pt}#icon-addPhoto`})})]})]}),l.jsx(Yo,{children:a}),l.jsx(Vo,{children:"User"}),l.jsxs(Fo,{children:[l.jsxs(Fa,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx($a,{src:Ho,alt:"spoon and fork"}),l.jsx(Ua,{children:"Daily calorie intake"})]}),l.jsx("p",{children:n||2200})]}),l.jsxs(Fa,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx($a,{src:qo,alt:"dumbbell"}),l.jsx(Ua,{children:"Daily norm of sports"})]}),l.jsxs("p",{children:[i||110," min"]})]})]}),l.jsxs($o,{children:[l.jsx("img",{src:Go,alt:"exclamation mark"}),l.jsx(Uo,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),l.jsx(Jr,{customStyles:u})]})};Ar.propTypes={userData:o.object.isRequired,changeAvatar:o.func,selectedAvatar:o.oneOfType([o.object,o.string])};const Xo=()=>{const e=Je(Xr),t=Je(d=>d.auth.user),{memo:r}=Je(Ba),a=r===null?t:r,n=Qr(),[i,c]=E.useState(a.avatarUrl);E.useEffect(()=>{r===null&&n(Zr(e)),c(a.avatarUrl)},[a.avatarUrl,n,e,r]);const s=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`,u=d=>{const f=new FormData;i!==null&&typeof i!="string"&&f.append("avatar",i,i.name);for(const h in d){if(h==="birthday"){f.append(h,s(new Date(d[h])));continue}h!=="avatarUrl"&&f.append(h,d[h])}f.birthday=s(new Date(d.birthday)),d.avatarUrl=null,n(en(f))};return l.jsxs(cn,{children:[l.jsx(sn,{children:"Profile Settings"}),l.jsxs(un,{children:[l.jsx(Ar,{userData:a,selectedAvatar:i,changeAvatar:c}),l.jsx(Er,{dataUser:a,handleSubmit:u,selectedAvatar:i})]})]})};export{Xo as default};
