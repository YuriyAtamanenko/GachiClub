import{n as t,j as e,I as a,L as v,r as p,u as k,a as z,b as S,c as P,Q as l}from"./index-10710d21.js";import{F as I,a as c,c as T,b as o,d as R}from"./index.esm-a5733eb2.js";import{B as $}from"./ButtonInput-3bf8e76e.js";import{s as i}from"./styled-components.browser.esm-5ea02b6c.js";import{m as C,a as F,t as B,b as E,d as V,c as D}from"./default-mobile-2x-adbcb5a4.js";const W=t.div`
  position: absolute;
  left: 25%;
  top: 142%;
  @media screen and (min-width: 768px) {
    left: 35%;
    top: 142%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 70%;
  }
`,N=t.div`
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
`,A=t.div`
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
`,L=t.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,U=t.p`
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
`,q=t.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Z=t.div`
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
`,M=t.div`
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
`,O=t.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,Q=t.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`,_=t.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,G=t.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,H=()=>e.jsxs(W,{children:[e.jsxs(N,{children:[e.jsx(A,{children:e.jsx(L,{children:e.jsx("use",{href:a+"#icon-play"})})}),e.jsxs("div",{children:[e.jsx(U,{children:"350+"}),e.jsx(q,{children:"Video tutorial"})]})]}),e.jsxs(Z,{className:"box1177",children:[e.jsx(M,{children:e.jsx(O,{children:e.jsx("use",{href:a+"#icon-run"})})}),e.jsxs(G,{children:[e.jsx(Q,{children:"500"}),e.jsx(_,{children:"cal"})]})]})]}),J=i.div`
  position: relative;
  overflow-x: hidden;
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
`,K=i.div`
  position: absolute;
  top: 50%;
  width: 446px;
  left: 10%;
  height: 669px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${C});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${F});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    height: 1000px;
    width: 670px;
    left: 215px;
    top: 125px;

    pointer-events: none;

    background-image: url(${B});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${E});
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

    background-image: url(${V});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${D});
      }
    }
  }
`,X=i.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`,Y=i.div`
  position: relative;
  width: 100%;
`,ee=i.div`
  position: relative;
`,ie=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,te=i.h2`
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
`,ne=i.p`
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
`,oe=i(I)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`,ae=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`,x=i(c)`
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
`,re=i.button`
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
`,se=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,de=i(v)`
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
`;i.div`
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
`;i.div`
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
`;const pe=i(c)`
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
`,le={name:"",email:"",password:""},fe=()=>{const[h,m]=p.useState(!1),[g,f]=p.useState("password"),u=k(),r=z(),s=S(n=>n.auth.bodyData),w=async(n,j)=>{console.log(n);try{(await u(P({name:n.name,email:n.email,password:n.password}))).error?l.error("Email already exists. Please use a different email"):(j.resetForm(),s.bodyData===null||Object.keys(s.bodyData).length===0?r("/params"):r("/diary"))}catch(d){console.error("Server error:",d),l.error("Server Error: Something went wrong")}},b=T({name:o().required("Please input your name!"),email:o().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:o().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")}),y=()=>{m(n=>!n),f(n=>{if(n==="password")return"text";if(n==="text")return"password"})};return e.jsxs(J,{children:[e.jsx(K,{}),e.jsxs(X,{children:[e.jsxs(ie,{children:[e.jsx(te,{className:"title",children:"Sign Up"}),e.jsx(ne,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),e.jsx("div",{children:e.jsx(R,{initialValues:le,validationSchema:b,onSubmit:w,children:e.jsxs(oe,{autoComplete:"off",children:[e.jsxs(ae,{children:[e.jsx("div",{children:e.jsx(x,{type:"text",name:"name",placeholder:"Name"})}),e.jsx("div",{children:e.jsx(x,{type:"email",name:"email",placeholder:"Email"})}),e.jsxs(Y,{children:[e.jsx(pe,{id:"password",type:g,placeholder:"Password",name:"password"}),e.jsx($,{type:"button",right:"16px",onClick:y,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+`${h?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(ee,{className:"messege"})]})]}),e.jsx(re,{type:"submit",children:"Sign Up"}),e.jsxs(se,{children:["Already have an account?"," ",e.jsx(de,{to:"/signin",children:"Sign In"})]})]})})})]}),e.jsx(H,{})]})};export{fe as default};
