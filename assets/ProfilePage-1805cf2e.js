import{g as Gr,K as Ue,R as d,d as E,P as i,j as l,I as At,M as Br,b as ya,u as Hr,O as zr}from"./index-9b406d9a.js";import{s as b}from"./styled-components.browser.esm-0dda3d57.js";import{w as qr,a as Kr,b as I,F as Jr}from"./formik.esm-e34575d5.js";const Xr=b.div`
  padding-top: 40px;
`,Qr=b.h1`
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
`,Zr=b.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;function Fa(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Fa(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function et(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=Fa(e))&&(a&&(a+=" "),a+=t);return a}var en="Expected a function",$a="__lodash_hash_undefined__",tn="[object Function]",an="[object GeneratorFunction]",rn=/[\\^$.*+?()[\]{}|]/g,nn=/^\[object .+?Constructor\]$/,on=typeof Ue=="object"&&Ue&&Ue.Object===Object&&Ue,ln=typeof self=="object"&&self&&self.Object===Object&&self,Ua=on||ln||Function("return this")();function cn(e,t){return e==null?void 0:e[t]}function sn(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var un=Array.prototype,dn=Function.prototype,Ga=Object.prototype,kt=Ua["__core-js_shared__"],ba=function(){var e=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ba=dn.toString,Ut=Ga.hasOwnProperty,fn=Ga.toString,vn=RegExp("^"+Ba.call(Ut).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hn=un.splice,mn=Ha(Ua,"Map"),Oe=Ha(Object,"create");function te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function gn(){this.__data__=Oe?Oe(null):{}}function yn(e){return this.has(e)&&delete this.__data__[e]}function bn(e){var t=this.__data__;if(Oe){var r=t[e];return r===$a?void 0:r}return Ut.call(t,e)?t[e]:void 0}function pn(e){var t=this.__data__;return Oe?t[e]!==void 0:Ut.call(t,e)}function xn(e,t){var r=this.__data__;return r[e]=Oe&&t===void 0?$a:t,this}te.prototype.clear=gn;te.prototype.delete=yn;te.prototype.get=bn;te.prototype.has=pn;te.prototype.set=xn;function me(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function wn(){this.__data__=[]}function _n(e){var t=this.__data__,r=tt(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():hn.call(t,r,1),!0}function Dn(e){var t=this.__data__,r=tt(t,e);return r<0?void 0:t[r][1]}function On(e){return tt(this.__data__,e)>-1}function Sn(e,t){var r=this.__data__,a=tt(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}me.prototype.clear=wn;me.prototype.delete=_n;me.prototype.get=Dn;me.prototype.has=On;me.prototype.set=Sn;function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function jn(){this.__data__={hash:new te,map:new(mn||me),string:new te}}function kn(e){return at(this,e).delete(e)}function Tn(e){return at(this,e).get(e)}function Cn(e){return at(this,e).has(e)}function En(e,t){return at(this,e).set(e,t),this}ae.prototype.clear=jn;ae.prototype.delete=kn;ae.prototype.get=Tn;ae.prototype.has=Cn;ae.prototype.set=En;function tt(e,t){for(var r=e.length;r--;)if(Mn(e[r][0],t))return r;return-1}function An(e){if(!za(e)||Ln(e))return!1;var t=Wn(e)||sn(e)?vn:nn;return t.test(Pn(e))}function at(e,t){var r=e.__data__;return Nn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ha(e,t){var r=cn(e,t);return An(r)?r:void 0}function Nn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ln(e){return!!ba&&ba in e}function Pn(e){if(e!=null){try{return Ba.call(e)}catch{}try{return e+""}catch{}}return""}function Gt(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(en);var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],o=r.cache;if(o.has(n))return o.get(n);var c=e.apply(this,a);return r.cache=o.set(n,c),c};return r.cache=new(Gt.Cache||ae),r}Gt.Cache=ae;function Mn(e,t){return e===t||e!==e&&t!==t}function Wn(e){var t=za(e)?fn.call(e):"";return t==tn||t==an}function za(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var In=Gt;const qa=Gr(In);function Ka(e){return JSON.stringify(e)}function Rn(e){return typeof e=="string"}function Yn(e,t,r){return r.indexOf(e)===t}function Vn(e){return e.toLowerCase()===e}function pa(e){return e.indexOf(",")===-1?e:e.split(",")}function Nt(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],r=t===void 0?"":t;return Nt(r)}if(e.indexOf("@")!==-1){var a=e.split("@")[0],r=a===void 0?"":a;return Nt(r)}if(e.indexOf("-")===-1||!Vn(e))return e;var n=e.split("-"),o=n[0],c=n[1],s=c===void 0?"":c;return"".concat(o,"-").concat(s.toUpperCase())}function Fn(e){var t=e===void 0?{}:e,r=t.useFallbackLocale,a=r===void 0?!0:r,n=t.fallbackLocale,o=n===void 0?"en-US":n,c=[];if(typeof navigator<"u"){for(var s=navigator.languages||[],u=[],f=0,v=s;f<v.length;f++){var h=v[f];u=u.concat(pa(h))}var m=navigator.language,g=m&&pa(m);c=c.concat(u,g)}return a&&c.push(o),c.filter(Rn).map(Nt).filter(Yn)}var $n=qa(Fn,Ka);function Un(e){return $n(e)[0]||null}var Ja=qa(Un,Ka);function q(e,t,r){return function(n,o){o===void 0&&(o=r);var c=e(n)+o;return t(c)}}function Te(e){return function(r){return new Date(e(r).getTime()-1)}}function Ce(e,t){return function(a){return[e(a),t(a)]}}function O(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function Z(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function rt(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function Ee(e){var t=O(e),r=t+(-t+1)%100,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var Gn=q(O,Ee,-100),Xa=q(O,Ee,100),Bt=Te(Xa),Bn=q(O,Bt,-100),Qa=Ce(Ee,Bt);function re(e){var t=O(e),r=t+(-t+1)%10,a=new Date;return a.setFullYear(r,0,1),a.setHours(0,0,0,0),a}var Za=q(O,re,-10),Ht=q(O,re,10),nt=Te(Ht),er=q(O,nt,-10),tr=Ce(re,nt);function ge(e){var t=O(e),r=new Date;return r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}var ar=q(O,ge,-1),zt=q(O,ge,1),ot=Te(zt),rr=q(O,ot,-1),Hn=Ce(ge,ot);function qt(e,t){return function(a,n){n===void 0&&(n=t);var o=O(a),c=Z(a)+n,s=new Date;return s.setFullYear(o,c,1),s.setHours(0,0,0,0),e(s)}}function ne(e){var t=O(e),r=Z(e),a=new Date;return a.setFullYear(t,r,1),a.setHours(0,0,0,0),a}var nr=qt(ne,-1),Kt=qt(ne,1),Ae=Te(Kt),or=qt(Ae,-1),zn=Ce(ne,Ae);function qn(e,t){return function(a,n){n===void 0&&(n=t);var o=O(a),c=Z(a),s=rt(a)+n,u=new Date;return u.setFullYear(o,c,s),u.setHours(0,0,0,0),e(u)}}function Ne(e){var t=O(e),r=Z(e),a=rt(e),n=new Date;return n.setFullYear(t,r,a),n.setHours(0,0,0,0),n}var Kn=qn(Ne,1),Jt=Te(Kn),Jn=Ce(Ne,Jt);function ir(e){return rt(Ae(e))}var _e,_={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},de={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},Xn=(_e={},_e[_.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],_e[_.HEBREW]=["he","he-IL"],_e[_.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],_e),Xt=[0,1,2,3,4,5,6],Tt=new Map;function Qn(e){return function(r,a){var n=r||Ja();Tt.has(n)||Tt.set(n,new Map);var o=Tt.get(n);return o.has(e)||o.set(e,new Intl.DateTimeFormat(n||void 0,e).format),o.get(e)(a)}}function Zn(e){var t=new Date(e);return new Date(t.setHours(12))}function oe(e){return function(t,r){return Qn(e)(t,Zn(r))}}var eo={day:"numeric"},to={day:"numeric",month:"long",year:"numeric"},ao={month:"long"},ro={month:"long",year:"numeric"},no={weekday:"short"},oo={weekday:"long"},io={year:"numeric"},lo=oe(eo),co=oe(to),so=oe(ao),lr=oe(ro),uo=oe(no),fo=oe(oo),it=oe(io),vo=Xt[0],ho=Xt[5],xa=Xt[6];function Se(e,t){t===void 0&&(t=_.ISO_8601);var r=e.getDay();switch(t){case _.ISO_8601:return(r+6)%7;case _.ISLAMIC:return(r+1)%7;case _.HEBREW:case _.GREGORY:return r;default:throw new Error("Unsupported calendar type.")}}function mo(e){var t=Ee(e);return O(t)}function go(e){var t=re(e);return O(t)}function Lt(e,t){t===void 0&&(t=_.ISO_8601);var r=O(e),a=Z(e),n=e.getDate()-Se(e,t);return new Date(r,a,n)}function yo(e,t){t===void 0&&(t=_.ISO_8601);var r=t===_.GREGORY?_.GREGORY:_.ISO_8601,a=Lt(e,t),n=O(e)+1,o,c;do o=new Date(n,0,r===_.ISO_8601?4:1),c=Lt(o,t),n-=1;while(e<c);return Math.round((a.getTime()-c.getTime())/(864e5*7))+1}function ee(e,t){switch(e){case"century":return Ee(t);case"decade":return re(t);case"year":return ge(t);case"month":return ne(t);case"day":return Ne(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function bo(e,t){switch(e){case"century":return Gn(t);case"decade":return Za(t);case"year":return ar(t);case"month":return nr(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function cr(e,t){switch(e){case"century":return Xa(t);case"decade":return Ht(t);case"year":return zt(t);case"month":return Kt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function po(e,t){switch(e){case"decade":return Za(t,-100);case"year":return ar(t,-10);case"month":return nr(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function xo(e,t){switch(e){case"decade":return Ht(t,100);case"year":return zt(t,10);case"month":return Kt(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function sr(e,t){switch(e){case"century":return Bt(t);case"decade":return nt(t);case"year":return ot(t);case"month":return Ae(t);case"day":return Jt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function wo(e,t){switch(e){case"century":return Bn(t);case"decade":return er(t);case"year":return rr(t);case"month":return or(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function _o(e,t){switch(e){case"decade":return er(t,-100);case"year":return rr(t,-10);case"month":return or(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function wa(e,t){switch(e){case"century":return Qa(t);case"decade":return tr(t);case"year":return Hn(t);case"month":return zn(t);case"day":return Jn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Do(e,t,r){var a=[t,r].sort(function(n,o){return n.getTime()-o.getTime()});return[ee(e,a[0]),sr(e,a[1])]}function ur(e,t,r){return t===void 0&&(t=it),r.map(function(a){return t(e,a)}).join(" – ")}function Oo(e,t,r){return ur(e,t,Qa(r))}function dr(e,t,r){return ur(e,t,tr(r))}function So(e){return e.getDay()===new Date().getDay()}function fr(e,t){t===void 0&&(t=_.ISO_8601);var r=e.getDay();switch(t){case _.ISLAMIC:case _.HEBREW:return r===ho||r===xa;case _.ISO_8601:case _.GREGORY:return r===xa||r===vo;default:throw new Error("Unsupported calendar type.")}}var z="react-calendar__navigation";function jo(e){var t=e.activeStartDate,r=e.drillUp,a=e.formatMonthYear,n=a===void 0?lr:a,o=e.formatYear,c=o===void 0?it:o,s=e.locale,u=e.maxDate,f=e.minDate,v=e.navigationAriaLabel,h=v===void 0?"":v,m=e.navigationAriaLive,g=e.navigationLabel,p=e.next2AriaLabel,S=p===void 0?"":p,D=e.next2Label,w=D===void 0?"»":D,x=e.nextAriaLabel,P=x===void 0?"":x,M=e.nextLabel,G=M===void 0?"›":M,R=e.prev2AriaLabel,Le=R===void 0?"":R,V=e.prev2Label,ye=V===void 0?"«":V,B=e.prevAriaLabel,Pe=B===void 0?"":B,K=e.prevLabel,Me=K===void 0?"‹":K,ie=e.setActiveStartDate,dt=e.showDoubleView,W=e.view,ft=e.views,vt=ft.indexOf(W)>0,J=W!=="century",A=bo(W,t),X=J?po(W,t):void 0,le=cr(W,t),be=J?xo(W,t):void 0,We=function(){if(A.getFullYear()<0)return!0;var C=wo(W,t);return f&&f>=C}(),ht=J&&function(){if(X.getFullYear()<0)return!0;var C=_o(W,t);return f&&f>=C}(),Ie=u&&u<le,pe=J&&u&&u<be;function xe(){ie(A,"prev")}function Q(){ie(X,"prev2")}function mt(){ie(le,"next")}function gt(){ie(be,"next2")}function Re(C){var we=function(){switch(W){case"century":return Oo(s,c,C);case"decade":return dr(s,c,C);case"year":return c(s,C);case"month":return n(s,C);default:throw new Error("Invalid view: ".concat(W,"."))}}();return g?g({date:C,label:we,locale:s||Ja()||void 0,view:W}):we}function yt(){var C="".concat(z,"__label");return d.createElement("button",{"aria-label":h,"aria-live":m,className:C,disabled:!vt,onClick:r,style:{flexGrow:1},type:"button"},d.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--from")},Re(t)),dt?d.createElement(d.Fragment,null,d.createElement("span",{className:"".concat(C,"__divider")}," – "),d.createElement("span",{className:"".concat(C,"__labelText ").concat(C,"__labelText--to")},Re(le))):null)}return d.createElement("div",{className:z},ye!==null&&J?d.createElement("button",{"aria-label":Le,className:"".concat(z,"__arrow ").concat(z,"__prev2-button"),disabled:ht,onClick:Q,type:"button"},ye):null,Me!==null&&d.createElement("button",{"aria-label":Pe,className:"".concat(z,"__arrow ").concat(z,"__prev-button"),disabled:We,onClick:xe,type:"button"},Me),yt(),G!==null&&d.createElement("button",{"aria-label":P,className:"".concat(z,"__arrow ").concat(z,"__next-button"),disabled:Ie,onClick:mt,type:"button"},G),w!==null&&J?d.createElement("button",{"aria-label":S,className:"".concat(z,"__arrow ").concat(z,"__next2-button"),disabled:pe,onClick:gt,type:"button"},w):null)}var fe=globalThis&&globalThis.__assign||function(){return fe=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},fe.apply(this,arguments)},ko=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function _a(e){return"".concat(e,"%")}function Qt(e){var t=e.children,r=e.className,a=e.count,n=e.direction,o=e.offset,c=e.style,s=e.wrap,u=ko(e,["children","className","count","direction","offset","style","wrap"]);return d.createElement("div",fe({className:r,style:fe({display:"flex",flexDirection:n,flexWrap:s?"wrap":"nowrap"},c)},u),d.Children.map(t,function(f,v){var h=o&&v===0?_a(100*o/a):null;return d.cloneElement(f,fe(fe({},f.props),{style:{flexBasis:_a(100/a),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:h,marginInlineStart:h,marginInlineEnd:0}}))}))}var ce;function To(e,t,r){return t&&t>e?t:r&&r<e?r:e}function je(e,t){return t[0]<=e&&t[1]>=e}function Co(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function vr(e,t){return je(e[0],t)||je(e[1],t)}function Da(e,t,r){var a=vr(t,e),n=[];if(a){n.push(r);var o=je(e[0],t),c=je(e[1],t);o&&n.push("".concat(r,"Start")),c&&n.push("".concat(r,"End")),o&&c&&n.push("".concat(r,"BothEnds"))}return n}function Eo(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Ao(e){if(!e)throw new Error("args is required");var t=e.value,r=e.date,a=e.hover,n="react-calendar__tile",o=[n];if(!r)return o;var c=new Date,s=function(){if(Array.isArray(r))return r;var g=e.dateType;if(!g)throw new Error("dateType is required when date is not an array of two dates");return wa(g,r)}();if(je(c,s)&&o.push("".concat(n,"--now")),!t||!Eo(t))return o;var u=function(){if(Array.isArray(t))return t;var g=e.valueType;if(!g)throw new Error("valueType is required when value is not an array of two dates");return wa(g,t)}();Co(u,s)?o.push("".concat(n,"--active")):vr(u,s)&&o.push("".concat(n,"--hasActive"));var f=Da(u,s,"".concat(n,"--range"));o.push.apply(o,f);var v=Array.isArray(t)?t:[t];if(a&&v.length===1){var h=a>u[0]?[u[0],a]:[a,u[0]],m=Da(h,s,"".concat(n,"--hover"));o.push.apply(o,m)}return o}var No=(ce={},ce[de.ARABIC]=_.ISLAMIC,ce[de.HEBREW]=_.HEBREW,ce[de.ISO_8601]=_.ISO_8601,ce[de.US]=_.GREGORY,ce);function Lo(e){return e!==void 0&&e in de}var Oa=!1;function lt(e){if(Lo(e)){var t=No[e];return qr(Oa,'Specifying calendarType="'.concat(e,'" is deprecated. Use calendarType="').concat(t,'" instead.')),Oa=!0,t}return e}function ct(e){for(var t=e.className,r=e.count,a=r===void 0?3:r,n=e.dateTransform,o=e.dateType,c=e.end,s=e.hover,u=e.offset,f=e.renderTile,v=e.start,h=e.step,m=h===void 0?1:h,g=e.value,p=e.valueType,S=[],D=v;D<=c;D+=m){var w=n(D);S.push(f({classes:Ao({date:w,dateType:o,hover:s,value:g,valueType:p}),date:w}))}return d.createElement(Qt,{className:t,count:a,offset:u,wrap:!0},S)}function st(e){var t=e.activeStartDate,r=e.children,a=e.classes,n=e.date,o=e.formatAbbr,c=e.locale,s=e.maxDate,u=e.maxDateTransform,f=e.minDate,v=e.minDateTransform,h=e.onClick,m=e.onMouseOver,g=e.style,p=e.tileClassName,S=e.tileContent,D=e.tileDisabled,w=e.view,x=E.useMemo(function(){var M={activeStartDate:t,date:n,view:w};return typeof p=="function"?p(M):p},[t,n,p,w]),P=E.useMemo(function(){var M={activeStartDate:t,date:n,view:w};return typeof S=="function"?S(M):S},[t,n,S,w]);return d.createElement("button",{className:et(a,x),disabled:f&&v(f)>n||s&&u(s)<n||D&&D({activeStartDate:t,date:n,view:w}),onClick:h?function(M){return h(n,M)}:void 0,onFocus:m?function(){return m(n)}:void 0,onMouseOver:m?function(){return m(n)}:void 0,style:g,type:"button"},o?d.createElement("abbr",{"aria-label":o(c,n)},r):r,P)}var Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Pt.apply(this,arguments)},Po=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Sa=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,o;a<n;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))},Mo="react-calendar__century-view__decades__decade";function Wo(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?it:a,o=Po(e,["classes","formatYear"]),c=o.date,s=o.locale;return d.createElement(st,Pt({},o,{classes:Sa(Sa([],r,!0),[Mo],!1),maxDateTransform:nt,minDateTransform:re,view:"century"}),dr(s,n,c))}var Mt=globalThis&&globalThis.__assign||function(){return Mt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Mt.apply(this,arguments)},ja=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Io(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,o=ja(e,["activeStartDate","hover","value","valueType"]),c=mo(t),s=c+99;return d.createElement(ct,{className:"react-calendar__century-view__decades",dateTransform:re,dateType:"decade",end:s,hover:r,renderTile:function(u){var f=u.date,v=ja(u,["date"]);return d.createElement(Wo,Mt({key:f.getTime()},o,v,{activeStartDate:t,date:f}))},start:c,step:10,value:a,valueType:n})}var ka=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,o;a<n;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))},Ro=Object.values(_),Yo=Object.values(de),Wt=["century","decade","year","month"],hr=i.oneOf(ka(ka([],Ro,!0),Yo,!0)),qe=i.oneOfType([i.string,i.arrayOf(i.string)]),Zt=function(t,r,a){var n=t,o=r,c=n[o];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.maxDate;return s&&c>s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, minDate cannot be larger than maxDate.")):null},ea=function(t,r,a){var n=t,o=r,c=n[o];if(!c)return null;if(!(c instanceof Date))return new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, expected instance of `Date`."));var s=t.minDate;return s&&c<s?new Error("Invalid prop `".concat(r,"` of type `").concat(typeof c,"` supplied to `").concat(a,"`, maxDate cannot be smaller than minDate.")):null},Vo=i.oneOfType([i.func,i.exact({current:i.any})]),Fo=i.arrayOf(i.oneOfType([i.instanceOf(Date),i.oneOf([null])]).isRequired),$o=i.oneOfType([i.instanceOf(Date),i.oneOf([null]),Fo]);i.arrayOf(i.oneOf(Wt));var Ke=function(t,r,a){var n=t,o=r,c=n[o];return c!==void 0&&(typeof c!="string"||Wt.indexOf(c)===-1)?new Error("Invalid prop `".concat(r,"` of value `").concat(c,"` supplied to `").concat(a,"`, expected one of [").concat(Wt.map(function(s){return'"'.concat(s,'"')}).join(", "),"].")):null};Ke.isRequired=function(t,r,a,n,o){var c=t,s=r,u=c[s];return u?Ke(t,r,a):new Error("The prop `".concat(r,"` is marked as required in `").concat(a,"`, but its value is `").concat(u,"`."))};var Uo=function(e){return i.arrayOf(e)},ut={activeStartDate:i.instanceOf(Date).isRequired,hover:i.instanceOf(Date),locale:i.string,maxDate:ea,minDate:Zt,onClick:i.func,onMouseOver:i.func,tileClassName:i.oneOfType([i.func,qe]),tileContent:i.oneOfType([i.func,i.node]),value:$o,valueType:i.oneOf(["century","decade","year","month","day"]).isRequired};i.instanceOf(Date).isRequired,i.arrayOf(i.string.isRequired).isRequired,i.instanceOf(Date).isRequired,i.string,i.func,i.func,i.objectOf(i.oneOfType([i.string,i.number])),i.oneOfType([i.func,qe]),i.oneOfType([i.func,i.node]),i.func;var Je=globalThis&&globalThis.__assign||function(){return Je=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Je.apply(this,arguments)},mr=function(t){function r(){return d.createElement(Io,Je({},t))}return d.createElement("div",{className:"react-calendar__century-view"},r())};mr.propTypes=Je({},ut);const Go=mr;var It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},It.apply(this,arguments)},Bo=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ta=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,o;a<n;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))},Ho="react-calendar__decade-view__years__year";function zo(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatYear,n=a===void 0?it:a,o=Bo(e,["classes","formatYear"]),c=o.date,s=o.locale;return d.createElement(st,It({},o,{classes:Ta(Ta([],r,!0),[Ho],!1),maxDateTransform:ot,minDateTransform:ge,view:"decade"}),n(s,c))}var Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rt.apply(this,arguments)},Ca=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function qo(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,o=Ca(e,["activeStartDate","hover","value","valueType"]),c=go(t),s=c+9;return d.createElement(ct,{className:"react-calendar__decade-view__years",dateTransform:ge,dateType:"year",end:s,hover:r,renderTile:function(u){var f=u.date,v=Ca(u,["date"]);return d.createElement(zo,Rt({key:f.getTime()},o,v,{activeStartDate:t,date:f}))},start:c,value:a,valueType:n})}var Xe=globalThis&&globalThis.__assign||function(){return Xe=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xe.apply(this,arguments)},gr=function(t){function r(){return d.createElement(qo,Xe({},t))}return d.createElement("div",{className:"react-calendar__decade-view"},r())};gr.propTypes=Xe({},ut);const Ko=gr;var Yt=globalThis&&globalThis.__assign||function(){return Yt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Yt.apply(this,arguments)},Jo=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ea=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,n=t.length,o;a<n;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))},Xo="react-calendar__year-view__months__month";function Qo(e){var t=e.classes,r=t===void 0?[]:t,a=e.formatMonth,n=a===void 0?so:a,o=e.formatMonthYear,c=o===void 0?lr:o,s=Jo(e,["classes","formatMonth","formatMonthYear"]),u=s.date,f=s.locale;return d.createElement(st,Yt({},s,{classes:Ea(Ea([],r,!0),[Xo],!1),formatAbbr:c,maxDateTransform:Ae,minDateTransform:ne,view:"year"}),n(f,u))}var Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vt.apply(this,arguments)},Aa=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Zo(e){var t=e.activeStartDate,r=e.hover,a=e.value,n=e.valueType,o=Aa(e,["activeStartDate","hover","value","valueType"]),c=0,s=11,u=O(t);return d.createElement(ct,{className:"react-calendar__year-view__months",dateTransform:function(f){var v=new Date;return v.setFullYear(u,f,1),ne(v)},dateType:"month",end:s,hover:r,renderTile:function(f){var v=f.date,h=Aa(f,["date"]);return d.createElement(Qo,Vt({key:v.getTime()},o,h,{activeStartDate:t,date:v}))},start:c,value:a,valueType:n})}var Qe=globalThis&&globalThis.__assign||function(){return Qe=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qe.apply(this,arguments)},yr=function(t){function r(){return d.createElement(Zo,Qe({},t))}return d.createElement("div",{className:"react-calendar__year-view"},r())};yr.propTypes=Qe({},ut);const ei=yr;var Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ft.apply(this,arguments)},ti=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ge="react-calendar__month-view__days__day";function ai(e){var t=e.calendarType,r=e.classes,a=r===void 0?[]:r,n=e.currentMonthIndex,o=e.formatDay,c=o===void 0?lo:o,s=e.formatLongDate,u=s===void 0?co:s,f=ti(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),v=lt(t),h=f.date,m=f.locale,g=[];return a&&g.push.apply(g,a),Ge&&g.push(Ge),fr(h,v)&&g.push("".concat(Ge,"--weekend")),h.getMonth()!==n&&g.push("".concat(Ge,"--neighboringMonth")),d.createElement(st,Ft({},f,{classes:g,formatAbbr:u,maxDateTransform:Jt,minDateTransform:Ne,view:"month"}),c(m,h))}var $t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$t.apply(this,arguments)},Na=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function ri(e){var t=e.activeStartDate,r=e.calendarType,a=e.hover,n=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,c=e.value,s=e.valueType,u=Na(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),f=lt(r),v=O(t),h=Z(t),m=n||o,g=Se(t,f),p=m?0:g,S=(m?-g:0)+1,D=function(){if(n)return S+6*7-1;var w=ir(t);if(o){var x=new Date;x.setFullYear(v,h,w),x.setHours(0,0,0,0);var P=7-Se(x,f)-1;return w+P}return w}();return d.createElement(ct,{className:"react-calendar__month-view__days",count:7,dateTransform:function(w){var x=new Date;return x.setFullYear(v,h,w),Ne(x)},dateType:"day",hover:a,end:D,renderTile:function(w){var x=w.date,P=Na(w,["date"]);return d.createElement(ai,$t({key:x.getTime()},u,P,{activeStartDate:t,currentMonthIndex:h,date:x}))},offset:p,start:S,value:c,valueType:s})}var br="react-calendar__month-view__weekdays",Ct="".concat(br,"__weekday");function ni(e){for(var t=e.calendarType,r=e.formatShortWeekday,a=r===void 0?uo:r,n=e.formatWeekday,o=n===void 0?fo:n,c=e.locale,s=e.onMouseLeave,u=lt(t),f=new Date,v=ne(f),h=O(v),m=Z(v),g=[],p=1;p<=7;p+=1){var S=new Date(h,m,p-Se(v,u)),D=o(c,S);g.push(d.createElement("div",{key:p,className:et(Ct,So(S)&&"".concat(Ct,"--current"),fr(S,u)&&"".concat(Ct,"--weekend"))},d.createElement("abbr",{"aria-label":D,title:D},a(c,S).replace(".",""))))}return d.createElement(Qt,{className:br,count:7,onFocus:s,onMouseOver:s},g)}var Ze=globalThis&&globalThis.__assign||function(){return Ze=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ze.apply(this,arguments)},La=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Pa="react-calendar__tile";function oi(e){var t=e.onClickWeekNumber,r=e.weekNumber,a=d.createElement("span",null,r);if(t){var n=e.date,o=e.onClickWeekNumber,c=e.weekNumber,s=La(e,["date","onClickWeekNumber","weekNumber"]);return d.createElement("button",Ze({},s,{className:Pa,onClick:function(u){return o(c,n,u)},type:"button"}),a)}else{e.date,e.onClickWeekNumber,e.weekNumber;var s=La(e,["date","onClickWeekNumber","weekNumber"]);return d.createElement("div",Ze({},s,{className:Pa}),a)}}function ii(e){var t=e.activeStartDate,r=e.calendarType,a=e.onClickWeekNumber,n=e.onMouseLeave,o=e.showFixedNumberOfWeeks,c=lt(r),s=function(){if(o)return 6;var v=ir(t),h=Se(t,c),m=v-(7-h);return 1+Math.ceil(m/7)}(),u=function(){for(var v=O(t),h=Z(t),m=rt(t),g=[],p=0;p<s;p+=1)g.push(Lt(new Date(v,h,m+p*7),c));return g}(),f=u.map(function(v){return yo(v,c)});return d.createElement(Qt,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},f.map(function(v,h){var m=u[h];if(!m)throw new Error("date is not defined");return d.createElement(oi,{key:v,date:m,onClickWeekNumber:a,weekNumber:v})}))}var ke=globalThis&&globalThis.__assign||function(){return ke=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ke.apply(this,arguments)},li=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function ci(e){if(e)for(var t=0,r=Object.entries(Xn);t<r.length;t++){var a=r[t],n=a[0],o=a[1];if(o.includes(e))return n}return _.ISO_8601}var pr=function(t){var r=t.activeStartDate,a=t.locale,n=t.onMouseLeave,o=t.showFixedNumberOfWeeks,c=t.calendarType,s=c===void 0?ci(a):c,u=t.formatShortWeekday,f=t.formatWeekday,v=t.onClickWeekNumber,h=t.showWeekNumbers,m=li(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function g(){return d.createElement(ni,{calendarType:s,formatShortWeekday:u,formatWeekday:f,locale:a,onMouseLeave:n})}function p(){return h?d.createElement(ii,{activeStartDate:r,calendarType:s,onClickWeekNumber:v,onMouseLeave:n,showFixedNumberOfWeeks:o}):null}function S(){return d.createElement(ri,ke({calendarType:s},m))}var D="react-calendar__month-view";return d.createElement("div",{className:et(D,h?"".concat(D,"--weekNumbers"):"")},d.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},p(),d.createElement("div",{style:{flexGrow:1,width:"100%"}},g(),S())))};pr.propTypes=ke(ke({},ut),{calendarType:hr,formatDay:i.func,formatLongDate:i.func,formatShortWeekday:i.func,formatWeekday:i.func,onClickWeekNumber:i.func,onMouseLeave:i.func,showFixedNumberOfWeeks:i.bool,showNeighboringMonth:i.bool,showWeekNumbers:i.bool});const si=pr;var ve=globalThis&&globalThis.__assign||function(){return ve=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ve.apply(this,arguments)},Be="react-calendar",he=["century","decade","year","month"],ui=["decade","year","month","day"],ta=new Date;ta.setFullYear(1,0,1);ta.setHours(0,0,0,0);var di=new Date(864e13);function De(e){return e instanceof Date?e:new Date(e)}function xr(e,t){return he.slice(he.indexOf(e),he.indexOf(t)+1)}function fi(e,t,r){var a=xr(t,r);return a.indexOf(e)!==-1}function aa(e,t,r){return e&&fi(e,t,r)?e:r}function wr(e){var t=he.indexOf(e);return ui[t]}function vi(e,t){var r=Array.isArray(e)?e[t]:e;if(!r)return null;var a=De(r);if(isNaN(a.getTime()))throw new Error("Invalid date: ".concat(e));return a}function _r(e,t){var r=e.value,a=e.minDate,n=e.maxDate,o=e.maxDetail,c=vi(r,t);if(!c)return null;var s=wr(o),u=function(){switch(t){case 0:return ee(s,c);case 1:return sr(s,c);default:throw new Error("Invalid index value: ".concat(t))}}();return To(u,a,n)}var ra=function(e){return _r(e,0)},Dr=function(e){return _r(e,1)},hi=function(e){return[ra,Dr].map(function(t){return t(e)})};function Or(e){var t=e.maxDate,r=e.maxDetail,a=e.minDate,n=e.minDetail,o=e.value,c=e.view,s=aa(c,n,r),u=ra({value:o,minDate:a,maxDate:t,maxDetail:r})||new Date;return ee(s,u)}function mi(e){var t=e.activeStartDate,r=e.defaultActiveStartDate,a=e.defaultValue,n=e.defaultView,o=e.maxDate,c=e.maxDetail,s=e.minDate,u=e.minDetail,f=e.value,v=e.view,h=aa(v,u,c),m=t||r;return m?ee(h,m):Or({maxDate:o,maxDetail:c,minDate:s,minDetail:u,value:f||a,view:v||n})}function Et(e){return e&&(!Array.isArray(e)||e.length===1)}function He(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Sr=E.forwardRef(function(t,r){var a=t.activeStartDate,n=t.allowPartialRange,o=t.calendarType,c=t.className,s=t.defaultActiveStartDate,u=t.defaultValue,f=t.defaultView,v=t.formatDay,h=t.formatLongDate,m=t.formatMonth,g=t.formatMonthYear,p=t.formatShortWeekday,S=t.formatWeekday,D=t.formatYear,w=t.goToRangeStartOnSelect,x=w===void 0?!0:w,P=t.inputRef,M=t.locale,G=t.maxDate,R=G===void 0?di:G,Le=t.maxDetail,V=Le===void 0?"month":Le,ye=t.minDate,B=ye===void 0?ta:ye,Pe=t.minDetail,K=Pe===void 0?"century":Pe,Me=t.navigationAriaLabel,ie=t.navigationAriaLive,dt=t.navigationLabel,W=t.next2AriaLabel,ft=t.next2Label,vt=t.nextAriaLabel,J=t.nextLabel,A=t.onActiveStartDateChange,X=t.onChange,le=t.onClickDay,be=t.onClickDecade,We=t.onClickMonth,ht=t.onClickWeekNumber,Ie=t.onClickYear,pe=t.onDrillDown,xe=t.onDrillUp,Q=t.onViewChange,mt=t.prev2AriaLabel,gt=t.prev2Label,Re=t.prevAriaLabel,yt=t.prevLabel,C=t.returnValue,we=C===void 0?"start":C,Y=t.selectRange,Ye=t.showDoubleView,na=t.showFixedNumberOfWeeks,oa=t.showNavigation,Tr=oa===void 0?!0:oa,ia=t.showNeighboringMonth,Cr=ia===void 0?!0:ia,Er=t.showWeekNumbers,Ar=t.tileClassName,Nr=t.tileContent,Lr=t.tileDisabled,bt=t.value,la=t.view,ca=E.useState(s),Pr=ca[0],Ve=ca[1],sa=E.useState(null),Mr=sa[0],ua=sa[1],da=E.useState(Array.isArray(u)?u.map(function(y){return y!==null?De(y):null}):u!=null?De(u):null),pt=da[0],Wr=da[1],fa=E.useState(f),Ir=fa[0],va=fa[1],N=a||Pr||mi({activeStartDate:a,defaultActiveStartDate:s,defaultValue:u,defaultView:f,maxDate:R,maxDetail:V,minDate:B,minDetail:K,value:bt,view:la}),L=function(){var y=function(){return Y&&Et(pt)?pt:bt!==void 0?bt:pt}();return y?Array.isArray(y)?y.map(function(k){return k!==null?De(k):null}):y!==null?De(y):null:null}(),Fe=wr(V),j=aa(la||Ir,K,V),H=xr(K,V),Rr=Y?Mr:null,xt=H.indexOf(j)<H.length-1,ha=H.indexOf(j)>0,ma=E.useCallback(function(y){var k=function(){switch(we){case"start":return ra;case"end":return Dr;case"range":return hi;default:throw new Error("Invalid returnValue.")}}();return k({maxDate:R,maxDetail:V,minDate:B,value:y})},[R,V,B,we]),wt=E.useCallback(function(y,k){Ve(y);var T={action:k,activeStartDate:y,value:L,view:j};A&&!He(N,y)&&A(T)},[N,A,L,j]),$e=E.useCallback(function(y,k){var T=function(){switch(j){case"century":return be;case"decade":return Ie;case"year":return We;case"month":return le;default:throw new Error("Invalid view: ".concat(j,"."))}}();T&&T(y,k)},[le,be,We,Ie,j]),_t=E.useCallback(function(y,k){if(xt){$e(y,k);var T=H[H.indexOf(j)+1];if(!T)throw new Error("Attempted to drill down from the lowest view.");Ve(y),va(T);var F={action:"drillDown",activeStartDate:y,value:L,view:T};A&&!He(N,y)&&A(F),Q&&j!==T&&Q(F),pe&&pe(F)}},[N,xt,A,$e,pe,Q,L,j,H]),Dt=E.useCallback(function(){if(ha){var y=H[H.indexOf(j)-1];if(!y)throw new Error("Attempted to drill up from the highest view.");var k=ee(y,N);Ve(k),va(y);var T={action:"drillUp",activeStartDate:k,value:L,view:y};A&&!He(N,k)&&A(T),Q&&j!==y&&Q(T),xe&&xe(T)}},[N,ha,A,xe,Q,L,j,H]),Ot=E.useCallback(function(y,k){var T=L;$e(y,k);var F=Y&&!Et(T),$;if(Y)if(F)$=ee(Fe,y);else{if(!T)throw new Error("previousValue is required");if(Array.isArray(T))throw new Error("previousValue must not be an array");$=Do(Fe,T,y)}else $=ma(y);var jt=!Y||F||x?Or({maxDate:R,maxDetail:V,minDate:B,minDetail:K,value:$,view:j}):null;k.persist(),Ve(jt),Wr($);var $r={action:"onChange",activeStartDate:jt,value:$,view:j};if(A&&!He(N,jt)&&A($r),X)if(Y){var Ur=Et($);if(!Ur)X($||null,k);else if(n){if(Array.isArray($))throw new Error("value must not be an array");X([$||null,null],k)}}else X($||null,k)},[N,n,ma,x,R,V,B,K,A,X,$e,Y,L,Fe,j]);function Yr(y){ua(y)}function St(){ua(null)}E.useImperativeHandle(r,function(){return{activeStartDate:N,drillDown:_t,drillUp:Dt,onChange:Ot,setActiveStartDate:wt,value:L,view:j}},[N,_t,Dt,Ot,wt,L,j]);function ga(y){var k=y?cr(j,N):ee(j,N),T=xt?_t:Ot,F={activeStartDate:k,hover:Rr,locale:M,maxDate:R,minDate:B,onClick:T,onMouseOver:Y?Yr:void 0,tileClassName:Ar,tileContent:Nr,tileDisabled:Lr,value:L,valueType:Fe};switch(j){case"century":return d.createElement(Go,ve({formatYear:D},F));case"decade":return d.createElement(Ko,ve({formatYear:D},F));case"year":return d.createElement(ei,ve({formatMonth:m,formatMonthYear:g},F));case"month":return d.createElement(si,ve({calendarType:o,formatDay:v,formatLongDate:h,formatShortWeekday:p,formatWeekday:S,onClickWeekNumber:ht,onMouseLeave:Y?St:void 0,showFixedNumberOfWeeks:typeof na<"u"?na:Ye,showNeighboringMonth:Cr,showWeekNumbers:Er},F));default:throw new Error("Invalid view: ".concat(j,"."))}}function Vr(){return Tr?d.createElement(jo,{activeStartDate:N,drillUp:Dt,formatMonthYear:g,formatYear:D,locale:M,maxDate:R,minDate:B,navigationAriaLabel:Me,navigationAriaLive:ie,navigationLabel:dt,next2AriaLabel:W,next2Label:ft,nextAriaLabel:vt,nextLabel:J,prev2AriaLabel:mt,prev2Label:gt,prevAriaLabel:Re,prevLabel:yt,setActiveStartDate:wt,showDoubleView:Ye,view:j,views:H}):null}var Fr=Array.isArray(L)?L:[L];return d.createElement("div",{className:et(Be,Y&&Fr.length===1&&"".concat(Be,"--selectRange"),Ye&&"".concat(Be,"--doubleView"),c),ref:P},Vr(),d.createElement("div",{className:"".concat(Be,"__viewContainer"),onBlur:Y?St:void 0,onMouseLeave:Y?St:void 0},ga(),Ye?ga(!0):null))}),Ma=i.instanceOf(Date),Wa=i.oneOfType([i.string,i.instanceOf(Date)]),Ia=i.oneOfType([Wa,Uo(Wa)]);Sr.propTypes={activeStartDate:Ma,allowPartialRange:i.bool,calendarType:hr,className:qe,defaultActiveStartDate:Ma,defaultValue:Ia,defaultView:Ke,formatDay:i.func,formatLongDate:i.func,formatMonth:i.func,formatMonthYear:i.func,formatShortWeekday:i.func,formatWeekday:i.func,formatYear:i.func,goToRangeStartOnSelect:i.bool,inputRef:Vo,locale:i.string,maxDate:ea,maxDetail:i.oneOf(he),minDate:Zt,minDetail:i.oneOf(he),navigationAriaLabel:i.string,navigationAriaLive:i.oneOf(["off","polite","assertive"]),navigationLabel:i.func,next2AriaLabel:i.string,next2Label:i.node,nextAriaLabel:i.string,nextLabel:i.node,onActiveStartDateChange:i.func,onChange:i.func,onClickDay:i.func,onClickDecade:i.func,onClickMonth:i.func,onClickWeekNumber:i.func,onClickYear:i.func,onDrillDown:i.func,onDrillUp:i.func,onViewChange:i.func,prev2AriaLabel:i.string,prev2Label:i.node,prevAriaLabel:i.string,prevLabel:i.node,returnValue:i.oneOf(["start","end","range"]),selectRange:i.bool,showDoubleView:i.bool,showFixedNumberOfWeeks:i.bool,showNavigation:i.bool,showNeighboringMonth:i.bool,showWeekNumbers:i.bool,tileClassName:i.oneOfType([i.func,qe]),tileContent:i.oneOfType([i.func,i.node]),tileDisabled:i.func,value:Ia,view:Ke};const gi=Sr,yi=b(Kr)`
  @media screen and (min-width: 1440px) {
    padding-right: 64px;
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    width: 760px;
  }
`,se=b(I)`
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
    &[name='userName'] {
      width: calc(50% - 7px);
      margin-right: 14px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 14px;
    }
  }
`,ze=b.label`
  width: calc(50% - 7px);
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 10.5px);
  }
`,ue=b.p`
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
`,bi=b.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 12px;
`,pi=b(gi)`
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
`,xi=b.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  height: ${e=>e["data-isopen"]==="close"?"0px":"260px"};
  overflow: hidden;
  transition: height 0.5s ease;
`,wi=b.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translate(0, -15%);
  stroke: rgba(239, 237, 232, 1);
`,_i=b.div`
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
`,U=b.label`
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
    сursor: pointer;
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
`,Di=b.div`
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
`,Oi=b.button`
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
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;const jr=({userParams:e})=>{const[t,r]=E.useState(!1),{name:a,email:n,bodyData:o,avatarUrl:c}=e,{height:s,birthday:u,blood:f,currentWeight:v,desiredWeight:h,levelActivity:m,sex:g}=o,p={name:a,email:n,height:s,currentWeight:v,desiredWeight:h,blood:f,sex:g,levelActivity:m,birthday:new Date(u),avatarUrl:c},S=x=>{console.log("e",x),r(!1)},D=()=>{r(!t)},w=x=>["Su","Mo","Tu","We","Th","Fr","Sa"][x.getDay()];return l.jsx(Jr,{initialValues:p,onSubmit:S,children:({values:x,setFieldValue:P,dirty:M})=>l.jsxs(yi,{children:[l.jsx(ue,{children:"Basic info"}),l.jsx("label",{children:l.jsx(se,{type:"text",name:"name"})}),l.jsx("label",{children:l.jsx(se,{disabled:!0,type:"text",name:"email"})}),l.jsxs(bi,{children:[l.jsxs(ze,{children:[l.jsx(ue,{children:"Height"}),l.jsx(se,{type:"text",name:"height"})]}),l.jsxs(ze,{children:[l.jsx(ue,{children:"Current Weight"}),l.jsx(se,{type:"text",name:"currentWeight"})]}),l.jsxs(ze,{children:[l.jsx(ue,{children:"Desired Weight"}),l.jsx(se,{type:"text",name:"desiredWeight"})]}),l.jsxs(ze,{onClick:D,children:[l.jsx(ue,{id:"calendarTitle",children:"Calendar"}),l.jsx(wi,{children:l.jsx("use",{href:At+"#icon-calendar"})}),l.jsx(se,{disabled:!0,onChange:G=>P("birthday",G),value:`${x.birthday.getDate()}.${x.birthday.getMonth()+1}.${x.birthday.getFullYear()}`,type:"text",name:"birthday"})]}),l.jsx(xi,{"data-isopen":`${t?"open":"close"}`,children:l.jsx(I,{name:"birthday",children:()=>l.jsx(pi,{locale:"en-US",onChange:G=>P("birthday",G),value:x.birthday,formatShortWeekday:(G,R)=>w(R),onClickDay:D})})})]}),l.jsx(ue,{children:"Blood"}),l.jsxs(_i,{children:[l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"blood",value:"1"})," ",l.jsx("p",{children:"1"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"blood",value:"2"}),l.jsx("p",{children:"2"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"blood",value:"3"}),l.jsx("p",{children:"3"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"blood",value:"4"}),l.jsx("p",{children:"4"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"sex",value:"Male"}),l.jsx("p",{children:"Male"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx(I,{type:"radio",name:"sex",value:"Female"}),l.jsx("p",{children:"Female"}),l.jsx("span",{})]})]}),l.jsxs(Di,{children:[l.jsxs(U,{children:[l.jsx("p",{children:"Sedentary lifestyle (little or no physical activity)"}),l.jsx(I,{type:"radio",name:"levelActivity",value:"1"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Light activity (light exercises/sports 1-3 days per week)"}),l.jsx(I,{type:"radio",name:"levelActivity",value:"2"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),l.jsx(I,{type:"radio",name:"levelActivity",value:"3"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Very active (intense exercises/sports 6-7 days per week)"}),l.jsx(I,{type:"radio",name:"levelActivity",value:"4"}),l.jsx("span",{})]}),l.jsxs(U,{children:[l.jsx("p",{children:"Extremely active (very strenuous exercises/sports and physical work)"}),l.jsx(I,{type:"radio",name:"levelActivity",value:"Extremely"}),l.jsx("span",{})]})]}),l.jsx(Oi,{disabled:!M,type:"submit",children:"Save"})]})})};jr.propTypes={userParams:i.object.isRequired};const Si=b.div`
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
`,ji=b.div`
  position: relative;
`,ki=b.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ti=b.button`
  width: 32px;
  height: 32px;
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
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    top: 138px;
    & svg {
      width: 32px;
      height: 32px;
    }
  }
`,Ci=b.p`
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
`,Ei=b.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`,Ai=b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  & > :first-child {
    margin-right: 14px;
  }
`,Ra=b.div`
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
`,Ya=b.img`
  margin-right: 8px;
`,Va=b.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`,Ni=b.div`
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
`,Li=b.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 18px;
`,Pi=b.svg`
  width: 120px;
  height: 120px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`,Mi="/GachiClub/assets/tabler_exclamation-mark-2580bad6.svg",Wi="/GachiClub/assets/spoon_fork-1250d3b9.svg",Ii="/GachiClub/assets/favicon-f5a438b0.svg",Ri="2200",Yi="110",kr=({userData:e})=>{const{name:t,avatarUrl:r}=e,[a,n]=E.useState(r),o=s=>{const u=s.target.files[0];n(u),n(u)},c={display:"flex",justifyContent:"center",alignItems:"center",margin:"0",padding:"0",gap:"8px",color:"#efede8",backgroundColor:"transparent",border:"none",marginLeft:"auto !important",marginBottom:"36px"};return l.jsxs("div",{children:[l.jsxs(ji,{children:[l.jsx(Si,{children:a===null?l.jsx(Pi,{children:l.jsx("use",{xlinkHref:`${At}#icon-addPhoto`})}):l.jsx(ki,{width:"100%",src:a===r?r:URL.createObjectURL(a),alt:"scelet user"})}),l.jsxs(Ti,{children:[l.jsx("input",{placeholder:"",type:"file",accept:"image/*",onChange:o}),l.jsx("svg",{children:l.jsx("use",{xlinkHref:`${At}#icon-addPhoto`})})]})]}),l.jsx(Ci,{children:t}),l.jsx(Ei,{children:"User"}),l.jsxs(Ai,{children:[l.jsxs(Ra,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx(Ya,{src:Wi,alt:"spoon and fork"}),l.jsx(Va,{children:"Daily calorie intake"})]}),l.jsx("p",{children:Ri})]}),l.jsxs(Ra,{children:[l.jsxs("div",{style:{display:"flex"},children:[l.jsx(Ya,{src:Ii,alt:"dumbbell"}),l.jsx(Va,{children:"Daily norm of sports"})]}),l.jsxs("p",{children:[Yi," min"]})]})]}),l.jsxs(Ni,{children:[l.jsx("img",{src:Mi,alt:"exclamation mark"}),l.jsx(Li,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),l.jsx(Br,{customStyles:c})]})};kr.propTypes={userData:i.object.isRequired};const Vi=e=>e.profile,Fi=e=>e.auth.token,Bi=()=>{const e=ya(Fi),t=Hr(),{isLoading:r,data:a}=ya(Vi);return E.useEffect(()=>{t(zr(e))},[t,e]),r?l.jsx("h1",{children:"Loading Profile"}):l.jsxs(Xr,{children:[l.jsx(Qr,{children:"Profile Settings"}),l.jsxs(Zr,{children:[l.jsx(kr,{userData:a}),l.jsx(jr,{userParams:a})]})]})};export{Bi as default};
