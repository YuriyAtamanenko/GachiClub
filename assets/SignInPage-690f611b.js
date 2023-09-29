import{n as o,j as e,I as s,L as I,r as l,u as R,a as B,b as F,k as N,d as P,l as $,Q as p}from"./index-56206f60.js";import{F as u,a as w,E,c as T,b as h,u as V,d as W}from"./index.esm-ef4d08d2.js";import{B as D}from"./ButtonInput-2fd81694.js";import{s as i}from"./styled-components.browser.esm-31cb2671.js";import{m as L,a as M,t as U,b as q,d as A,c as Z}from"./default-mobile-2x-adbcb5a4.js";const O=o.div`
  position: absolute;
  left: 40%;
  top: 139%;
  @media screen and (min-width: 768px) {
    left: 100%;
    top: 160%;
  }
  @media screen and (min-width: 1440px) {
    left: 62%;
    top: 75%;
  }
`,Q=o.div`
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
`,_=o.div`
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
`,G=o.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,H=o.p`
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
`,J=o.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,K=o.div`
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
    margin-top: 56px;
    margin-left: 223px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 39px;
    margin-left: 458px;
  }
`,X=o.div`
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
`,Y=o.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ee=o.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`,ie=o.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,te=o.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,ne=()=>e.jsxs(O,{children:[e.jsxs(Q,{children:[e.jsx(_,{children:e.jsx(G,{children:e.jsx("use",{href:s+"#icon-play"})})}),e.jsxs("div",{children:[e.jsx(H,{children:"350+"}),e.jsx(J,{children:"Video tutorial"})]})]}),e.jsxs(K,{children:[e.jsx(X,{children:e.jsx(Y,{children:e.jsx("use",{href:s+"#icon-run"})})}),e.jsxs(te,{children:[e.jsx(ee,{children:"500"}),e.jsx(ie,{children:"cal"})]})]})]}),oe=i.div`
  position: relative;
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
    width: 768px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`,re=i.div`
  position: absolute;
  top: 50%;
  left: 77px;
  width: 446px;
  height: 669px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${L});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${M});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    height: 1000px;
    width: 670px;
    left: 331px;
    top: 131px;

    pointer-events: none;

    background-image: url(${U});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${q});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 770px;
    width: 670px;
    height: 1005px;
    pointer-events: none;

    background-image: url(${A});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${Z});
      }
    }
  }
`,se=i.div`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,ae=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,de=i.h2`
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 116.667%;

  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    font-size: 32px;
    line-height: 137.5%;
  }
`,le=i.p`
  margin-bottom: 28px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 16px;
    line-height: 150%;
  }
`,pe=i(u)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`;i(u)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`;const ce=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`,xe=i(w)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.6);

  &:default-input {
    /* Добавьте стили для фокуса, например, оранжевый ховер */
    border-color: orange;
  }

  /* Добавьте стили для ховера при успешном вводе (зеленый) */
  &.success-input {
    border-color: green;
  }

  /* Добавьте стили для ховера при ошибке (красный) */
  &.error-hover {
    border-color: #d80027;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;

    font-size: 16px;
    line-height: 150%;
  }
`;i(E)`
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
`;const he=i.button`
  display: flex;
  padding: 12px 40px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--bright-accent-color);
  border: none;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 112.5%;

  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    display: inline-flex;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    line-height: 120%;
  }
`,me=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,ge=i(I)`
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
`,m=i.div`
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
`,g=i.div`
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
`,fe=i(w)`
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
`,ue=i.div`
  position: relative;
  width: 100%;
`,we=i.div`
  position: relative;
`,f={name:"",email:"",password:""},ze=()=>{const[b,y]=l.useState(!1),[j,v]=l.useState("password"),k=R(),z=B(),S=F(n=>n.auth.bodyData);l.useEffect(()=>{Object.keys(S).length>1&&z("/params")});const c=async(n,d)=>{try{await P(n.email,n.password)!==null?(await k($({email:n.email,password:n.password}))).error?p.error("Invalid email or password"):d.resetForm():p.error("Invalid data")}catch(a){a.message==="Server error"&&p.error("Server error")}},x=T({email:h().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:h().min(6).max(16).required()}),t=V({initialValues:f,validationSchema:x,onSubmit:c}),C=()=>{y(n=>!n),v(n=>{if(n==="password")return"text";if(n==="text")return"password"})};return e.jsxs(oe,{className:"Container",children:[e.jsx(re,{className:"Photo"}),e.jsxs(se,{className:"section",children:[e.jsxs(ae,{className:"text-conteiner",children:[e.jsx(de,{children:"Sign In"}),e.jsx(N,{}),e.jsx(le,{className:"text-p",children:"Welcome! Please enter your credentials to login to the platform:"})]}),e.jsx("div",{children:e.jsx(W,{initialValues:f,validationSchema:x,onSubmit:c,children:({handleBlur:n,touched:d,errors:a})=>e.jsxs(pe,{autoComplete:"on",className:"StyledForm",children:[e.jsxs(ce,{children:[e.jsxs("div",{children:[e.jsx(xe,{type:"email",name:"email",placeholder:"Email",onChange:r=>{t.handleChange(r)},onBlur:t.handleBlur,value:t.values.email,className:"FieldStyle"}),e.jsx("div",{children:t.touched.email?t.errors.email?e.jsxs(m,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})})," ",t.errors.email]}):e.jsxs(g,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})})," ","Success name"]}):null})]}),e.jsxs(ue,{children:[e.jsx(fe,{id:"password",type:j,placeholder:"Password",name:"password",className:t.touched.password&&t.errors.password?"error-input":t.touched.password?"success-input":"default-input",onChange:r=>{t.handleChange(r)},value:t.values.password,onBlur:r=>{n(r),t.handleBlur(r)},"data-touch":d.password&&!a.password}),e.jsx(D,{type:"button",right:"16px",onClick:C,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:s+`${b?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(we,{className:"messege",children:t.touched.password?t.errors.password?e.jsxs(m,{className:"error-icon",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})})," ",t.errors.password]}):e.jsxs(g,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})})," ","Success password"]}):null})]})]}),e.jsx(he,{type:"submit",children:"Sign In"}),e.jsxs(me,{children:["Don’t have an account?"," ",e.jsx(ge,{to:"/signup",children:"Sign Up"})]})]})})})]}),e.jsx(ne,{})]})};export{ze as default};
