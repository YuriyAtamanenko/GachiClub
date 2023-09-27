import{u as g,a as u,b as w,j as e,L as b,r as f,Q as p}from"./index-133ef4f6.js";import{F as v,a as j,c as k,b as a,d as y,E as m}from"./index.esm-6c96a095.js";/* empty css                      */import{s as i}from"./styled-components.browser.esm-efcacfe3.js";import{m as S,a as z,t as $,b as E,d as F,c as P}from"./default-mobile-2x-adbcb5a4.js";const N=i.div`
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  padding: 127px 20px 40px;
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */

  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    width: 768px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`,T=i.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  background-image: url(${S});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${z});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    pointer-events: none;

    background-image: url(${$});
    background-size: cover;
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
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
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
        background-image: url(${P});
      }
    }
  }
`,A=i.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,D=i.div`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`,U=i.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.05px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.05px;
    color: #efede8;
  }
`,q=i.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.77px;
  color: #efede84d;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.6px;
    color: #efede84d;
  }
`,W=i(v)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`,r=i(j)`
  margin-bottom: 40px;
  width: 164px;

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    width: 364px;
    height: 196px;
    border-radius: 12px;
  }
`,Z=i.button`
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
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`,M=()=>{const x=g(),o=u(),s=w(t=>t.auth.bodyData),l=async(t,n)=>{console.log(t);try{(await x(f({name:t.name,email:t.email,password:t.password}))).error?p.error("Email already exists. Please use a different email"):(n.resetForm(),s===null||Object.keys(s).length===0?o("/params"):o("/diary"))}catch(d){console.error("Server error:",d),p.error("Server Error: Something went wrong")}},c=k({name:a().required(),email:a().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:a().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Password must contain at least 6 letters and 1 number").required("Please input your password")}),h={name:"",email:"",password:""};return e.jsxs(N,{children:[e.jsx(T,{}),e.jsxs(A,{children:[e.jsxs(D,{children:[e.jsx(U,{children:"Sign Up"}),e.jsx(q,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),e.jsx("div",{children:e.jsx(y,{initialValues:h,validationSchema:c,onSubmit:l,children:({errors:t,touched:n})=>e.jsxs(W,{autoComplete:"off",children:[e.jsxs("div",{children:[e.jsx(r,{type:"text",name:"name",placeholder:"Name"}),t.name&&n.name&&e.jsx("div",{className:"error-message",children:"Please input your name!"})]}),e.jsxs("div",{children:[e.jsx(r,{type:"email",name:"email",placeholder:"Email"}),e.jsx(m,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{children:[e.jsx(r,{type:"password",name:"password",placeholder:"Password"}),e.jsx(m,{name:"password",component:"div",className:"error-message"})]}),e.jsx(Z,{type:"submit",children:"Sign Up"}),e.jsxs("p",{children:["Already have account? ",e.jsx(b,{to:"/signin",children:"Sign In"})]})]})})})]})]})};export{M as default};
