import{P as a,j as e,u,F as R,G as q,H as L,r as g,b as m,J as Q,K as _,I as b,M as $,O as y,S as ee,T as C,L as te}from"./index-9c614d74.js";import{s as t}from"./styled-components.browser.esm-c806d5bf.js";import{r as D}from"./react-responsive-95e4c938.js";const ie=i=>i.exercises.title,ne=i=>i.exercises.category,oe=i=>i.exercises.isToggled,re=i=>i.exercises.exerciseIndex,se=i=>i.exercises.isSuccess,ae=i=>i.exercises.modalIsOpen,ce=i=>i.exercises,le=i=>i.exercises.allExercises,de=t.h1`
  margin-bottom: 20px;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 'calc(28px / 24px)';
  @media screen and (min-width: 768px) {
    font-size: 32px;
    display: inline;
    margin-bottom: 0;
    line-height: 'calc(44px / 32px)';
  }
`,F=({title:i})=>e.jsx(de,{children:i||"Exercises"});F.propTypes={title:a.string};const xe=t.li`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  flex-basis: calc((75% - 16px) / 3);
  @media screen and (min-width: 1440px) {
    max-width: 234px;
    flex-basis: calc((100% - 16px) / 5);
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`,pe=t.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.5) 0%,
    rgba(4, 4, 4, 0.5) 100%
  );
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
  &:hover,
  &:focus {
    border: 2px solid red;
  }
`,he=t.img`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  width: 100%;
  height: 100%;
`,ge=t.div`
  position: absolute;
  zindex: 5;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`,me=t.h3`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  line-height: calc(24px / 20px);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(28px / 24px);
  }
`,be=t.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  line-height: 'calc(18px / 12px)';
`,B=({imgURL:i,name:o,filter:s})=>{const n=u(),r=(c,l)=>{n(R(l)),n(q()),c==="Body parts"?n(L({bodyPartTitle:l.toString().toLowerCase(),equipmentTitle:"",targetTitle:""})):c==="Muscles"?n(L({bodyPartTitle:"",equipmentTitle:"",targetTitle:l.toString().toLowerCase()})):c==="Equipment"&&n(L({bodyPartTitle:"",equipmentTitle:l.toString().toLowerCase(),targetTitle:""}))};return e.jsx(xe,{onClick:()=>r(s,o),children:e.jsxs(pe,{children:[e.jsx(he,{src:i,alt:o}),e.jsxs(ge,{children:[e.jsx(me,{children:o}),e.jsx(be,{children:s})]})]})})};B.propTypes={imgURL:a.string,name:a.string,filter:a.string};const Y=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`,ue=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`,fe="_radiobutton_mtojw_1",ye={radiobutton:fe};function P({itemsPerPage:i,category:o}){const s=D.useMediaQuery({minWidth:768,maxWidth:1439.8}),[n,r]=g.useState(1),c=u(),d=m(ce)[o||"bodyparts"],x=Math.ceil(d.length/i),p=f=>{r(f)},j=(n-1)*i,E=j+i,S=d.slice(j,E);return g.useEffect(()=>{r(1),c(Q())},[c,o]),e.jsxs(Y,{children:[e.jsx(ue,{children:S.map(({filter:f,name:h,imgURL:T,_id:W})=>e.jsx(B,{id:W,imgURL:T,name:h.charAt(0).toUpperCase()+h.slice(1),filter:f.charAt(0).toUpperCase()+f.slice(1)},W))}),d.length>10||s?e.jsx("div",{style:{display:"inline-flex",justifyContent:"center",marginRight:8,gap:8},children:Array.from({length:x},(f,h)=>e.jsxs("label",{className:ye.radiobutton,children:[e.jsx("input",{type:"radio",name:"active-page",checked:n===h+1,onChange:()=>p(h+1)}),e.jsx("span",{})]},h))}):null]})}const M=({page:i})=>{const o=D.useMediaQuery({minWidth:768,maxWidth:1439.8});return e.jsx(Y,{children:e.jsx("div",{children:e.jsx(P,{category:i,itemsPerPage:o?9:10})})})};M.propTypes={page:a.string};P.propTypes={itemsPerPage:a.number,category:a.string};const je="_container_rxzv8_1",we="_category_rxzv8_8",ve="_activecategory_rxzv8_23 _category_rxzv8_8",ke="_categorygroup_rxzv8_41",ze="_categoryitem_rxzv8_48",w={container:je,category:we,activecategory:ve,categorygroup:ke,categoryitem:ze},Se=[{title:"Body parts",route:"bodyparts"},{title:"Muscules",route:"muscules"},{title:"Equipments",route:"equipments"}],H=({titleName:i})=>{const[o,s]=g.useState(0),n=u();return e.jsx("div",{className:w.container,children:e.jsx("ul",{className:w.categorygroup,children:Se.map(({title:r,route:c},l)=>e.jsx("li",{className:w.categoryitem,children:e.jsx("button",{className:`${l===o&&i==="Exercises"?w.activecategory:w.category}`,onClick:()=>{n(_(c)),s(l)},disabled:i!=="Exercises",children:r})},l))})})};H.propTypes={titleName:a.string};const Ce=t.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  position: relative;
  padding: 16px;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }
  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`,Ee=t.strong`
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 5px 7.5px 5px 7.5px;
  font-family: 'Roboto';
  fontsize: 12px;
  font-weight: 700;
  display: inline-flex;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 27px;
  }
`,Te=t.div`
  display: flex;
  margin-bottom: 8px;
`,Le=t.p`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 'calc(24px / 20px)';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
`,Ue=t.div`
  display: flex;
  flex-wrap: wrap;
`,U=t.p`
  display: inherit;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
  margin-right: 16px;
`,Ae=t.button`
  background-color: transparent;
  color: #e6533c;
  border: none;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 'calc(24px / 16px)';
  }
`,A=t.span`
  color: #efede8;
  margin-left: 3px;
`,We=t.span`
  width: 28px;
  height: 28px;
  margin-right: 16px;
  background-color: #efa082;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,O=({name:i,burnedCalories:o,bodyPart:s,target:n,id:r})=>{const c=u();return e.jsxs(Ce,{children:[e.jsx(Ee,{children:"WORKOUT"}),e.jsxs(Te,{children:[e.jsx(We,{children:e.jsx("svg",{width:"24",height:"24",style:{fill:"#EFEDE8",zIndex:10},children:e.jsx("use",{href:b+"#icon-running"})})}),e.jsx(Le,{children:i})]}),e.jsxs(Ue,{children:[e.jsxs(U,{children:["Burned calories: ",e.jsx(A,{children:o})]}),e.jsxs(U,{children:["Body part: ",e.jsx(A,{children:s})]}),e.jsxs(U,{children:["Target: ",e.jsx(A,{children:n})]})]}),e.jsxs(Ae,{type:"button",onClick:()=>{c($(r)),c(y())},children:["Start",e.jsx("svg",{width:16,height:16,style:{verticalAlign:"top",stroke:"#E6533C"},children:e.jsx("use",{href:b+"#icon-next"})})]})]})};O.propTypes={name:a.string,burnedCalories:a.number,bodyPart:a.string,target:a.string,index:a.number,id:a.string};const Xe=t.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    max-height: 726px;
  }
`,Ke=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 80px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    max-height: calc(100vh - 364px);
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
  }
  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 325px);
    width: 850px;
    max-width: 100%;
  }
`,Ve=t.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    z-index: -20;
    border: none;
    outline: none;
    position: absolute;
    top: 82px;
    right: 96px;
    width: 450px;
    height: 725px;
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url('src/images/exercises-desktop-1x.jpg');
    background-repeat: no-repeat;
    background-position: 100% 0;
    @media (min-device-pixel-ratio: 2) {
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url('src/images/exercises-desktop-2x.jpg');
      }
    }
  }
`,Ie="_overlay_y08h9_1",Re="_overlayhidden_y08h9_20",X={overlay:Ie,overlayhidden:Re},Z=({children:i})=>{const o=m(ae),s=u();g.useEffect(()=>{const r=c=>{c.code==="Escape"&&s(y())};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[s]);const n=r=>{r.target===r.currentTarget&&s(y())};return e.jsx("div",{className:`${o?X.overlayhidden:X.overlay}`,onClick:n,children:i})};Z.propTypes={children:a.object};const qe=t.div`
  width: 335px;
  z-index: 5;
  display: flex;
  position: relative;
  justify-content: center;
  padding: 48px 16px;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  transition: transform 0.3s ease;
  ${i=>i.isOpen&&`
    transform: translate(-50%, -50%) scale(1);
  `}
  transform: translate(-50%, -50%) scale(0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  @media screen and (min-width: 768px) {
    width: 694px;
    padding: 48px 32px;
    flex-direction: row;
  }
`,De=t.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 226px;
  margin-bottom: 14px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`,Fe=t.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
`,Be=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,v=t.li`
  padding: 12px 18px;
  width: 147px;
  height: 62px;
  border-radius: 12px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 8px) / 2);
  @media screen and (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`,k=t.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: calc(16px / 12px);
  @media screen and (min-width: 768px) {
    line-height: calc(18px / 12px);
    margin-bottom: 8px;
  }
`,z=t.span`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18px / 14px);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`,Ye=t.button`
  display: inline-flex;
  width: 151px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  border: none;
  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-left: auto;
    height: 52px;
    line-height: calc(24px / 16px);
  }
`,Pe=t.div`
  display: flex;
  flex-direction: column;
`,Me=t.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;t.div`
  overflow: hidden;
`;t.div`
  width: 125px;
  margin-top: 4px;
  margin-bottom: 14px;
  height: 125px;
  display: inherit;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.1);
`;const He=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`,Oe=t.button`
  width: 32px;
  height: 32px;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`,Ze=t.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  line-height: calc(24px / 16px);
  position: absolute;
  top: 65px;
`,Ne=t.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 10px;
  line-height: calc(14px / 10px);
`,Je=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  line-height: calc(18px / 14px);
`,Ge=t.span`
  color: #e6533c;
`,Qe=t.svg`
  rotate: 90deg;
  height: 125px;
  width: 125px;
  margin-bottom: 14px;
`,_e=t.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: rgba(239, 237, 232, 0.1);
`,$e=t.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: #e6533c;
  transition: stroke-dashoffset 0.25s linear;
`,N=({burnedCalories:i,time:o,currentTime:s,setCurrentTime:n})=>{g.useState(!1);const r=g.useRef(null),c=Math.floor(s/60),l=s%60,d=`${c.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`;g.useEffect(()=>(n(180),()=>{r.current&&clearInterval(r.current)}),[]);const x=()=>{r.current?(clearInterval(r.current),r.current=null):r.current=setInterval(()=>{n(p=>p-1)},1e3)};return e.jsxs(He,{children:[e.jsx(Ne,{children:"Time"}),e.jsxs(Qe,{viewBox:"0 0 250 250",children:[e.jsx(_e,{pathLength:o*60,cx:125,cy:125,r:125}),e.jsx($e,{pathLength:o*60,cx:125,cy:125,r:125,strokeDasharray:o*60,strokeDashoffset:o*60-s})]}),e.jsx(Ze,{children:d}),e.jsx(Oe,{onClick:x,children:r.current?e.jsx("svg",{width:32,height:32,children:e.jsx("use",{href:b+"#icon-stop"})}):e.jsx("svg",{width:32,height:32,children:e.jsx("use",{href:b+"#icon-play"})})}),e.jsxs(Je,{children:["Burned calories: ",e.jsx(Ge,{children:i})]})]})};N.propTypes={burnedCalories:a.number,time:a.number,currentTime:a.number,setCurrentTime:a.func};const J=({data:i})=>{const[o,s]=g.useState(180),n=u(),{bodyPart:r,burnedCalories:c,equipment:l,gifUrl:d,name:x,target:p,time:j,_id:E}=i,S=Math.floor(o/60*(c/j)),f=()=>{if(o===180){console.log("Nothing to add");return}const h=Math.round(180-o);n(ee({exerciseId:E,duration:h,calories:S})).then(()=>n(C())).catch(T=>console.log(T.message))};return e.jsxs(qe,{children:[e.jsx(Me,{onClick:()=>n(y()),children:e.jsx("svg",{stroke:"#EFEDE8",width:26,height:26,children:e.jsx("use",{href:b+"#icon-close"})})}),e.jsxs("div",{children:[e.jsx(De,{children:e.jsx(Fe,{src:d,alt:x})}),e.jsx(N,{burnedCalories:S,currentTime:o,setCurrentTime:s,time:j})]}),e.jsxs(Pe,{children:[e.jsxs(Be,{children:[e.jsxs(v,{children:[e.jsx(k,{children:"Name"}),e.jsx(z,{children:x.toString().charAt(0).toUpperCase()+x.toString().slice(1)})]}),e.jsxs(v,{children:[e.jsx(k,{children:"Target"}),e.jsx(z,{children:p.toString().charAt(0).toUpperCase()+p.toString().slice(1)})]}),e.jsxs(v,{children:[e.jsx(k,{children:"Body part"}),e.jsx(z,{children:r.toString().charAt(0).toUpperCase()+r.toString().slice(1)})]}),e.jsxs(v,{children:[e.jsx(k,{children:"Equipment"}),e.jsx(z,{children:l.toString().charAt(0).toUpperCase()+l.toString().slice(1)})]}),e.jsxs(v,{children:[e.jsx(k,{children:"Time"}),e.jsxs(z,{children:[j," minutes"]})]})]}),e.jsx(Ye,{type:"submit",onClick:f,children:"Add to diary"})]})]})};J.propTypes={data:a.object};const et="data:image/png;base64,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",tt=t.div`
  width: 335px;
  position: fixed;
  z-index: 10;
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`,it=t.div`
  width: 158px;
  height: 158px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 20px;
`,nt=t.h2`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32px / 24px);
  margin-bottom: 16px;
`,K=t.li`
  display: flex;
`,V=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  margin-right: 8px;
`,I=t.span`
  color: #e6533c;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`,ot=t.button`
  width: 157px;
  height: 42px;
  border: none;
  margin-top: 24px;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 52px;
    margin-top: 32px;
  }
`,rt=t(te)`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`,st=t.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,G=({data:i})=>{const{time:o,burnedCalories:s}=i,n=u();return e.jsxs(tt,{children:[e.jsx(st,{onClick:()=>{n(y()),n(C())},children:e.jsx("svg",{stroke:"#EFEDE8",width:26,height:26,children:e.jsx("use",{href:b+"#icon-close"})})}),e.jsx(it,{children:e.jsx("img",{src:et,alt:"like"})}),e.jsx(nt,{children:"Well done"}),e.jsxs("ul",{children:[e.jsxs(K,{children:[e.jsx(V,{children:"Your time:"}),e.jsxs(I,{children:[o,"minutes"]})]}),e.jsxs(K,{children:[e.jsx(V,{children:"Burned calories:"}),e.jsx(I,{children:s})]})]}),e.jsx(ot,{type:"submit",onClick:()=>{n(C()),n(y())},children:"Next exercise"}),e.jsxs(rt,{onClick:()=>{n(y()),n(C())},to:"/diary",children:["To the diary",e.jsx("svg",{width:16,height:16,style:{stroke:"rgba(239, 237, 232, 0.30)",verticalAlign:"top"},children:e.jsx("use",{href:b+"#icon-next"})})]})]})};G.propTypes={data:a.object};const at=()=>{const i=m(se),o=m(re),s=m(le),n=s.find(({_id:r})=>r===o);return e.jsxs(Xe,{children:[e.jsx(Ke,{children:s.map(({bodyPart:r,name:c,target:l,burnedCalories:d,_id:x},p)=>e.jsx(O,{name:c.charAt(0).toUpperCase()+c.slice(1),burnedCalories:d,bodyPart:r.charAt(0).toUpperCase()+r.slice(1),target:l.charAt(0).toUpperCase()+l.slice(1),id:x},p))}),e.jsx(Ve,{}),n&&e.jsx(Z,{children:i?e.jsx(G,{data:n}):e.jsx(J,{data:n})})]})},ct=t.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1248px;
  }
`,lt=t.button`
  border: none;
  background-color: transparent;
  color: rgba(239, 237, 232, 0.4);
  display: inline-flex;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`,dt=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }
`,gt=()=>{const i=m(oe),o=m(ne),s=m(ie),n=u();return e.jsxs(ct,{children:[i&&e.jsxs(lt,{onClick:()=>{n(q()),n(R("Exercises"))},children:[e.jsx("svg",{width:16,height:16,style:{stroke:"rgba(239, 237, 232, 0.4)"},children:e.jsx("use",{href:b+"#icon-back"})}),"Back"]}),e.jsxs(dt,{children:[e.jsx(F,{title:s}),e.jsx(H,{titleName:s||"Exercises"})]}),i?e.jsx(at,{}):e.jsx(M,{page:o})]})};export{gt as default};