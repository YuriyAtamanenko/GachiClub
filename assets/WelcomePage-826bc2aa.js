import{j as e,n as i,I as t,N as n}from"./index-7ede5df1.js";import{S as o,E as p}from"./Elements-6e81788a.js";import{m as d,a as r,t as a,b as s,d as x,c}from"./default-mobile-2x-adbcb5a4.js";const l=()=>e.jsx(o,{children:e.jsx(p,{})}),m=i.h1`
  color: #efede8;
  font-size: 38px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  margin-bottom: 40px;

  & > span {
    position: relative;
    display: inline-block;
    z-index: 1;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -10px;
      top: 1px;

      @media screen and (min-width: 768px) {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 8px;
      }
    }
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  @media screen and (min-width: 768px) {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
    margin-bottom: 64px;
  }
`;function g(){return e.jsxs(m,{children:["Transforming your ",e.jsxs("span",{children:["body",e.jsx("svg",{children:e.jsx("use",{href:t+"#icon-line"})})]})," shape with Power Pulse"]})}const h=i.ul`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,u=i.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,b=i.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  background-image: url(${d});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${r});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    pointer-events: none;

    background-image: url(${a});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${s});
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

    background-image: url(${x});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${c});
      }
    }
  }
`,w=i(n)`
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
`,k=i(n)`
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
`,z=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsxs(u,{children:[e.jsx(g,{}),e.jsxs(h,{children:[e.jsx("li",{children:e.jsx(w,{to:"/signup",children:"Sign Up"})}),e.jsx("li",{children:e.jsx(k,{to:"/signin",children:"Sign In"})})]})]}),e.jsx(l,{})]});export{z as default};
