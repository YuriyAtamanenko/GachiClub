import{n,j as e,I as r,L as S,r as d,u as I,a as C,b as R,k as P,d as F,l as $,Q as l}from"./index-24a2b3f4.js";import{F as m,a as g,E as B,c as E,b as c,d as T}from"./index.esm-7e3a4c4c.js";import{B as N}from"./ButtonInput-9ee3686a.js";import{s as i}from"./styled-components.browser.esm-2c8083d2.js";import{d as D,a as V}from"./default-desktop-2x-90147dc9.js";import{m as W,a as L,t as M,b as U}from"./default-mobile-2x-a3b76961.js";const q=n.div`
  position: absolute;
  left: 30%;
  top: 200%;
  @media screen and (min-width: 768px) {
    left: 40%;
    top: 130%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 65%;
  }
`,A=n.div`
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
`,Z=n.div`
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
`,O=n.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,Q=n.p`
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
`,_=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,G=n.div`
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
`,H=n.div`
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
`,J=n.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,K=n.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`,X=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Y=n.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,ee=()=>e.jsxs(q,{children:[e.jsxs(A,{children:[e.jsx(Z,{children:e.jsx(O,{children:e.jsx("use",{href:r+"#icon-play"})})}),e.jsxs("div",{children:[e.jsx(Q,{children:"350+"}),e.jsx(_,{children:"Video tutorial"})]})]}),e.jsxs(G,{children:[e.jsx(H,{children:e.jsx(J,{children:e.jsx("use",{href:r+"#icon-run"})})}),e.jsxs(Y,{children:[e.jsx(K,{children:"500"}),e.jsx(X,{children:"cal"})]})]})]}),ie=i.div`
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  margin: 0;
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */
  &::-webkit-scrollbar {
    display: none;
  }
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
`,te=i.div`
  position: absolute;
  top: 50%;
  left: 25px;
  width: 446px;
  height: 669px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${W});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${L});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    height: 1000px;
    width: 670px;
    left: 215px;
    top: 100px;

    pointer-events: none;

    background-image: url(${M});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${U});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 580px;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${D});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${V});
      }
    }
  }
`,ne=i.div`
  padding-top: 90.5px;

  @media screen and (min-width: 768px) {
    width: 496px;
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`,oe=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,re=i.h2`
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
`,ae=i.p`
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
`,se=i(m)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`;i(m)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`;const de=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`,le=i(g)`
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
`;i(B)`
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
`;const pe=i.button`
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
`,ce=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,xe=i(S)`
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
`,x=i.div`
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
`,h=i.div`
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
`,he=i(g)`
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
`,me=i.div`
  position: relative;
  width: 100%;
`;i.div`
  position: relative;
`;const ge={name:"",email:"",password:""},ve=()=>{const[f,u]=d.useState(!1),[w,b]=d.useState("password"),y=I(),s=C(),j=R(t=>t.auth.bodyData);d.useEffect(()=>{Object.keys(j).length>1&&s("/params")});const v=async(t,a)=>{console.log("handleSubmit",t,a);try{if(await F(t.email,t.password)!==null){const p=await y($({email:t.email,password:t.password}));p.error?l.error("Invalid email or password"):(a.resetForm(),p.payload.bodyData.bodyData===void 0?s("/params"):s("/diary"))}else l.error("Invalid data")}catch(o){o.message==="Server error"&&l.error("Server error")}},k=E({email:c().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:c().min(6).max(16).required()}),z=()=>{u(t=>!t),b(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsxs(ie,{className:"Container",children:[e.jsx(te,{className:"Photo"}),e.jsxs(ne,{className:"section",children:[e.jsxs(oe,{className:"text-conteiner",children:[e.jsx(re,{children:"Sign In"}),e.jsx(P,{}),e.jsx(ae,{className:"text-p",children:"Welcome! Please enter your credentials to login to the platform:"})]}),e.jsx("div",{children:e.jsx(T,{initialValues:ge,validationSchema:k,onSubmit:v,children:({handleBlur:t,touched:a,errors:o})=>e.jsxs(se,{autoComplete:"on",className:"StyledForm",children:[e.jsxs(de,{children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(le,{type:"email",name:"email",placeholder:"Email",onBlur:t})}),a.email?o.email?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-error"})})," ",o.email]}):e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-success"})})," ","Success name"]}):null]})}),e.jsxs("div",{children:[e.jsx(me,{children:e.jsxs("div",{children:[e.jsx(he,{id:"password",type:w,placeholder:"Password",name:"password",onBlur:t}),e.jsx(N,{type:"button",right:"16px",onClick:z,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:r+`${f?"#icon-eye-off":"#icon-eye"}`})})})]})}),a.password?o.password?e.jsxs(x,{className:"error-icon",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-error"})})," ",o.password]}):e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-success"})})," ","Success password"]}):null]})]}),e.jsx(pe,{type:"submit",children:"Sign In"}),e.jsxs(ce,{children:["Don’t have an account?"," ",e.jsx(xe,{to:"/signup",children:"Sign Up"})]})]})})})]}),e.jsx(ee,{})]})};export{ve as default};
