import{n as e,L as t,j as i,I as n}from"./index-3573a9cb.js";import{m as o,a,t as r,b as d,d as p,c as s}from"./default-mobile-2x-adbcb5a4.js";const x=e.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-image: url(${o});

  background-repeat: no-repeat;
  background-position: bottom 0 right -30px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${a});
    background-size: contain;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    background-image: url(${r});
    background-size: contain;
    background-position: bottom 0 right 0px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${d});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    background-image: url(${p});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${s});
    }
  }
`,c=e.div`
  position: relative;
  width: calc(0.64 * 100%);
  height: 100%;
  padding: 24px 20px;

  display: flex;
  align-items: center;

  background-color: var(--bright-accent-color);

  @media screen and (min-width: 375px) {
    width: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 670px;
    padding: 32px 96px;
  }
`,h=e(t)`
  position: absolute;
  top: 24px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 32px;
    left: 32px;
  }
  @media screen and (min-width: 1440px) {
    top: 32px;
    left: 96px;
  }
`,l=e.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`,m=e.div`
  margin-top: auto;
  margin-bottom: auto;
`,g=e.h1`
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
    letter-spacing: 1.6px;
  }
`,u=e.p`
  margin-top: 14px;
  margin-bottom: 28px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 28px;

    font-size: 16px;
    line-height: 24px;
  }
`,w=e(t)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  width: 147px;
  height: 42px;
  border: 1px solid var(--secondary-text-color);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;

    width: 204px;
    height: 56px;
  }
`,k=()=>i.jsx(x,{children:i.jsxs(c,{children:[i.jsx(h,{to:"/",children:i.jsx(l,{children:i.jsx("use",{href:n+"#full-logo"})})}),i.jsxs(m,{children:[i.jsx(g,{children:"404"}),i.jsx(u,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(w,{to:"/",children:"Go Home"})]})]})});export{k as default};
