import{c as g,j as e,I as n,L as w}from"./index-7a5a72aa.js";import{s as i}from"./styled-components.browser.esm-da15cfa4.js";import{e as u}from"./index-6bca2745.js";import"./createClass-11c5da99.js";const b=i.div`
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
`,y=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,j=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`,k=i.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;const v=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    margin-bottom: 32px;
  }
`,B=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px 20px;
  }
`,R=i(u)`
  @media screen and (min-width: 375px) {
    width: 100px;

    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 111.111%;

    background-color: transparent;
    border: none;
    color: var(--primary-text-color);

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    width: 131px;

    font-size: 24px;
    line-height: 133.333%;
  }
`,z=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,C=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 6px;
  }
`,$=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`,E=i.h2`
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
`,D=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,P=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,T=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,N=()=>{const[o,a]=g.useState(new Date),h=()=>{const r=new Date(o);r.setDate(o.getDate()-1),a(r)},m=()=>{const r=new Date(o);r.setDate(o.getDate()+1),a(r)};return e.jsxs(v,{children:[e.jsxs(B,{children:[e.jsx(R,{selected:o,onChange:r=>a(r),dateFormat:"dd/MM/yyyy"}),e.jsx(D,{children:e.jsx("use",{xlinkHref:`${n}#icon-calendar`})}),e.jsxs(z,{children:[e.jsx(C,{onClick:h,children:e.jsx(P,{children:e.jsx("use",{xlinkHref:`${n}#icon-left`})})}),e.jsx($,{onClick:m,children:e.jsx(T,{children:e.jsx("use",{xlinkHref:`${n}#icon-right`})})})]})]}),e.jsx(E,{children:"Diary"})]})},S=i.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    min-height: 335px;
    max-height: 824px;

    overflow-y: auto;

    padding: 13px;
    align-items: flex-start;

    margin-bottom: 40px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    padding: 16px;
  }
`,H=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    gap: 145px;
    margin-bottom: 48px;

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 503px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 624px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 615px;
    }
  }
`,I=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,L=i(w).attrs({className:"add-product-link"})`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 101px;
    padding: 0;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.571%;
    color: var(--bright-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 112px;

    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
`,F=i.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`,V=i.p`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-prod-0 {
      left: 13px;
    }
    &.title-prod-1 {
      left: 225px;
    }
    &.title-prod-2 {
      left: 361px;
    }
    &.title-prod-3 {
      left: 459px;
    }
    &.title-prod-4 {
      left: 557px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-prod-0 {
      left: 32px;
    }
    &.title-prod-1 {
      left: 252px;
    }
    &.title-prod-2 {
      left: 426px;
    }
    &.title-prod-3 {
      left: 539px;
    }
    &.title-prod-4 {
      left: 652px;
    }
  }
`,A=i.p`
  @media screen and (min-width: 375px) {
    position: absolute;
    top: 159px;
    left: 107px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    top: 105px;
    left: 282px;
  }

  @media screen and (min-width: 1440px) {
    top: 105px;
    left: 344px;

    font-size: 16px;
    line-height: 150%;
  }
`,W=i.div`
  @media screen and (min-width: 1440px) {
  }
`,M=i.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    justify-content: center;
    margin-left: 16px;
  }
`,q=i.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    &.label-prod-0,
    &.label-prod-1,
    &.label-prod-2,
    &.label-prod-3,
    &.label-prod-4 {
      display: none;
    }
  }
`,_=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    height: 38px;
    padding: 10px 14px;

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid var(--secondary-text-color);

    &:focus {
      outline: none;
    }

    &.input-prod-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-2 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-prod-3 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-prod-4 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-prod-0 {
      width: 204px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-1 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-2 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-3 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-4 {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.input-prod-0 {
      width: 212px;
    }

    &.input-prod-1 {
      width: 166px;
    }

    &.input-prod-2 {
      width: 105px;
    }

    &.input-prod-3 {
      width: 105px;
    }

    &.input-prod-4 {
      width: 110px;
    }
  }
`,G=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: var(--primary-text-color);
`,J=i.button`
  @media screen and (min-width: 375px) {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    right: -35px;
    bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    right: -42px;
  }
`,K=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,O=()=>{const[o,a]=g.useState([]),[h,m]=g.useState(!1),r=d=>{const t=[...o];t.splice(d,1),a(t),t.length===0&&m(!1)};return e.jsx(e.Fragment,{children:e.jsxs(S,{children:[e.jsxs(H,{children:[e.jsx(I,{children:"Products"}),e.jsxs(L,{to:"/products",className:"add-product-link",children:["Add product",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${n}#icon-next`})})]})]}),h&&e.jsx(F,{children:["Title","Category","Calories","Weight","Recommend"].map((d,t)=>e.jsx(V,{className:`title-prod-${t}`,children:d},t))}),o.length===0?e.jsx(A,{children:"Not found products"}):o.map((d,t)=>e.jsx(W,{children:e.jsxs(M,{children:[d.inputs.map((f,s)=>e.jsxs("div",{children:[e.jsx(q,{className:`label-prod-${s}`,children:f}),e.jsx(_,{className:`input-prod-${s}`,children:e.jsx(G,{})})]},s)),e.jsx(J,{onClick:()=>r(t),children:e.jsx(K,{children:e.jsx("use",{xlinkHref:`${n}#icon-trash`})})})]})},d.id))]})})},Q=i.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    overflow-y: auto;

    min-height: 335px;
    max-height: 824px;

    padding: 13px;
    align-items: flex-start;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    padding: 16px;
  }
`,U=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    gap: 145px;
    margin-bottom: 48px;

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 503px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 624px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 615px;
    }
  }
`,X=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,Y=i(w).attrs({className:"add-exercises-link"})`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 105px;
    padding: 0;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.571%;
    color: var(--bright-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 117px;

    font-size: 16px;
    line-height: 150%;
  }
`,Z=i.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`,ee=i.p`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-exe-0 {
      left: 13px;
    }
    &.title-exe-1 {
      left: 111px;
    }
    &.title-exe-2 {
      left: 251px;
    }
    &.title-exe-3 {
      left: 388px;
    }
    &.title-exe-4 {
      width: 78px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      left: 479px;
    }
    &.title-exe-5 {
      left: 565px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-exe-0 {
      left: 32px;
    }
    &.title-exe-1 {
      left: 155px;
    }
    &.title-exe-2 {
      left: 320px;
    }
    &.title-exe-3 {
      left: 459px;
    }
    &.title-exe-4 {
      width: 85px;
      left: 573px;
    }
    &.title-exe-5 {
      left: 672px;
    }
  }
`,ie=i.p`
  @media screen and (min-width: 375px) {
    position: absolute;
    top: 159px;
    left: 107px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    top: 105px;
    left: 282px;
  }

  @media screen and (min-width: 1440px) {
    top: 105px;
    left: 342px;

    font-size: 16px;
    line-height: 150%;
  }
`,te=i.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`,ne=i.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,oe=i.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.label-exe-4 {
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 768px) {
    &.label-exe-0,
    &.label-exe-1,
    &.label-exe-2,
    &.label-exe-3,
    &.label-exe-4,
    &.label-exe-5 {
      display: none;
    }
  }
`,de=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    padding: 10px 14px;
    height: 38px;

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid var(--secondary-text-color);

    &:focus {
      outline: none;
    }

    &.input-exe-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-2 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-3 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-exe-4 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-exe-5 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-exe-0 {
      width: 90px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-1 {
      width: 132px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-2 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-3 {
      width: 84px;
      margin-right: 8px;
    }

    &.input-exe-4 {
      width: 78px;
      margin-right: 8px;
    }

    &.input-exe-5 {
      width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.input-exe-0 {
      width: 115px;
    }

    &.input-exe-1 {
      width: 157px;
    }

    &.input-exe-2 {
      width: 131px;
    }

    &.input-exe-3 {
      width: 106px;
    }

    &.input-exe-4 {
      width: 91px;
    }

    &.input-exe-5 {
      width: 82px;
    }
  }
`;i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: var(--primary-text-color);
`;const re=i.button`
  @media screen and (min-width: 375px) {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    right: -35px;
    bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    right: -45px;
  }
`,ae=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,se=()=>{const[o,a]=g.useState([]),[h,m]=g.useState(!1),r=d=>{const t=[...o];t.splice(d,1),a(t),t.length===0&&m(!1)};return e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsxs(U,{className:"block-ex",children:[e.jsx(X,{children:"Exercises"}),e.jsxs(Y,{to:"/exercises",className:"add-exercises-link",children:["Add exercise",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${n}#icon-next`})})]})]}),h&&e.jsx(Z,{children:["Body Part","Equipment","Name","Target","Burned Calories","Time"].map((d,t)=>e.jsx(ee,{className:`title-exe-${t}`,children:d},t))}),o.length===0?e.jsx(ie,{children:"Not found exercises"}):o.map((d,t)=>e.jsx(te,{children:e.jsxs(ne,{children:[d.inputs.map((f,s)=>e.jsxs("div",{children:[e.jsx(oe,{className:`label-exe-${s}`,children:f}),e.jsx(de,{className:`input-exe-${s}`,children:e.jsx(InputText,{})})]},s)),e.jsx(re,{onClick:()=>r(t),children:e.jsx(ae,{children:e.jsx("use",{xlinkHref:`${n}#icon-trash`})})})]})},d.id))]})})},xe=i.ul`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 340px;
    gap: 20px 13px;
    align-content: flex-start;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 248px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    height: 380px;
  }
`,x=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 157px;
    height: 96px;
    padding: 12px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background-color: rgba(239, 237, 232, 0.05);

    &:nth-of-type(even) {
      width: 165px;
    }

    &:nth-child(5) {
      height: 108px;
    }

    &:nth-child(6) {
      height: 108px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;

    &:nth-of-type(even) {
      width: 187px;
    }

    &:nth-child(5) {
      height: 116px;
    }

    &:nth-child(6) {
      height: 116px;
    }
  }
`,p=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;

    &.last-item {
      gap: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    &.last-item {
      gap: 28px;
    }
  }
`,l=i.p`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;

    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;

    color: rgba(239, 237, 232, 0.4);

    &.last-text {
      line-height: 150%;
    }
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
  }
`,c=i.p`
  @media screen and (min-width: 375px) {
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 111.111%;

    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`,pe=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`,le=i.p`
  @media screen and (min-width: 375px) {
    width: 303px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 561px;

    font-size: 16px;
    line-height: 150%;
  }

  @media screen and (min-width: 1440px) {
    width: 358px;
  }
`,ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs(xe,{children:[e.jsx(x,{children:e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-food`})}),"Daily calorie intake"]}),e.jsx(c,{children:"2200"})]})}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-dumbbell`})}),"Daily norm of sports"]}),e.jsx(c,{children:"110 min"})]})}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-apple`})}),"Сalories consumed"]}),e.jsx(c,{children:"0"})]})}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-calories`})}),"Сalories burned"]}),e.jsx(c,{children:"0"})]})}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"6"},children:e.jsx("use",{xlinkHref:`${n}#icon-bubble`})}),"The rest of the calories"]}),e.jsx(c,{children:"2200"})]})}),e.jsx(x,{children:e.jsxs(p,{className:"last-item",children:[e.jsxs(l,{className:"last-text",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-running`})}),"The rest of sports"]}),e.jsx(c,{children:"110 min"})]})})]}),e.jsxs(pe,{children:[e.jsx("svg",{style:{width:"24",height:"24",marginRight:"8",borderRadius:"50%",stroke:"white",backgroundColor:"#EFA082"},children:e.jsx("use",{xlinkHref:`${n}#tabler_exclamation-mark`})}),e.jsx(le,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),we=()=>e.jsxs(b,{children:[e.jsx(N,{}),e.jsxs(y,{children:[e.jsxs(j,{children:[e.jsx(O,{}),e.jsx(se,{})]}),e.jsx(k,{children:e.jsx(ce,{})})]})]});export{we as default};
