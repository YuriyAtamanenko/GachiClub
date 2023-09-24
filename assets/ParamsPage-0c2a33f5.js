import{P as o,j as e,b as q,a as j,u as _,c as k}from"./index-3662fcb0.js";import{F as u,a as v,b as a}from"./formik.esm-95eee17f.js";const P="_progressBarOne_1vq9e_1",R="_progressBarTwo_1vq9e_10",W="_progressBarThree_1vq9e_19",A="_progressBarPart_1vq9e_27",N="_completed_1vq9e_32",C="_wrap_1vq9e_36",n={progressBarOne:P,progressBarTwo:R,progressBarThree:W,progressBarPart:A,completed:N,wrap:C},m=({currentStep:t})=>{const s=t>=0;return e.jsx("div",{className:n.progressBarOne,children:e.jsx("div",{className:`${n.progressBarPart} ${s?n.completed:""}`})})},y=({currentStep:t})=>{const s=t>=1;return e.jsx("div",{className:n.progressBarTwo,children:e.jsx("div",{className:`${n.progressBarPart} ${s?n.completed:""}`})})},g=({currentStep:t})=>{const s=t>=2;return e.jsx("div",{className:n.progressBarThree,children:e.jsx("div",{className:`${n.progressBarPart} ${s?n.completed:""}`})})};m.propTypes={currentStep:o.number.isRequired};y.propTypes={currentStep:o.number.isRequired};g.propTypes={currentStep:o.number.isRequired};const D={display:"flex",marginTop:"20px"},b=t=>{const s=i=>{const r={...t.data,...i};console.log("StepOne данные:",r),t.next(r)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(u,{initialValues:t.data,onSubmit:s,children:()=>e.jsxs(v,{children:[e.jsx(a,{name:"height",placeholder:"Height"}),e.jsx(a,{name:"currentWeight",placeholder:"Current Weight"}),e.jsx(a,{name:"desiredWeight",placeholder:"Desired Weight"}),e.jsx(a,{name:"birthday",placeholder:"Birthday"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},S=t=>{const s=i=>{const r={...t.data,...i};console.log("StepTwo данные:",r),t.next(r)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(u,{initialValues:t.data,onSubmit:s,children:({values:i})=>e.jsxs(v,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Blood"}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"blood",value:"1"}),"1"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"blood",value:"2"}),"2"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"blood",value:"3"}),"3"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"blood",value:"4"}),"4"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sex"}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"sex",value:"male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"sex",value:"female"}),"Female"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Level Activity"}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"levelActivity",value:"1"}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"levelActivity",value:"2"}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"levelActivity",value:"3"}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"levelActivity",value:"4"}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"levelActivity",value:"5"}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),e.jsx("button",{type:"button",onClick:()=>t.prev(i),children:"Back"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},f=t=>{const s=_(),i=async r=>{console.log("StepThree данные:",t.data);try{await s(k({email:t.data.email,name:t.data.name,password:t.data.password,height:t.data.height,currentWeight:t.data.currentWeight,desiredWeight:t.data.desiredWeight,birthday:"2005-06-17T07:27:41.902Z",blood:t.data.blood,sex:t.data.sex,levelActivity:t.data.levelActivity})),t.next(r,!0)}catch(d){console.error("Error updating user:",d)}};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Dear user"}),e.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(u,{initialValues:t.data,onSubmit:i,children:({values:r})=>e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>i(r),children:"Go"}),e.jsx("button",{type:"button",onClick:()=>t.prev(r),children:"Back"})]})})]})},F=()=>{const t=q(l=>l.auth.token);console.log("Текущий token",t);const[s,i]=j.useState({height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""}),[r,d]=j.useState(0),w=l=>{console.log("данные которые улетают на сервер:",l)},h=(l,p=!1)=>{const c={...s,...l};if(i(c),p){w(c);return}d(T=>T+1)},x=l=>{const p={...s,...l};i(p),d(c=>c-1)},B=[e.jsx(b,{next:h,data:s},"step1"),e.jsx(S,{next:h,prev:x,data:s},"step2"),e.jsx(f,{next:h,prev:x,data:s},"step3")];return console.log("data",s),e.jsxs("div",{children:[e.jsx("div",{children:B[r]}),e.jsxs("div",{style:D,children:[e.jsx(m,{currentStep:r}),e.jsx(y,{currentStep:r}),e.jsx(g,{currentStep:r})]})]})};b.propTypes={data:o.object.isRequired,next:o.func.isRequired};S.propTypes={data:o.object.isRequired,next:o.func.isRequired,prev:o.func.isRequired};f.propTypes={data:o.object.isRequired,next:o.func.isRequired,prev:o.func.isRequired};export{F as default};
