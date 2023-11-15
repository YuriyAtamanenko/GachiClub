import{n as j,P as t,j as e,I as r,L as v}from"./index-e7ffdd1a.js";import{F as k,a as g,c as z,b as c,d as R}from"./index.esm-d10ae686.js";import{s as i}from"./styled-components.browser.esm-28445472.js";import{d as S,a as q}from"./default-desktop-2x-90147dc9.js";import{m as C,a as F,t as P,b as $}from"./default-mobile-2x-a3b76961.js";const T=j.button`
  position: absolute;
  top: 50%;
  /* right: ${({right:n})=>n||"0"}; */
  right: 38px;
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

  @media screen and (min-width: 768px) {
    right: 9px;
  }
`;function u({children:n,onClick:o,right:d,type:p}){return e.jsx(T,{onClick:o,right:d,type:p,children:n})}u.propTypes={onClick:t.func.isRequired,right:t.string,type:t.string,children:t.object.isRequired};const A=i.div`
  position: relative;
  width: 100%;
`,W=i(k)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`,L=i.div`
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
`,B=i(g)`
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
`,E=({nameIsShown:n,handleSubmit:o,toglePassword:d,passwordInput:p,isPassword:f,children:b})=>{const w=n?{name:"",email:"",password:""}:{email:"",password:""},y=z().shape({name:n?c().required("Please input your name"):null,email:c().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:c().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")});return e.jsx(R,{initialValues:w,validationSchema:y,onSubmit:o,children:({handleBlur:l,touched:s,errors:a})=>e.jsxs(W,{autoComplete:"off",children:[e.jsxs(L,{children:[n&&e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{type:"text",name:"name",placeholder:"Name",onBlur:l})}),s.name&&a.name?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-error"})}),a.name]}):s.name?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-success"})}),"Success name"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(m,{type:"email",name:"email",placeholder:"Email",onBlur:l})}),s.email&&a.email?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-error"})}),a.email]}):s.email?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-success"})}),"Success email"]}):null]}),e.jsxs("div",{children:[e.jsxs(A,{children:[e.jsx(B,{id:"password",type:p,placeholder:"Password",name:"password",onBlur:l}),e.jsx(u,{type:"button",onClick:d,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:r+`${f?"#icon-eye-off":"#icon-eye"}`})})})]}),s.password&&a.password?e.jsxs(x,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-error"})}),a.password]}):s.password?e.jsxs(h,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:r+"#icon-checkbox-success"})}),"Success password"]}):null]})]}),b]})})};E.propTypes={handleSubmit:t.func.isRequired,toglePassword:t.func.isRequired,passwordInput:t.string.isRequired,isPassword:t.bool.isRequired,nameIsShown:t.bool.isRequired,children:t.node};const I=i.button`
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
`,Z=({text:n,type:o})=>e.jsx(I,{type:o,children:n});Z.propTypes={text:t.string.isRequired,type:t.string.isRequired};const M=i(v)`
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
`,D=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,N=({text:n,textLink:o,to:d})=>e.jsxs(D,{children:[n,e.jsx(M,{to:d,children:o})]});N.propTypes={text:t.string.isRequired,textLink:t.string.isRequired,to:t.string.isRequired};const J=i.div`
  height: 812px;
  width: 375px;
  &::-webkit-scrollbar {
    display: none;
  }

  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    min-width: 768px; /* Адаптивная ширина */
    min-height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    min-height: 800px;
    width: 100%;
    /* Занимать всю доступную ширину */
  }
`,K=i.div`
  position: absolute;
  right: -50px;
  top: 29%;
  width: 375px;
  height: 626px;

  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(
      168.14deg,
      #040404 14.75%,

      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${C});

  background-size: 670px 800px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: linear-gradient(
          168.14deg,
          #040404 14.75%,
          rgba(4, 4, 4, 0) 52.97%
        ),
        linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${F});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    height: 1005px;
    width: 670px;
    left: 13%;
    top: 105px;

    background-position: 100% 100%;
    pointer-events: none;

    background-image: url(${P});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${$});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    margin-top: 0;
    top: -108px;
    right: 0;
    left: 675px;
    width: 670px;
    height: 1005px;

    background-size: 670px 800px;

    background-image: url(${S});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${q});
      }
    }
  }
`,O=i.div`
  padding-top: 90px;
  @media screen and (min-width: 768px) {
    /* padding-top: 140px; */
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`;i.div`
  position: relative;
  width: 100%;
`;i.div`
  position: relative;
`;const Q=i.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,U=i.h2`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: 0.05px;
  /* color: #efede8; */
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;

    line-height: 137.5%;
    letter-spacing: 0.05px;
  }
`,X=i.p`
  margin-bottom: 28px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: 0.77px;
  /* color: #efede84d; */
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.6px;
  }
`,ee=i.div`
  position: absolute;
  left: 37%;
  top: 70%;
  @media screen and (min-width: 768px) {
    left: 40%;
    top: 70%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 50%;
  }
`;export{Z as A,J as C,E as F,ee as S,U as T,K as W,O as a,Q as b,X as c,N as d};
