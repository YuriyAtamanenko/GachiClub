import{j as e,n as t}from"./index-5be8b0bc.js";import{s as i}from"./styled-components.browser.esm-a65311e6.js";const l=i.div`
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
`,r=i.h2`
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
`,s=i.ul`
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
`,n=i.input`
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
`,f=()=>e.jsxs(s,{children:[e.jsx("li",{children:e.jsx("label",{children:e.jsx(n,{name:"productSearch",type:"text",placeholder:"Search"})})}),e.jsx("li",{}),e.jsx("li",{})]}),p=t.ul`
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
`,c=t.ul`
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
`,x=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!1,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5f16"},weight:100,calories:38,category:"soft drinks",title:"Pepsi",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694802b2373622ff56c1"},weight:100,calories:432,category:"flour",title:"Cedar flour",groupBloodNotAllowed:{1:!0,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b65"},weight:100,calories:112,category:"fish",title:"langoustine",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5726"},weight:100,calories:282,category:"dairy",title:"Cheese Artis for pan frying and grilling 45%",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5d34"},weight:100,calories:298,category:"vegetables and herbs",title:"dried potatoes",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],g=()=>e.jsx(p,{children:x.map(({_id:o,title:a,category:d})=>e.jsxs(c,{children:[a,e.jsx("br",{}),d]},o.$oid))}),w=()=>e.jsx(l,{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Products"}),e.jsx(f,{}),e.jsx(g,{})]})});export{w as default};
