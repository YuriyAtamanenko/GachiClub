import{j as e,n as t}from"./index-100a9acb.js";import{s as n}from"./styled-components.browser.esm-1bc1a892.js";const s=n.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,x=n.h2`
  @media screen and (min-width: 375px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 116.667%;

    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137.5%;
  }
`,c=n.ul`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: flex-end;
  }
`,h=n.input`
  box-sizing: border-box;
  width: 335px;
  height: 46px;
  padding: 14px;
  padding-right: 68px;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
`,l=()=>e.jsxs(c,{children:[e.jsx("li",{children:e.jsx("label",{children:e.jsx(h,{name:"productSearch",type:"text",placeholder:"Search"})})}),e.jsx("li",{}),e.jsx("li",{})]}),m=t.ul`
  display: flex;

  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-content: flex-start;
    height: 487px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`,g=t.ul`
  border: 1px solid white;
  width: 100%;
  height: 141px;
  padding: 10px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 141px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 141px;
  }
`,w=t.div`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 104px;
  }
`,i=t.p`
  color: var(--secondary-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
  }
`,d=t.span`
  color: var(--bright-accent-color);
`,o=[],f=()=>e.jsx(m,{children:o.length>0?o.map(({_id:r,title:a,category:p})=>e.jsxs(g,{children:[a,e.jsx("br",{}),p]},r.$oid)):e.jsxs(w,{children:[e.jsxs(i,{children:[e.jsx(d,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(i,{children:e.jsx(d,{children:"Try changing the search parameters."})})]})}),y=()=>e.jsx(s,{children:e.jsxs(e.Fragment,{children:[e.jsx(x,{children:"Products"}),e.jsx(l,{}),e.jsx(f,{})]})});export{y as default};
