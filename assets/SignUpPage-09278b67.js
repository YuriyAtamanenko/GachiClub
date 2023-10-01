import{n,j as e,I as s,L as z,r as c,u as S,a as C,b as P,c as I,Q as h}from"./index-24a2b3f4.js";import{F as T,a as g,c as R,b as a,d as $}from"./index.esm-7e3a4c4c.js";import{B}from"./ButtonInput-9ee3686a.js";import{s as i}from"./styled-components.browser.esm-2c8083d2.js";import{d as F,a as E}from"./default-desktop-2x-90147dc9.js";import{m as V,a as D,t as W,b as A}from"./default-mobile-2x-a3b76961.js";const L=n.div`
  position: absolute;
  left: 25%;
  top: 250%;
  @media screen and (min-width: 768px) {
    left: 35%;
    top: 110%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 65%;
  }
`,N=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  width: 146px;
  height: 66px;
  background: #303030;

  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 206px;
    height: 96px;
    background: #303030;
  }
`,U=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #ef8964;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,q=n.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,Z=n.p`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 8px;
  }
`,M=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,O=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 8px;
  border-radius: 12px;
  background: #ef8964;
  width: 119px;
  height: 76px;
  padding-left: 18px;
  margin-top: 70px;
  margin-left: 115px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    border-radius: 12px;
    background: #ef8964;
    width: 180px;
    height: 110px;
    padding-left: 32px;
    margin-top: 85px;
    margin-left: 240px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 25px;
    margin-left: 480px;
  }
`,Q=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #efa082;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,_=n.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,G=n.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`,H=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,J=n.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,K=()=>e.jsxs(L,{children:[e.jsxs(N,{children:[e.jsx(U,{children:e.jsx(q,{children:e.jsx("use",{href:s+"#icon-play"})})}),e.jsxs("div",{children:[e.jsx(Z,{children:"350+"}),e.jsx(M,{children:"Video tutorial"})]})]}),e.jsxs(O,{className:"box1177",children:[e.jsx(Q,{children:e.jsx(_,{children:e.jsx("use",{href:s+"#icon-run"})})}),e.jsxs(J,{children:[e.jsx(G,{children:"500"}),e.jsx(H,{children:"cal"})]})]})]}),X=i.div`
  position: relative;
  overflow-x: hidden;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0;
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */

  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    margin: 0;
    min-width: 704px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`,Y=i.div`
  position: absolute;
  top: 50%;
  width: 446px;
  left: 10%;
  height: 669px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${V});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${D});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    height: 1000px;
    width: 670px;
    left: 215px;
    top: 125px;

    pointer-events: none;

    background-image: url(${W});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${A});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 575px;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${F});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${E});
      }
    }
  }
`,ee=i.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`,ie=i.div`
  position: relative;
  width: 100%;
`;i.div`
  position: relative;
`;const te=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,ne=i.h2`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.05px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;

    line-height: 44px;
    letter-spacing: 0.05px;
  }
`,oe=i.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.77px;
  color: #efede84d;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 24px;
    letter-spacing: 0.6px;
  }
`,se=i(T)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`,re=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`,m=i(g)`
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
`,ae=i.button`
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

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }
  &:hover {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`,de=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,pe=i(z)`
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
`,d=i.div`
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
`,p=i.div`
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
`,le=i(g)`
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
`,xe={name:"",email:"",password:""},we=()=>{const[f,u]=c.useState(!1),[w,b]=c.useState("password"),j=S(),l=C(),x=P(t=>t.auth.bodyData),y=async(t,r)=>{console.log(t);try{(await j(I({name:t.name,email:t.email,password:t.password}))).error?h.error("Email already exists. Please use a different email"):(r.resetForm(),x.bodyData===null||Object.keys(x.bodyData).length===0?l("/params"):l("/diary"))}catch(o){console.error("Server error:",o),h.error("Server Error: Something went wrong")}},v=R().shape({name:a().required("Please input your name!"),email:a().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:a().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")}),k=()=>{u(t=>!t),b(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsxs(X,{children:[e.jsx(Y,{}),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(ne,{className:"title",children:"Sign Up"}),e.jsx(oe,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),e.jsx("div",{children:e.jsx($,{initialValues:xe,validationSchema:v,onSubmit:y,children:({handleBlur:t,touched:r,errors:o})=>e.jsxs(se,{autoComplete:"off",children:[e.jsxs(re,{children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{type:"text",name:"name",placeholder:"Name",onBlur:t})}),r.name&&o.name?e.jsxs(d,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),o.name]}):r.name?e.jsxs(p,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success name"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{type:"email",name:"email",placeholder:"Email",onBlur:t})}),r.email&&o.email?e.jsxs(d,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),o.email]}):r.email?e.jsxs(p,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success email"]}):null]}),e.jsxs("div",{children:[e.jsxs(ie,{children:[e.jsx(le,{id:"password",type:w,placeholder:"Password",name:"password",onBlur:t}),e.jsx(B,{type:"button",right:"16px",onClick:k,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:s+`${f?"#icon-eye-off":"#icon-eye"}`})})})]}),r.password&&o.password?e.jsxs(d,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),o.password]}):r.password?e.jsxs(p,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success password"]}):null]})]}),e.jsx(ae,{type:"submit",children:"Sign Up"}),e.jsxs(de,{children:["Already have an account?"," ",e.jsx(pe,{to:"/signin",children:"Sign In"})]})]})})})]}),e.jsx(K,{})]})};export{we as default};
