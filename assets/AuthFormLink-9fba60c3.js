import{n as j,P as i,j as e,I as s,L as v}from"./index-7714adef.js";import{F as R,a as g,c as k,b as p,d as q}from"./index.esm-3b7e2ed6.js";import{s as n}from"./styled-components.browser.esm-1ba807f3.js";const z=j.button`
  position: absolute;
  top: 50%;
  right: ${({right:t})=>t||"0"};
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #efede8;
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #e6533c;
    scale: 1.15;
  }
`;function m({children:t,onClick:o,right:a,type:c}){return e.jsx(z,{onClick:o,right:a,type:c,children:t})}m.propTypes={onClick:i.func.isRequired,right:i.string,type:i.string,children:i.object.isRequired};const S=n.div`
  position: relative;
  width: 100%;
`,F=n(R)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`,P=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`,f=n(g)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.6);

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`,h=n.div`
  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;

  color: #d80027;
`,x=n.div`
  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;

  color: #3cbf61;
`,C=n(g)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding-right: 30px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.6);

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`,A=({nameIsShown:t,handleSubmit:o,toglePassword:a,passwordInput:c,isPassword:u,children:b})=>{const y=t?{name:"",email:"",password:""}:{email:"",password:""},w=k().shape({name:t?p().required("Please input your name"):null,email:p().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:p().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")});return e.jsx(q,{initialValues:y,validationSchema:w,onSubmit:o,children:({handleBlur:d,touched:r,errors:l})=>e.jsxs(F,{autoComplete:"off",children:[e.jsxs(P,{children:[t&&e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(f,{type:"text",name:"name",placeholder:"Name",onBlur:d})}),r.name&&l.name?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),l.name]}):r.name?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success name"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(f,{type:"email",name:"email",placeholder:"Email",onBlur:d})}),r.email&&l.email?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),l.email]}):r.email?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success email"]}):null]}),e.jsxs("div",{children:[e.jsxs(S,{children:[e.jsx(C,{id:"password",type:c,placeholder:"Password",name:"password",onBlur:d}),e.jsx(m,{type:"button",right:"16px",onClick:a,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:s+`${u?"#icon-eye-off":"#icon-eye"}`})})})]}),r.password&&l.password?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),l.password]}):r.password?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success password"]}):null]})]}),b]})})};A.propTypes={handleSubmit:i.func.isRequired,toglePassword:i.func.isRequired,passwordInput:i.string.isRequired,isPassword:i.bool.isRequired,nameIsShown:i.bool.isRequired,children:i.node};const L=n.button`
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 12px;

  &:hover {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`,T=({text:t,type:o})=>e.jsx(L,{type:o,children:t});T.propTypes={text:i.string.isRequired,type:i.string.isRequired};const B=n(v)`
  margin-left: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;

  color: var(--primary-text-color);
`,E=n.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,I=({text:t,textLink:o,to:a})=>e.jsxs(E,{children:[t,e.jsx(B,{to:a,children:o})]});I.propTypes={text:i.string.isRequired,textLink:i.string.isRequired,to:i.string.isRequired};export{T as A,A as F,I as a};
