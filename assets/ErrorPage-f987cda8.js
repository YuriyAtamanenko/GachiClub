import{m as Ae,u as Oe,d as oe,r as F,i as Te,L as xe,j as R}from"./index-d0fe522c.js";import{I as je}from"./sprite-8f51fbd8.js";function te(){return te=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},te.apply(this,arguments)}function Ne(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Re(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Fe=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Re(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ne(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),C="-ms-",J="-moz-",f="-webkit-",be="comm",ie="rule",se="decl",Ie="@import",we="@keyframes",Me="@layer",ze=Math.abs,Q=String.fromCharCode,Le=Object.assign;function Ge(e,r){return v(e,0)^45?(((r<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}function ye(e){return e.trim()}function Be(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function ne(e,r){return e.indexOf(r)}function v(e,r){return e.charCodeAt(r)|0}function B(e,r,t){return e.slice(r,t)}function O(e){return e.length}function ce(e){return e.length}function K(e,r){return r.push(e),e}function We(e,r){return e.map(r).join("")}var X=1,z=1,ve=0,S=0,w=0,L="";function ee(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:X,column:z,length:s,return:""}}function G(e,r){return Le(ee("",null,null,"",null,null,0),e,{length:-e.length},r)}function qe(){return w}function Ve(){return w=S>0?v(L,--S):0,z--,w===10&&(z=1,X--),w}function P(){return w=S<ve?v(L,S++):0,z++,w===10&&(z=1,X++),w}function j(){return v(L,S)}function U(){return S}function V(e,r){return B(L,e,r)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ke(e){return X=z=1,ve=O(L=e),S=0,[]}function Ce(e){return L="",e}function Y(e){return ye(V(S-1,ae(e===91?e+2:e===40?e+1:e)))}function De(e){for(;(w=j())&&w<33;)P();return W(e)>2||W(w)>3?"":" "}function He(e,r){for(;--r&&P()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return V(e,U()+(r<6&&j()==32&&P()==32))}function ae(e){for(;P();)switch(w){case e:return S;case 34:case 39:e!==34&&e!==39&&ae(w);break;case 40:e===41&&ae(e);break;case 92:P();break}return S}function Ke(e,r){for(;P()&&e+w!==47+10;)if(e+w===42+42&&j()===47)break;return"/*"+V(r,S-1)+"*"+Q(e===47?e:P())}function Ue(e){for(;!W(j());)P();return V(e,S)}function Ye(e){return Ce(Z("",null,null,null,[""],e=ke(e),0,[0],e))}function Z(e,r,t,n,a,i,s,c,m){for(var y=0,h=0,l=s,A=0,E=0,p=0,o=1,g=1,x=1,b=0,k="",I=a,_=i,$=n,d=k;g;)switch(p=b,b=P()){case 40:if(p!=108&&v(d,l-1)==58){ne(d+=u(Y(b),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:d+=Y(b);break;case 9:case 10:case 13:case 32:d+=De(p);break;case 92:d+=He(U()-1,7);continue;case 47:switch(j()){case 42:case 47:K(Ze(Ke(P(),U()),r,t),m);break;default:d+="/"}break;case 123*o:c[y++]=O(d)*x;case 125*o:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+h:x==-1&&(d=u(d,/\f/g,"")),E>0&&O(d)-l&&K(E>32?ue(d+";",n,t,l-1):ue(u(d," ","")+";",n,t,l-2),m);break;case 59:d+=";";default:if(K($=fe(d,r,t,y,h,a,c,k,I=[],_=[],l),i),b===123)if(h===0)Z(d,r,$,$,I,i,l,c,_);else switch(A===99&&v(d,3)===110?100:A){case 100:case 108:case 109:case 115:Z(e,$,$,n&&K(fe(e,$,$,0,0,a,c,k,a,I=[],l),_),a,_,l,c,n?I:_);break;default:Z(d,$,$,$,[""],_,0,c,_)}}y=h=E=0,o=x=1,k=d="",l=s;break;case 58:l=1+O(d),E=p;default:if(o<1){if(b==123)--o;else if(b==125&&o++==0&&Ve()==125)continue}switch(d+=Q(b),b*o){case 38:x=h>0?1:(d+="\f",-1);break;case 44:c[y++]=(O(d)-1)*x,x=1;break;case 64:j()===45&&(d+=Y(P())),A=j(),h=l=O(k=d+=Ue(U())),b++;break;case 45:p===45&&O(d)==2&&(o=0)}}return i}function fe(e,r,t,n,a,i,s,c,m,y,h){for(var l=a-1,A=a===0?i:[""],E=ce(A),p=0,o=0,g=0;p<n;++p)for(var x=0,b=B(e,l+1,l=ze(o=s[p])),k=e;x<E;++x)(k=ye(o>0?A[x]+" "+b:u(b,/&\f/g,A[x])))&&(m[g++]=k);return ee(e,r,t,a===0?ie:c,m,y,h)}function Ze(e,r,t){return ee(e,r,t,be,Q(qe()),B(e,2,-2),0)}function ue(e,r,t,n){return ee(e,r,t,se,B(e,0,n),B(e,n+1,-1),n)}function M(e,r){for(var t="",n=ce(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Je(e,r,t,n){switch(e.type){case Me:if(e.children.length)break;case Ie:case se:return e.return=e.return||e.value;case be:return"";case we:return e.return=e.value+"{"+M(e.children,n)+"}";case ie:e.value=e.props.join(",")}return O(t=M(e.children,n))?e.return=e.value+"{"+t+"}":""}function Qe(e){var r=ce(e);return function(t,n,a,i){for(var s="",c=0;c<r;c++)s+=e[c](t,n,a,i)||"";return s}}function Xe(e){return function(r){r.root||(r=r.return)&&e(r)}}var er=function(r,t,n){for(var a=0,i=0;a=i,i=j(),a===38&&i===12&&(t[n]=1),!W(i);)P();return V(r,S)},rr=function(r,t){var n=-1,a=44;do switch(W(a)){case 0:a===38&&j()===12&&(t[n]=1),r[n]+=er(S-1,t,n);break;case 2:r[n]+=Y(a);break;case 4:if(a===44){r[++n]=j()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Q(a)}while(a=P());return r},tr=function(r,t){return Ce(rr(ke(r),t))},de=new WeakMap,nr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!de.get(n))&&!a){de.set(r,!0);for(var i=[],s=tr(t,i),c=n.props,m=0,y=0;m<s.length;m++)for(var h=0;h<c.length;h++,y++)r.props[y]=i[m]?s[m].replace(/&\f/g,c[h]):c[h]+" "+s[m]}}},ar=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Se(e,r){switch(Ge(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+J+e+C+e+e;case 6828:case 4268:return f+e+C+e+e;case 6165:return f+e+C+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return f+e+C+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+C+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+C+u(e,"shrink","negative")+e;case 5292:return f+e+C+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+C+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(v(e,r+1)){case 109:if(v(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+J+(v(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ne(e,"stretch")?Se(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(v(e,r+1)!==115)break;case 6444:switch(v(e,O(e)-3-(~ne(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(v(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(v(e,r+11)){case 114:return f+e+C+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+C+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+C+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+C+e+e}return e}var ir=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case se:r.return=Se(r.value,r.length);break;case we:return M([G(r,{value:u(r.value,"@","@"+f)})],a);case ie:if(r.length)return We(r.props,function(i){switch(Be(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return M([G(r,{props:[u(i,/:(read-\w+)/,":"+J+"$1")]})],a);case"::placeholder":return M([G(r,{props:[u(i,/:(plac\w+)/,":"+f+"input-$1")]}),G(r,{props:[u(i,/:(plac\w+)/,":"+J+"$1")]}),G(r,{props:[u(i,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},sr=[ir],cr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(o){var g=o.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(o),o.setAttribute("data-s",""))})}var a=r.stylisPlugins||sr,i={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(o){for(var g=o.getAttribute("data-emotion").split(" "),x=1;x<g.length;x++)i[g[x]]=!0;c.push(o)});var m,y=[nr,ar];{var h,l=[Je,Xe(function(o){h.insert(o)})],A=Qe(y.concat(a,l)),E=function(g){return M(Ye(g),A)};m=function(g,x,b,k){h=b,E(g?g+"{"+x.styles+"}":x.styles),k&&(p.inserted[x.name]=!0)}}var p={key:t,sheet:new Fe({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(c),p},or=!0;function fr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ee=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||or===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},ur=function(r,t,n){Ee(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function dr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var hr=/[A-Z]|^ms/g,lr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,$e=function(r){return r.charCodeAt(1)===45},he=function(r){return r!=null&&typeof r!="boolean"},re=Ae(function(e){return $e(e)?e:e.replace(hr,"-$&").toLowerCase()}),le=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(lr,function(n,a,i){return T={name:a,styles:i,next:T},a})}return Oe[r]!==1&&!$e(r)&&typeof t=="number"&&t!==0?t+"px":t};function q(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return T={name:t.name,styles:t.styles,next:T},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)T={name:n.name,styles:n.styles,next:T},n=n.next;var a=t.styles+";";return a}return pr(e,r,t)}case"function":{if(e!==void 0){var i=T,s=t(e);return T=i,q(e,r,s)}break}}if(r==null)return t;var c=r[t];return c!==void 0?c:t}function pr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=q(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":he(s)&&(n+=re(i)+":"+le(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var c=0;c<s.length;c++)he(s[c])&&(n+=re(i)+":"+le(i,s[c])+";");else{var m=q(e,r,s);switch(i){case"animation":case"animationName":{n+=re(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var pe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,T,mr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";T=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=q(n,t,s)):i+=s[0];for(var c=1;c<r.length;c++)i+=q(n,t,r[c]),a&&(i+=s[c]);pe.lastIndex=0;for(var m="",y;(y=pe.exec(i))!==null;)m+="-"+y[1];var h=dr(i)+m;return{name:h,styles:i,next:T}},gr=function(r){return r()},xr=oe["useInsertionEffect"]?oe["useInsertionEffect"]:!1,br=xr||gr,Pe=F.createContext(typeof HTMLElement<"u"?cr({key:"css"}):null);Pe.Provider;var wr=function(r){return F.forwardRef(function(t,n){var a=F.useContext(Pe);return r(t,a,n)})},yr=F.createContext({}),vr=Te,kr=function(r){return r!=="theme"},me=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?vr:kr},ge=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},Cr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ee(t,n,a),br(function(){return ur(t,n,a)}),null},Sr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var c=ge(r,t,n),m=c||me(a),y=!m("as");return function(){var h=arguments,l=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&l.push("label:"+i+";"),h[0]==null||h[0].raw===void 0)l.push.apply(l,h);else{l.push(h[0][0]);for(var A=h.length,E=1;E<A;E++)l.push(h[E],h[0][E])}var p=wr(function(o,g,x){var b=y&&o.as||a,k="",I=[],_=o;if(o.theme==null){_={};for(var $ in o)_[$]=o[$];_.theme=F.useContext(yr)}typeof o.className=="string"?k=fr(g.registered,I,o.className):o.className!=null&&(k=o.className+" ");var d=mr(l.concat(I),g.registered,_);k+=g.key+"-"+d.name,s!==void 0&&(k+=" "+s);var _e=y&&c===void 0?me(b):m,D={};for(var H in o)y&&H==="as"||_e(H)&&(D[H]=o[H]);return D.className=k,D.ref=x,F.createElement(F.Fragment,null,F.createElement(Cr,{cache:g,serialized:d,isStringTag:typeof b=="string"}),F.createElement(b,D))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=l,p.__emotion_forwardProp=c,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(o,g){return e(o,te({},t,g,{shouldForwardProp:ge(p,g,!0)})).apply(void 0,l)},p}},Er=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],N=Sr.bind();Er.forEach(function(e){N[e]=N(e)});const $r="/GachiClub/assets/default-desktop-1x-5a2ed8f8.jpg",Pr="/GachiClub/assets/default-desktop-2x-3a51d1c4.jpg",_r="/GachiClub/assets/default-tablet-1x-d37027fc.jpg",Ar="/GachiClub/assets/default-tablet-2x-54594741.jpg",Or="/GachiClub/assets/default-mobile-1x-8f07bae4.jpg",Tr="/GachiClub/assets/default-mobile-2x-dd403410.jpg",jr=N.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-image: url(${Or});

  background-repeat: no-repeat;
  background-position: bottom 0 right -30px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Tr});
    background-size: contain;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    background-image: url(${_r});
    background-size: contain;
    background-position: bottom 0 right 0px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Ar});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    background-image: url(${$r});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Pr});
    }
  }
`,Nr=N.div`
  position: relative;
  width: calc(0.64 * 100%);
  height: 100%;
  padding: 24px 20px;

  display: flex;
  align-items: center;

  background-color: var(--bright-accent-color);

  @media screen and (min-width: 375px) {
    width: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 670px;
    padding: 32px 96px;
  }
`,Rr=N(xe)`
  position: absolute;
  top: 24px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 32px;
    left: 32px;
  }
  @media screen and (min-width: 1440px) {
    top: 32px;
    left: 96px;
  }
`,Fr=N.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,Ir=N.div`
  margin-top: auto;
  margin-bottom: auto;
`,Mr=N.h1`
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
    letter-spacing: 1.6px;
  }
`,zr=N.p`
  margin-top: 14px;
  margin-bottom: 28px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 28px;

    font-size: 16px;
    line-height: 24px;
  }
`,Lr=N(xe)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  width: 147px;
  height: 42px;
  border: 1px solid var(--secondary-text-color);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;

    width: 204px;
    height: 56px;
  }
`,Wr=()=>R.jsx(jr,{children:R.jsxs(Nr,{children:[R.jsx(Rr,{to:"/",children:R.jsx(Fr,{children:R.jsx("use",{href:je+"#full-logo"})})}),R.jsxs(Ir,{children:[R.jsx(Mr,{children:"404"}),R.jsx(zr,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),R.jsx(Lr,{to:"/",children:"Go Home"})]})]})});export{Wr as default};
