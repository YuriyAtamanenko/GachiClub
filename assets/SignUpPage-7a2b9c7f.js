import{u as x,a as g,b as j,j as e,L as y,r as w,Q as l}from"./index-0dee23b8.js";import{F as f,a as v,b as r,E as m}from"./formik.esm-5b9f7483.js";import{c as S,a as o}from"./index.esm-8f770c28.js";/* empty css                      */const N=()=>{const d=x(),i=g(),n=j(a=>a.auth.bodyData),c=async(a,s)=>{console.log(a);try{(await d(w({name:a.name,email:a.email,password:a.password}))).error?l.error("Email already exists. Please use a different email"):(s.resetForm(),n===null||Object.keys(n).length===0?i("/params"):i("/diary"))}catch(t){console.error("Server error:",t),l.error("Server Error: Something went wrong")}},p=S({name:o().required(),email:o().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:o().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")}),h={name:"",email:"",password:""},u={paddingTop:"200px"};return e.jsxs("div",{style:u,children:[e.jsx("h2",{children:"Sign Up"}),e.jsx("p",{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(f,{initialValues:h,validationSchema:p,onSubmit:c,children:({errors:a,touched:s})=>e.jsxs(v,{autoComplete:"off",children:[e.jsxs("div",{children:[e.jsx(r,{type:"text",name:"name",placeholder:"Name"}),a.name&&s.name&&e.jsx("div",{className:"error-message",children:"Please input your name!"})]}),e.jsxs("div",{children:[e.jsx(r,{type:"email",name:"email",placeholder:"Email"}),e.jsx(m,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{children:[e.jsx(r,{type:"password",name:"password",placeholder:"Password"}),e.jsx(m,{name:"password",component:"div",className:"error-message"})]}),e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsxs("p",{children:["Already have account? ",e.jsx(y,{to:"/signin",children:"Sign In"})]})]})})]})};export{N as default};