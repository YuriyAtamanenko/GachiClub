import{o as qt,r as p,E as Xt,p as Kt,s as Qt,q as C,_ as Zt,h as se,t as F,i as Jt,u as Ee,b as ne,v as en,j as f,I as ie,w as le,n as O,P as j,x as tn,y as pt,z as nn,A as rn,L as Ne,B as on,C as an}from"./index-2984d62f.js";import{s as N}from"./styled-components.browser.esm-9a6b4779.js";import{_ as ft,f as un,a as sn,b as ln,c as cn,e as dn}from"./createClass-01d46c6e.js";import{r as Se}from"./react-responsive-cb23adda.js";function pn(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var S=function(t,i){var r=arguments;if(i==null||!qt.call(i,"css"))return p.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Xt,a[1]=Kt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return p.createElement.apply(null,a)};function Le(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Qt(t)}var fn=function(){var t=Le.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const hn="/GachiClub/assets/products-desktop-1x-e8c375a5.jpg",mn="/GachiClub/assets/products-desktop-2x-85e8f868.jpg",gn=N.div`
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
      url(${hn});
    background-repeat: no-repeat;
    background-position: 100% 0;
    padding-top: 68px;
    position: relative;
    margin-right: -7vw;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mn});
    }
  }
`,vn=N.h2`
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
`,bn=N.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-right: -32px;
  }
`;function xn(n){if(Array.isArray(n))return n}function En(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,o=[],s=!0,l=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;s=!1}else for(;!(s=(r=a.call(i)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(c){l=!0,e=c}finally{try{if(!s&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(l)throw e}}return o}}function Cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return xn(n)||En(n,t)||ft(n,t)||Cn()}function K(n,t){if(n==null)return{};var i=pn(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Sn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function yn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,o=n.inputValue,s=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,x=n.value,v=K(n,Sn),b=p.useState(o!==void 0?o:i),h=X(b,2),m=h[0],M=h[1],D=p.useState(s!==void 0?s:e),w=X(D,2),E=w[0],y=w[1],I=p.useState(x!==void 0?x:u),A=X(I,2),P=A[0],H=A[1],U=p.useCallback(function(G,Q){typeof l=="function"&&l(G,Q),H(G)},[l]),T=p.useCallback(function(G,Q){var Z;typeof c=="function"&&(Z=c(G,Q)),M(Z!==void 0?Z:G)},[c]),_=p.useCallback(function(){typeof g=="function"&&g(),y(!0)},[g]),R=p.useCallback(function(){typeof d=="function"&&d(),y(!1)},[d]),L=o!==void 0?o:m,$=s!==void 0?s:E,W=x!==void 0?x:P;return C(C({},v),{},{inputValue:L,menuIsOpen:$,onChange:U,onInputChange:T,onMenuClose:R,onMenuOpen:_,value:W})}function Fn(n){if(Array.isArray(n))return un(n)}function wn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Dn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(n){return Fn(n)||wn(n)||ft(n)||Dn()}function On(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Mn=Math.min,An=Math.max,he=Math.round,ce=Math.floor,me=n=>({x:n,y:n});function In(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function mt(n){return vt(n)?(n.nodeName||"").toLowerCase():"#document"}function z(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function gt(n){var t;return(t=(vt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function vt(n){return n instanceof Node||n instanceof z(n).Node}function Ve(n){return n instanceof Element||n instanceof z(n).Element}function ke(n){return n instanceof HTMLElement||n instanceof z(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof z(n).ShadowRoot}function bt(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Te(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function Vn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pn(n){return["html","body","#document"].includes(mt(n))}function Te(n){return z(n).getComputedStyle(n)}function Rn(n){if(mt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||gt(n);return Ue(t)?t.host:t}function xt(n){const t=Rn(n);return Pn(t)?n.ownerDocument?n.ownerDocument.body:n.body:ke(t)&&bt(t)?t:xt(t)}function ge(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=xt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=z(e);return a?t.concat(u,u.visualViewport||[],bt(e)?e:[],u.frameElement&&i?ge(u.frameElement):[]):t.concat(e,ge(e))}function Ln(n){const t=Te(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=ke(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,o=he(i)!==a||he(r)!==u;return o&&(i=a,r=u),{width:i,height:r,$:o}}function Be(n){return Ve(n)?n:n.contextElement}function ye(n){const t=Be(n);if(!ke(t))return me(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Ln(t);let u=(a?he(i.width):i.width)/r,o=(a?he(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!o||!Number.isFinite(o))&&(o=1),{x:u,y:o}}const kn=me(0);function Tn(n){const t=z(n);return!Vn()||!t.visualViewport?kn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==z(n)?!1:t}function _e(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Be(n);let u=me(1);t&&(r?Ve(r)&&(u=ye(r)):u=ye(n));const o=Bn(a,i,r)?Tn(a):me(0);let s=(e.left+o.x)/u.x,l=(e.top+o.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const g=z(a),x=r&&Ve(r)?z(r):r;let v=g.frameElement;for(;v&&r&&x!==g;){const b=ye(v),h=v.getBoundingClientRect(),m=Te(v),M=h.left+(v.clientLeft+parseFloat(m.paddingLeft))*b.x,D=h.top+(v.clientTop+parseFloat(m.paddingTop))*b.y;s*=b.x,l*=b.y,c*=b.x,d*=b.y,s+=M,l+=D,v=z(v).frameElement}}return In({width:c,height:d,x:s,y:l})}function jn(n,t){let i=null,r;const e=gt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(o,s){o===void 0&&(o=!1),s===void 0&&(s=1),a();const{left:l,top:c,width:d,height:g}=n.getBoundingClientRect();if(o||t(),!d||!g)return;const x=ce(c),v=ce(e.clientWidth-(l+d)),b=ce(e.clientHeight-(c+g)),h=ce(l),M={rootMargin:-x+"px "+-v+"px "+-b+"px "+-h+"px",threshold:An(0,Mn(1,s))||1};let D=!0;function w(E){const y=E[0].intersectionRatio;if(y!==s){if(!D)return u();y?u(!1,y):r=setTimeout(()=>{u(!1,1e-7)},100)}D=!1}try{i=new IntersectionObserver(w,{...M,root:e.ownerDocument})}catch{i=new IntersectionObserver(w,M)}i.observe(n)}return u(!0),a}function Hn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,l=Be(n),c=e||a?[...l?ge(l):[],...ge(t)]:[];c.forEach(m=>{e&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&o?jn(l,i):null;let g=-1,x=null;u&&(x=new ResizeObserver(m=>{let[M]=m;M&&M.target===l&&x&&(x.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{x&&x.observe(t)})),i()}),l&&!s&&x.observe(l),x.observe(t));let v,b=s?_e(n):null;s&&h();function h(){const m=_e(n);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,v=requestAnimationFrame(h)}return i(),()=>{c.forEach(m=>{e&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),x&&x.disconnect(),x=null,s&&cancelAnimationFrame(v)}}var Pe=p.useLayoutEffect,$n=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function zn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Nn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(zn(n,u)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var We=function(t){return Qn(t)?t.filter(Boolean):Zt(t)==="object"&&t!==null?[t]:[]},Et=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,$n);return C({},i)},V=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,o=t.className;return{css:a(i,t),className:e(r??{},u(i,t),o)}};function Ce(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Un(n){return Ce(n)?window.innerHeight:n.clientHeight}function Ct(n){return Ce(n)?window.pageYOffset:n.scrollTop}function be(n,t){if(Ce(n)){window.scrollTo(0,t);return}n.scrollTop=t}function _n(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Wn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function de(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=Ct(n),a=t-e,u=10,o=0;function s(){o+=u;var l=Wn(o,e,a,i);be(n,l),o<i?window.requestAnimationFrame(s):r(n)}s()}function Ge(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?be(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&be(n,Math.max(t.offsetTop-e,0))}function Gn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ye(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Yn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var St=!1,qn={get passive(){return St=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",ve,qn),pe.removeEventListener("p",ve,!1));var Xn=St;function Kn(n){return n!=null}function Qn(n){return Array.isArray(n)}function fe(n,t,i){return n?t:i}var Zn=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var o=X(u,1),s=o[0];return!r.includes(s)});return a.reduce(function(u,o){var s=X(o,2),l=s[0],c=s[1];return u[l]=c,u},{})},Jn=["children","innerProps"],ei=["children","innerProps"];function ti(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,o=n.controlHeight,s=_n(i),l={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return l;var c=s.getBoundingClientRect(),d=c.height,g=i.getBoundingClientRect(),x=g.bottom,v=g.height,b=g.top,h=i.offsetParent.getBoundingClientRect(),m=h.top,M=u?window.innerHeight:Un(s),D=Ct(s),w=parseInt(getComputedStyle(i).marginBottom,10),E=parseInt(getComputedStyle(i).marginTop,10),y=m-E,I=M-b,A=y+D,P=d-D-b,H=x-M+D+w,U=D+b-E,T=160;switch(e){case"auto":case"bottom":if(I>=v)return{placement:"bottom",maxHeight:t};if(P>=v&&!u)return a&&de(s,H,T),{placement:"bottom",maxHeight:t};if(!u&&P>=r||u&&I>=r){a&&de(s,H,T);var _=u?I-w:P-w;return{placement:"bottom",maxHeight:_}}if(e==="auto"||u){var R=t,L=u?y:A;return L>=r&&(R=Math.min(L-w-o,t)),{placement:"top",maxHeight:R}}if(e==="bottom")return a&&be(s,H),{placement:"bottom",maxHeight:t};break;case"top":if(y>=v)return{placement:"top",maxHeight:t};if(A>=v&&!u)return a&&de(s,U,T),{placement:"top",maxHeight:t};if(!u&&A>=r||u&&y>=r){var $=t;return(!u&&A>=r||u&&y>=r)&&($=u?y-E:A-E),a&&de(s,U,T),{placement:"top",maxHeight:$}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return l}function ni(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var yt=function(t){return t==="auto"?"bottom":t},ii=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,o=a.spacing,s=a.colors;return C((r={label:"menu"},se(r,ni(e),"100%"),se(r,"position","absolute"),se(r,"width","100%"),se(r,"zIndex",1),r),i?{}:{backgroundColor:s.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},Ft=p.createContext(null),ri=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,o=t.menuShouldScrollIntoView,s=t.theme,l=p.useContext(Ft)||{},c=l.setPortalPlacement,d=p.useRef(null),g=p.useState(e),x=X(g,2),v=x[0],b=x[1],h=p.useState(null),m=X(h,2),M=m[0],D=m[1],w=s.spacing.controlHeight;return Pe(function(){var E=d.current;if(E){var y=u==="fixed",I=o&&!y,A=ti({maxHeight:e,menuEl:E,minHeight:r,placement:a,shouldScroll:I,isFixedPosition:y,controlHeight:w});b(A.maxHeight),D(A.placement),c==null||c(A.placement)}},[e,a,u,o,r,c,w]),i({ref:d,placerProps:C(C({},t),{},{placement:M||yt(a),maxHeight:v})})},oi=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return S("div",F({},V(t,"menu",{menu:!0}),{ref:r},e),i)},ai=oi,ui=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},si=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",F({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},wt=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},li=wt,ci=wt,di=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=K(t,Jn);return S("div",F({},V(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},pi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,ei);return S("div",F({},V(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},fi=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},hi=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,o=t.menuPosition,s=p.useRef(null),l=p.useRef(null),c=p.useState(yt(u)),d=X(c,2),g=d[0],x=d[1],v=p.useMemo(function(){return{setPortalPlacement:x}},[]),b=p.useState(null),h=X(b,2),m=h[0],M=h[1],D=p.useCallback(function(){if(e){var I=Gn(e),A=o==="fixed"?0:window.pageYOffset,P=I[g]+A;(P!==(m==null?void 0:m.offset)||I.left!==(m==null?void 0:m.rect.left)||I.width!==(m==null?void 0:m.rect.width))&&M({offset:P,rect:I})}},[e,o,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Pe(function(){D()},[D]);var w=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),e&&s.current&&(l.current=Hn(e,s.current,D,{elementResize:"ResizeObserver"in window}))},[e,D]);Pe(function(){w()},[w]);var E=p.useCallback(function(I){s.current=I,w()},[w]);if(!i&&o!=="fixed"||!m)return null;var y=S("div",F({ref:E},V(C(C({},t),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),r);return S(Ft.Provider,{value:v},i?Jt.createPortal(y,i):y)},mi=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},gi=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",F({},V(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},vi=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},bi=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",F({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},xi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Ei=function(t){var i=t.children,r=t.innerProps;return S("div",F({},V(t,"indicatorsContainer",{indicators:!0}),r),i)},qe,Ci=["size"],Si=["innerProps","isRtl","size"],yi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dt=function(t){var i=t.size,r=K(t,Ci);return S("svg",F({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:yi},r))},je=function(t){return S(Dt,F({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ot=function(t){return S(Dt,F({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Mt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},Fi=Mt,wi=function(t){var i=t.children,r=t.innerProps;return S("div",F({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||S(Ot,null))},Di=Mt,Oi=function(t){var i=t.children,r=t.innerProps;return S("div",F({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||S(je,null))},Mi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Ai=function(t){var i=t.innerProps;return S("span",F({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Ii=fn(qe||(qe=On([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Vi=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,o=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:o*2})},Fe=function(t){var i=t.delay,r=t.offset;return S("span",{css:Le({animation:"".concat(Ii," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Pi=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=K(t,Si);return S("div",F({},V(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(Fe,{delay:0,offset:r}),S(Fe,{delay:160,offset:!0}),S(Fe,{delay:320,offset:!r}))},Ri=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,o=a.borderRadius,s=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Li=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,o=t.menuIsOpen;return S("div",F({ref:a},V(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":o}),u),i)},ki=Li,Ti=["data"],Bi=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},ji=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,o=t.headingProps,s=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return S("div",F({},V(t,"group",{group:!0}),s),S(u,F({},o,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),l),S("div",null,i))},Hi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},$i=function(t){var i=Et(t);i.data;var r=K(i,Ti);return S("div",F({},V(t,"groupHeading",{"group-heading":!0}),r))},zi=ji,Ni=["innerRef","isDisabled","isHidden","inputClassName"],Ui=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,o=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},_i),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:o.neutral80})},At={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},_i={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},At)},Wi=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},At)},Gi=function(t){var i=t.cx,r=t.value,e=Et(t),a=e.innerRef,u=e.isDisabled,o=e.isHidden,s=e.inputClassName,l=K(e,Ni);return S("div",F({},V(t,"input",{"input-container":!0}),{"data-value":r||""}),S("input",F({className:i({input:!0},s),ref:a,style:Wi(o),disabled:u},l)))},Yi=Gi,qi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Xi=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ki=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,o=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},It=function(t){var i=t.children,r=t.innerProps;return S("div",r,i)},Qi=It,Zi=It;function Ji(n){var t=n.children,i=n.innerProps;return S("div",F({role:"button"},i),t||S(je,{size:14}))}var er=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,o=t.removeProps,s=t.selectProps,l=r.Container,c=r.Label,d=r.Remove;return S(l,{data:e,innerProps:C(C({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:s},S(c,{data:e,innerProps:C({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},i),S(d,{data:e,innerProps:C(C({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:s}))},tr=er,nr=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,o=u.spacing,s=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?s.primary:e?s.primary25:"transparent",color:r?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?s.primary:s.primary50}})},ir=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,o=t.innerProps;return S("div",F({},V(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},o),i)},rr=ir,or=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},ar=function(t){var i=t.children,r=t.innerProps;return S("div",F({},V(t,"placeholder",{placeholder:!0}),r),i)},ur=ar,sr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},lr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return S("div",F({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},cr=lr,dr={ClearIndicator:Oi,Control:ki,DropdownIndicator:wi,DownChevron:Ot,CrossIcon:je,Group:zi,GroupHeading:$i,IndicatorsContainer:Ei,IndicatorSeparator:Ai,Input:Yi,LoadingIndicator:Pi,Menu:ai,MenuList:si,MenuPortal:hi,LoadingMessage:pi,NoOptionsMessage:di,MultiValue:tr,MultiValueContainer:Qi,MultiValueLabel:Zi,MultiValueRemove:Ji,Option:rr,Placeholder:ur,SelectContainer:gi,SingleValue:cr,ValueContainer:bi},pr=function(t){return C(C({},dr),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function fr(n,t){return!!(n===t||Xe(n)&&Xe(t))}function hr(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!fr(n[i],t[i]))return!1;return!0}function mr(n,t){t===void 0&&(t=hr);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var gr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},vr=function(t){return S("span",F({css:gr},t))},Ke=vr,br={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.isDisabled,a=t.tabSelectsValue,u=t.context;switch(u){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,o=t.selectValue,s=t.isDisabled,l=t.isSelected,c=function(v,b){return v&&v.length?"".concat(v.indexOf(b)+1," of ").concat(v.length):""};if(i==="value"&&o)return"value ".concat(u," focused, ").concat(c(o,r),".");if(i==="menu"){var d=s?" disabled":"",g="".concat(l?"selected":"focused").concat(d);return"option ".concat(u," ").concat(g,", ").concat(c(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},xr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,o=t.selectValue,s=t.selectProps,l=t.id,c=s.ariaLiveMessages,d=s.getOptionLabel,g=s.inputValue,x=s.isMulti,v=s.isOptionDisabled,b=s.isSearchable,h=s.menuIsOpen,m=s.options,M=s.screenReaderStatus,D=s.tabSelectsValue,w=s["aria-label"],E=s["aria-live"],y=p.useMemo(function(){return C(C({},br),c||{})},[c]),I=p.useMemo(function(){var R="";if(i&&y.onChange){var L=i.option,$=i.options,W=i.removedValue,G=i.removedValues,Q=i.value,Z=function(q){return Array.isArray(q)?null:q},te=W||L||Z(Q),k=te?d(te):"",B=$||G||void 0,J=B?B.map(d):[],ee=C({isDisabled:te&&v(te,o),label:k,labels:J},i);R=y.onChange(ee)}return R},[i,y,v,o,d]),A=p.useMemo(function(){var R="",L=r||e,$=!!(r&&o&&o.includes(r));if(L&&y.onFocus){var W={focused:L,label:d(L),isDisabled:v(L,o),isSelected:$,options:a,context:L===r?"menu":"value",selectValue:o};R=y.onFocus(W)}return R},[r,e,d,v,y,a,o]),P=p.useMemo(function(){var R="";if(h&&m.length&&y.onFilter){var L=M({count:a.length});R=y.onFilter({inputValue:g,resultsMessage:L})}return R},[a,g,h,y,m,M]),H=p.useMemo(function(){var R="";if(y.guidance){var L=e?"value":h?"menu":"input";R=y.guidance({"aria-label":w,context:L,isDisabled:r&&v(r,o),isMulti:x,isSearchable:b,tabSelectsValue:D})}return R},[w,r,e,x,v,b,h,y,o,D]),U="".concat(A," ").concat(P," ").concat(H),T=S(p.Fragment,null,S("span",{id:"aria-selection"},I),S("span",{id:"aria-context"},U)),_=(i==null?void 0:i.action)==="initial-input-focus";return S(p.Fragment,null,S(Ke,{id:l},_&&T),S(Ke,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text"},u&&!_&&T))},Er=xr,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Cr=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),Vt={};for(var we=0;we<Re.length;we++)for(var De=Re[we],Oe=0;Oe<De.letters.length;Oe++)Vt[De.letters[Oe]]=De.base;var Pt=function(t){return t.replace(Cr,function(i){return Vt[i]})},Sr=mr(Pt),Qe=function(t){return t.replace(/^\s+|\s+$/g,"")},yr=function(t){return"".concat(t.label," ").concat(t.value)},Fr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:yr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,o=e.stringify,s=e.trim,l=e.matchFrom,c=s?Qe(r):r,d=s?Qe(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Sr(c),d=Pt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},wr=["innerRef"];function Dr(n){var t=n.innerRef,i=K(n,wr),r=Zn(i,"onExited","in","enter","exit","appear");return S("input",F({ref:t},r,{css:Le({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Or=function(t){t.preventDefault(),t.stopPropagation()};function Mr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),o=p.useRef(!1),s=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(h,m){if(l.current!==null){var M=l.current,D=M.scrollTop,w=M.scrollHeight,E=M.clientHeight,y=l.current,I=m>0,A=w-E-D,P=!1;A>m&&u.current&&(r&&r(h),u.current=!1),I&&o.current&&(a&&a(h),o.current=!1),I&&m>A?(i&&!u.current&&i(h),y.scrollTop=w,P=!0,u.current=!0):!I&&-m>D&&(e&&!o.current&&e(h),y.scrollTop=0,P=!0,o.current=!0),P&&Or(h)}},[i,r,e,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),g=p.useCallback(function(h){s.current=h.changedTouches[0].clientY},[]),x=p.useCallback(function(h){var m=s.current-h.changedTouches[0].clientY;c(h,m)},[c]),v=p.useCallback(function(h){if(h){var m=Xn?{passive:!1}:!1;h.addEventListener("wheel",d,m),h.addEventListener("touchstart",g,m),h.addEventListener("touchmove",x,m)}},[x,g,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",g,!1),h.removeEventListener("touchmove",x,!1))},[x,g,d]);return p.useEffect(function(){if(t){var h=l.current;return v(h),function(){b(h)}}},[t,v,b]),function(h){l.current=h}}var Ze=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(n){n.preventDefault()}function tt(n){n.stopPropagation()}function nt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ae=0,re={capture:!1,passive:!1};function Ar(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(s){if(rt){var l=document.body,c=l&&l.style;if(r&&Ze.forEach(function(v){var b=c&&c[v];e.current[v]=b}),r&&ae<1){var d=parseInt(e.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,x=window.innerWidth-g+d||0;Object.keys(Je).forEach(function(v){var b=Je[v];c&&(c[v]=b)}),c&&(c.paddingRight="".concat(x,"px"))}l&&it()&&(l.addEventListener("touchmove",et,re),s&&(s.addEventListener("touchstart",nt,re),s.addEventListener("touchmove",tt,re))),ae+=1}},[r]),o=p.useCallback(function(s){if(rt){var l=document.body,c=l&&l.style;ae=Math.max(ae-1,0),r&&ae<1&&Ze.forEach(function(d){var g=e.current[d];c&&(c[d]=g)}),l&&it()&&(l.removeEventListener("touchmove",et,re),s&&(s.removeEventListener("touchstart",nt,re),s.removeEventListener("touchmove",tt,re)))}},[r]);return p.useEffect(function(){if(t){var s=a.current;return u(s),function(){o(s)}}},[t,u,o]),function(s){a.current=s}}var Ir=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Vr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Pr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,o=n.onTopArrive,s=n.onTopLeave,l=Mr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:o,onTopLeave:s}),c=Ar({isEnabled:i}),d=function(x){l(x),c(x)};return S(p.Fragment,null,i&&S("div",{onClick:Ir,css:Vr}),t(d))}var Rr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Lr=function(t){var i=t.name,r=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Rr,value:"",onChange:function(){}})},kr=Lr,Tr=function(t){return t.label},Br=function(t){return t.label},jr=function(t){return t.value},Hr=function(t){return!!t.isDisabled},$r={clearIndicator:Di,container:mi,control:Ri,dropdownIndicator:Fi,group:Bi,groupHeading:Hi,indicatorsContainer:xi,indicatorSeparator:Mi,input:Ui,loadingIndicator:Vi,loadingMessage:ci,menu:ii,menuList:ui,menuPortal:fi,multiValue:qi,multiValueLabel:Xi,multiValueRemove:Ki,noOptionsMessage:li,option:nr,placeholder:or,singleValue:sr,valueContainer:vi},zr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Nr=4,Rt=4,Ur=38,_r=Rt*2,Wr={baseUnit:Rt,controlHeight:Ur,menuGutter:_r},Me={borderRadius:Nr,colors:zr,spacing:Wr},Gr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ye(),captureMenuScroll:!Ye(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Fr(),formatGroupLabel:Tr,getOptionLabel:Br,getOptionValue:jr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Hr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Yn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ot(n,t,i,r){var e=Bt(n,t,i),a=jt(n,t,i),u=Tt(n,t),o=xe(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:o,index:r}}function Lt(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,o){return ot(n,u,t,o)}).filter(function(u){return at(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=ot(n,i,t,r);return at(n,a)?a:void 0}).filter(Kn)}function kt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,ht(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function Yr(n,t){return kt(Lt(n,t))}function at(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,o=t.value;return(!$t(n)||!a)&&Ht(n,{label:u,value:o,data:e},r)}function qr(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Xr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Tt=function(t,i){return t.getOptionLabel(i)},xe=function(t,i){return t.getOptionValue(i)};function Bt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function jt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=xe(n,t);return i.some(function(e){return xe(n,e)===r})}function Ht(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var $t=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},Kr=1,zt=function(n){sn(i,n);var t=ln(i);function i(r){var e;if(cn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var l=e.props,c=l.onChange,d=l.name;s.name=d,e.ariaOnChange(o,s),c(o,s)},e.setValue=function(o,s,l){var c=e.props,d=c.closeMenuOnSelect,g=c.isMulti,x=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),d&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:l})},e.selectOption=function(o){var s=e.props,l=s.blurInputOnSelect,c=s.isMulti,d=s.name,g=e.state.selectValue,x=c&&e.isOptionSelected(o,g),v=e.isOptionDisabled(o,g);if(x){var b=e.getOptionValue(o);e.setValue(g.filter(function(h){return e.getOptionValue(h)!==b}),"deselect-option",o)}else if(!v)c?e.setValue([].concat(ht(g),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,l=e.state.selectValue,c=e.getOptionValue(o),d=l.filter(function(x){return e.getOptionValue(x)!==c}),g=fe(s,d,d[0]||null);e.onChange(g,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(fe(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,l=s[s.length-1],c=s.slice(0,s.length-1),d=fe(o,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:l})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return Nn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Tt(e.props,o)},e.getOptionValue=function(o){return xe(e.props,o)},e.getStyles=function(o,s){var l=e.props.unstyled,c=$r[o](s,l);c.boxSizing="border-box";var d=e.props.styles[o];return d?d(c,s):c},e.getClassNames=function(o,s){var l,c;return(l=(c=e.props.classNames)[o])===null||l===void 0?void 0:l.call(c,s)},e.getElementId=function(o){return"".concat(e.instancePrefix,"-").concat(o)},e.getComponents=function(){return pr(e.props)},e.buildCategorizedOptions=function(){return Lt(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return kt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,l=s.isMulti,c=s.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!l}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ce(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,l=s&&s.item(0);l&&(e.initialTouchX=l.clientX,e.initialTouchY=l.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,l=s&&s.item(0);if(l){var c=Math.abs(l.clientX-e.initialTouchX),d=Math.abs(l.clientY-e.initialTouchY),g=5;e.userIsDragging=c>g||d>g}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,l=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(l,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){e.blockOptionHover||e.state.focusedOption===o||e.setState({focusedOption:o})},e.shouldHideSelectedOptions=function(){return $t(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,l=s.isMulti,c=s.backspaceRemovesValue,d=s.escapeClearsValue,g=s.inputValue,x=s.isClearable,v=s.isDisabled,b=s.menuIsOpen,h=s.onKeyDown,m=s.tabSelectsValue,M=s.openMenuOnFocus,D=e.state,w=D.focusedOption,E=D.focusedValue,y=D.selectValue;if(!v&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||g)return;e.focusValue("previous");break;case"ArrowRight":if(!l||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(E)e.removeValue(E);else{if(!c)return;l?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!b||!m||!w||M&&e.isOptionSelected(w,y))return;e.selectOption(w);break;case"Enter":if(o.keyCode===229)break;if(b){if(!w||e.isComposing)return;e.selectOption(w);break}return;case"Escape":b?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):x&&d&&e.clearValue();break;case" ":if(g)return;if(!b){e.openMenu("first");break}if(!w)return;e.selectOption(w);break;case"ArrowUp":b?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":b?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!b)return;e.focusOption("pageup");break;case"PageDown":if(!b)return;e.focusOption("pagedown");break;case"Home":if(!b)return;e.focusOption("first");break;case"End":if(!b)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++Kr),e.state.selectValue=We(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.buildFocusableOptions(),u=a.indexOf(e.state.selectValue[0]);e.state.focusedOption=a[u]}return e}return dn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,o=a.menuIsOpen,s=this.state.isFocused;(s&&!u&&e.isDisabled||s&&o&&!e.menuIsOpen)&&this.focusInput(),s&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,o=u.selectValue,s=u.isFocused,l=this.buildFocusableOptions(),c=e==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=u.indexOf(o);o||(s=-1);var l=u.length-1,c=-1;if(u.length){switch(e){case"previous":s===0?c=0:s===-1?c=l:c=s-1;break;case"next":s>-1&&s<l&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var s=0,l=o.indexOf(u);u||(l=-1),e==="up"?s=l>0?l-1:o.length-1:e==="down"?s=(l+1)%o.length:e==="pageup"?(s=l-a,s<0&&(s=0)):e==="pagedown"?(s=l+a,s>o.length-1&&(s=o.length-1)):e==="last"&&(s=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Me):C(C({},Me),this.props.theme):Me}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,o=this.getClassNames,s=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,x=d.isRtl,v=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:o,getValue:s,hasValue:b,isMulti:g,isRtl:x,options:v,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Bt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return jt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Ht(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:o})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,o=e.inputId,s=e.inputValue,l=e.tabIndex,c=e.form,d=e.menuIsOpen,g=e.required,x=this.getComponents(),v=x.Input,b=this.state,h=b.inputIsHidden,m=b.ariaSelection,M=this.commonProps,D=o||this.getElementId("input"),w=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,F({},M,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:s},w)):p.createElement(Dr,F({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,o=a.MultiValueContainer,s=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,x=this.props,v=x.controlShouldRenderValue,b=x.isDisabled,h=x.isMulti,m=x.inputValue,M=x.placeholder,D=this.state,w=D.selectValue,E=D.focusedValue,y=D.isFocused;if(!this.hasValue()||!v)return m?null:p.createElement(d,F({},g,{key:"placeholder",isDisabled:b,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),M);if(h)return w.map(function(A,P){var H=A===E,U="".concat(e.getOptionLabel(A),"-").concat(e.getOptionValue(A));return p.createElement(u,F({},g,{components:{Container:o,Label:s,Remove:l},isFocused:H,isDisabled:b,key:U,index:P,removeProps:{onClick:function(){return e.removeValue(A)},onTouchEnd:function(){return e.removeValue(A)},onMouseDown:function(_){_.preventDefault()}},data:A}),e.formatOptionLabel(A,"value"))});if(m)return null;var I=w[0];return p.createElement(c,F({},g,{data:I,isDisabled:b}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var o=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused;return p.createElement(u,F({},o,{isDisabled:s,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,F({},u,{innerProps:l,isDisabled:o,isFocused:s}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,o=a.GroupHeading,s=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,x=a.Option,v=this.commonProps,b=this.state.focusedOption,h=this.props,m=h.captureMenuScroll,M=h.inputValue,D=h.isLoading,w=h.loadingMessage,E=h.minMenuHeight,y=h.maxMenuHeight,I=h.menuIsOpen,A=h.menuPlacement,P=h.menuPosition,H=h.menuPortalTarget,U=h.menuShouldBlockScroll,T=h.menuShouldScrollIntoView,_=h.noOptionsMessage,R=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!I)return null;var $=function(B,J){var ee=B.type,Y=B.data,q=B.isDisabled,oe=B.isSelected,ue=B.label,Wt=B.value,He=b===Y,$e=q?void 0:function(){return e.onOptionHover(Y)},Gt=q?void 0:function(){return e.selectOption(Y)},ze="".concat(e.getElementId("option"),"-").concat(J),Yt={id:ze,onClick:Gt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1};return p.createElement(x,F({},v,{innerProps:Yt,data:Y,isDisabled:q,isSelected:oe,key:ze,label:ue,type:ee,value:Wt,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(B.data,"menu"))},W;if(this.hasOptions())W=this.getCategorizedOptions().map(function(k){if(k.type==="group"){var B=k.data,J=k.options,ee=k.index,Y="".concat(e.getElementId("group"),"-").concat(ee),q="".concat(Y,"-heading");return p.createElement(u,F({},v,{key:Y,data:B,options:J,Heading:o,headingProps:{id:q,data:k.data},label:e.formatGroupLabel(k.data)}),k.options.map(function(oe){return $(oe,"".concat(ee,"-").concat(oe.index))}))}else if(k.type==="option")return $(k,"".concat(k.index))});else if(D){var G=w({inputValue:M});if(G===null)return null;W=p.createElement(d,v,G)}else{var Q=_({inputValue:M});if(Q===null)return null;W=p.createElement(g,v,Q)}var Z={minMenuHeight:E,maxMenuHeight:y,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:T},te=p.createElement(ri,F({},v,Z),function(k){var B=k.ref,J=k.placerProps,ee=J.placement,Y=J.maxHeight;return p.createElement(s,F({},v,Z,{innerRef:B,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:D,placement:ee}),p.createElement(Pr,{captureEnabled:m,onTopArrive:R,onBottomArrive:L,lockEnabled:U},function(q){return p.createElement(l,F({},v,{innerRef:function(ue){e.getMenuListRef(ue),q(ue)},isLoading:D,maxHeight:Y,focusedOption:b}),W)}))});return H||P==="fixed"?p.createElement(c,F({},v,{appendTo:H,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),te):te}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,o=a.isDisabled,s=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return p.createElement(kr,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(s)if(u){var g=d.map(function(b){return e.getOptionValue(b)}).join(u);return p.createElement("input",{name:l,type:"hidden",value:g})}else{var x=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:l,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,x)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,o=a.focusedOption,s=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Er,F({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:o,focusedValue:s,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,o=e.SelectContainer,s=e.ValueContainer,l=this.props,c=l.className,d=l.id,g=l.isDisabled,x=l.menuIsOpen,v=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(o,F({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:v}),this.renderLiveRegion(),p.createElement(a,F({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:v,menuIsOpen:x}),p.createElement(s,F({},b,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,F({},b,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,o=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=e.options,x=e.value,v=e.menuIsOpen,b=e.inputValue,h=e.isMulti,m=We(x),M={};if(u&&(x!==u.value||g!==u.options||v!==u.menuIsOpen||b!==u.inputValue)){var D=v?Yr(e,m):[],w=o?qr(a,m):null,E=Xr(a,D);M={selectValue:m,focusedOption:E,focusedValue:w,clearFocusValueOnUpdate:!1}}var y=s!=null&&e!==u?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=l,A=c&&d;return c&&!A&&(I={value:fe(h,m,m[0]||null),options:m,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(I=null),C(C(C({},M),y),{},{prevProps:e,ariaSelection:I,prevWasFocused:A})}}]),i}(p.Component);zt.defaultProps=Gr;var Qr=p.forwardRef(function(n,t){var i=yn(n);return p.createElement(zt,F({ref:t},i))}),ut=Qr;const Zr=n=>n.products.products,Jr=n=>n.products.category,eo=n=>n.products.filter,to=n=>n.products.isAddModalOpen,no=n=>n.products.isSuccessModalOpen,io=n=>n.products.info,ro=n=>n.slice(0,1).toUpperCase()+n.slice(1),oo=N.ul`
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
`,ao=N.input`
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
`,uo=N.label`
  position: relative;
`,so=N.button`
  border: none;
  display: flex;
  padding: 0;

  background: transparent;
  position: absolute;

  top: calc(50% - 16px / 2);
  right: 14px;
`,lo=N.svg`
  width: 18px;
  height: 18px;
`,co=N.button`
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
  display: flex;
  padding: 0;
  background: transparent;
  position: absolute;
`,po=N.svg`
  fill: #e6533c;
  width: 18px;
  height: 18px;
`,fo=N.div`
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
`,st=[{value:null,label:"All"},{value:"false",label:"Recommended "},{value:"true",label:"Not recommended"}],ho=()=>{var w;const n=Ee(),t=(w=ne(Jr))==null?void 0:w.map(E=>({value:E,label:ro(E)}));p.useEffect(()=>{n(en())},[n]);const i=Se.useMediaQuery({minWidth:375}),r=Se.useMediaQuery({minWidth:769}),e=Se.useMediaQuery({minWidth:1440});let a="",u="";i?(a="40px",u="156px"):(a="40px",u="183px"),r?(a="52px",u="204px"):a="52px",a="48px";const o={control:E=>({...E,backgroundColor:"trasparent",width:u,height:a,appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(E,{isFocused:y,isSelected:I})=>({...E,fontSize:"14px",lineHeight:"18px",backgroundColor:"rgba(28, 28, 28, 1)",color:I?"#E6533C":"#EFEDE8",padding:"14px"}),menu:E=>({...E,backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:E=>({...E,color:"#EFEDE8"}),indicatorSeparator:E=>({...E,backgroundColor:"transparent"}),dropdownIndicator:E=>({...E,color:"#EFEDE8"}),container:E=>({...E,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none",fontSize:"14px",lineHeight:"18px"}),menuList:E=>({...E,borderRadius:"12px","::-webkit-scrollbar":{display:"none"},overflowY:"scroll"})},[s,l]=p.useState(!1),[c,d]=p.useState(""),[g,x]=p.useState(""),[v,b]=p.useState(st[0]),h=E=>{const y=E.target.value;l(y.length>0),d(y),n(le({search:y,category:g.value,recommended:v.value}))},m=E=>{x(E),n(le({category:E.value,search:c,recommended:v.value}))},M=E=>{b(E),n(le({recommended:E.value,search:c,category:g.value}))},D=()=>{d(""),n(le({search:"",category:g.value,recommended:v.value})),l(!1)};return f.jsxs(oo,{children:[f.jsx(fo,{children:"Filters"}),f.jsx("li",{children:f.jsxs(uo,{children:[f.jsx(ao,{value:c,onChange:h,name:"productSearch",type:"text",placeholder:"Search"}),f.jsx(co,{onClick:D,style:{display:s?"block":"none"},type:"button",children:f.jsx(po,{children:f.jsx("use",{xlinkHref:`${ie}#icon-close`})})}),f.jsx(so,{type:"button",children:f.jsx(lo,{children:f.jsx("use",{xlinkHref:`${ie}#icon-search`})})})]})}),f.jsx("li",{children:f.jsx("div",{children:f.jsx(ut,{value:g,onChange:m,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:o,options:t||[]})})}),f.jsx("li",{children:f.jsx("div",{children:f.jsx(ut,{value:v,onChange:M,options:st,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:o})})})]})},mo=O.ul`
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
`,go=O.div`
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
`,vo=O.li`
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
`,bo=O.div`
  display: flex;

  align-items: flex-start;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
  }
`,xo=O.h2`
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);

  padding: 5px 7.5px;

  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,Eo=O.div`
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
`,Co=O.p`
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
`,So=O.button`
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
`,yo=O.svg`
  stroke: inherit;
  &:hover,
  &:focus {
    stroke: inherit;
  }
`,Fo=O.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 8px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,wo=O.h2`
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
`,Do=O.div`
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
`,Nt=({info:n})=>{const t=Ee(),i=ne(tn),r=()=>{t(pt()),t(nn(n))};return f.jsxs(vo,{children:[f.jsxs(bo,{children:[f.jsx(xo,{children:"DIET"}),f.jsx(Eo,{style:{backgroundColor:`${n.groupBloodNotAllowed[i]?"#E9101D":"#419B09"}`}}),f.jsx(Co,{children:n.groupBloodNotAllowed[i]?"Not recommended":"Recommended"}),f.jsxs(So,{type:"button",onClick:r,children:["Add",f.jsx(yo,{width:16,height:16,children:f.jsx("use",{href:ie+"#icon-arrow-right"})})]})]}),f.jsxs(Fo,{children:[f.jsx("svg",{width:24,height:24,fill:"orange",children:f.jsx("use",{href:ie+"#icon-runningOnCircle"})}),f.jsx(wo,{children:n.title.length>20?`${n.title.slice(0,20)}...`:n.title})]}),f.jsxs(Do,{children:[f.jsxs(Ae,{children:["Calories: ",f.jsx(Ie,{children:n.calories})]}),f.jsxs(Ae,{children:["Category:"," ",f.jsx(Ie,{children:n.category.length>10?`${n.category.slice(0,10)}...`:n.category})]}),f.jsxs(Ae,{children:["Weight: ",f.jsx(Ie,{children:n.weight})]})]})]})};Nt.propTypes={info:j.shape({title:j.string.isRequired,category:j.string.isRequired,weight:j.number.isRequired,calories:j.number,groupBloodNotAllowed:j.shape({})}).isRequired};const Oo=()=>{const n=ne(Zr);return f.jsx(mo,{children:n.length>0?n.slice(0,25).map(t=>f.jsx(Nt,{info:t},t._id)):f.jsxs(go,{children:[f.jsxs(lt,{children:[f.jsx(ct,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),f.jsx(lt,{children:f.jsx(ct,{children:"Try changing the search parameters."})})]})})},Mo=O.div`
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
`;const Ao=O.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
`,Io=O.div`
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
`,Vo=O.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Po=O.input`
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
`,Ro=O.input`
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
`,Lo=O.p`
  font-size: 12px;
  align-items: end;
  color: #efede8;
`,ko=O.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(239, 237, 232, 0.4);
`,To=O.div`
  display: flex;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,Bo=O.button`
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
`,jo=O.button`
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
`;function Ut({data:n,closeAddModal:t,openSuccessModal:i,setAmoutnCalories:r}){const e=Ee(),[a,u]=p.useState(0),o=Math.round(a*n.calories/100),s=()=>{if(!o){console.log("Must be greater than 0");return}const l={productId:n._id,calories:o,amount:a};return e(rn(l)),r(o),t(),i(),o};return f.jsx(Mo,{children:f.jsxs(Io,{children:[f.jsx(Ao,{type:"button",children:f.jsx("svg",{width:"22",height:"22",stroke:"#EFEDE8",children:f.jsx("use",{href:ie+"#icon-close"})})}),f.jsxs("form",{children:[f.jsxs(Vo,{children:[f.jsx("label",{children:f.jsx(Po,{type:"text",value:n.title,disabled:!0})}),f.jsx("label",{children:f.jsx(Ro,{placeholder:"grams",type:"number",value:a,onChange:l=>u(l.target.value)})})]}),f.jsxs(Lo,{children:[f.jsx(ko,{children:"Calories:"})," ",o]}),f.jsxs(To,{children:[f.jsx(Bo,{type:"button",onClick:s,children:"Add to diary"}),f.jsx(jo,{type:"button",onClick:t,children:"Cancel"})]})]})]})})}Ut.propTypes={data:j.object,closeAddModal:j.func,addProduct:j.func,openSuccessModal:j.func,setAmoutnCalories:j.func};const Ho="/GachiClub/assets/avocado-2x-1cf208a8.png",$o=O.div`
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
`;const zo=O.div`
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
`,No=O.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
`,Uo=O.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`,_o=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wo=O.img`
  width: 123px;
  height: 97px;
  margin-bottom: 19px;
`,Go=O.p`
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
`,Yo=O.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,qo=O.button`
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
`,Xo=O.svg`
  width: 16px;
  height: 16px;
  stroke: #efede8;
`,_t=({closeSuccessModal:n,calories:t})=>f.jsx($o,{children:f.jsxs(zo,{children:[f.jsx(No,{type:"button",children:f.jsx("svg",{width:"22",height:"22",stroke:"#EFEDE8",children:f.jsx("use",{href:ie+"#icon-close"})})}),f.jsxs(Uo,{children:[f.jsxs(_o,{children:[f.jsx(Wo,{src:Ho,alt:"avocado"}),f.jsx(Go,{children:"Well done"}),f.jsxs(dt,{children:["Calories:"," ",f.jsx(Yo,{children:t})]})]}),f.jsx(Ne,{to:"/products",children:f.jsx(qo,{onClick:n,children:"Next product"})}),f.jsx(Ne,{to:"/diary",children:f.jsxs(dt,{children:["To the diary",f.jsx(Xo,{width:"16",height:"16",stroke:"#EFEDE84D",children:f.jsx("use",{href:ie+"#icon-right"})})]})})]})]})});_t.propTypes={closeSuccessModal:j.func,calories:j.number};const ea=()=>{const[n,t]=p.useState(0),i=Ee(),r=ne(eo),e=ne(to),a=ne(no),u=ne(io);p.useEffect(()=>{i(on(r))},[i,r]);const o=()=>{i(pt())},s=()=>{i(an())};return f.jsxs(gn,{children:[f.jsxs(bn,{children:[f.jsx(vn,{children:"Products"}),f.jsx(ho,{})]}),f.jsx(Oo,{}),e&&f.jsx(Ut,{setAmoutnCalories:t,closeAddModal:o,openSuccessModal:s,data:u}),a&&f.jsx(_t,{closeSuccessModal:s,calories:n})]})};export{ea as default};
