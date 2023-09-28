import{P as o,d as m,j as e,I as k,n as d,u as $,a as q,e as D}from"./index-39a6dd03.js";import{F as S,a as l,E as p,c as B,e as v,f as N,d as w,b as y}from"./index.esm-7e487563.js";import{e as _}from"./index-015560cc.js";import{s as n}from"./styled-components.browser.esm-ff23c31d.js";import{S as A,E as G}from"./Statistics-8f6848d9.js";import"./createClass-8d8023e5.js";const E="/GachiClub/assets/params01-mobile-1x-12d31870.jpg",F="/GachiClub/assets/params01-mobile-2x-c2b9cc40.jpg",V=n.div`
  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${E});
  background-repeat: no-repeat;
  background-position: 100% 150%;
  background-size: 300px 580px;
  margin-right: -2em;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${F});
  }
`,I=n.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`,M=n.p`
  margin-bottom: 50px;
  width: 335px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);
`,O=n.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,H=n(S)`
  gap: 7px;
  label {
  }
`,f=n(l)`
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
  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
  }
`,L=n.button`
  margin-top: 28px;
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;
`,U=n.button`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 8.33px;
`,Z=n.div`
  position: relative;
  top: -210px;
  right: 28px;
`,J=n(p)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 41%;
`,K=n(p)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 41%;
  left: 190px;
`,Q=n(p)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: -23%;
`,X=n(p)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  left: 190px;
  top: -23%;
`;function z(t){const i=m.forwardRef(({field:r,form:a},x)=>{const[j,g]=m.useState(new Date),h=m.useRef(null),u=b=>{g(b),a.setFieldValue(r.name,b)};return m.useImperativeHandle(x,()=>({closeDatePicker:()=>{h.current&&h.current.setOpen(!1)}})),e.jsx(_,{showIcon:!0,selected:j,onChange:u,customInput:e.jsx("input",{...r}),ref:h})});i.propTypes={field:o.object.isRequired,form:o.object.isRequired};const s=r=>{const a={...t.data,...r};t.next(a)};return e.jsxs(V,{children:[e.jsxs("div",{children:[e.jsx(I,{children:"Get closer to your goals!"}),e.jsx(M,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),e.jsx(O,{children:"Height"})]}),e.jsx(w,{initialValues:{...t.data,isValid:!1},onSubmit:s,autoComplete:"off",validationSchema:Y,enableReinitialize:!0,children:({isValid:r})=>e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsx(f,{name:"height",placeholder:"Height"}),e.jsx(J,{name:"height",component:"div",className:"error"}),e.jsx(f,{name:"currentWeight",placeholder:"Current Weight"}),e.jsx(K,{name:"currentWeight",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx(f,{name:"desiredWeight",placeholder:"Desired Weight"}),e.jsx(Q,{name:"desiredWeight",component:"div",className:"error"}),e.jsx(f,{name:"birthday",placeholder:"Birthday",autoComplete:"off",children:({field:a,form:x})=>e.jsx(i,{field:a,form:x})}),e.jsx(X,{name:"birthday",component:"div",className:"error"})]}),e.jsx(L,{type:"submit",disabled:!r,children:"Next"}),e.jsx(U,{children:e.jsx("use",{xlinkHref:`${k}#icon-arrow`})})]})}),e.jsx(Z,{children:e.jsx(A,{})})]})}const Y=B().shape({height:v().required('Please enter your "Height"').typeError("Desired Weight must be a number").min(150,"Height must be 150 or more"),currentWeight:v().typeError("Current Weight must be a number").required('Please enter your "Current Weight"'),desiredWeight:v().typeError("Desired Weight must be a number").required('Please enter your "Desired Weight"'),birthday:N().required('Please enter your "Birthday"')});z.propTypes={data:o.object.isRequired,next:o.func.isRequired};const T=t=>{const i=s=>{const r={...t.data,...s};t.next(r)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(w,{initialValues:t.data,onSubmit:i,validationSchema:ee,children:({values:s})=>e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Blood"}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"blood",value:"1"}),"1",e.jsx(p,{name:"blood",component:"div",className:"error"})]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"blood",value:"2"}),"2"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"blood",value:"3"}),"3"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"blood",value:"4"}),"4"]}),e.jsx(p,{name:"blood",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sex"}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"sex",value:"male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"sex",value:"female"}),"Female"]}),e.jsx(p,{name:"sex",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Level Activity"}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"1"}),e.jsx(p,{name:"levelActivity",component:"div",className:"error"}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"2"}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"3"}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"4"}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"5"}),"Extremely active (very strenuous exercises/sports and physical work)"]}),e.jsx(p,{name:"levelActivity",component:"div",className:"error"})]}),e.jsx("button",{type:"button",onClick:()=>t.prev(s),children:"Back"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},ee=B().shape({blood:y().required("Please select a blood type"),sex:y().required("Please select a sex"),levelActivity:y().required("Please select a level of activity")});T.propTypes={data:o.object.isRequired,next:o.func.isRequired,prev:o.func.isRequired};const te="/GachiClub/assets/params03-desktop-1x-da8d6fb9.jpg",ie="/GachiClub/assets/params03-desktop-2x-e0a194c1.jpg",re="/GachiClub/assets/params03-tablet-1x-311bff4d.jpg",ae="/GachiClub/assets/params03-tablet-2x-53f994fc.jpg",oe="/GachiClub/assets/params03-mobile-1x-0dba25eb.jpg",ne="/GachiClub/assets/params03-mobile-2x-54d7bfc9.jpg",se=d.div`
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
`,le=d.h2`
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
`,de=d.p`
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
`,pe=d.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 530px;
  @media screen and (min-width: 768px) {
    margin-bottom: 490px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 260px;
  }
`,ce=d.button`
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
`,xe=d.button`
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
`,he=d.div`
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 150px;
  }
`,me=d.div`
  position: absolute;
  right: auto;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${oe});
  background-size: 375px 812px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${ne});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    height: 1024px;
    pointer-events: none;

    background-image: url(${re});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${ae});
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

    background-image: url(${te});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${ie});
      }
    }
  }
`,ge=d.svg`
  fill: #e6533c;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
  }
`,ue=d.div`
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
`,C=t=>{const i=$(),s=q(),r=async a=>{try{await i(D({email:t.data.email,name:t.data.name,password:t.data.password,height:t.data.height,currentWeight:t.data.currentWeight,desiredWeight:t.data.desiredWeight,birthday:"2005-06-17T07:27:41.902Z",blood:t.data.blood,sex:t.data.sex,levelActivity:t.data.levelActivity})),s("/diary"),t.next(a,!0)}catch(x){console.error("Error updating user:",x)}};return e.jsxs(e.Fragment,{children:[e.jsx(me,{}),e.jsxs(he,{children:[e.jsxs(se,{children:[e.jsx(le,{children:"Dear user"}),e.jsx(de,{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(w,{initialValues:t.data,onSubmit:r,children:({values:a})=>e.jsxs(pe,{children:[e.jsx(ce,{type:"button",onClick:()=>r(a),children:"Go"}),e.jsxs(xe,{type:"button",onClick:()=>t.prev(a),children:[e.jsx(ge,{children:e.jsx("use",{href:k+"#icon-back"})}),"Back"]})]})})]}),e.jsx(ue,{children:e.jsx(G,{})})]})};C.propTypes={data:o.object.isRequired,next:o.func.isRequired,prev:o.func.isRequired};const be="_progressBarOne_8ycj8_1",fe="_progressBarTwo_8ycj8_11",je="_progressBarThree_8ycj8_21",ve="_progressBarPart_8ycj8_39",ye="_completed_8ycj8_44",we="_wrap_8ycj8_49",c={progressBarOne:be,progressBarTwo:fe,progressBarThree:je,progressBarPart:ve,completed:ye,wrap:we},R=({currentStep:t})=>{const i=t>=0;return e.jsx("div",{className:c.progressBarOne,children:e.jsx("div",{className:`${c.progressBarPart} ${i?c.completed:""}`})})},P=({currentStep:t})=>{const i=t>=1;return e.jsx("div",{className:c.progressBarTwo,children:e.jsx("div",{className:`${c.progressBarPart} ${i?c.completed:""}`})})},W=({currentStep:t})=>{const i=t>=2;return e.jsx("div",{className:c.progressBarThree,children:e.jsx("div",{className:`${c.progressBarPart} ${i?c.completed:""}`})})};R.propTypes={currentStep:o.number.isRequired};P.propTypes={currentStep:o.number.isRequired};W.propTypes={currentStep:o.number.isRequired};const ke={display:"flex",marginTop:"20px"},Pe=()=>{const[t,i]=m.useState({height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""}),[s,r]=m.useState(0),a=(g,h=!1)=>{const u={...t,...g};i(u),!h&&r(b=>b+1)},x=g=>{const h={...t,...g};i(h),r(u=>u-1)},j=[e.jsx(z,{next:a,data:t},"step1"),e.jsx(T,{next:a,prev:x,data:t},"step2"),e.jsx(C,{next:a,prev:x,data:t},"step3")];return e.jsxs("div",{children:[e.jsx("div",{children:j[s]}),e.jsxs("div",{style:ke,children:[e.jsx(R,{currentStep:s}),e.jsx(P,{currentStep:s}),e.jsx(W,{currentStep:s})]})]})};export{Pe as default};
