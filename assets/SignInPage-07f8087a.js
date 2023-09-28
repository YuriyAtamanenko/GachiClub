import{L as f,u as h,a as u,b,c as y,j as e,k as w,d as k,l as v,Q as o}from"./index-1755ba82.js";import{d as j,F as z,a as S,E as R,c as E,b as a}from"./index.esm-f3f99c59.js";/* empty css                      */import{s as i}from"./styled-components.browser.esm-3fdf310e.js";import{m as F,a as $,t as I,b as D,d as L,c as P}from"./default-mobile-2x-adbcb5a4.js";const M=i.div`
  position: absolute;
  top: 241px;
  right: -148px;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${F});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${$});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 131px;
    right: -233px;
    width: 768px;
    height: 1024px;
    pointer-events: none;

    background-image: url(${I});
    background-size: cover;
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
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${L});
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
`,N=i.div`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,U=i.h2`
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
`,W=i.p`
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
`,q=i(j)``,A=i(z)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`,r=i(S)`
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
`,s=i(R)`
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
`,B=i.button`
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
`,T=i.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,Z=i(f)`
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
`,H=()=>{const l=h(),p=u(),d=b(t=>t.auth.bodyData);y.useEffect(()=>{Object.keys(d).length>1&&p("/params")});const m=async(t,g)=>{try{await k(t.email,t.password)!==null?(await l(v({email:t.email,password:t.password}))).error?o.error("Invalid email or password"):g.resetForm():o.error("Invalid data")}catch(n){n.message==="Server error"&&o.error("Server error")}},c=E({email:a().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Invalid E-mail format").required("Please input your E-mail!"),password:a().min(6).max(16).required()}),x={name:"",email:"",password:""};return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsxs(N,{children:[e.jsx(U,{children:"Sign In"}),e.jsx(w,{}),e.jsx(W,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(q,{initialValues:x,validationSchema:c,onSubmit:m,children:e.jsxs(A,{autoComplete:"on",children:[e.jsxs("div",{children:[e.jsx(r,{type:"email",name:"email",placeholder:"Email"}),e.jsx(s,{name:"email",component:"div",className:"error-message"})]}),e.jsxs("div",{children:[e.jsx(r,{type:"password",name:"password",placeholder:"Password"}),e.jsx(s,{name:"password",component:"div",className:"error-message"})]}),e.jsx(B,{type:"submit",children:"Sign In"})]})}),e.jsxs(T,{children:["Don’t have an account? ",e.jsx(Z,{to:"/signup",children:"Sign Up"})]})]})]})};export{H as default};
