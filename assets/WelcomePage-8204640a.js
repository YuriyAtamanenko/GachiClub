import{n as e,j as i,I as t,N as n}from"./index-3a4ad489.js";import{S as o}from"./Statistics-aacf5a9a.js";import{m as r,a as p,t as a,b as d,d as s,c as x}from"./default-mobile-2x-adbcb5a4.js";const c=e.h1`
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
`;function l(){return i.jsxs(c,{children:["Transforming your ",i.jsxs("span",{children:["body",i.jsx("svg",{children:i.jsx("use",{href:t+"#icon-line"})})]})," shape with Power Pulse"]})}const m=e.ul`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,g=e.div`
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 150px;
  }
`,h=e.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  background-image: url(${r});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${p});
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
        background-image: url(${d});
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

    background-image: url(${s});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${x});
      }
    }
  }
`,u=e(n)`
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
`,b=e(n)`
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
`,f=()=>i.jsxs(i.Fragment,{children:[i.jsx(h,{}),i.jsxs(g,{children:[i.jsx(l,{}),i.jsxs(m,{children:[i.jsx("li",{children:i.jsx(u,{to:"/signup",children:"Sign Up"})}),i.jsx("li",{children:i.jsx(b,{to:"/signin",children:"Sign In"})})]})]}),i.jsx(o,{})]});export{f as default};
