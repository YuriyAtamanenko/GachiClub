import{n as i,j as e,I as t,N as n}from"./index-473c76e9.js";import{m as o,a as p,t as d,b as r,d as a,c as s}from"./default-mobile-2x-adbcb5a4.js";const x=i.h1`
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
`;function l(){return e.jsxs(x,{children:["Transforming your ",e.jsxs("span",{children:["body",e.jsx("svg",{children:e.jsx("use",{href:t+"#icon-line"})})]})," shape with Power Pulse"]})}const c=i.ul`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,m=i.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,g=i.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  background-image: url(${o});
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
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${a});
    background-size: 670px 800px;
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
`,h=i(n)`
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
`,u=i(n)`
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
`,k=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsxs(m,{children:[e.jsx(l,{}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(h,{to:"/signup",children:"Sign Up"})}),e.jsx("li",{children:e.jsx(u,{to:"/signin",children:"Sign In"})})]})]})]});export{k as default};
