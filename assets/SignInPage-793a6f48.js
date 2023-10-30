import{n,j as e,I as l,L as v,r as a,u as j,a as k,b as z,k as S,d as I,l as R,Q as r}from"./index-d4634436.js";import{F as C,A as F,a as T}from"./AuthFormLink-0d56e8a4.js";import{s as i}from"./styled-components.browser.esm-9f6df699.js";import{F as x,a as c,E as D}from"./index.esm-aa0c78e7.js";import{d as P,a as B}from"./default-desktop-2x-90147dc9.js";import{m as N,a as V,t as $,b as E}from"./default-mobile-2x-a3b76961.js";const L=n.div`
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
`,W=n.div`
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
`,A=n.div`
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
`,U=n.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,M=n.p`
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
`,O=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Q=n.div`
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
`,q=n.div`
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
`,G=n.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,H=n.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`,J=n.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,K=n.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,X=()=>e.jsxs(L,{children:[e.jsxs(W,{children:[e.jsx(A,{children:e.jsx(U,{children:e.jsx("use",{href:l+"#icon-play"})})}),e.jsxs("div",{children:[e.jsx(M,{children:"350+"}),e.jsx(O,{children:"Video tutorial"})]})]}),e.jsxs(Q,{children:[e.jsx(q,{children:e.jsx(G,{children:e.jsx("use",{href:l+"#icon-run"})})}),e.jsxs(K,{children:[e.jsx(H,{children:"500"}),e.jsx(J,{children:"cal"})]})]})]}),Y=i.div`
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
`,Z=i.div`
  position: absolute;
  top: 50%;
  left: 25px;
  width: 446px;
  height: 669px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${N});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${V});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    height: 1000px;
    width: 670px;
    left: 215px;
    top: 100px;

    pointer-events: none;

    background-image: url(${$});

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
    left: 580px;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${P});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${B});
      }
    }
  }
`,_=i.div`
  padding-top: 90.5px;

  @media screen and (min-width: 768px) {
    width: 496px;
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`,ee=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,ie=i.h2`
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
`,te=i.p`
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
`;i(x)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`;i(x)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`;i(c)`
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
`;i(D)`
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
`;i.button`
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
`;i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`;i(v)`
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
`;i(c)`
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
`;i.div`
  position: relative;
  width: 100%;
`;i.div`
  position: relative;
`;const de=()=>{const[h,m]=a.useState(!1),[g,f]=a.useState("password"),u=j(),o=k(),w=z(t=>t.auth.bodyData);a.useEffect(()=>{Object.keys(w).length>1&&o("/params")});const b=async(t,s)=>{console.log("handleSubmit",t,s);try{if(await I(t.email,t.password)!==null){const d=await u(R({email:t.email,password:t.password}));d.error?r.error("Invalid email or password"):(s.resetForm(),d.payload.bodyData.bodyData===void 0?o("/params"):o("/diary"))}else r.error("Invalid data")}catch(p){p.message==="Server error"&&r.error("Server error")}},y=()=>{m(t=>!t),f(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsxs(Y,{className:"Container",children:[e.jsx(Z,{className:"Photo"}),e.jsxs(_,{className:"section",children:[e.jsxs(ee,{className:"text-conteiner",children:[e.jsx(ie,{children:"Sign In"}),e.jsx(S,{}),e.jsx(te,{className:"text-p",children:"Welcome! Please enter your credentials to login to the platform:"})]}),e.jsx("div",{children:e.jsxs(C,{nameIsShown:!1,handleSubmit:b,toglePassword:y,passwordInput:g,isPassword:h,children:[e.jsx(F,{text:"Sign In",type:"submit"}),e.jsx(T,{text:"Don’t have an account?",textLink:"Sign Up",to:"/signup"})]})})]}),e.jsx(X,{})]})};export{de as default};
