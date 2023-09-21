import{n,N as i,j as e}from"./index-9ef46efc.js";import{d}from"./default-desktop-1x-87763489.js";const t=n.div`
  display: flex;
  height: 100vh;
`,o=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 127px 20px 483px 0;
  color: white;
  @media screen and (min-width: 768px) {
    padding: 189px 138px 481px 0;
  }

  @media screen and (min-width: 1440px) {
    background-color: #040404;
    padding: 200px 76px 246px 0;
  }
`,r=n.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    width: 100%;
    ${""}
    ${""}
    background:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${d}),
      lightgray 50% / cover no-repeat;
    ${""}
  }
`,a=n.h1`
  color: #efede8;
  font-size: 38px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    max-width: 598px;
    font-size: 70px;
    font-weight: 500;
    line-height: 78px;
    letter-spacing: 0.7px;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
  }
`,p=n.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`,s=n(i)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  background: #e6533c;
  padding: 12px 40px;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
  }
`,x=n(i)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 40px;
  transition: all 0.4s;
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  &:hover,
  &:focus {
    border: 1px solid #e6533c;
  }
`,g=()=>e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(a,{children:"Transforming your body shape with Power Pulse"}),e.jsxs(p,{children:[e.jsx(s,{to:"/signup",children:"Sign Up"}),e.jsx(x,{to:"/signin",children:"Sign In"})]})]}),e.jsx(r,{})]});export{g as default};
