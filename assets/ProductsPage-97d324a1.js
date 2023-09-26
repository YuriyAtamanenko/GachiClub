import{m as Wt,d as p,E as Gt,o as Yt,s as qt,p as C,_ as Xt,f as ae,q as y,h as Kt,u as lt,b as ct,t as Qt,j as x,I as pe,v as ue,n as I,P as q,w as Zt}from"./index-f1b8019a.js";import{s as z}from"./styled-components.browser.esm-b61c97f0.js";import{_ as dt,f as Jt,a as en,b as tn,c as nn,e as rn}from"./createClass-b25b20b0.js";import{r as Ee}from"./react-responsive-898517c4.js";function on(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var S=function(t,i){var r=arguments;if(i==null||!Wt.call(i,"css"))return p.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Gt,a[1]=Yt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return p.createElement.apply(null,a)};function Pe(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return qt(t)}var an=function(){var t=Pe.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const un="/GachiClub/assets/products-desktop-1x-e8c375a5.jpg",sn="/GachiClub/assets/products-desktop-2x-85e8f868.jpg",ln=z.div`
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
      url(${un});
    background-repeat: no-repeat;
    background-position: 100% 0;
    padding-top: 68px;
    position: relative;
    margin-right: -7vw;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${sn});
    }
  }
`,cn=z.h2`
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
    font-size: 32px;
    line-height: 137.5%;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    align-items: center;
  }
`,dn=z.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-right: -32px;
  }
`;function pn(n){if(Array.isArray(n))return n}function fn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,o=[],s=!0,l=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;s=!1}else for(;!(s=(r=a.call(i)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(c){l=!0,e=c}finally{try{if(!s&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(l)throw e}}return o}}function hn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return pn(n)||fn(n,t)||dt(n,t)||hn()}function K(n,t){if(n==null)return{};var i=on(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var mn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function vn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,o=n.inputValue,s=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,b=n.value,v=K(n,mn),g=p.useState(o!==void 0?o:i),f=X(g,2),h=f[0],O=f[1],D=p.useState(s!==void 0?s:e),w=X(D,2),E=w[0],F=w[1],M=p.useState(b!==void 0?b:u),A=X(M,2),P=A[0],H=A[1],U=p.useCallback(function(W,Q){typeof l=="function"&&l(W,Q),H(W)},[l]),k=p.useCallback(function(W,Q){var Z;typeof c=="function"&&(Z=c(W,Q)),O(Z!==void 0?Z:W)},[c]),N=p.useCallback(function(){typeof m=="function"&&m(),F(!0)},[m]),R=p.useCallback(function(){typeof d=="function"&&d(),F(!1)},[d]),L=o!==void 0?o:h,$=s!==void 0?s:E,_=b!==void 0?b:P;return C(C({},v),{},{inputValue:L,menuIsOpen:$,onChange:U,onInputChange:k,onMenuClose:R,onMenuOpen:N,value:_})}function gn(n){if(Array.isArray(n))return Jt(n)}function bn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function xn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(n){return gn(n)||bn(n)||dt(n)||xn()}function En(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Cn=Math.min,Sn=Math.max,fe=Math.round,se=Math.floor,he=n=>({x:n,y:n});function Fn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function ft(n){return mt(n)?(n.nodeName||"").toLowerCase():"#document"}function j(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function ht(n){var t;return(t=(mt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function mt(n){return n instanceof Node||n instanceof j(n).Node}function Me(n){return n instanceof Element||n instanceof j(n).Element}function Re(n){return n instanceof HTMLElement||n instanceof j(n).HTMLElement}function je(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof j(n).ShadowRoot}function vt(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Le(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function yn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function wn(n){return["html","body","#document"].includes(ft(n))}function Le(n){return j(n).getComputedStyle(n)}function Dn(n){if(ft(n)==="html")return n;const t=n.assignedSlot||n.parentNode||je(n)&&n.host||ht(n);return je(t)?t.host:t}function gt(n){const t=Dn(n);return wn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Re(t)&&vt(t)?t:gt(t)}function me(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=gt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=j(e);return a?t.concat(u,u.visualViewport||[],vt(e)?e:[],u.frameElement&&i?me(u.frameElement):[]):t.concat(e,me(e))}function On(n){const t=Le(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Re(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,o=fe(i)!==a||fe(r)!==u;return o&&(i=a,r=u),{width:i,height:r,$:o}}function Te(n){return Me(n)?n:n.contextElement}function Ce(n){const t=Te(n);if(!Re(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=On(t);let u=(a?fe(i.width):i.width)/r,o=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!o||!Number.isFinite(o))&&(o=1),{x:u,y:o}}const An=he(0);function Mn(n){const t=j(n);return!yn()||!t.visualViewport?An:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function In(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==j(n)?!1:t}function ze(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Te(n);let u=he(1);t&&(r?Me(r)&&(u=Ce(r)):u=Ce(n));const o=In(a,i,r)?Mn(a):he(0);let s=(e.left+o.x)/u.x,l=(e.top+o.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const m=j(a),b=r&&Me(r)?j(r):r;let v=m.frameElement;for(;v&&r&&b!==m;){const g=Ce(v),f=v.getBoundingClientRect(),h=Le(v),O=f.left+(v.clientLeft+parseFloat(h.paddingLeft))*g.x,D=f.top+(v.clientTop+parseFloat(h.paddingTop))*g.y;s*=g.x,l*=g.y,c*=g.x,d*=g.y,s+=O,l+=D,v=j(v).frameElement}}return Fn({width:c,height:d,x:s,y:l})}function Vn(n,t){let i=null,r;const e=ht(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(o,s){o===void 0&&(o=!1),s===void 0&&(s=1),a();const{left:l,top:c,width:d,height:m}=n.getBoundingClientRect();if(o||t(),!d||!m)return;const b=se(c),v=se(e.clientWidth-(l+d)),g=se(e.clientHeight-(c+m)),f=se(l),O={rootMargin:-b+"px "+-v+"px "+-g+"px "+-f+"px",threshold:Sn(0,Cn(1,s))||1};let D=!0;function w(E){const F=E[0].intersectionRatio;if(F!==s){if(!D)return u();F?u(!1,F):r=setTimeout(()=>{u(!1,1e-7)},100)}D=!1}try{i=new IntersectionObserver(w,{...O,root:e.ownerDocument})}catch{i=new IntersectionObserver(w,O)}i.observe(n)}return u(!0),a}function Pn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,l=Te(n),c=e||a?[...l?me(l):[],...me(t)]:[];c.forEach(h=>{e&&h.addEventListener("scroll",i,{passive:!0}),a&&h.addEventListener("resize",i)});const d=l&&o?Vn(l,i):null;let m=-1,b=null;u&&(b=new ResizeObserver(h=>{let[O]=h;O&&O.target===l&&b&&(b.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{b&&b.observe(t)})),i()}),l&&!s&&b.observe(l),b.observe(t));let v,g=s?ze(n):null;s&&f();function f(){const h=ze(n);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&i(),g=h,v=requestAnimationFrame(f)}return i(),()=>{c.forEach(h=>{e&&h.removeEventListener("scroll",i),a&&h.removeEventListener("resize",i)}),d&&d(),b&&b.disconnect(),b=null,s&&cancelAnimationFrame(v)}}var Ie=p.useLayoutEffect,Rn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Ln(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Tn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Ln(n,u)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var Ue=function(t){return _n(t)?t.filter(Boolean):Xt(t)==="object"&&t!==null?[t]:[]},bt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,Rn);return C({},i)},V=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,o=t.className;return{css:a(i,t),className:e(r??{},u(i,t),o)}};function xe(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function kn(n){return xe(n)?window.innerHeight:n.clientHeight}function xt(n){return xe(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(xe(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Bn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Hn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function le(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=xt(n),a=t-e,u=10,o=0;function s(){o+=u;var l=Hn(o,e,a,i);ge(n,l),o<i?window.requestAnimationFrame(s):r(n)}s()}function Ne(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function $n(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function _e(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Et=!1,zn={get passive(){return Et=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",ve,zn),ce.removeEventListener("p",ve,!1));var Un=Et;function Nn(n){return n!=null}function _n(n){return Array.isArray(n)}function de(n,t,i){return n?t:i}var Wn=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var o=X(u,1),s=o[0];return!r.includes(s)});return a.reduce(function(u,o){var s=X(o,2),l=s[0],c=s[1];return u[l]=c,u},{})},Gn=["children","innerProps"],Yn=["children","innerProps"];function qn(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,o=n.controlHeight,s=Bn(i),l={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return l;var c=s.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),b=m.bottom,v=m.height,g=m.top,f=i.offsetParent.getBoundingClientRect(),h=f.top,O=u?window.innerHeight:kn(s),D=xt(s),w=parseInt(getComputedStyle(i).marginBottom,10),E=parseInt(getComputedStyle(i).marginTop,10),F=h-E,M=O-g,A=F+D,P=d-D-g,H=b-O+D+w,U=D+g-E,k=160;switch(e){case"auto":case"bottom":if(M>=v)return{placement:"bottom",maxHeight:t};if(P>=v&&!u)return a&&le(s,H,k),{placement:"bottom",maxHeight:t};if(!u&&P>=r||u&&M>=r){a&&le(s,H,k);var N=u?M-w:P-w;return{placement:"bottom",maxHeight:N}}if(e==="auto"||u){var R=t,L=u?F:A;return L>=r&&(R=Math.min(L-w-o,t)),{placement:"top",maxHeight:R}}if(e==="bottom")return a&&ge(s,H),{placement:"bottom",maxHeight:t};break;case"top":if(F>=v)return{placement:"top",maxHeight:t};if(A>=v&&!u)return a&&le(s,U,k),{placement:"top",maxHeight:t};if(!u&&A>=r||u&&F>=r){var $=t;return(!u&&A>=r||u&&F>=r)&&($=u?F-E:A-E),a&&le(s,U,k),{placement:"top",maxHeight:$}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return l}function Xn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Ct=function(t){return t==="auto"?"bottom":t},Kn=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,o=a.spacing,s=a.colors;return C((r={label:"menu"},ae(r,Xn(e),"100%"),ae(r,"position","absolute"),ae(r,"width","100%"),ae(r,"zIndex",1),r),i?{}:{backgroundColor:s.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},St=p.createContext(null),Qn=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,o=t.menuShouldScrollIntoView,s=t.theme,l=p.useContext(St)||{},c=l.setPortalPlacement,d=p.useRef(null),m=p.useState(e),b=X(m,2),v=b[0],g=b[1],f=p.useState(null),h=X(f,2),O=h[0],D=h[1],w=s.spacing.controlHeight;return Ie(function(){var E=d.current;if(E){var F=u==="fixed",M=o&&!F,A=qn({maxHeight:e,menuEl:E,minHeight:r,placement:a,shouldScroll:M,isFixedPosition:F,controlHeight:w});g(A.maxHeight),D(A.placement),c==null||c(A.placement)}},[e,a,u,o,r,c,w]),i({ref:d,placerProps:C(C({},t),{},{placement:O||Ct(a),maxHeight:v})})},Zn=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return S("div",y({},V(t,"menu",{menu:!0}),{ref:r},e),i)},Jn=Zn,ei=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ti=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",y({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},Ft=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ni=Ft,ii=Ft,ri=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=K(t,Gn);return S("div",y({},V(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},oi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,Yn);return S("div",y({},V(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},ai=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},ui=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,o=t.menuPosition,s=p.useRef(null),l=p.useRef(null),c=p.useState(Ct(u)),d=X(c,2),m=d[0],b=d[1],v=p.useMemo(function(){return{setPortalPlacement:b}},[]),g=p.useState(null),f=X(g,2),h=f[0],O=f[1],D=p.useCallback(function(){if(e){var M=$n(e),A=o==="fixed"?0:window.pageYOffset,P=M[m]+A;(P!==(h==null?void 0:h.offset)||M.left!==(h==null?void 0:h.rect.left)||M.width!==(h==null?void 0:h.rect.width))&&O({offset:P,rect:M})}},[e,o,m,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Ie(function(){D()},[D]);var w=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),e&&s.current&&(l.current=Pn(e,s.current,D,{elementResize:"ResizeObserver"in window}))},[e,D]);Ie(function(){w()},[w]);var E=p.useCallback(function(M){s.current=M,w()},[w]);if(!i&&o!=="fixed"||!h)return null;var F=S("div",y({ref:E},V(C(C({},t),{},{offset:h.offset,position:o,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),r);return S(St.Provider,{value:v},i?Kt.createPortal(F,i):F)},si=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},li=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",y({},V(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},ci=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},di=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",y({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fi=function(t){var i=t.children,r=t.innerProps;return S("div",y({},V(t,"indicatorsContainer",{indicators:!0}),r),i)},We,hi=["size"],mi=["innerProps","isRtl","size"],vi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},yt=function(t){var i=t.size,r=K(t,hi);return S("svg",y({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vi},r))},ke=function(t){return S(yt,y({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},wt=function(t){return S(yt,y({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},gi=Dt,bi=function(t){var i=t.children,r=t.innerProps;return S("div",y({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||S(wt,null))},xi=Dt,Ei=function(t){var i=t.children,r=t.innerProps;return S("div",y({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||S(ke,null))},Ci=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Si=function(t){var i=t.innerProps;return S("span",y({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Fi=an(We||(We=En([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),yi=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,o=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:o*2})},Se=function(t){var i=t.delay,r=t.offset;return S("span",{css:Pe({animation:"".concat(Fi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},wi=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=K(t,mi);return S("div",y({},V(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(Se,{delay:0,offset:r}),S(Se,{delay:160,offset:!0}),S(Se,{delay:320,offset:!r}))},Di=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,o=a.borderRadius,s=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Oi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,o=t.menuIsOpen;return S("div",y({ref:a},V(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":o}),u),i)},Ai=Oi,Mi=["data"],Ii=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Vi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,o=t.headingProps,s=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return S("div",y({},V(t,"group",{group:!0}),s),S(u,y({},o,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),l),S("div",null,i))},Pi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ri=function(t){var i=bt(t);i.data;var r=K(i,Mi);return S("div",y({},V(t,"groupHeading",{"group-heading":!0}),r))},Li=Vi,Ti=["innerRef","isDisabled","isHidden","inputClassName"],ki=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,o=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},Bi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:o.neutral80})},Ot={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Bi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ot)},Hi=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ot)},$i=function(t){var i=t.cx,r=t.value,e=bt(t),a=e.innerRef,u=e.isDisabled,o=e.isHidden,s=e.inputClassName,l=K(e,Ti);return S("div",y({},V(t,"input",{"input-container":!0}),{"data-value":r||""}),S("input",y({className:i({input:!0},s),ref:a,style:Hi(o),disabled:u},l)))},ji=$i,zi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Ui=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ni=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,o=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:o?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},At=function(t){var i=t.children,r=t.innerProps;return S("div",r,i)},_i=At,Wi=At;function Gi(n){var t=n.children,i=n.innerProps;return S("div",y({role:"button"},i),t||S(ke,{size:14}))}var Yi=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,o=t.removeProps,s=t.selectProps,l=r.Container,c=r.Label,d=r.Remove;return S(l,{data:e,innerProps:C(C({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:s},S(c,{data:e,innerProps:C({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},i),S(d,{data:e,innerProps:C(C({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},o),selectProps:s}))},qi=Yi,Xi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,o=u.spacing,s=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?s.primary:e?s.primary25:"transparent",color:r?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?s.primary:s.primary50}})},Ki=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,o=t.innerProps;return S("div",y({},V(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},o),i)},Qi=Ki,Zi=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Ji=function(t){var i=t.children,r=t.innerProps;return S("div",y({},V(t,"placeholder",{placeholder:!0}),r),i)},er=Ji,tr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},nr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return S("div",y({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},ir=nr,rr={ClearIndicator:Ei,Control:Ai,DropdownIndicator:bi,DownChevron:wt,CrossIcon:ke,Group:Li,GroupHeading:Ri,IndicatorsContainer:fi,IndicatorSeparator:Si,Input:ji,LoadingIndicator:wi,Menu:Jn,MenuList:ti,MenuPortal:ui,LoadingMessage:oi,NoOptionsMessage:ri,MultiValue:qi,MultiValueContainer:_i,MultiValueLabel:Wi,MultiValueRemove:Gi,Option:Qi,Placeholder:er,SelectContainer:li,SingleValue:ir,ValueContainer:di},or=function(t){return C(C({},rr),t.components)},Ge=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ar(n,t){return!!(n===t||Ge(n)&&Ge(t))}function ur(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!ar(n[i],t[i]))return!1;return!0}function sr(n,t){t===void 0&&(t=ur);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var lr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cr=function(t){return S("span",y({css:lr},t))},Ye=cr,dr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.isDisabled,a=t.tabSelectsValue,u=t.context;switch(u){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,o=t.selectValue,s=t.isDisabled,l=t.isSelected,c=function(v,g){return v&&v.length?"".concat(v.indexOf(g)+1," of ").concat(v.length):""};if(i==="value"&&o)return"value ".concat(u," focused, ").concat(c(o,r),".");if(i==="menu"){var d=s?" disabled":"",m="".concat(l?"selected":"focused").concat(d);return"option ".concat(u," ").concat(m,", ").concat(c(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},pr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,o=t.selectValue,s=t.selectProps,l=t.id,c=s.ariaLiveMessages,d=s.getOptionLabel,m=s.inputValue,b=s.isMulti,v=s.isOptionDisabled,g=s.isSearchable,f=s.menuIsOpen,h=s.options,O=s.screenReaderStatus,D=s.tabSelectsValue,w=s["aria-label"],E=s["aria-live"],F=p.useMemo(function(){return C(C({},dr),c||{})},[c]),M=p.useMemo(function(){var R="";if(i&&F.onChange){var L=i.option,$=i.options,_=i.removedValue,W=i.removedValues,Q=i.value,Z=function(Y){return Array.isArray(Y)?null:Y},te=_||L||Z(Q),T=te?d(te):"",B=$||W||void 0,J=B?B.map(d):[],ee=C({isDisabled:te&&v(te,o),label:T,labels:J},i);R=F.onChange(ee)}return R},[i,F,v,o,d]),A=p.useMemo(function(){var R="",L=r||e,$=!!(r&&o&&o.includes(r));if(L&&F.onFocus){var _={focused:L,label:d(L),isDisabled:v(L,o),isSelected:$,options:a,context:L===r?"menu":"value",selectValue:o};R=F.onFocus(_)}return R},[r,e,d,v,F,a,o]),P=p.useMemo(function(){var R="";if(f&&h.length&&F.onFilter){var L=O({count:a.length});R=F.onFilter({inputValue:m,resultsMessage:L})}return R},[a,m,f,F,h,O]),H=p.useMemo(function(){var R="";if(F.guidance){var L=e?"value":f?"menu":"input";R=F.guidance({"aria-label":w,context:L,isDisabled:r&&v(r,o),isMulti:b,isSearchable:g,tabSelectsValue:D})}return R},[w,r,e,b,v,g,f,F,o,D]),U="".concat(A," ").concat(P," ").concat(H),k=S(p.Fragment,null,S("span",{id:"aria-selection"},M),S("span",{id:"aria-context"},U)),N=(i==null?void 0:i.action)==="initial-input-focus";return S(p.Fragment,null,S(Ye,{id:l},N&&k),S(Ye,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text"},u&&!N&&k))},fr=pr,Ve=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],hr=new RegExp("["+Ve.map(function(n){return n.letters}).join("")+"]","g"),Mt={};for(var Fe=0;Fe<Ve.length;Fe++)for(var ye=Ve[Fe],we=0;we<ye.letters.length;we++)Mt[ye.letters[we]]=ye.base;var It=function(t){return t.replace(hr,function(i){return Mt[i]})},mr=sr(It),qe=function(t){return t.replace(/^\s+|\s+$/g,"")},vr=function(t){return"".concat(t.label," ").concat(t.value)},gr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:vr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,o=e.stringify,s=e.trim,l=e.matchFrom,c=s?qe(r):r,d=s?qe(o(i)):o(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=mr(c),d=It(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},br=["innerRef"];function xr(n){var t=n.innerRef,i=K(n,br),r=Wn(i,"onExited","in","enter","exit","appear");return S("input",y({ref:t},r,{css:Pe({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Er=function(t){t.preventDefault(),t.stopPropagation()};function Cr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),o=p.useRef(!1),s=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(f,h){if(l.current!==null){var O=l.current,D=O.scrollTop,w=O.scrollHeight,E=O.clientHeight,F=l.current,M=h>0,A=w-E-D,P=!1;A>h&&u.current&&(r&&r(f),u.current=!1),M&&o.current&&(a&&a(f),o.current=!1),M&&h>A?(i&&!u.current&&i(f),F.scrollTop=w,P=!0,u.current=!0):!M&&-h>D&&(e&&!o.current&&e(f),F.scrollTop=0,P=!0,o.current=!0),P&&Er(f)}},[i,r,e,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),m=p.useCallback(function(f){s.current=f.changedTouches[0].clientY},[]),b=p.useCallback(function(f){var h=s.current-f.changedTouches[0].clientY;c(f,h)},[c]),v=p.useCallback(function(f){if(f){var h=Un?{passive:!1}:!1;f.addEventListener("wheel",d,h),f.addEventListener("touchstart",m,h),f.addEventListener("touchmove",b,h)}},[b,m,d]),g=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",m,!1),f.removeEventListener("touchmove",b,!1))},[b,m,d]);return p.useEffect(function(){if(t){var f=l.current;return v(f),function(){g(f)}}},[t,v,g]),function(f){l.current=f}}var Xe=["boxSizing","height","overflow","paddingRight","position"],Ke={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Qe(n){n.preventDefault()}function Ze(n){n.stopPropagation()}function Je(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function et(){return"ontouchstart"in window||navigator.maxTouchPoints}var tt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,ne={capture:!1,passive:!1};function Sr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(s){if(tt){var l=document.body,c=l&&l.style;if(r&&Xe.forEach(function(v){var g=c&&c[v];e.current[v]=g}),r&&re<1){var d=parseInt(e.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,b=window.innerWidth-m+d||0;Object.keys(Ke).forEach(function(v){var g=Ke[v];c&&(c[v]=g)}),c&&(c.paddingRight="".concat(b,"px"))}l&&et()&&(l.addEventListener("touchmove",Qe,ne),s&&(s.addEventListener("touchstart",Je,ne),s.addEventListener("touchmove",Ze,ne))),re+=1}},[r]),o=p.useCallback(function(s){if(tt){var l=document.body,c=l&&l.style;re=Math.max(re-1,0),r&&re<1&&Xe.forEach(function(d){var m=e.current[d];c&&(c[d]=m)}),l&&et()&&(l.removeEventListener("touchmove",Qe,ne),s&&(s.removeEventListener("touchstart",Je,ne),s.removeEventListener("touchmove",Ze,ne)))}},[r]);return p.useEffect(function(){if(t){var s=a.current;return u(s),function(){o(s)}}},[t,u,o]),function(s){a.current=s}}var Fr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},yr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function wr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,o=n.onTopArrive,s=n.onTopLeave,l=Cr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:o,onTopLeave:s}),c=Sr({isEnabled:i}),d=function(b){l(b),c(b)};return S(p.Fragment,null,i&&S("div",{onClick:Fr,css:yr}),t(d))}var Dr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Or=function(t){var i=t.name,r=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Dr,value:"",onChange:function(){}})},Ar=Or,Mr=function(t){return t.label},Ir=function(t){return t.label},Vr=function(t){return t.value},Pr=function(t){return!!t.isDisabled},Rr={clearIndicator:xi,container:si,control:Di,dropdownIndicator:gi,group:Ii,groupHeading:Pi,indicatorsContainer:pi,indicatorSeparator:Ci,input:ki,loadingIndicator:yi,loadingMessage:ii,menu:Kn,menuList:ei,menuPortal:ai,multiValue:zi,multiValueLabel:Ui,multiValueRemove:Ni,noOptionsMessage:ni,option:Xi,placeholder:Zi,singleValue:tr,valueContainer:ci},Lr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Tr=4,Vt=4,kr=38,Br=Vt*2,Hr={baseUnit:Vt,controlHeight:kr,menuGutter:Br},De={borderRadius:Tr,colors:Lr,spacing:Hr},$r={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:_e(),captureMenuScroll:!_e(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gr(),formatGroupLabel:Mr,getOptionLabel:Ir,getOptionValue:Vr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Pr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function nt(n,t,i,r){var e=Tt(n,t,i),a=kt(n,t,i),u=Lt(n,t),o=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:o,index:r}}function Pt(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,o){return nt(n,u,t,o)}).filter(function(u){return it(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=nt(n,i,t,r);return it(n,a)?a:void 0}).filter(Nn)}function Rt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,pt(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function jr(n,t){return Rt(Pt(n,t))}function it(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,o=t.value;return(!Ht(n)||!a)&&Bt(n,{label:u,value:o,data:e},r)}function zr(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Ur(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Lt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Tt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function kt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function Bt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Ht=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},Nr=1,$t=function(n){en(i,n);var t=tn(i);function i(r){var e;if(nn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var l=e.props,c=l.onChange,d=l.name;s.name=d,e.ariaOnChange(o,s),c(o,s)},e.setValue=function(o,s,l){var c=e.props,d=c.closeMenuOnSelect,m=c.isMulti,b=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:b}),d&&(e.setState({inputIsHiddenAfterUpdate:!m}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:l})},e.selectOption=function(o){var s=e.props,l=s.blurInputOnSelect,c=s.isMulti,d=s.name,m=e.state.selectValue,b=c&&e.isOptionSelected(o,m),v=e.isOptionDisabled(o,m);if(b){var g=e.getOptionValue(o);e.setValue(m.filter(function(f){return e.getOptionValue(f)!==g}),"deselect-option",o)}else if(!v)c?e.setValue([].concat(pt(m),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:d});return}l&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,l=e.state.selectValue,c=e.getOptionValue(o),d=l.filter(function(b){return e.getOptionValue(b)!==c}),m=de(s,d,d[0]||null);e.onChange(m,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(de(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,l=s[s.length-1],c=s.slice(0,s.length-1),d=de(o,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:l})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return Tn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Lt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var l=e.props.unstyled,c=Rr[o](s,l);c.boxSizing="border-box";var d=e.props.styles[o];return d?d(c,s):c},e.getClassNames=function(o,s){var l,c;return(l=(c=e.props.classNames)[o])===null||l===void 0?void 0:l.call(c,s)},e.getElementId=function(o){return"".concat(e.instancePrefix,"-").concat(o)},e.getComponents=function(){return or(e.props)},e.buildCategorizedOptions=function(){return Pt(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Rt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,l=s.isMulti,c=s.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!l}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&xe(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,l=s&&s.item(0);l&&(e.initialTouchX=l.clientX,e.initialTouchY=l.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,l=s&&s.item(0);if(l){var c=Math.abs(l.clientX-e.initialTouchX),d=Math.abs(l.clientY-e.initialTouchY),m=5;e.userIsDragging=c>m||d>m}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,l=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(l,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){e.blockOptionHover||e.state.focusedOption===o||e.setState({focusedOption:o})},e.shouldHideSelectedOptions=function(){return Ht(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,l=s.isMulti,c=s.backspaceRemovesValue,d=s.escapeClearsValue,m=s.inputValue,b=s.isClearable,v=s.isDisabled,g=s.menuIsOpen,f=s.onKeyDown,h=s.tabSelectsValue,O=s.openMenuOnFocus,D=e.state,w=D.focusedOption,E=D.focusedValue,F=D.selectValue;if(!v&&!(typeof f=="function"&&(f(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||m)return;e.focusValue("previous");break;case"ArrowRight":if(!l||m)return;e.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(E)e.removeValue(E);else{if(!c)return;l?e.popValue():b&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!g||!h||!w||O&&e.isOptionSelected(w,F))return;e.selectOption(w);break;case"Enter":if(o.keyCode===229)break;if(g){if(!w||e.isComposing)return;e.selectOption(w);break}return;case"Escape":g?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:m}),e.onMenuClose()):b&&d&&e.clearValue();break;case" ":if(m)return;if(!g){e.openMenu("first");break}if(!w)return;e.selectOption(w);break;case"ArrowUp":g?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":g?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!g)return;e.focusOption("pageup");break;case"PageDown":if(!g)return;e.focusOption("pagedown");break;case"Home":if(!g)return;e.focusOption("first");break;case"End":if(!g)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++Nr),e.state.selectValue=Ue(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.buildFocusableOptions(),u=a.indexOf(e.state.selectValue[0]);e.state.focusedOption=a[u]}return e}return rn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ne(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,o=a.menuIsOpen,s=this.state.isFocused;(s&&!u&&e.isDisabled||s&&o&&!e.menuIsOpen)&&this.focusInput(),s&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ne(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,o=u.selectValue,s=u.isFocused,l=this.buildFocusableOptions(),c=e==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(o[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=u.indexOf(o);o||(s=-1);var l=u.length-1,c=-1;if(u.length){switch(e){case"previous":s===0?c=0:s===-1?c=l:c=s-1;break;case"next":s>-1&&s<l&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var s=0,l=o.indexOf(u);u||(l=-1),e==="up"?s=l>0?l-1:o.length-1:e==="down"?s=(l+1)%o.length:e==="pageup"?(s=l-a,s<0&&(s=0)):e==="pagedown"?(s=l+a,s>o.length-1&&(s=o.length-1)):e==="last"&&(s=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(De):C(C({},De),this.props.theme):De}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,o=this.getClassNames,s=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,b=d.isRtl,v=d.options,g=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:o,getValue:s,hasValue:g,isMulti:m,isRtl:b,options:v,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Tt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return kt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Bt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:o})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,o=e.inputId,s=e.inputValue,l=e.tabIndex,c=e.form,d=e.menuIsOpen,m=e.required,b=this.getComponents(),v=b.Input,g=this.state,f=g.inputIsHidden,h=g.ariaSelection,O=this.commonProps,D=o||this.getElementId("input"),w=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,y({},O,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:s},w)):p.createElement(xr,y({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,o=a.MultiValueContainer,s=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,b=this.props,v=b.controlShouldRenderValue,g=b.isDisabled,f=b.isMulti,h=b.inputValue,O=b.placeholder,D=this.state,w=D.selectValue,E=D.focusedValue,F=D.isFocused;if(!this.hasValue()||!v)return h?null:p.createElement(d,y({},m,{key:"placeholder",isDisabled:g,isFocused:F,innerProps:{id:this.getElementId("placeholder")}}),O);if(f)return w.map(function(A,P){var H=A===E,U="".concat(e.getOptionLabel(A),"-").concat(e.getOptionValue(A));return p.createElement(u,y({},m,{components:{Container:o,Label:s,Remove:l},isFocused:H,isDisabled:g,key:U,index:P,removeProps:{onClick:function(){return e.removeValue(A)},onTouchEnd:function(){return e.removeValue(A)},onMouseDown:function(N){N.preventDefault()}},data:A}),e.formatOptionLabel(A,"value"))});if(h)return null;var M=w[0];return p.createElement(c,y({},m,{data:M,isDisabled:g}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,o=this.props,s=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var o=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused;return p.createElement(u,y({},o,{isDisabled:s,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:l,isDisabled:o,isFocused:s}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,o=a.GroupHeading,s=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,b=a.Option,v=this.commonProps,g=this.state.focusedOption,f=this.props,h=f.captureMenuScroll,O=f.inputValue,D=f.isLoading,w=f.loadingMessage,E=f.minMenuHeight,F=f.maxMenuHeight,M=f.menuIsOpen,A=f.menuPlacement,P=f.menuPosition,H=f.menuPortalTarget,U=f.menuShouldBlockScroll,k=f.menuShouldScrollIntoView,N=f.noOptionsMessage,R=f.onMenuScrollToTop,L=f.onMenuScrollToBottom;if(!M)return null;var $=function(B,J){var ee=B.type,G=B.data,Y=B.isDisabled,ie=B.isSelected,oe=B.label,Ut=B.value,Be=g===G,He=Y?void 0:function(){return e.onOptionHover(G)},Nt=Y?void 0:function(){return e.selectOption(G)},$e="".concat(e.getElementId("option"),"-").concat(J),_t={id:$e,onClick:Nt,onMouseMove:He,onMouseOver:He,tabIndex:-1};return p.createElement(b,y({},v,{innerProps:_t,data:G,isDisabled:Y,isSelected:ie,key:$e,label:oe,type:ee,value:Ut,isFocused:Be,innerRef:Be?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(B.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var B=T.data,J=T.options,ee=T.index,G="".concat(e.getElementId("group"),"-").concat(ee),Y="".concat(G,"-heading");return p.createElement(u,y({},v,{key:G,data:B,options:J,Heading:o,headingProps:{id:Y,data:T.data},label:e.formatGroupLabel(T.data)}),T.options.map(function(ie){return $(ie,"".concat(ee,"-").concat(ie.index))}))}else if(T.type==="option")return $(T,"".concat(T.index))});else if(D){var W=w({inputValue:O});if(W===null)return null;_=p.createElement(d,v,W)}else{var Q=N({inputValue:O});if(Q===null)return null;_=p.createElement(m,v,Q)}var Z={minMenuHeight:E,maxMenuHeight:F,menuPlacement:A,menuPosition:P,menuShouldScrollIntoView:k},te=p.createElement(Qn,y({},v,Z),function(T){var B=T.ref,J=T.placerProps,ee=J.placement,G=J.maxHeight;return p.createElement(s,y({},v,Z,{innerRef:B,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:D,placement:ee}),p.createElement(wr,{captureEnabled:h,onTopArrive:R,onBottomArrive:L,lockEnabled:U},function(Y){return p.createElement(l,y({},v,{innerRef:function(oe){e.getMenuListRef(oe),Y(oe)},isLoading:D,maxHeight:G,focusedOption:g}),_)}))});return H||P==="fixed"?p.createElement(c,y({},v,{appendTo:H,controlElement:this.controlRef,menuPlacement:A,menuPosition:P}),te):te}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,o=a.isDisabled,s=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!o)return p.createElement(Ar,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(s)if(u){var m=d.map(function(g){return e.getOptionValue(g)}).join(u);return p.createElement("input",{name:l,type:"hidden",value:m})}else{var b=d.length>0?d.map(function(g,f){return p.createElement("input",{key:"i-".concat(f),name:l,type:"hidden",value:e.getOptionValue(g)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,b)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,o=a.focusedOption,s=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(fr,y({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:o,focusedValue:s,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,o=e.SelectContainer,s=e.ValueContainer,l=this.props,c=l.className,d=l.id,m=l.isDisabled,b=l.menuIsOpen,v=this.state.isFocused,g=this.commonProps=this.getCommonProps();return p.createElement(o,y({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:v}),this.renderLiveRegion(),p.createElement(a,y({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:v,menuIsOpen:b}),p.createElement(s,y({},g,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},g,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,o=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=e.options,b=e.value,v=e.menuIsOpen,g=e.inputValue,f=e.isMulti,h=Ue(b),O={};if(u&&(b!==u.value||m!==u.options||v!==u.menuIsOpen||g!==u.inputValue)){var D=v?jr(e,h):[],w=o?zr(a,h):null,E=Ur(a,D);O={selectValue:h,focusedOption:E,focusedValue:w,clearFocusValueOnUpdate:!1}}var F=s!=null&&e!==u?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=l,A=c&&d;return c&&!A&&(M={value:de(f,h,h[0]||null),options:h,action:"initial-input-focus"},A=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(M=null),C(C(C({},O),F),{},{prevProps:e,ariaSelection:M,prevWasFocused:A})}}]),i}(p.Component);$t.defaultProps=$r;var _r=p.forwardRef(function(n,t){var i=vn(n);return p.createElement($t,y({ref:t},i))}),rt=_r;const Wr=n=>n.products.products,Gr=n=>n.products.category,Yr=n=>n.slice(0,1).toUpperCase()+n.slice(1),qr=z.ul`
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
`,Xr=z.input`
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
`,Kr=z.label`
  position: relative;
`,Qr=z.button`
  border: none;
  display: flex;
  padding: 0;

  background: transparent;
  position: absolute;

  top: calc(50% - 16px / 2);
  right: 14px;
`,Zr=z.svg`
  width: 18px;
  height: 18px;
`,Jr=z.button`
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
  display: flex;
  padding: 0;
  background: transparent;
  position: absolute;
`,eo=z.svg`
  fill: #e6533c;
  width: 18px;
  height: 18px;
`,to=z.div`
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
`,ot=[{value:"all",label:"All"},{value:"recommended",label:"Recommended "},{value:"notRecommended",label:"Not recommended"}],no=()=>{var w;const n=lt(),t=(w=ct(Gr))==null?void 0:w.map(E=>({value:E,label:Yr(E)}));p.useEffect(()=>{n(Qt())},[n]);const i=Ee.useMediaQuery({minWidth:375}),r=Ee.useMediaQuery({minWidth:769}),e=Ee.useMediaQuery({minWidth:1440});let a="",u="";i?(a="40px",u="156px"):(a="40px",u="183px"),r?(a="52px",u="204px"):a="52px",a="48px";const o={control:E=>({...E,backgroundColor:"trasparent",width:u,height:a,appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(E,{isFocused:F,isSelected:M})=>({...E,fontSize:"14px",lineHeight:"18px",backgroundColor:"rgba(28, 28, 28, 1)",color:M?"#E6533C":"#EFEDE8",padding:"14px"}),menu:E=>({...E,backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:E=>({...E,color:"#EFEDE8"}),indicatorSeparator:E=>({...E,backgroundColor:"transparent"}),dropdownIndicator:E=>({...E,color:"#EFEDE8"}),container:E=>({...E,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none",fontSize:"14px",lineHeight:"18px"}),menuList:E=>({...E,borderRadius:"12px","::-webkit-scrollbar":{display:"none"},overflowY:"scroll"})},[s,l]=p.useState(!1),[c,d]=p.useState(""),[m,b]=p.useState(""),[v,g]=p.useState(ot[0]),f=E=>{const F=E.target.value;l(F.length>0),d(F),n(ue({search:F,category:m.value,recommended:v.value}))},h=E=>{b(E),n(ue({category:E.value,search:c,recommended:v.value}))},O=E=>{g(E),n(ue({recommended:E.value,search:c,category:m.value}))},D=()=>{d(""),n(ue({search:"",category:m.value,recommended:v.value})),l(!1)};return x.jsxs(qr,{children:[x.jsx(to,{children:"Filters"}),x.jsx("li",{children:x.jsxs(Kr,{children:[x.jsx(Xr,{value:c,onChange:f,name:"productSearch",type:"text",placeholder:"Search"}),x.jsx(Jr,{onClick:D,style:{display:s?"block":"none"},type:"button",children:x.jsx(eo,{children:x.jsx("use",{xlinkHref:`${pe}#icon-close`})})}),x.jsx(Qr,{type:"button",children:x.jsx(Zr,{children:x.jsx("use",{xlinkHref:`${pe}#icon-search`})})})]})}),x.jsx("li",{children:x.jsx("div",{children:x.jsx(rt,{value:m,onChange:h,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:o,options:t||[]})})}),x.jsx("li",{children:x.jsx("div",{children:x.jsx(rt,{value:v,onChange:O,options:ot,theme:E=>({...E,colors:{...E.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}}),styles:o})})})]})},io=I.ul`
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
`,ro=I.div`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 104px;
  }
`,at=I.p`
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
`,ut=I.span`
  color: var(--bright-accent-color);
`,oo=I.li`
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
`,ao=I.div`
  display: flex;

  align-items: flex-start;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
  }
`,uo=I.h2`
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);

  padding: 5px 7.5px;

  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,so=I.div`
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
`,lo=I.p`
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
`,co=I.button`
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
`,po=I.svg`
  stroke: inherit;
  &:hover,
  &:focus {
    stroke: inherit;
  }
`,fo=I.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 8px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ho=I.h2`
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
`,mo=I.div`
  display: flex;
  gap: 16px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Oe=I.p`
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
`,Ae=I.span`
  color: var(--primary-text-color);
`,vo=I.div`
  background-color: #10100f;
  border-radius: 12px;
  padding: 48px 24px;
  z-index: 10;
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,go=I.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,bo=I.input`
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
`,xo=I.input`
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
`,Eo=I.p`
  font-size: 12px;
  align-items: end;
  color: #efede8;
`,Co=I.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(239, 237, 232, 0.4);
`,So=I.div`
  display: flex;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,Fo=I.button`
  display: flex;
  padding: 12px 32px;
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
  }
`,yo=I.button`
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
  }
`,wo=n=>{const t=n;let i=t.getDate(),r=t.getMonth()+1;const e=t.getFullYear();return i<10&&(i="0"+i),r<10&&(r="0"+r),i+"-"+r+"-"+e};function jt({data:n,closeModal:t,addProduct:i}){const[r,e]=p.useState(0),a=Math.round(r*n.calories/100),u=wo(new Date);return x.jsx(vo,{children:x.jsxs("form",{children:[x.jsxs(go,{children:[x.jsx("label",{children:x.jsx(bo,{type:"text",value:n.title,disabled:!0})}),x.jsx("label",{children:x.jsx(xo,{placeholder:"grams",type:"number",value:r,onChange:o=>e(o.target.value)})})]}),x.jsxs(Eo,{children:[x.jsx(Co,{children:"Calories:"})," ",a]}),x.jsxs(So,{children:[x.jsx(Fo,{type:"button",onClick:()=>i({id:n.id,date:u,amount:r,calories:a}),children:"Add to diary"}),x.jsx(yo,{type:"button",onClick:t,children:"Cancel"})]})]})})}jt.propTypes={data:q.object,closeModal:q.func,addProduct:q.func};const st="2",zt=({info:n})=>{const[t,i]=p.useState(!1),r=()=>{i(e=>!e)};return x.jsxs(oo,{children:[x.jsxs(ao,{children:[x.jsx(uo,{children:"DIET"}),x.jsx(so,{style:{backgroundColor:`${n.groupBloodNotAllowed[st]?"#E9101D":"#419B09"}`}}),x.jsx(lo,{children:n.groupBloodNotAllowed[st]?"Not recommended":"Recommended"}),x.jsxs(co,{type:"button",onClick:r,children:["Add",x.jsx(po,{width:16,height:16,children:x.jsx("use",{href:pe+"#icon-arrow-right"})})]})]}),x.jsxs(fo,{children:[x.jsx("svg",{width:24,height:24,fill:"orange",children:x.jsx("use",{href:pe+"#icon-runningOnCircle"})}),x.jsx(ho,{children:n.title.length>20?`${n.title.slice(0,20)}...`:n.title})]}),x.jsxs(mo,{children:[x.jsxs(Oe,{children:["Calories: ",x.jsx(Ae,{children:n.calories})]}),x.jsxs(Oe,{children:["Category:"," ",x.jsx(Ae,{children:n.category.length>10?`${n.category.slice(0,10)}...`:n.category})]}),x.jsxs(Oe,{children:["Weight: ",x.jsx(Ae,{children:n.weight})]})]}),t&&x.jsx(jt,{closeModal:r,data:n})]})};zt.propTypes={info:q.shape({title:q.string.isRequired,category:q.string.isRequired,weight:q.number.isRequired,calories:q.number,groupBloodNotAllowed:q.shape({})}).isRequired};const Do=()=>{const n=ct(Wr);return x.jsx(io,{children:n.length>0?n.slice(0,25).map(t=>x.jsx(zt,{info:t},t._id)):x.jsxs(ro,{children:[x.jsxs(at,{children:[x.jsx(ut,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx(at,{children:x.jsx(ut,{children:"Try changing the search parameters."})})]})})},Vo=()=>{const n=lt();return p.useEffect(()=>{n(Zt())},[n]),x.jsxs(ln,{children:[x.jsxs(dn,{children:[x.jsx(cn,{children:"Products"}),x.jsx(no,{})]}),x.jsx(Do,{})]})};export{Vo as default};