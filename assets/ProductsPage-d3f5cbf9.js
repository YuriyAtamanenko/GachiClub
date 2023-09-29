import{o as qt,r as p,E as Xt,p as Kt,s as Qt,q as C,_ as Zt,h as se,t as F,i as Jt,u as Ee,b as ne,v as en,j as f,I as ie,w as le,n as O,P as j,x as tn,y as pt,z as nn,A as on,L as Ne,B as rn,C as an,D as un}from"./index-4a125ef8.js";import{s as $}from"./styled-components.browser.esm-2266088c.js";import{_ as ft,f as sn,a as ln,b as cn,c as dn,e as pn}from"./createClass-d08eace5.js";import{r as Se}from"./react-responsive-b20a546c.js";function fn(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var S=function(t,i){var o=arguments;if(i==null||!qt.call(i,"css"))return p.createElement.apply(void 0,o);var e=o.length,a=new Array(e);a[0]=Xt,a[1]=Kt(t,i);for(var u=2;u<e;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Le(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Qt(t)}var hn=function(){var t=Le.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const mn="/GachiClub/assets/products-desktop-1x-e8c375a5.jpg",gn="/GachiClub/assets/products-desktop-2x-85e8f868.jpg",vn=$.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;

    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${mn});
    background-repeat: no-repeat;
    background-position: 100% 0;
    padding-top: 68px;
    position: relative;
    margin-right: -7vw;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${gn});
    }
  }
`,bn=$.h2`
  @media screen and (min-width: 375px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 116.667%;

    color: var(--primary-text-color);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 32px;

    font-size: 32px;
    line-height: 137.5%;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;

    align-items: center;
  }
`,xn=$.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-right: -32px;
  }
`,En=$.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  padding-bottom: 340px;
`;function Cn(n){if(Array.isArray(n))return n}function Sn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,u,r=[],s=!0,l=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;s=!1}else for(;!(s=(o=a.call(i)).done)&&(r.push(o.value),r.length!==t);s=!0);}catch(c){l=!0,e=c}finally{try{if(!s&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(l)throw e}}return r}}function yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return Cn(n)||Sn(n,t)||ft(n,t)||yn()}function K(n,t){if(n==null)return{};var i=fn(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Fn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function wn(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,r=n.inputValue,s=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,x=n.value,v=K(n,Fn),b=p.useState(r!==void 0?r:i),h=X(b,2),m=h[0],M=h[1],D=p.useState(s!==void 0?s:e),w=X(D,2),E=w[0],y=w[1],I=p.useState(x!==void 0?x:u),A=X(I,2),P=A[0],H=A[1],U=p.useCallback(function(G,Q){typeof l=="function"&&l(G,Q),H(G)},[l]),T=p.useCallback(function(G,Q){var Z;typeof c=="function"&&(Z=c(G,Q)),M(Z!==void 0?Z:G)},[c]),_=p.useCallback(function(){typeof g=="function"&&g(),y(!0)},[g]),R=p.useCallback(function(){typeof d=="function"&&d(),y(!1)},[d]),L=r!==void 0?r:m,z=s!==void 0?s:E,W=x!==void 0?x:P;return C(C({},v),{},{inputValue:L,menuIsOpen:z,onChange:U,onInputChange:T,onMenuClose:R,onMenuOpen:_,value:W})}function Dn(n){if(Array.isArray(n))return sn(n)}function On(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(n){return Dn(n)||On(n)||ft(n)||Mn()}function An(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const In=Math.min,Vn=Math.max,he=Math.round,ce=Math.floor,me=n=>({x:n,y:n});function Pn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function mt(n){return vt(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function gt(n){var t;return(t=(vt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function vt(n){return n instanceof Node||n instanceof N(n).Node}function Ve(n){return n instanceof Element||n instanceof N(n).Element}function ke(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function bt(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=Te(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function Rn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ln(n){return["html","body","#document"].includes(mt(n))}function Te(n){return N(n).getComputedStyle(n)}function kn(n){if(mt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||gt(n);return Ue(t)?t.host:t}function xt(n){const t=kn(n);return Ln(t)?n.ownerDocument?n.ownerDocument.body:n.body:ke(t)&&bt(t)?t:xt(t)}function ge(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=xt(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),u=N(e);return a?t.concat(u,u.visualViewport||[],bt(e)?e:[],u.frameElement&&i?ge(u.frameElement):[]):t.concat(e,ge(e))}function Tn(n){const t=Te(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=ke(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:o,r=he(i)!==a||he(o)!==u;return r&&(i=a,o=u),{width:i,height:o,$:r}}function Be(n){return Ve(n)?n:n.contextElement}function ye(n){const t=Be(n);if(!ke(t))return me(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=Tn(t);let u=(a?he(i.width):i.width)/o,r=(a?he(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!r||!Number.isFinite(r))&&(r=1),{x:u,y:r}}const Bn=me(0);function jn(n){const t=N(n);return!Rn()||!t.visualViewport?Bn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Hn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(n)?!1:t}function _e(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Be(n);let u=me(1);t&&(o?Ve(o)&&(u=ye(o)):u=ye(n));const r=Hn(a,i,o)?jn(a):me(0);let s=(e.left+r.x)/u.x,l=(e.top+r.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const g=N(a),x=o&&Ve(o)?N(o):o;let v=g.frameElement;for(;v&&o&&x!==g;){const b=ye(v),h=v.getBoundingClientRect(),m=Te(v),M=h.left+(v.clientLeft+parseFloat(m.paddingLeft))*b.x,D=h.top+(v.clientTop+parseFloat(m.paddingTop))*b.y;s*=b.x,l*=b.y,c*=b.x,d*=b.y,s+=M,l+=D,v=N(v).frameElement}}return Pn({width:c,height:d,x:s,y:l})}function $n(n,t){let i=null,o;const e=gt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(r,s){r===void 0&&(r=!1),s===void 0&&(s=1),a();const{left:l,top:c,width:d,height:g}=n.getBoundingClientRect();if(r||t(),!d||!g)return;const x=ce(c),v=ce(e.clientWidth-(l+d)),b=ce(e.clientHeight-(c+g)),h=ce(l),M={rootMargin:-x+"px "+-v+"px "+-b+"px "+-h+"px",threshold:Vn(0,In(1,s))||1};let D=!0;function w(E){const y=E[0].intersectionRatio;if(y!==s){if(!D)return u();y?u(!1,y):o=setTimeout(()=>{u(!1,1e-7)},100)}D=!1}try{i=new IntersectionObserver(w,{...M,root:e.ownerDocument})}catch{i=new IntersectionObserver(w,M)}i.observe(n)}return u(!0),a}function zn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:r=typeof IntersectionObserver=="function",animationFrame:s=!1}=o,l=Be(n),c=e||a?[...l?ge(l):[],...ge(t)]:[];c.forEach(m=>{e&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&r?$n(l,i):null;let g=-1,x=null;u&&(x=new ResizeObserver(m=>{let[M]=m;M&&M.target===l&&x&&(x.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{x&&x.observe(t)})),i()}),l&&!s&&x.observe(l),x.observe(t));let v,b=s?_e(n):null;s&&h();function h(){const m=_e(n);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,v=requestAnimationFrame(h)}return i(),()=>{c.forEach(m=>{e&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),x&&x.disconnect(),x=null,s&&cancelAnimationFrame(v)}}var Pe=p.useLayoutEffect,Nn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Un(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function _n(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Un(n,u)));return a.filter(function(r){return r}).map(function(r){return String(r).trim()}).join(" ")}var We=function(t){return Jn(t)?t.filter(Boolean):Zt(t)==="object"&&t!==null?[t]:[]},Et=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,Nn);return C({},i)},V=function(t,i,o){var e=t.cx,a=t.getStyles,u=t.getClassNames,r=t.className;return{css:a(i,t),className:e(o??{},u(i,t),r)}};function Ce(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Wn(n){return Ce(n)?window.innerHeight:n.clientHeight}function Ct(n){return Ce(n)?window.pageYOffset:n.scrollTop}function be(n,t){if(Ce(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Gn(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Yn(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function de(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=Ct(n),a=t-e,u=10,r=0;function s(){r+=u;var l=Yn(r,e,a,i);be(n,l),r<i?window.requestAnimationFrame(s):o(n)}s()}function Ge(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?be(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&be(n,Math.max(t.offsetTop-e,0))}function qn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ye(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Xn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var St=!1,Kn={get passive(){return St=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",ve,Kn),pe.removeEventListener("p",ve,!1));var Qn=St;function Zn(n){return n!=null}function Jn(n){return Array.isArray(n)}function fe(n,t,i){return n?t:i}var ei=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var r=X(u,1),s=r[0];return!o.includes(s)});return a.reduce(function(u,r){var s=X(r,2),l=s[0],c=s[1];return u[l]=c,u},{})},ti=["children","innerProps"],ni=["children","innerProps"];function ii(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,r=n.controlHeight,s=Gn(i),l={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return l;var c=s.getBoundingClientRect(),d=c.height,g=i.getBoundingClientRect(),x=g.bottom,v=g.height,b=g.top,h=i.offsetParent.getBoundingClientRect(),m=h.top,M=u?window.innerHeight:Wn(s),D=Ct(s),w=parseInt(getComputedStyle(i).marginBottom,10),E=parseInt(getComputedStyle(i).marginTop,10),y=m-E,I=M-b,A=y+D,P=d-D-b,H=x-M+D+w,U=D+b-E,T=160;switch(e){case"auto":case"bottom":if(I>=v)return{placement:"bottom",maxHeight:t};if(P>=v&&!u)return a&&de(s,H,T),{placement:"bottom",maxHeight:t};if(!u&&P>=o||u&&I>=o){a&&de(s,H,T);var _=u?I-w:P-w;return{placement:"bottom",maxHeight:_}}if(e==="auto"||u){var R=t,L=u?y:A;return L>=o&&(R=Math.min(L-w-r,t)),{placement:"top",maxHeight:R}}if(e==="bottom")return a&&be(s,H),{placement:"bottom",maxHeight:t};break;case"top":if(y>=v)return{placement:"top",maxHeight:t};if(A>=v&&!u)return a&&de(s,U,T),{placement:"top",maxHeight:t};if(!u&&A>=o||u&&y>=o){var z=t;return(!u&&A>=o||u&&y>=o)&&(z=u?y-E:A-E),a&&de(s,U,T),{placement:"top",maxHeight:z}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return l}function oi(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var yt=function(t){return t==="auto"?"bottom":t},ri=function(t,i){var o,e=t.placement,a=t.theme,u=a.borderRadius,r=a.spacing,s=a.colors;return C((o={label:"menu"},se(o,oi(e),"100%"),se(o,"position","absolute"),se(o,"width","100%"),se(o,"zIndex",1),o),i?{}:{backgroundColor:s.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:r.menuGutter,marginTop:r.menuGutter})},Ft=p.createContext(null),ai=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,r=t.menuShouldScrollIntoView,s=t.theme,l=p.useContext(Ft)||{},c=l.setPortalPlacement,d=p.useRef(null),g=p.useState(e),x=X(g,2),v=x[0],b=x[1],h=p.useState(null),m=X(h,2),M=m[0],D=m[1],w=s.spacing.controlHeight;return Pe(function(){var E=d.current;if(E){var y=u==="fixed",I=r&&!y,A=ii({maxHeight:e,menuEl:E,minHeight:o,placement:a,shouldScroll:I,isFixedPosition:y,controlHeight:w});b(A.maxHeight),D(A.placement),c==null||c(A.placement)}},[e,a,u,r,o,c,w]),i({ref:d,placerProps:C(C({},t),{},{placement:M||yt(a),maxHeight:v})})},ui=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return S("div",F({},V(t,"menu",{menu:!0}),{ref:o},e),i)},si=ui,li=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ci=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",F({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},wt=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},di=wt,pi=wt,fi=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=K(t,ti);return S("div",F({},V(C(C({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},hi=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,ni);return S("div",F({},V(C(C({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},mi=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},gi=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,r=t.menuPosition,s=p.useRef(null),l=p.useRef(null),c=p.useState(yt(u)),d=X(c,2),g=d[0],x=d[1],v=p.useMemo(function(){return{setPortalPlacement:x}},[]),b=p.useState(null),h=X(b,2),m=h[0],M=h[1],D=p.useCallback(function(){if(e){var I=qn(e),A=r==="fixed"?0:window.pageYOffset,P=I[g]+A;(P!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&M({offset:P,rect:I})}},[e,r,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Pe(function(){D()},[D]);var w=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),e&&s.current&&(l.current=zn(e,s.current,D,{elementResize:"ResizeObserver"in window}))},[e,D]);Pe(function(){w()},[w]);var E=p.useCallback(function(I){s.current=I,w()},[w]);if(!i&&r!=="fixed"||!m)return null;var y=S("div",F({ref:E},V(C(C({},t),{},{offset:m.offset,position:r,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(Ft.Provider,{value:v},i?Jt.createPortal(y,i):y)},vi=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},bi=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",F({},V(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},xi=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Ei=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",F({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},Ci=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Si=function(t){var i=t.children,o=t.innerProps;return S("div",F({},V(t,"indicatorsContainer",{indicators:!0}),o),i)},qe,yi=["size"],Fi=["innerProps","isRtl","size"],wi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dt=function(t){var i=t.size,o=K(t,yi);return S("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:wi},o))},je=function(t){return S(Dt,F({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ot=function(t){return S(Dt,F({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Mt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Di=Mt,Oi=function(t){var i=t.children,o=t.innerProps;return S("div",F({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||S(Ot,null))},Mi=Mt,Ai=function(t){var i=t.children,o=t.innerProps;return S("div",F({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||S(je,null))},Ii=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Vi=function(t){var i=t.innerProps;return S("span",F({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Pi=hn(qe||(qe=An([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ri=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,u=a.colors,r=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:r*2})},Fe=function(t){var i=t.delay,o=t.offset;return S("span",{css:Le({animation:"".concat(Pi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Li=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,u=K(t,Fi);return S("div",F({},V(C(C({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(Fe,{delay:0,offset:o}),S(Fe,{delay:160,offset:!0}),S(Fe,{delay:320,offset:!o}))},ki=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,r=a.borderRadius,s=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:e?u.primary:u.neutral20,borderRadius:r,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Ti=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,r=t.menuIsOpen;return S("div",F({ref:a},V(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":r}),u),i)},Bi=Ti,ji=["data"],Hi=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},$i=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,r=t.headingProps,s=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return S("div",F({},V(t,"group",{group:!0}),s),S(u,F({},r,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),l),S("div",null,i))},zi=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ni=function(t){var i=Et(t);i.data;var o=K(i,ji);return S("div",F({},V(t,"groupHeading",{"group-heading":!0}),o))},Ui=$i,_i=["innerRef","isDisabled","isHidden","inputClassName"],Wi=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,r=a.colors;return C(C({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},Gi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:r.neutral80})},At={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},At)},Yi=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},At)},qi=function(t){var i=t.cx,o=t.value,e=Et(t),a=e.innerRef,u=e.isDisabled,r=e.isHidden,s=e.inputClassName,l=K(e,_i);return S("div",F({},V(t,"input",{"input-container":!0}),{"data-value":o||""}),S("input",F({className:i({input:!0},s),ref:a,style:Yi(r),disabled:u},l)))},Xi=qi,Ki=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Qi=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Zi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors,r=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:r?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},It=function(t){var i=t.children,o=t.innerProps;return S("div",o,i)},Ji=It,eo=It;function to(n){var t=n.children,i=n.innerProps;return S("div",F({role:"button"},i),t||S(je,{size:14}))}var no=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,r=t.removeProps,s=t.selectProps,l=o.Container,c=o.Label,d=o.Remove;return S(l,{data:e,innerProps:C(C({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:s},S(c,{data:e,innerProps:C({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},i),S(d,{data:e,innerProps:C(C({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},r),selectProps:s}))},io=no,oo=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,r=u.spacing,s=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?s.primary:e?s.primary25:"transparent",color:o?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(r.baseUnit*2,"px ").concat(r.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?s.primary:s.primary50}})},ro=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,r=t.innerProps;return S("div",F({},V(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":o},r),i)},ao=ro,uo=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},so=function(t){var i=t.children,o=t.innerProps;return S("div",F({},V(t,"placeholder",{placeholder:!0}),o),i)},lo=so,co=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},po=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return S("div",F({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},fo=po,ho={ClearIndicator:Ai,Control:Bi,DropdownIndicator:Oi,DownChevron:Ot,CrossIcon:je,Group:Ui,GroupHeading:Ni,IndicatorsContainer:Si,IndicatorSeparator:Vi,Input:Xi,LoadingIndicator:Li,Menu:si,MenuList:ci,MenuPortal:gi,LoadingMessage:hi,NoOptionsMessage:fi,MultiValue:io,MultiValueContainer:Ji,MultiValueLabel:eo,MultiValueRemove:to,Option:ao,Placeholder:lo,SelectContainer:bi,SingleValue:fo,ValueContainer:Ei},mo=function(t){return C(C({},ho),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function go(n,t){return!!(n===t||Xe(n)&&Xe(t))}function vo(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!go(n[i],t[i]))return!1;return!0}function bo(n,t){t===void 0&&(t=vo);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return o.clear=function(){i=null},o}var xo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Eo=function(t){return S("span",F({css:xo},t))},Ke=Eo,Co={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.isDisabled,a=t.tabSelectsValue,u=t.context;switch(u){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,r=t.selectValue,s=t.isDisabled,l=t.isSelected,c=function(v,b){return v&&v.length?"".concat(v.indexOf(b)+1," of ").concat(v.length):""};if(i==="value"&&r)return"value ".concat(u," focused, ").concat(c(r,o),".");if(i==="menu"){var d=s?" disabled":"",g="".concat(l?"selected":"focused").concat(d);return"option ".concat(u," ").concat(g,", ").concat(c(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},So=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,r=t.selectValue,s=t.selectProps,l=t.id,c=s.ariaLiveMessages,d=s.getOptionLabel,g=s.inputValue,x=s.isMulti,v=s.isOptionDisabled,b=s.isSearchable,h=s.menuIsOpen,m=s.options,M=s.screenReaderStatus,D=s.tabSelectsValue,w=s["aria-label"],E=s["aria-live"],y=p.useMemo(function(){return C(C({},Co),c||{})},[c]),I=p.useMemo(function(){var R="";if(i&&y.onChange){var L=i.option,z=i.options,W=i.removedValue,G=i.removedValues,Q=i.value,Z=function(q){return Array.isArray(q)?null:q},te=W||L||Z(Q),k=te?d(te):"",B=z||G||void 0,J=B?B.map(d):[],ee=C({isDisabled:te&&v(te,r),label:k,labels:J},i);R=y.onChange(ee)}return R},[i,y,v,r,d]),A=p.useMemo(function(){var R="",L=o||e,z=!!(o&&r&&r.includes(o));if(L&&y.onFocus){var W={focused:L,label:d(L),isDisabled:v(L,r),isSelected:z,options:a,context:L===o?"menu":"value",selectValue:r};R=y.onFocus(W)}return R},[o,e,d,v,y,a,r]),P=p.useMemo(function(){var R="";if(h&&m.length&&y.onFilter){var L=M({count:a.length});R=y.onFilter({inputValue:g,resultsMessage:L})}return R},[a,g,h,y,m,M]),H=p.useMemo(function(){var R="";if(y.guidance){var L=e?"value":h?"menu":"input";R=y.guidance({"aria-label":w,context:L,isDisabled:o&&v(o,r),isMulti:x,isSearchable:b,tabSelectsValue:D})}return R},[w,o,e,x,v,b,h,y,r,D]),U="".concat(A," ").concat(P," ").concat(H),T=S(p.Fragment,null,S("span",{id:"aria-selection"},I),S("span",{id:"aria-context"},U)),_=(i==null?void 0:i.action)==="initial-input-focus";return S(p.Fragment,null,S(Ke,{id:l},_&&T),S(Ke,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text"},u&&!_&&T))},yo=So,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Fo=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),Vt={};for(var we=0;we<Re.length;we++)for(var De=Re[we],Oe=0;Oe<De.letters.length;Oe++)Vt[De.letters[Oe]]=De.base;var Pt=function(t){return t.replace(Fo,function(i){return Vt[i]})},wo=bo(Pt),Qe=function(t){return t.replace(/^\s+|\s+$/g,"")},Do=function(t){return"".concat(t.label," ").concat(t.value)},Oo=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:Do,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,r=e.stringify,s=e.trim,l=e.matchFrom,c=s?Qe(o):o,d=s?Qe(r(i)):r(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=wo(c),d=Pt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Mo=["innerRef"];function Ao(n){var t=n.innerRef,i=K(n,Mo),o=ei(i,"onExited","in","enter","exit","appear");return S("input",F({ref:t},o,{css:Le({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Io=function(t){t.preventDefault(),t.stopPropagation()};function Vo(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),r=p.useRef(!1),s=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(h,m){if(l.current!==null){var M=l.current,D=M.scrollTop,w=M.scrollHeight,E=M.clientHeight,y=l.current,I=m>0,A=w-E-D,P=!1;A>m&&u.current&&(o&&o(h),u.current=!1),I&&r.current&&(a&&a(h),r.current=!1),I&&m>A?(i&&!u.current&&i(h),y.scrollTop=w,P=!0,u.current=!0):!I&&-m>D&&(e&&!r.current&&e(h),y.scrollTop=0,P=!0,r.current=!0),P&&Io(h)}},[i,o,e,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),g=p.useCallback(function(h){s.current=h.changedTouches[0].clientY},[]),x=p.useCallback(function(h){var m=s.current-h.changedTouches[0].clientY;c(h,m)},[c]),v=p.useCallback(function(h){if(h){var m=Qn?{passive:!1}:!1;h.addEventListener("wheel",d,m),h.addEventListener("touchstart",g,m),h.addEventListener("touchmove",x,m)}},[x,g,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",g,!1),h.removeEventListener("touchmove",x,!1))},[x,g,d]);return p.useEffect(function(){if(t){var h=l.current;return v(h),function(){b(h)}}},[t,v,b]),function(h){l.current=h}}var Ze=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(n){n.preventDefault()}function tt(n){n.stopPropagation()}function nt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var ot=!!(typeof window<"u"&&window.document&&window.document.createElement),ae=0,oe={capture:!1,passive:!1};function Po(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(s){if(ot){var l=document.body,c=l&&l.style;if(o&&Ze.forEach(function(v){var b=c&&c[v];e.current[v]=b}),o&&ae<1){var d=parseInt(e.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,x=window.innerWidth-g+d||0;Object.keys(Je).forEach(function(v){var b=Je[v];c&&(c[v]=b)}),c&&(c.paddingRight="".concat(x,"px"))}l&&it()&&(l.addEventListener("touchmove",et,oe),s&&(s.addEventListener("touchstart",nt,oe),s.addEventListener("touchmove",tt,oe))),ae+=1}},[o]),r=p.useCallback(function(s){if(ot){var l=document.body,c=l&&l.style;ae=Math.max(ae-1,0),o&&ae<1&&Ze.forEach(function(d){var g=e.current[d];c&&(c[d]=g)}),l&&it()&&(l.removeEventListener("touchmove",et,oe),s&&(s.removeEventListener("touchstart",nt,oe),s.removeEventListener("touchmove",tt,oe)))}},[o]);return p.useEffect(function(){if(t){var s=a.current;return u(s),function(){r(s)}}},[t,u,r]),function(s){a.current=s}}var Ro=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Lo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ko(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,r=n.onTopArrive,s=n.onTopLeave,l=Vo({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:r,onTopLeave:s}),c=Po({isEnabled:i}),d=function(x){l(x),c(x)};return S(p.Fragment,null,i&&S("div",{onClick:Ro,css:Lo}),t(d))}var To={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Bo=function(t){var i=t.name,o=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:To,value:"",onChange:function(){}})},jo=Bo,Ho=function(t){return t.label},$o=function(t){return t.label},zo=function(t){return t.value},No=function(t){return!!t.isDisabled},Uo={clearIndicator:Mi,container:vi,control:ki,dropdownIndicator:Di,group:Hi,groupHeading:zi,indicatorsContainer:Ci,indicatorSeparator:Ii,input:Wi,loadingIndicator:Ri,loadingMessage:pi,menu:ri,menuList:li,menuPortal:mi,multiValue:Ki,multiValueLabel:Qi,multiValueRemove:Zi,noOptionsMessage:di,option:oo,placeholder:uo,singleValue:co,valueContainer:xi},_o={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Wo=4,Rt=4,Go=38,Yo=Rt*2,qo={baseUnit:Rt,controlHeight:Go,menuGutter:Yo},Me={borderRadius:Wo,colors:_o,spacing:qo},Xo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ye(),captureMenuScroll:!Ye(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Oo(),formatGroupLabel:Ho,getOptionLabel:$o,getOptionValue:zo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:No,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Xn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,t,i,o){var e=Bt(n,t,i),a=jt(n,t,i),u=Tt(n,t),r=xe(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:r,index:o}}function Lt(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(u,r){return rt(n,u,t,r)}).filter(function(u){return at(n,u)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=rt(n,i,t,o);return at(n,a)?a:void 0}).filter(Zn)}function kt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,ht(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function Ko(n,t){return kt(Lt(n,t))}function at(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,r=t.value;return(!$t(n)||!a)&&Ht(n,{label:u,value:r,data:e},o)}function Qo(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Zo(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Tt=function(t,i){return t.getOptionLabel(i)},xe=function(t,i){return t.getOptionValue(i)};function Bt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function jt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=xe(n,t);return i.some(function(e){return xe(n,e)===o})}function Ht(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var $t=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},Jo=1,zt=function(n){ln(i,n);var t=cn(i);function i(o){var e;if(dn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,s){var l=e.props,c=l.onChange,d=l.name;s.name=d,e.ariaOnChange(r,s),c(r,s)},e.setValue=function(r,s,l){var c=e.props,d=c.closeMenuOnSelect,g=c.isMulti,x=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),d&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:s,option:l})},e.selectOption=function(r){var s=e.props,l=s.blurInputOnSelect,c=s.isMulti,d=s.name,g=e.state.selectValue,x=c&&e.isOptionSelected(r,g),v=e.isOptionDisabled(r,g);if(x){var b=e.getOptionValue(r);e.setValue(g.filter(function(h){return e.getOptionValue(h)!==b}),"deselect-option",r)}else if(!v)c?e.setValue([].concat(ht(g),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:d});return}l&&e.blurInput()},e.removeValue=function(r){var s=e.props.isMulti,l=e.state.selectValue,c=e.getOptionValue(r),d=l.filter(function(x){return e.getOptionValue(x)!==c}),g=fe(s,d,d[0]||null);e.onChange(g,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(fe(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,s=e.state.selectValue,l=s[s.length-1],c=s.slice(0,s.length-1),d=fe(r,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:l})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return _n.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(r){return Tt(e.props,r)},e.getOptionValue=function(r){return xe(e.props,r)},e.getStyles=function(r,s){var l=e.props.unstyled,c=Uo[r](s,l);c.boxSizing="border-box";var d=e.props.styles[r];return d?d(c,s):c},e.getClassNames=function(r,s){var l,c;return(l=(c=e.props.classNames)[r])===null||l===void 0?void 0:l.call(c,s)},e.getElementId=function(r){return"".concat(e.instancePrefix,"-").concat(r)},e.getComponents=function(){return mo(e.props)},e.buildCategorizedOptions=function(){return Lt(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return kt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,s){e.setState({ariaSelection:C({value:r},s)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var s=e.props,l=s.isMulti,c=s.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!l}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Ce(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var s=r.touches,l=s&&s.item(0);l&&(e.initialTouchX=l.clientX,e.initialTouchY=l.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var s=r.touches,l=s&&s.item(0);if(l){var c=Math.abs(l.clientX-e.initialTouchX),d=Math.abs(l.clientY-e.initialTouchY),g=5;e.userIsDragging=c>g||d>g}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var s=e.props.inputValue,l=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(l,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){e.blockOptionHover||e.state.focusedOption===r||e.setState({focusedOption:r})},e.shouldHideSelectedOptions=function(){return $t(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var s=e.props,l=s.isMulti,c=s.backspaceRemovesValue,d=s.escapeClearsValue,g=s.inputValue,x=s.isClearable,v=s.isDisabled,b=s.menuIsOpen,h=s.onKeyDown,m=s.tabSelectsValue,M=s.openMenuOnFocus,D=e.state,w=D.focusedOption,E=D.focusedValue,y=D.selectValue;if(!v&&!(typeof h=="function"&&(h(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!l||g)return;e.focusValue("previous");break;case"ArrowRight":if(!l||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(E)e.removeValue(E);else{if(!c)return;l?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!b||!m||!w||M&&e.isOptionSelected(w,y))return;e.selectOption(w);break;case"Enter":if(r.keyCode===229)break;if(b){if(!w||e.isComposing)return;e.selectOption(w);break}return;case"Escape":b?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):x&&d&&e.clearValue();break;case" ":if(g)return;if(!b){e.openMenu("first");break}if(!w)return;e.selectOption(w);break;case"ArrowUp":b?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":b?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!b)return;e.focusOption("pageup");break;case"PageDown":if(!b)return;e.focusOption("pagedown");break;case"Home":if(!b)return;e.focusOption("first");break;case"End":if(!b)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++Jo),e.state.selectValue=We(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.buildFocusableOptions(),u=a.indexOf(e.state.selectValue[0]);e.state.focusedOption=a[u]}return e}return pn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,r=a.menuIsOpen,s=this.state.isFocused;(s&&!u&&e.isDisabled||s&&r&&!e.menuIsOpen)&&this.focusInput(),s&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,r=u.selectValue,s=u.isFocused,l=this.buildFocusableOptions(),c=e==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(r[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,r=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=u.indexOf(r);r||(s=-1);var l=u.length-1,c=-1;if(u.length){switch(e){case"previous":s===0?c=0:s===-1?c=l:c=s-1;break;case"next":s>-1&&s<l&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,r=this.getFocusableOptions();if(r.length){var s=0,l=r.indexOf(u);u||(l=-1),e==="up"?s=l>0?l-1:r.length-1:e==="down"?s=(l+1)%r.length:e==="pageup"?(s=l-a,s<0&&(s=0)):e==="pagedown"?(s=l+a,s>r.length-1&&(s=r.length-1)):e==="last"&&(s=r.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:r[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Me):C(C({},Me),this.props.theme):Me}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,r=this.getClassNames,s=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,x=d.isRtl,v=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:r,getValue:s,hasValue:b,isMulti:g,isRtl:x,options:v,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Bt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return jt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Ht(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,r=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:r})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,r=e.inputId,s=e.inputValue,l=e.tabIndex,c=e.form,d=e.menuIsOpen,g=e.required,x=this.getComponents(),v=x.Input,b=this.state,h=b.inputIsHidden,m=b.ariaSelection,M=this.commonProps,D=r||this.getElementId("input"),w=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,F({},M,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:s},w)):p.createElement(Ao,F({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,r=a.MultiValueContainer,s=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,x=this.props,v=x.controlShouldRenderValue,b=x.isDisabled,h=x.isMulti,m=x.inputValue,M=x.placeholder,D=this.state,w=D.selectValue,E=D.focusedValue,y=D.isFocused;if(!this.hasValue()||!v)return m?null:p.createElement(d,F({},g,{key:"placeholder",isDisabled:b,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),M);if(h)return w.map(function(A,P){var H=A===E,U="".concat(e.getOptionLabel(A),"-").concat(e.getOptionValue(A));return p.createElement(u,F({},g,{components:{Container:r,Label:s,Remove:l},isFocused:H,isDisabled:b,key:U,index:P,removeProps:{onClick:function(){return e.removeValue(A)},onTouchEnd:function(){return e.removeValue(A)},onMouseDown:function(_){_.preventDefault()}},data:A}),e.formatOptionLabel(A,"value"))});if(m)return null;var I=w[0];return p.createElement(c,F({},g,{data:I,isDisabled:b}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,r=this.props,s=r.isDisabled,l=r.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,r=this.props,s=r.isDisabled,l=r.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var r=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused;return p.createElement(u,F({},r,{isDisabled:s,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:l,isDisabled:r,isFocused:s}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,r=a.GroupHeading,s=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,x=a.Option,v=this.commonProps,b=this.state.focusedOption,h=this.props,m=h.captureMenuScroll,M=h.inputValue,D=h.isLoading,w=h.loadingMessage,E=h.minMenuHeight,y=h.maxMenuHeight,I=h.menuIsOpen,A=h.menuPlacement,P=h.menuPosition,H=h.menuPortalTarget,U=h.menuShouldBlockScroll,T=h.menuShouldScrollIntoView,_=h.noOptionsMessage,R=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!I)return null;var z=function(B,J){var ee=B.type,Y=B.data,q=B.isDisabled,re=B.isSelected,ue=B.label,Wt=B.value,He=b===Y,$e=q?void 0:function(){return e.onOptionHover(Y)},Gt=q?void 0:function(){return e.selectOption(Y)},ze="".concat(e.getElementId("option"),"-").concat(J),Yt={id:ze,onClick:Gt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1};return p.createElement(x,F({},v,{innerProps:Yt,data:Y,isDisabled:q,isSelected:re,key:ze,label:ue,type:ee,value:Wt,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(B.data,"menu"))},W;if(this.hasOptions())W=this.getCategorizedOptions().map(function(k){if(k.type==="group"){var B=k.data,J=k.options,ee=k.index,Y="".concat(e.getElementId("group"),"-").concat(ee),q="".concat(Y,"-heading");return p.createElement(u,F({},v,{key:Y,data:B,options:J,Heading:r,headingProps:{id:q,data:k.data},label:e.formatGroupLabel(k.data)}),k.options.map(function(re){return z(re,"".concat(ee,"-").concat(re.index))}))}else if(k.type==="option")return z(k,"".concat(k.index))});else if(D){var G=w({inputValue:M});if(G===null)return null;W=p.createElement(d,v,G)}else{var Q=_({inputValue:M});if(Q===null)return null;W=p.createElement(g,v,Q)}var Z={minMenuHeight:E,maxMenuHeight:y,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:T},te=p.createElement(ai,F({},v,Z),function(k){var B=k.ref,J=k.placerProps,ee=J.placement,Y=J.maxHeight;return p.createElement(s,F({},v,Z,{innerRef:B,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:D,placement:ee}),p.createElement(ko,{captureEnabled:m,onTopArrive:R,onBottomArrive:L,lockEnabled:U},function(q){return p.createElement(l,F({},v,{innerRef:function(ue){e.getMenuListRef(ue),q(ue)},isLoading:D,maxHeight:Y,focusedOption:b}),W)}))});return H||P==="fixed"?p.createElement(c,F({},v,{appendTo:H,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),te):te}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,r=a.isDisabled,s=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!r)return p.createElement(jo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||r))if(s)if(u){var g=d.map(function(b){return e.getOptionValue(b)}).join(u);return p.createElement("input",{name:l,type:"hidden",value:g})}else{var x=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,x)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,r=a.focusedOption,s=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(yo,F({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:r,focusedValue:s,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,r=e.SelectContainer,s=e.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,x=l.menuIsOpen,v=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(r,F({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:v}),this.renderLiveRegion(),p.createElement(a,F({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:v,menuIsOpen:x}),p.createElement(s,F({},b,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,F({},b,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,r=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=e.options,x=e.value,v=e.menuIsOpen,b=e.inputValue,h=e.isMulti,m=We(x),M={};if(u&&(x!==u.value||g!==u.options||v!==u.menuIsOpen||b!==u.inputValue)){var D=v?Ko(e,m):[],w=r?Qo(a,m):null,E=Zo(a,D);M={selectValue:m,focusedOption:E,focusedValue:w,clearFocusValueOnUpdate:!1}}var y=s!=null&&e!==u?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=c&&d;return c&&!A&&(I={value:fe(h,m,m[0]||null),options:m,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),C(C(C({},M),y),{},{prevProps:e,ariaSelection:I,prevWasFocused:A})}}]),i}(p.Component);zt.defaultProps=Xo;var er=p.forwardRef(function(n,t){var i=wn(n);return p.createElement(zt,F({ref:t},i))}),ut=er;const tr=n=>n.products.products,nr=n=>n.products.category,ir=n=>n.products.filter,or=n=>n.products.isAddModalOpen,rr=n=>n.products.isSuccessModalOpen,ar=n=>n.products.info,ur=n=>n.slice(0,1).toUpperCase()+n.slice(1),sr=$.ul`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    margin-right: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: flex-end;
  }
`,lr=$.input`
  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    outline: none;
    &:hover,
    &:focus {
      border: 1px solid #e6533c;
    }
    &::placeholder {
      color: rgba(239, 237, 232, 1);
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
    &::placeholder {
      color: #efede8;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`,cr=$.label`
  position: relative;
`,dr=$.button`
  border: none;
  display: flex;
  padding: 0;

  background: transparent;
  position: absolute;

  top: calc(50% - 16px / 2);
  right: 14px;
`,pr=$.svg`
  width: 18px;
  height: 18px;
`,fr=$.button`
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
  display: flex;
  padding: 0;
  background: transparent;
  position: absolute;
`,hr=$.svg`
  fill: #e6533c;
  width: 18px;
  height: 18px;
`,mr=$.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 46px;
    right: 120px;
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
  }
`,st=[{value:null,label:"All"},{value:"false",label:"Recommended "},{value:"true",label:"Not recommended"}],gr=()=>{var w;const n=Ee(),t=(w=ne(nr))==null?void 0:w.map(E=>({value:E,label:ur(E)}));p.useEffect(()=>{n(en())},[n]);const i=Se.useMediaQuery({minWidth:375}),o=Se.useMediaQuery({minWidth:769}),e=Se.useMediaQuery({minWidth:1440});let a="",u="";i?(a="40px",u="156px"):(a="40px",u="183px"),o?(a="52px",u="204px"):a="52px",a="48px";const r={control:E=>({...E,backgroundColor:"trasparent",width:u,height:a,appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(E,{isFocused:y,isSelected:I})=>({...E,fontSize:"14px",lineHeight:"18px",backgroundColor:"rgba(28, 28, 28, 1)",color:I?"#E6533C":"#EFEDE8",padding:"14px"}),menu:E=>({...E,backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:E=>({...E,color:"#EFEDE8"}),indicatorSeparator:E=>({...E,backgroundColor:"transparent"}),dropdownIndicator:E=>({...E,color:"#EFEDE8"}),container:E=>({...E,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none",fontSize:"14px",lineHeight:"18px"}),menuList:E=>({...E,borderRadius:"12px","::-webkit-scrollbar":{display:"none"},overflowY:"scroll"})},[s,l]=p.useState(!1),[c,d]=p.useState(""),[g,x]=p.useState(""),[v,b]=p.useState(st[0]),h=E=>{const y=E.target.value;l(y.length>0),d(y),n(le({search:y,category:g.value,recommended:v.value}))},m=E=>{x(E),n(le({category:E.value,search:c,recommended:v.value}))},M=E=>{b(E),n(le({recommended:E.value,search:c,category:g.value}))},D=()=>{d(""),n(le({search:"",category:g.value,recommended:v.value})),l(!1)};return f.jsxs(sr,{children:[f.jsx(mr,{children:"Filters"}),f.jsx("li",{children:f.jsxs(cr,{children:[f.jsx(lr,{value:c,onChange:h,name:"productSearch",type:"text",placeholder:"Search"}),f.jsx(fr,{onClick:D,style:{display:s?"block":"none"},type:"button",children:f.jsx(hr,{children:f.jsx("use",{xlinkHref:`${ie}#icon-close`})})}),f.jsx(dr,{type:"button",children:f.jsx(pr,{children:f.jsx("use",{xlinkHref:`${ie}#icon-search`})})})]})}),f.jsx("li",{children:f.jsx("div",{children:f.jsx(ut,{value:g,onChange:m,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:r,options:t||[]})})}),f.jsx("li",{children:f.jsx("div",{children:f.jsx(ut,{value:v,onChange:M,options:st,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:r})})})]})},vr=O.ul`
  display: flex;

  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-content: flex-start;
    height: 487px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`,br=O.div`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 104px;
  }
`,lt=O.p`
  color: var(--secondary-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ct=O.span`
  color: var(--bright-accent-color);
`,xr=O.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  width: 100%;
  height: 141px;
  padding: 16px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 141px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 141px;
  }
`,Er=O.div`
  display: flex;

  align-items: flex-start;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
  }
`,Cr=O.h2`
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);

  padding: 5px 7.5px;

  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Sr=O.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 8px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,yr=O.p`
  color: var(--primary-text-color);
  margin-right: 16px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Fr=O.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 49px;
  heigth: 18px;
  padding: 0px;
  border: none;
  background-color: inherit;

  color: var(--bright-accent-color);
  stroke: var(--bright-accent-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  &:hover,
  &:focus {
    color: var(--light-accent-color);
    stroke: var(--light-accent-color);
  }

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 53px;
    heigth: 24px;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`,wr=O.svg`
  stroke: inherit;
  &:hover,
  &:focus {
    stroke: inherit;
  }
`,Dr=O.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 8px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Or=O.h2`
  margin-left: 16px;

  color: var(--primary-text-color);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Mr=O.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ae=O.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ie=O.span`
  color: var(--primary-text-color);
`,Nt=({info:n})=>{const t=Ee(),i=ne(tn),o=()=>{t(pt()),t(nn(n))};return f.jsxs(xr,{children:[f.jsxs(Er,{children:[f.jsx(Cr,{children:"DIET"}),f.jsx(Sr,{style:{backgroundColor:`${n.groupBloodNotAllowed[i]?"#E9101D":"#419B09"}`}}),f.jsx(yr,{children:n.groupBloodNotAllowed[i]?"Not recommended":"Recommended"}),f.jsxs(Fr,{type:"button",onClick:o,children:["Add",f.jsx(wr,{width:16,height:16,children:f.jsx("use",{href:ie+"#icon-arrow-right"})})]})]}),f.jsxs(Dr,{children:[f.jsx("svg",{width:24,height:24,fill:"orange",children:f.jsx("use",{href:ie+"#icon-runningOnCircle"})}),f.jsx(Or,{children:n.title.length>20?`${n.title.slice(0,20)}...`:n.title})]}),f.jsxs(Mr,{children:[f.jsxs(Ae,{children:["Calories: ",f.jsx(Ie,{children:n.calories})]}),f.jsxs(Ae,{children:["Category:"," ",f.jsx(Ie,{children:n.category.length>10?`${n.category.slice(0,10)}...`:n.category})]}),f.jsxs(Ae,{children:["Weight: ",f.jsx(Ie,{children:n.weight})]})]})]})};Nt.propTypes={info:j.shape({title:j.string.isRequired,category:j.string.isRequired,weight:j.number.isRequired,calories:j.number,groupBloodNotAllowed:j.shape({})}).isRequired};const Ar=()=>{const n=ne(tr);return f.jsx(vr,{children:n.length>0?n.slice(0,20).map(t=>f.jsx(Nt,{info:t},t._id)):f.jsxs(br,{children:[f.jsxs(lt,{children:[f.jsx(ct,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),f.jsx(lt,{children:f.jsx(ct,{children:"Try changing the search parameters."})})]})})},Ir=O.div`
  position: fixed;
  background-color: rgba(4, 4, 4, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 1;
  transform: scale(100);
  transform: rotate(0deg);
  visibility: visible;
  transition:
    opacity 1000ms linear,
    transform 500ms linear;
`;O.div`
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transform: rotate(360deg);
`;const Vr=O.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
`,Pr=O.div`
  position: relative;
  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 48px 24px;
  z-index: 10;
  width: 335px;
  height: 280px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    width: 479px;
    height: 286px;
  }
`,Rr=O.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Lr=O.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  gap: 10px;
  background-color: inherit;
  color: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
`,kr=O.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  gap: 10px;
  background-color: inherit;
  color: #efede8;

  &::placeholder {
    color: rgba(239, 237, 232, 0.3);
    text-align: right;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }
`,Tr=O.p`
  font-size: 12px;
  align-items: end;
  color: #efede8;
`,Br=O.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(239, 237, 232, 0.4);
`,jr=O.div`
  display: flex;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,Hr=O.button`
  min-width: 151px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out;
  margin-right: 14px;

  &:hover {
    background: #ef8964;
  }
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    height: 52px;
    line-height: calc(24 / 16);
  }
`,$r=O.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  @media screen and (min-width: 768px) {
    padding: 12px 40px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;function Ut({data:n,closeAddModal:t,openSuccessModal:i,setAmoutnCalories:o}){const e=Ee(),[a,u]=p.useState(0),r=Math.round(a*n.calories/100),s=()=>{if(!r){console.log("Must be greater than 0");return}const l={productId:n._id,calories:r,amount:a};return e(on(l)),o(r),t(),i(),r};return f.jsx(Ir,{children:f.jsxs(Pr,{children:[f.jsx(Vr,{type:"button",children:f.jsx("svg",{width:"22",height:"22",stroke:"#EFEDE8",children:f.jsx("use",{href:ie+"#icon-close"})})}),f.jsxs("form",{children:[f.jsxs(Rr,{children:[f.jsx("label",{children:f.jsx(Lr,{type:"text",value:n.title,disabled:!0})}),f.jsx("label",{children:f.jsx(kr,{placeholder:"grams",type:"number",value:a,onChange:l=>u(l.target.value)})})]}),f.jsxs(Tr,{children:[f.jsx(Br,{children:"Calories:"})," ",r]}),f.jsxs(jr,{children:[f.jsx(Hr,{type:"button",onClick:s,children:"Add to diary"}),f.jsx($r,{type:"button",onClick:t,children:"Cancel"})]})]})]})})}Ut.propTypes={data:j.object,closeAddModal:j.func,addProduct:j.func,openSuccessModal:j.func,setAmoutnCalories:j.func};const zr="/GachiClub/assets/avocado-2x-1cf208a8.png",Nr=O.div`
  position: fixed;
  background-color: rgba(4, 4, 4, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 1;
  transform: scale(100);
  transform: rotate(0deg);
  visibility: visible;
  transition:
    opacity 1000ms linear,
    transform 500ms linear;
`;O.div`
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transform: rotate(360deg);
`;const Ur=O.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`,_r=O.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
`,Wr=O.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`,Gr=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yr=O.img`
  width: 123px;
  height: 97px;
  margin-bottom: 19px;
`,qr=O.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`,dt=O.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Xr=O.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,Kr=O.button`
  border-radius: 12px;
  background: #e6533c;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  height: 42px;
  width: 157px;
  font-weight: 500;
  line-height: calc(24 / 16);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    height: 52px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
    color: #efede8;
  }
`,Qr=O.svg`
  width: 16px;
  height: 16px;
  stroke: #efede8;
`,_t=({closeSuccessModal:n,calories:t})=>f.jsx(Nr,{children:f.jsxs(Ur,{children:[f.jsx(_r,{type:"button",children:f.jsx("svg",{width:"22",height:"22",stroke:"#EFEDE8",children:f.jsx("use",{href:ie+"#icon-close"})})}),f.jsxs(Wr,{children:[f.jsxs(Gr,{children:[f.jsx(Yr,{src:zr,alt:"avocado"}),f.jsx(qr,{children:"Well done"}),f.jsxs(dt,{children:["Calories:"," ",f.jsx(Xr,{children:t})]})]}),f.jsx(Ne,{to:"/products",children:f.jsx(Kr,{onClick:n,children:"Next product"})}),f.jsx(Ne,{to:"/diary",children:f.jsxs(dt,{children:["To the diary",f.jsx(Qr,{width:"16",height:"16",stroke:"#EFEDE84D",children:f.jsx("use",{href:ie+"#icon-right"})})]})})]})]})});_t.propTypes={closeSuccessModal:j.func,calories:j.number};const na=()=>{const[n,t]=p.useState(0),i=Ee(),o=ne(ir),e=ne(or),a=ne(rr),u=ne(ar),[r,s]=p.useState(!0);p.useEffect(()=>{i(rn(o)).then(()=>{s(!1)})},[i,o]);const l=()=>{i(pt())},c=()=>{i(un())};return f.jsxs(vn,{children:[f.jsxs(xn,{children:[f.jsx(bn,{children:"Products"}),f.jsx(gr,{})]}),r?f.jsx(En,{children:f.jsx(an,{})}):f.jsx(Ar,{}),e&&f.jsx(Ut,{setAmoutnCalories:t,closeAddModal:l,openSuccessModal:c,data:u}),a&&f.jsx(_t,{closeSuccessModal:c,calories:n})]})};export{na as default};
