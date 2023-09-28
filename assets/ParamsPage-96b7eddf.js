import{P as i,d as m,j as e,I as q,u as N,a as C,e as D}from"./index-9a45bddd.js";import{F as w,a as n,c as S,e as v,f as _,d as f,E as l,b as y}from"./index.esm-b4054774.js";import{e as z}from"./index-c0e7951a.js";import{s as p}from"./styled-components.browser.esm-90d3b699.js";import"./Statistics.styled-220ffc78.js";import"./createClass-634bfd5f.js";const $="/GachiClub/assets/params01-mobile-1x-12d31870.jpg",A="/GachiClub/assets/params01-mobile-2x-c2b9cc40.jpg",E=p.div`
  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${$});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 289px 571px;
  margin-right: -2em;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${A});
  }
`,F=p.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`,V=p.p`
  margin-bottom: 50px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);
`,O=p.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,H=p(w)`
  gap: 7px;
  label {
  }
`,b=p(n)`
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
`,I=p.button`
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;
`,G=p.button`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 8.33px;
`;function k(t){const r=m.forwardRef(({field:a,form:s},c)=>{const[j,x]=m.useState(new Date),h=m.useRef(null),u=g=>{x(g),s.setFieldValue(a.name,g)};return m.useImperativeHandle(c,()=>({closeDatePicker:()=>{h.current&&h.current.setOpen(!1)}})),e.jsx(z,{showIcon:!0,selected:j,onChange:u,customInput:e.jsx("input",{...a}),ref:h})});r.propTypes={field:i.object.isRequired,form:i.object.isRequired};const o=a=>{const s={...t.data,...a};t.next(s)};return e.jsxs(E,{children:[e.jsxs("div",{children:[e.jsx(F,{children:"Get closer to your goals!"}),e.jsx(V,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),e.jsx(O,{children:"Height"})]}),e.jsx(f,{initialValues:{...t.data,isValid:!1},onSubmit:o,autoComplete:"off",validationSchema:L,enableReinitialize:!0,children:({isValid:a})=>e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsx(b,{name:"height",placeholder:"Height"}),e.jsx(l,{name:"height",component:"div",className:"error"}),e.jsx(b,{name:"currentWeight",placeholder:"Current Weight"}),e.jsx(l,{name:"currentWeight",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx(b,{name:"desiredWeight",placeholder:"Desired Weight"}),e.jsx(l,{name:"desiredWeight",component:"div",className:"error"}),e.jsx(b,{name:"birthday",placeholder:"Birthday",autoComplete:"off",children:({field:s,form:c})=>e.jsx(r,{field:s,form:c})}),e.jsx(l,{name:"birthday",component:"div",className:"error"})]}),e.jsx(I,{type:"submit",disabled:!a,children:"Next"}),e.jsx(G,{children:e.jsx("use",{xlinkHref:`${q}#icon-next`})})]})})]})}const L=S().shape({height:v().required('Please enter your "Height"').typeError("Desired Weight must be a number").min(150,"Height must be 150 or more"),currentWeight:v().typeError("Current Weight must be a number").required('Please enter your "Current Weight"'),desiredWeight:v().typeError("Desired Weight must be a number").required('Please enter your "Desired Weight"'),birthday:_().required('Please enter your "Birthday"')});k.propTypes={data:i.object.isRequired,next:i.func.isRequired};const B=t=>{const r=o=>{const a={...t.data,...o};t.next(a)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(f,{initialValues:t.data,onSubmit:r,validationSchema:M,children:({values:o})=>e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Blood"}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"blood",value:"1"}),"1",e.jsx(l,{name:"blood",component:"div",className:"error"})]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"blood",value:"2"}),"2"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"blood",value:"3"}),"3"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"blood",value:"4"}),"4"]}),e.jsx(l,{name:"blood",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sex"}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"sex",value:"male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"sex",value:"female"}),"Female"]}),e.jsx(l,{name:"sex",component:"div",className:"error"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Level Activity"}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"1"}),e.jsx(l,{name:"levelActivity",component:"div",className:"error"}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"2"}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"3"}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"4"}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"5"}),"Extremely active (very strenuous exercises/sports and physical work)"]}),e.jsx(l,{name:"levelActivity",component:"div",className:"error"})]}),e.jsx("button",{type:"button",onClick:()=>t.prev(o),children:"Back"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},M=S().shape({blood:y().required("Please select a blood type"),sex:y().required("Please select a sex"),levelActivity:y().required("Please select a level of activity")});B.propTypes={data:i.object.isRequired,next:i.func.isRequired,prev:i.func.isRequired};const T=t=>{const r=N(),o=C(),a=async s=>{try{await r(D({email:t.data.email,name:t.data.name,password:t.data.password,height:t.data.height,currentWeight:t.data.currentWeight,desiredWeight:t.data.desiredWeight,birthday:"2005-06-17T07:27:41.902Z",blood:t.data.blood,sex:t.data.sex,levelActivity:t.data.levelActivity})),o("/diary"),t.next(s,!0)}catch(c){console.error("Error updating user:",c)}};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Dear user"}),e.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(f,{initialValues:t.data,onSubmit:a,children:({values:s})=>e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>a(s),children:"Go"}),e.jsx("button",{type:"button",onClick:()=>t.prev(s),children:"Back"})]})})]})};T.propTypes={data:i.object.isRequired,next:i.func.isRequired,prev:i.func.isRequired};const U="_progressBarOne_12m4m_1",Z="_progressBarTwo_12m4m_10",J="_progressBarThree_12m4m_19",K="_progressBarPart_12m4m_27",Q="_completed_12m4m_32",X="_wrap_12m4m_36",d={progressBarOne:U,progressBarTwo:Z,progressBarThree:J,progressBarPart:K,completed:Q,wrap:X},P=({currentStep:t})=>{const r=t>=0;return e.jsx("div",{className:d.progressBarOne,children:e.jsx("div",{className:`${d.progressBarPart} ${r?d.completed:""}`})})},R=({currentStep:t})=>{const r=t>=1;return e.jsx("div",{className:d.progressBarTwo,children:e.jsx("div",{className:`${d.progressBarPart} ${r?d.completed:""}`})})},W=({currentStep:t})=>{const r=t>=2;return e.jsx("div",{className:d.progressBarThree,children:e.jsx("div",{className:`${d.progressBarPart} ${r?d.completed:""}`})})};P.propTypes={currentStep:i.number.isRequired};R.propTypes={currentStep:i.number.isRequired};W.propTypes={currentStep:i.number.isRequired};const Y={display:"flex",marginTop:"20px"},oe=()=>{const[t,r]=m.useState({height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""}),[o,a]=m.useState(0),s=(x,h=!1)=>{const u={...t,...x};r(u),!h&&a(g=>g+1)},c=x=>{const h={...t,...x};r(h),a(u=>u-1)},j=[e.jsx(k,{next:s,data:t},"step1"),e.jsx(B,{next:s,prev:c,data:t},"step2"),e.jsx(T,{next:s,prev:c,data:t},"step3")];return e.jsxs("div",{children:[e.jsx("div",{children:j[o]}),e.jsxs("div",{style:Y,children:[e.jsx(P,{currentStep:o}),e.jsx(R,{currentStep:o}),e.jsx(W,{currentStep:o})]})]})};export{oe as default};
