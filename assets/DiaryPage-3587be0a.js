import{r as y,u,g as N,j as e,I as n,L as v,b as k,f as T,h as B}from"./index-f270b9cd.js";import{s as i}from"./styled-components.browser.esm-00729eb2.js";import{e as D}from"./index-245be38d.js";import"./createClass-f9b61337.js";const E=i.div`
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
`,z=i.div`
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
`,$=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`,P=i.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;const S=i.div`
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
`,H=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px 20px;
  }
`,L=i(D)`
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
`,I=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,F=i.button`
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
`,W=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`,A=i.h2`
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
`,M=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,q=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,Y=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,G=()=>{const[o,a]=y.useState(new Date),d=u(),s=t=>`${String(t.getDate()).padStart(2,"0")}-${String(t.getMonth()+1).padStart(2,"0")}-${t.getFullYear()}`;y.useEffect(()=>{d(N(s(o)))});const r=()=>{const t=new Date(o);t.setDate(o.getDate()-1),a(t)},f=()=>{const t=new Date(o);t.setDate(o.getDate()+1),a(t)};return e.jsxs(S,{children:[e.jsxs(H,{children:[e.jsx(L,{selected:o,onChange:t=>a(t),dateFormat:"dd/MM/yyyy"}),e.jsx(M,{children:e.jsx("use",{xlinkHref:`${n}#icon-calendar`})}),e.jsxs(I,{children:[e.jsx(F,{onClick:r,children:e.jsx(q,{children:e.jsx("use",{xlinkHref:`${n}#icon-left`})})}),e.jsx(W,{onClick:f,children:e.jsx(Y,{children:e.jsx("use",{xlinkHref:`${n}#icon-right`})})})]})]}),e.jsx(A,{children:"Diary"})]})},J=i.div`
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
`,K=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    gap: 142px;

    /* &.block-ex {
      gap: 131px;
    } */
  }

  @media screen and (min-width: 768px) {
    gap: 500px;

    /* &.block-ex {
      gap: 495px;
    } */
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 616px;
    /* 
    &.block-ex {
      gap: 615px;
    } */
  }
`,O=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,Q=i(v).attrs({className:"add-product-link"})`
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
`,U=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,V=i.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`,X=i.p`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-prod-0 {
      top: 56px;
      left: 16px;
    }
    &.title-prod-1 {
      top: 56px;
      left: 228px;
    }
    &.title-prod-2 {
      top: 56px;
      left: 364px;
    }
    &.title-prod-3 {
      top: 56px;
      left: 462px;
    }
    &.title-prod-4 {
      top: 56px;
      left: 560px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-prod-0 {
      top: 56px;
      left: 32px;
    }
    &.title-prod-1 {
      top: 56px;
      left: 252px;
    }
    &.title-prod-2 {
      top: 56px;
      left: 426px;
    }
    &.title-prod-3 {
      top: 56px;
      left: 539px;
    }
    &.title-prod-4 {
      top: 56px;
      left: 652px;
    }
  }
`,Z=i.p`
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
`,_=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
  }
`,ee=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,ie=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 42px;
  }
`,te=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,w=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);

    &.title {
      width: 297px;
      margin-bottom: 42px;
    }
    &.category {
      width: 297px;
      margin-bottom: 42px;
    }
    &.calories {
      width: 81px;
      margin-right: 16px;
    }
    &.amount {
      width: 80px;
      margin-right: 16px;
    }
    &.recommend {
      width: 76px;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    &.title {
      width: 204px;
      padding: 8px 42px 8px 14px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.category {
      width: 128px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.calories {
      width: 90px;
      margin-right: 8px;
    }
    &.amount {
      width: 90px;
      margin-right: 8px;
    }
    &.recommend {
      width: 80px;
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.title {
      padding: 8px 50px 8px 14px;
      width: 212px;
    }
    &.category {
      width: 166px;
    }
    &.calories {
      width: 105px;
    }
    &.amount {
      width: 105px;
    }
    &.recommend {
      width: 110px;
    }
  }
`,b=i.p`
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,j=i.label`
  @media screen and (min-width: 375px) {
    position: absolute;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.labTitle {
      top: 56px;
      left: 16px;
    }
    &.labCategory {
      top: 136px;
      left: 16px;
    }
    &.labCalories {
      top: 216px;
      left: 16px;
    }
    &.labWeight {
      top: 216px;
      left: 113px;
    }
    &.labRecommend {
      top: 216px;
      left: 209px;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`,ne=()=>{const o=u(),a=k(d=>d.diary.products);return console.log(a),e.jsx(e.Fragment,{children:e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(O,{children:"Products"}),e.jsxs(Q,{to:"/products",className:"add-product-link",children:["Add product",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${n}#icon-next`})})]})]}),a.length===0?e.jsx(Z,{children:"Not found products"}):e.jsxs(U,{children:[e.jsx(V,{children:["Title","Category","Calories","Weight","Recommend"].map((d,s)=>e.jsx(X,{className:`title-prod-${s}`,children:d},s))}),e.jsx("div",{children:e.jsx(ie,{children:a.map(({amount:d,calories:s,_id:r,productId:{category:f,title:t}})=>e.jsxs(te,{children:[e.jsxs(w,{className:"title",children:[e.jsx(j,{className:"labTitle",children:"Title"}),e.jsx(b,{children:t})]}),e.jsxs(w,{className:"category",children:[e.jsx(j,{className:"labCategory",children:"Category"}),e.jsx(b,{children:f})]}),e.jsxs(w,{className:"calories",children:[e.jsx(j,{className:"labCalories",children:"Calories"}),e.jsx(b,{children:s})]}),e.jsxs(w,{className:"amount",children:[e.jsx(j,{className:"labWeight",children:"Weight"}),e.jsx(b,{children:d})]}),e.jsxs(w,{className:"recommend",children:[e.jsx(j,{className:"labRecommend",children:"Recommend"}),e.jsx(b,{children:"REC"})]}),e.jsx(_,{onClick:()=>o(T({date:"29-09-2023",productToRemove:r})),children:e.jsx(ee,{children:e.jsx("use",{xlinkHref:`${n}#icon-trash`})})})]},r))})})]})]})})},de=i.div`
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
`,ae=i.div`
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
`,se=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,oe=i(v).attrs({className:"add-exercises-link"})`
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
`,re=i.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`,xe=i.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`,le=i.p`
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
`,pe=i.p`
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
`,ce=i.button`
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
`,he=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,me=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 42px;
  }
`,ge=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,x=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);

    &.title {
      width: 297px;
      margin-bottom: 42px;
    }
    &.category {
      width: 297px;
      margin-bottom: 42px;
    }
    &.calories {
      width: 81px;
      margin-right: 16px;
    }
    &.amount {
      width: 80px;
      margin-right: 16px;
    }
    &.recommend {
      width: 76px;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    &.title {
      width: 204px;
      padding: 8px 42px 8px 14px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.category {
      width: 128px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.calories {
      width: 90px;
      margin-right: 8px;
    }
    &.amount {
      width: 90px;
      margin-right: 8px;
    }
    &.recommend {
      width: 80px;
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.title {
      padding: 8px 50px 8px 14px;
      width: 212px;
    }
    &.category {
      width: 166px;
    }
    &.calories {
      width: 105px;
    }
    &.amount {
      width: 105px;
    }
    &.recommend {
      width: 110px;
    }
  }
`,l=i.label`
  @media screen and (min-width: 375px) {
    position: absolute;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.labTitle {
      top: 56px;
      left: 16px;
    }
    &.labCategory {
      top: 136px;
      left: 16px;
    }
    &.labCalories {
      top: 216px;
      left: 16px;
    }
    &.labWeight {
      top: 216px;
      left: 113px;
    }
    &.labRecommend {
      top: 216px;
      left: 209px;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`,p=i.p`
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,fe=()=>{const o=u(),a=k(d=>d.diary.exercises);return console.log(a),e.jsx(e.Fragment,{children:e.jsxs(de,{children:[e.jsxs(ae,{className:"block-ex",children:[e.jsx(se,{children:"Exercises"}),e.jsxs(oe,{to:"/exercises",className:"add-exercises-link",children:["Add exercise",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${n}#icon-next`})})]})]}),a.length===0?e.jsx(pe,{children:"Not found products"}):e.jsxs(re,{children:[e.jsx(xe,{children:["Body Part","Equipment","Name","Target","Burned Calories","Time"].map((d,s)=>e.jsx(le,{className:`title-exe-${s}`,children:d},s))}),e.jsx("div",{children:e.jsx(me,{children:a.map(({duration:d,calories:s,_id:r,exerciseId:{bodyPart:f,equipment:t,name:C,target:R}})=>e.jsxs(ge,{children:[e.jsxs(x,{className:"title",children:[e.jsx(l,{className:"labTitle",children:"Body part"}),e.jsx(p,{children:f})]}),e.jsxs(x,{className:"category",children:[e.jsx(l,{className:"labCategory",children:"Equipment"}),e.jsx(p,{children:t})]}),e.jsxs(x,{className:"calories",children:[e.jsx(l,{className:"labCalories",children:"Name"}),e.jsx(p,{children:C})]}),e.jsxs(x,{className:"amount",children:[e.jsx(l,{className:"labWeight",children:"Target"}),e.jsx(p,{children:R})]}),e.jsxs(x,{className:"recommend",children:[e.jsx(l,{className:"labRecommend",children:"Burned Calories"}),e.jsx(p,{children:s})]}),e.jsxs(x,{className:"recommend",children:[e.jsx(l,{className:"labRecommend",children:"Time"}),e.jsx(p,{children:d})]}),e.jsx(ce,{children:e.jsx(he,{onClick:()=>o(B({date:"29-09-2023",exerciseToRemove:r})),children:e.jsx("use",{xlinkHref:`${n}#icon-trash`})})})]},r))})})]})]})})},we=i.ul`
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
`,c=i.li`
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
`,h=i.div`
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
`,m=i.p`
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
`,g=i.p`
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
`,be=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`,je=i.p`
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
`,ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[e.jsx(c,{children:e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-food`})}),"Daily calorie intake"]}),e.jsx(g,{children:"2200"})]})}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-dumbbell`})}),"Daily norm of sports"]}),e.jsx(g,{children:"110 min"})]})}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-apple`})}),"Сalories consumed"]}),e.jsx(g,{children:"0"})]})}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-calories`})}),"Сalories burned"]}),e.jsx(g,{children:"0"})]})}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"6"},children:e.jsx("use",{xlinkHref:`${n}#icon-bubble`})}),"The rest of the calories"]}),e.jsx(g,{children:"2200"})]})}),e.jsx(c,{children:e.jsxs(h,{className:"last-item",children:[e.jsxs(m,{className:"last-text",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${n}#icon-running`})}),"The rest of sports"]}),e.jsx(g,{children:"110 min"})]})})]}),e.jsxs(be,{children:[e.jsx("svg",{style:{width:"24",height:"24",marginRight:"8",borderRadius:"50%",stroke:"white",backgroundColor:"#EFA082"},children:e.jsx("use",{xlinkHref:`${n}#tabler_exclamation-mark`})}),e.jsx(je,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),Re=()=>e.jsxs(E,{children:[e.jsx(G,{}),e.jsxs(z,{children:[e.jsxs($,{children:[e.jsx(ne,{}),e.jsx(fe,{})]}),e.jsx(P,{children:e.jsx(ue,{})})]})]});export{Re as default};
