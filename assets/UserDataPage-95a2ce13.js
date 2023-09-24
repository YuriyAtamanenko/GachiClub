import{P as i,j as e,a as u}from"./index-697526a5.js";import{F as h,a as y,b as r}from"./formik.esm-93cb9adc.js";const S="_progressBarOne_1vq9e_1",w="_progressBarTwo_1vq9e_10",q="_progressBarThree_1vq9e_19",_="_progressBarPart_1vq9e_27",k="_completed_1vq9e_32",P="_wrap_1vq9e_36",o={progressBarOne:S,progressBarTwo:w,progressBarThree:q,progressBarPart:_,completed:k,wrap:P},j=({currentStep:s})=>{const t=s>=0;return e.jsx("div",{className:o.progressBarOne,children:e.jsx("div",{className:`${o.progressBarPart} ${t?o.completed:""}`})})},v=({currentStep:s})=>{const t=s>=1;return e.jsx("div",{className:o.progressBarTwo,children:e.jsx("div",{className:`${o.progressBarPart} ${t?o.completed:""}`})})},m=({currentStep:s})=>{const t=s>=2;return e.jsx("div",{className:o.progressBarThree,children:e.jsx("div",{className:`${o.progressBarPart} ${t?o.completed:""}`})})};j.propTypes={currentStep:i.number.isRequired};v.propTypes={currentStep:i.number.isRequired};m.propTypes={currentStep:i.number.isRequired};const R={display:"flex",marginTop:"20px"},g=s=>{const t=a=>{s.next(a)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(h,{initialValues:s.data,onSubmit:t,children:()=>e.jsxs(y,{children:[e.jsx(r,{name:"height",placeholder:"Height"}),e.jsx(r,{name:"currentWeight",placeholder:"Current Weight"}),e.jsx(r,{name:"desiredWeight",placeholder:"Desired Weight"}),e.jsx(r,{name:"birthday",placeholder:"Birthday"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},b=s=>{const t=a=>{const d={...s.data,...a};s.next(d)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Get closer to your goals!"}),e.jsx("p",{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"})]}),e.jsx(h,{initialValues:s.data,onSubmit:t,children:({values:a})=>e.jsxs(y,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Blood"}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"bloodType",value:"1"}),"1"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"bloodType",value:"2"}),"2"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"bloodType",value:"3"}),"3"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"bloodType",value:"4"}),"4"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sex"}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"sex",value:"Male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"sex",value:"Female"}),"Female"]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Level Activity"}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"activity",value:"Sedentary lifestyle (little or no physical activity)"}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"activity",value:"Light activity (light exercises/sports 1-3 days per week)"}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"activity",value:"Moderately active (moderate exercises/sports 3-5 days per week)"}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"activity",value:"Very active (intense exercises/sports 6-7 days per week)"}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs("label",{children:[e.jsx(r,{type:"radio",name:"activity",value:`Extremely active (very strenuous exercises/sports and physical
                work)`}),"Extremely active (very strenuous exercises/sports and physical work)"]})]}),e.jsx("button",{type:"button",onClick:()=>s.prev(a),children:"Back"}),e.jsx("button",{type:"submit",children:"Next"})]})})]})},f=s=>{const t=a=>{s.next(a,!0)};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Dear user"}),e.jsx("p",{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(h,{initialValues:s.data,onSubmit:t,children:({values:a})=>e.jsxs("div",{children:[e.jsx("button",{type:"submit",children:"Go"}),e.jsx("button",{type:"button",onClick:()=>s.prev(a),children:"Back"})]})})]})},W=()=>{const[s,t]=u.useState({height:"",currentWeight:"",desiredWeight:"",birthday:"",bloodType:"1",sex:"Male",activity:"Sedentary lifestyle (little or no physical activity)"}),[a,d]=u.useState(0),T=n=>{console.log(n)},c=(n,l=!1)=>{if(t(p=>({...p,...n})),l){T(n);return}d(p=>p+1)},x=n=>{t(l=>({...l,...n})),d(l=>l-1)},B=[e.jsx(g,{next:c,data:s},"step1"),e.jsx(b,{next:c,prev:x,data:s},"step2"),e.jsx(f,{next:c,prev:x,data:s},"step3")];return console.log("data",s),e.jsxs("div",{children:[e.jsx("div",{children:B[a]}),e.jsxs("div",{style:R,children:[e.jsx(j,{currentStep:a}),e.jsx(v,{currentStep:a}),e.jsx(m,{currentStep:a})]})]})};g.propTypes={data:i.object.isRequired,next:i.func.isRequired};b.propTypes={data:i.object.isRequired,next:i.func.isRequired,prev:i.func.isRequired};f.propTypes={data:i.object.isRequired,next:i.func.isRequired,prev:i.func.isRequired};export{W as default};