import{L as f,u as h,a as u,j as e,k as b,c as y,l as w,Q as n}from"./index-dac1a9f8.js";import{d as k,F as v,a as j,E as z,c as S,b as s}from"./index.esm-b54ec3ac.js";/* empty css                      */import{s as i}from"./styled-components.browser.esm-55734257.js";import{m as R,a as F,t as $,b as E,d as I,c as D}from"./default-mobile-2x-adbcb5a4.js";const L=i.div`
  position: absolute;
  top: 241px;
  right: -148px;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${R});
  background-size: cover;
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
    top: 131px;
    right: -233px;
    width: 768px;
    height: 1024px;
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

    background-image: url(${I});
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
`,P=i.div`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,M=i.h2`
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
`,N=i.p`
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
`,U=i(k)``,W=i(v)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`,l=i(j)`
  display: flex;
  align-items: center;
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

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 364px;

    font-size: 16px;
    line-height: 150%;
  }
`,p=i(z)`
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
`,q=i.button`
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
`,A=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,B=i(f)`
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
`,V=()=>{const d=h(),a=u(),m=async(o,g)=>{console.log(o);try{if(await y(o.email,o.password)!==null){const t=await d(w({email:o.email,password:o.password}));t.error?n.error("Invalid email or password"):(g.resetForm(),t.payload.bodyData!==null&&Object.keys(t.payload.bodyData).length!==0?a("/diary"):a("/params"))}else n.error("Invalid data")}catch(r){r.message==="Server error"&&n.error("Server error")}},c=S({email:s().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:s().min(6).max(16).required()}),x={name:"",email:"",password:""};return e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsxs(P,{children:[e.jsx(M,{children:"Sign In"}),e.jsx(b,{}),e.jsx(N,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(U,{initialValues:x,validationSchema:c,onSubmit:m,children:e.jsxs(W,{autoComplete:"on",children:[e.jsxs("div",{children:[e.jsx(l,{type:"email",name:"email",placeholder:"Email"}),e.jsx(p,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{children:[e.jsx(l,{type:"password",name:"password",placeholder:"Password"}),e.jsx(p,{name:"password",component:"div",className:"error-message"})]}),e.jsx(q,{type:"submit",children:"Sign In"})]})}),e.jsxs(A,{children:["Don’t have an account? ",e.jsx(B,{to:"/signup",children:"Sign Up"})]})]})]})};export{V as default};
