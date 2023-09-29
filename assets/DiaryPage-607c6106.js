import{r as u,u as C,g as R,j as e,I as d,L as y,b as v}from"./index-4a125ef8.js";import{s as i}from"./styled-components.browser.esm-2266088c.js";import{e as N}from"./index-373a6c74.js";import"./createClass-d08eace5.js";const T=i.div`
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
`,B=i.div`
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
`,D=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`,z=i.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;const E=i.div`
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
`,$=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px 20px;
  }
`,P=i(N)`
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
`,S=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,H=i.button`
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
`,L=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`,I=i.h2`
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
`,W=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,F=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,A=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,M=()=>{const[n,t]=u.useState(new Date),s=C(),m=a=>`${String(a.getDate()).padStart(2,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${a.getFullYear()}`;u.useEffect(()=>{s(R(m(n)))});const g=()=>{const a=new Date(n);a.setDate(n.getDate()-1),t(a)},f=()=>{const a=new Date(n);a.setDate(n.getDate()+1),t(a)};return e.jsxs(E,{children:[e.jsxs($,{children:[e.jsx(P,{selected:n,onChange:a=>t(a),dateFormat:"dd/MM/yyyy"}),e.jsx(W,{children:e.jsx("use",{xlinkHref:`${d}#icon-calendar`})}),e.jsxs(S,{children:[e.jsx(H,{onClick:g,children:e.jsx(F,{children:e.jsx("use",{xlinkHref:`${d}#icon-left`})})}),e.jsx(L,{onClick:f,children:e.jsx(A,{children:e.jsx("use",{xlinkHref:`${d}#icon-right`})})})]})]}),e.jsx(I,{children:"Diary"})]})},q=i.div`
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
`,Y=i.div`
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
`,_=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,G=i(y).attrs({className:"add-product-link"})`
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
`,J=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,K=i.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`,O=i.p`
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
`,Q=i.p`
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
`,U=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
  }
`,V=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,X=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 42px;
  }
`,Z=i.li`
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
`,ee=()=>{const n=v(t=>t.diary.products);return console.log(n),e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsxs(Y,{children:[e.jsx(_,{children:"Products"}),e.jsxs(G,{to:"/products",className:"add-product-link",children:["Add product",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${d}#icon-next`})})]})]}),n.length===0?e.jsx(Q,{children:"Not found products"}):e.jsxs(J,{children:[e.jsx(K,{children:["Title","Category","Calories","Weight","Recommend"].map((t,s)=>e.jsx(O,{className:`title-prod-${s}`,children:t},s))}),e.jsx("div",{children:e.jsx(X,{children:n.map(({amount:t,calories:s,_id:m,productId:{category:g,title:f}})=>e.jsxs(Z,{children:[e.jsxs(w,{className:"title",children:[e.jsx(j,{className:"labTitle",children:"Title"}),e.jsx(b,{children:f})]}),e.jsxs(w,{className:"category",children:[e.jsx(j,{className:"labCategory",children:"Category"}),e.jsx(b,{children:g})]}),e.jsxs(w,{className:"calories",children:[e.jsx(j,{className:"labCalories",children:"Calories"}),e.jsx(b,{children:s})]}),e.jsxs(w,{className:"amount",children:[e.jsx(j,{className:"labWeight",children:"Weight"}),e.jsx(b,{children:t})]}),e.jsxs(w,{className:"recommend",children:[e.jsx(j,{className:"labRecommend",children:"Recommend"}),e.jsx(b,{children:"REC"})]}),e.jsx(U,{children:e.jsx(V,{children:e.jsx("use",{xlinkHref:`${d}#icon-trash`})})})]},m))})})]})]})})},ie=i.div`
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
`,te=i.div`
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
`,ne=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,de=i(y).attrs({className:"add-exercises-link"})`
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
`,ae=i.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`,se=i.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`,re=i.p`
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
`,oe=i.p`
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
`,xe=i.button`
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
`,le=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,pe=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 42px;
  }
`,ce=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,r=i.div`
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
`,o=i.label`
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
`,x=i.p`
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,he=()=>{const n=v(t=>t.diary.exercises);return console.log(n),e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsxs(te,{className:"block-ex",children:[e.jsx(ne,{children:"Exercises"}),e.jsxs(de,{to:"/exercises",className:"add-exercises-link",children:["Add exercise",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${d}#icon-next`})})]})]}),n.length===0?e.jsx(oe,{children:"Not found products"}):e.jsxs(ae,{children:[e.jsx(se,{children:["Title","Category","Calories","Weight","Recommend"].map((t,s)=>e.jsx(re,{className:`title-exe-${s}`,children:t},s))}),e.jsx("div",{children:e.jsx(pe,{children:n.map(({duration:t,calories:s,_id:m,exerciseId:{bodyPart:g,equipment:f,name:a,target:k}})=>e.jsxs(ce,{children:[e.jsxs(r,{className:"title",children:[e.jsx(o,{className:"labTitle",children:"Body part"}),e.jsx(x,{children:g})]}),e.jsxs(r,{className:"category",children:[e.jsx(o,{className:"labCategory",children:"Equipment"}),e.jsx(x,{children:f})]}),e.jsxs(r,{className:"calories",children:[e.jsx(o,{className:"labCalories",children:"Name"}),e.jsx(x,{children:a})]}),e.jsxs(r,{className:"amount",children:[e.jsx(o,{className:"labWeight",children:"Target"}),e.jsx(x,{children:k})]}),e.jsxs(r,{className:"recommend",children:[e.jsx(o,{className:"labRecommend",children:"Burned Calories"}),e.jsx(x,{children:s})]}),e.jsxs(r,{className:"recommend",children:[e.jsx(o,{className:"labRecommend",children:"Time"}),e.jsx(x,{children:t})]}),e.jsx(xe,{children:e.jsx(le,{children:e.jsx("use",{xlinkHref:`${d}#icon-trash`})})})]},m))})})]})]})})},me=i.ul`
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
`,l=i.li`
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
`,c=i.p`
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
`,h=i.p`
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
`,ge=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`,fe=i.p`
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
`,we=()=>e.jsxs(e.Fragment,{children:[e.jsxs(me,{children:[e.jsx(l,{children:e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${d}#icon-food`})}),"Daily calorie intake"]}),e.jsx(h,{children:"2200"})]})}),e.jsx(l,{children:e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${d}#icon-dumbbell`})}),"Daily norm of sports"]}),e.jsx(h,{children:"110 min"})]})}),e.jsx(l,{children:e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${d}#icon-apple`})}),"Сalories consumed"]}),e.jsx(h,{children:"0"})]})}),e.jsx(l,{children:e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${d}#icon-calories`})}),"Сalories burned"]}),e.jsx(h,{children:"0"})]})}),e.jsx(l,{children:e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"6"},children:e.jsx("use",{xlinkHref:`${d}#icon-bubble`})}),"The rest of the calories"]}),e.jsx(h,{children:"2200"})]})}),e.jsx(l,{children:e.jsxs(p,{className:"last-item",children:[e.jsxs(c,{className:"last-text",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${d}#icon-running`})}),"The rest of sports"]}),e.jsx(h,{children:"110 min"})]})})]}),e.jsxs(ge,{children:[e.jsx("svg",{style:{width:"24",height:"24",marginRight:"8",borderRadius:"50%",stroke:"white",backgroundColor:"#EFA082"},children:e.jsx("use",{xlinkHref:`${d}#tabler_exclamation-mark`})}),e.jsx(fe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),ve=()=>e.jsxs(T,{children:[e.jsx(M,{}),e.jsxs(B,{children:[e.jsxs(D,{children:[e.jsx(ee,{}),e.jsx(he,{})]}),e.jsx(z,{children:e.jsx(we,{})})]})]});export{ve as default};
