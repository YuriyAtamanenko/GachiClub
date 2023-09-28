import{P as n,d as m,j as e,I as k,n as d,u as $,a as q,e as N}from"./index-7ede5df1.js";import{F as S,a as s,c as B,e as v,f as D,d as w,E as l,b as y}from"./index.esm-9d5915ec.js";import{e as _}from"./index-6efba2f3.js";import{s as x}from"./styled-components.browser.esm-4e8c8fd1.js";import{E as A}from"./Elements-6e81788a.js";import"./createClass-634b8414.js";const G="/GachiClub/assets/params01-mobile-1x-12d31870.jpg",E="/GachiClub/assets/params01-mobile-2x-c2b9cc40.jpg",F=x.div`
  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${G});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 289px 571px;
  margin-right: -2em;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${E});
  }
`,V=x.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`,O=x.p`
  margin-bottom: 50px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);
`,H=x.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,I=x(S)`
  gap: 7px;
  label {
  }
`,f=x(s)`
  background-color: transparent;
  width: 155px;
  height: 46px;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);

  &[name='height'] {
    margin-right: 14px;
    margin-bottom: 14px;

    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
  }
  &[name='desiredWeight'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
  }
  &[name='currentWeight'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
    width: 159px;
    height: 46px;
  }
  &[name='birthday'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
    width: 159px;
    height: 46px;
  }
  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
  }
`,L=x.button`
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;
`,M=x.button`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 8.33px;
`;function T(t){const i=m.forwardRef(({field:r,form:a},c)=>{const[j,u]=m.useState(new Date),h=m.useRef(null),g=b=>{u(b),a.setFieldValue(r.name,b)};return m.useImperativeHandle(c,()=>({closeDatePicker:()=>{h.current&&h.current.setOpen(!1)}})),e.jsx(_,{showIcon:!0,selected:j,onChange:g,customInput:e.jsx("input",{...r}),ref:h})});i.propTypes={field:n.object.isRequired,form:n.object.isRequired};const o=r=>{const a={...t.data,...r};t.next(a)};return e.jsxs(F,{children:[e.jsxs("div",{children:[e.jsx(V,{children:"Get closer to your goals!"}),e.jsx(O,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),e.jsx(H,{children:"Height"})]}),e.jsx(w,{initialValues:{...t.data,isValid:!1},onSubmit:o,autoComplete:"off",validationSchema:U,enableReinitialize:!0,children:({isValid:r})=>e.jsxs(I,{children:[e.jsxs("div",{children:[e.jsx(f,{name:"height",placeholder:"Height"}),e.jsx(l,{name:"height",component:"div",className:"error"}),e.jsx(f,{name:"currentWeight",placeholder:"Current Weight"}),e.jsx(l,{name:"currentWeight",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx(f,{name:"desiredWeight",placeholder:"Desired Weight"}),e.jsx(l,{name:"desiredWeight",component:"div",className:"error"}),e.jsx(f,{name:"birthday",placeholder:"Birthday",autoComplete:"off",children:({field:a,form:c})=>e.jsx(i,{field:a,form:c})}),e.jsx(l,{name:"birthday",component:"div",className:"error"})]}),e.jsx(L,{type:"submit",disabled:!r,children:"Next"}),e.jsx(M,{children:e.jsx("use",{xlinkHref:`${k}#icon-next`})})]})})]})}const U=B().shape({height:v().required('Please enter your "Height"').typeError("Desired Weight must be a number").min(150,"Height must be 150 or more"),currentWeight:v().typeError("Current Weight must be a number").required('Please enter your "Current Weight"'),desiredWeight:v().typeError("Desired Weight must be a number").required('Please enter your "Desired Weight"'),birthday:D().required('Please enter your "Birthday"')});T.propTypes={data:n.object.isRequired,next:n.func.isRequired};const C=t=>{const i=o=>{const r={...t.data,...o};t.next(r)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(w,{initialValues:t.data,onSubmit:i,validationSchema:Z,children:({values:o})=>e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Blood"}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"blood",value:"1"}),"1",e.jsx(l,{name:"blood",component:"div",className:"error"})]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"blood",value:"2"}),"2"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"blood",value:"3"}),"3"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"blood",value:"4"}),"4"]}),e.jsx(l,{name:"blood",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sex"}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"sex",value:"male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"sex",value:"female"}),"Female"]}),e.jsx(l,{name:"sex",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Level Activity"}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"1"}),e.jsx(l,{name:"levelActivity",component:"div",className:"error"}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"2"}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"3"}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"4"}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"5"}),"Extremely active (very strenuous exercises/sports and physical work)"]}),e.jsx(l,{name:"levelActivity",component:"div",className:"error"})]}),e.jsx("button",{type:"button",onClick:()=>t.prev(o),children:"Back"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},Z=B().shape({blood:y().required("Please select a blood type"),sex:y().required("Please select a sex"),levelActivity:y().required("Please select a level of activity")});C.propTypes={data:n.object.isRequired,next:n.func.isRequired,prev:n.func.isRequired};const J="/GachiClub/assets/params03-desktop-1x-da8d6fb9.jpg",K="/GachiClub/assets/params03-desktop-2x-e0a194c1.jpg",Q="/GachiClub/assets/params03-tablet-1x-311bff4d.jpg",X="/GachiClub/assets/params03-tablet-2x-53f994fc.jpg",Y="/GachiClub/assets/params03-mobile-1x-0dba25eb.jpg",ee="/GachiClub/assets/params03-mobile-2x-54d7bfc9.jpg",te=d.div`
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
    margin-bottom: 64px;
  }
`,ie=d.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px; /* 137.5% */
    margin-bottom: 16px;
  }
`,re=d.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    margin-bottom: 64px;
  }
`,ae=d.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 420px;
  @media screen and (min-width: 768px) {
    margin-bottom: 500px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 260px;
  }
`,ne=d.button`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: #e6533c;
  color: #efede8;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    padding: 16px 75px;
    font-size: 20px;
    line-height: 24px; /* 120% */
  }

  &:hover,
  &:focus {
    background: #ef8964;
  }
`,oe=d.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
  }
`,se=d.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,de=d.div`
  position: absolute;
  right: auto;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${Y});
  background-size: 375px 812px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${ee});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    height: 1024px;
    pointer-events: none;

    background-image: url(${Q});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${X});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${J});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${K});
      }
    }
  }
`,le=d.svg`
  fill: #e6533c;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
  }
`,pe=d.div`
  position: absolute;
  left: 35%;
  top: 70%;
  @media screen and (min-width: 768px) {
    left: 45%;
    top: 70%;
  }
  @media screen and (min-width: 1440px) {
    left: 53%;
    top: 50%;
  }
`,z=t=>{const i=$(),o=q(),r=async a=>{try{await i(N({email:t.data.email,name:t.data.name,password:t.data.password,height:t.data.height,currentWeight:t.data.currentWeight,desiredWeight:t.data.desiredWeight,birthday:"2005-06-17T07:27:41.902Z",blood:t.data.blood,sex:t.data.sex,levelActivity:t.data.levelActivity})),o("/diary"),t.next(a,!0)}catch(c){console.error("Error updating user:",c)}};return e.jsxs(e.Fragment,{children:[e.jsx(de,{}),e.jsxs(se,{children:[e.jsxs(te,{children:[e.jsx(ie,{children:"Dear user"}),e.jsx(re,{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(w,{initialValues:t.data,onSubmit:r,children:({values:a})=>e.jsxs(ae,{children:[e.jsx(ne,{type:"button",onClick:()=>r(a),children:"Go"}),e.jsxs(oe,{type:"button",onClick:()=>t.prev(a),children:[e.jsx(le,{children:e.jsx("use",{href:k+"#icon-back"})}),"Back"]})]})})]}),e.jsx(pe,{children:e.jsx(A,{})})]})};z.propTypes={data:n.object.isRequired,next:n.func.isRequired,prev:n.func.isRequired};const ce="_progressBarOne_8ycj8_1",xe="_progressBarTwo_8ycj8_11",he="_progressBarThree_8ycj8_21",me="_progressBarPart_8ycj8_39",ue="_completed_8ycj8_44",ge="_wrap_8ycj8_49",p={progressBarOne:ce,progressBarTwo:xe,progressBarThree:he,progressBarPart:me,completed:ue,wrap:ge},P=({currentStep:t})=>{const i=t>=0;return e.jsx("div",{className:p.progressBarOne,children:e.jsx("div",{className:`${p.progressBarPart} ${i?p.completed:""}`})})},R=({currentStep:t})=>{const i=t>=1;return e.jsx("div",{className:p.progressBarTwo,children:e.jsx("div",{className:`${p.progressBarPart} ${i?p.completed:""}`})})},W=({currentStep:t})=>{const i=t>=2;return e.jsx("div",{className:p.progressBarThree,children:e.jsx("div",{className:`${p.progressBarPart} ${i?p.completed:""}`})})};P.propTypes={currentStep:n.number.isRequired};R.propTypes={currentStep:n.number.isRequired};W.propTypes={currentStep:n.number.isRequired};const be={display:"flex",marginTop:"20px"},Se=()=>{const[t,i]=m.useState({height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""}),[o,r]=m.useState(0),a=(u,h=!1)=>{const g={...t,...u};i(g),!h&&r(b=>b+1)},c=u=>{const h={...t,...u};i(h),r(g=>g-1)},j=[e.jsx(T,{next:a,data:t},"step1"),e.jsx(C,{next:a,prev:c,data:t},"step2"),e.jsx(z,{next:a,prev:c,data:t},"step3")];return e.jsxs("div",{children:[e.jsx("div",{children:j[o]}),e.jsxs("div",{style:be,children:[e.jsx(P,{currentStep:o}),e.jsx(R,{currentStep:o}),e.jsx(W,{currentStep:o})]})]})};export{Se as default};
