import{r as v,u as y,g as R,j as e,I as o,L as k,b as j,f as T,h as B}from"./index-10710d21.js";import{s as i}from"./styled-components.browser.esm-5ea02b6c.js";import{e as D}from"./index-40b02ad5.js";import"./createClass-967a9338.js";const E=i.div`
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
`,P=i.div`
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
`,z=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`,$=i.div`
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
`,q=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`,W=i.h2`
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
`,A=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,M=i.svg`
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
`,G=()=>{const[s,d]=v.useState(new Date),t=y(),r=a=>`${String(a.getDate()).padStart(2,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${a.getFullYear()}`;v.useEffect(()=>{t(R(r(s)))});const n=()=>{const a=new Date(s);a.setDate(s.getDate()-1),d(a)},l=()=>{const a=new Date(s);a.setDate(s.getDate()+1),d(a)};return e.jsxs(S,{children:[e.jsxs(H,{children:[e.jsx(L,{selected:s,onChange:a=>d(a),dateFormat:"dd/MM/yyyy"}),e.jsx(A,{children:e.jsx("use",{xlinkHref:`${o}#icon-calendar`})}),e.jsxs(I,{children:[e.jsx(F,{onClick:n,children:e.jsx(M,{children:e.jsx("use",{xlinkHref:`${o}#icon-left`})})}),e.jsx(q,{onClick:l,children:e.jsx(Y,{children:e.jsx("use",{xlinkHref:`${o}#icon-right`})})})]})]}),e.jsx(W,{children:"Diary"})]})},J=i.div`
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
`,Q=i(k).attrs({className:"add-product-link"})`
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
    /* margin-top: 42px; */
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
    position: relative;
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
`,b=i.label`
  @media screen and (min-width: 375px) {
    position: absolute;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.labTitle {
      top: -23px;
      left: 0;
    }
    &.labCategory {
      top: -23px;
      left: 0;
    }
    &.labCalories {
      top: -23px;
      left: 0;
    }
    &.labWeight {
      top: -23px;
      left: 0;
    }
    &.labRecommend {
      top: -23px;
      left: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`,u=i.p`
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,ne=()=>{const s=y(),d=j(t=>t.diary.products);return console.log(d),e.jsx(e.Fragment,{children:e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(O,{children:"Products"}),e.jsxs(Q,{to:"/products",className:"add-product-link",children:["Add product",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${o}#icon-next`})})]})]}),d.length===0?e.jsx(Z,{children:"Not found products"}):e.jsxs(U,{children:[e.jsx(V,{children:["Title","Category","Calories","Weight","Recommend"].map((t,r)=>e.jsx(X,{className:`title-prod-${r}`,children:t},r))}),e.jsx("div",{children:e.jsx(ie,{children:d.map(({amount:t,calories:r,_id:n,productId:{category:l,title:a}})=>e.jsxs(te,{children:[e.jsxs(w,{className:"title",children:[e.jsx(b,{className:"labTitle",children:"Title"}),e.jsx(u,{children:a})]}),e.jsxs(w,{className:"category",children:[e.jsx(b,{className:"labCategory",children:"Category"}),e.jsx(u,{children:l})]}),e.jsxs(w,{className:"calories",children:[e.jsx(b,{className:"labCalories",children:"Calories"}),e.jsx(u,{children:r})]}),e.jsxs(w,{className:"amount",children:[e.jsx(b,{className:"labWeight",children:"Weight"}),e.jsx(u,{children:t})]}),e.jsxs(w,{className:"recommend",children:[e.jsx(b,{className:"labRecommend",children:"Recommend"}),e.jsx(u,{children:"REC"})]}),e.jsx(_,{onClick:()=>s(T({date:"29-09-2023",productToRemove:n})),children:e.jsx(ee,{children:e.jsx("use",{xlinkHref:`${o}#icon-trash`})})})]},n))})})]})]})})},ae=i.div`
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
`,oe=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    /* gap: 145px; */
    /* margin-bottom: 48px; */

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    /* gap: 503px; */
    /* margin-bottom: 42px; */

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    /* gap: 624px;
    margin-bottom: 42px; */

    &.block-ex {
      gap: 608px;
    }
  }
`,de=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,re=i(k).attrs({className:"add-exercises-link"})`
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
`,se=i.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`,le=i.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`,xe=i.p`
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

    &.title-exe-0 {
      top: 56px;
      left: 16px;
    }
    &.title-exe-1 {
      top: 56px;
      left: 114px;
    }
    &.title-exe-2 {
      top: 56px;
      left: 254px;
    }
    &.title-exe-3 {
      top: 56px;
      left: 390px;
    }
    &.title-exe-4 {
      width: 78px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      top: 56px;
      left: 482px;
    }
    &.title-exe-5 {
      top: 56px;
      left: 568px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-exe-0 {
      top: 56px;
      left: 32px;
    }
    &.title-exe-1 {
      top: 56px;
      left: 155px;
    }
    &.title-exe-2 {
      top: 56px;
      left: 320px;
    }
    &.title-exe-3 {
      top: 56px;
      left: 459px;
    }
    &.title-exe-4 {
      overflow: inherit;
      top: 56px;
      left: 573px;
    }
    &.title-exe-5 {
      top: 56px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
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
    /* margin-top: 42px; */
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
    position: relative;
    display: flex;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);

    &.bodyPart {
      width: 297px;
      margin-bottom: 42px;
    }
    &.equipment {
      width: 297px;
      margin-bottom: 42px;
    }
    &.name {
      width: 297px;
      margin-bottom: 42px;
    }
    &.target {
      width: 81px;
      margin-right: 16px;
    }
    &.calories {
      width: 80px;
      margin-right: 16px;
    }
    &.duration {
      width: 76px;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    &.bodyPart {
      width: 90px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.equipment {
      width: 132px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.name {
      width: 128px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.target {
      width: 84px;
      margin-right: 8px;
    }
    &.calories {
      width: 78px;
      margin-right: 8px;
    }
    &.duration {
      width: 72px;
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.bodyPart {
      width: 115px;
    }
    &.equipment {
      width: 157px;
    }
    &.name {
      width: 131px;
    }
    &.target {
      width: 106px;
    }
    &.calories {
      width: 91px;
    }
    &.duration {
      width: 82px;
      margin-right: 20px;
    }
  }
`,p=i.label`
  @media screen and (min-width: 375px) {
    position: absolute;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.labBodyPart {
      top: -23px;
      left: 0;
    }
    &.labEquipment {
      top: -23px;
      left: 0;
    }
    &.labName {
      top: -23px;
      left: 0;
    }
    &.labTarget {
      top: -23px;
      left: 0;
    }
    &.labCalori {
      width: 80px;
      top: -23px;
      left: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.labDuration {
      top: -23px;
      left: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`,c=i.p`
  @media screen and (min-width: 375px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,fe=()=>{const s=y(),d=j(t=>t.diary.exercises);return console.log(d),e.jsx(e.Fragment,{children:e.jsxs(ae,{children:[e.jsxs(oe,{className:"block-ex",children:[e.jsx(de,{children:"Exercises"}),e.jsxs(re,{to:"/exercises",className:"add-exercises-link",children:["Add exercise",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${o}#icon-next`})})]})]}),d.length===0?e.jsx(pe,{children:"Not found products"}):e.jsxs(se,{children:[e.jsx(le,{children:["Body Part","Equipment","Name","Target","Burned Calories","Time"].map((t,r)=>e.jsx(xe,{className:`title-exe-${r}`,children:t},r))}),e.jsx("div",{children:e.jsx(me,{children:d.map(({duration:t,calories:r,_id:n,exerciseId:{bodyPart:l,equipment:a,name:N,target:C}})=>e.jsxs(ge,{children:[e.jsxs(x,{className:"bodyPart",children:[e.jsx(p,{className:"labBodyPart",children:"Body part"}),e.jsx(c,{children:l})]}),e.jsxs(x,{className:"equipment",children:[e.jsx(p,{className:"labEquipment",children:"Equipment"}),e.jsx(c,{children:a})]}),e.jsxs(x,{className:"name",children:[e.jsx(p,{className:"labName",children:"Name"}),e.jsx(c,{children:N})]}),e.jsxs(x,{className:"target",children:[e.jsx(p,{className:"labTarget",children:"Target"}),e.jsx(c,{children:C})]}),e.jsxs(x,{className:"calories",children:[e.jsx(p,{className:"labCalori",children:"Burned Calories"}),e.jsx(c,{children:r})]}),e.jsxs(x,{className:"duration",children:[e.jsx(p,{className:"labDuration",children:"Time"}),e.jsx(c,{children:t})]}),e.jsx(ce,{children:e.jsx(he,{onClick:()=>s(B({date:"29-09-2023",exerciseToRemove:n})),children:e.jsx("use",{xlinkHref:`${o}#icon-trash`})})})]},n))})})]})]})})},we=i.ul`
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
`,h=i.li`
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

    &.dailyCalor {
      background-color: #e6533c;
    }
    &.dailyNorm {
      background-color: #e6533c;
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
`,m=i.div`
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
`,g=i.p`
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
    &.textColories {
      color: rgba(239, 237, 232, 0.8);
    }
    &.textNorm {
      color: rgba(239, 237, 232, 0.8);
    }
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
  }
`,f=i.p`
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
`,ue=i.p`
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
`,je=()=>{const s=j(n=>n.diary.products),d=j(n=>n.diary.exercises),t=s.reduce((n,l)=>n+l.calories,0),r=d.reduce((n,l)=>n+l.calories,0);return e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:[e.jsx(h,{className:"dailyCalor",children:e.jsxs(m,{children:[e.jsxs(g,{className:"textColories",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-food`})}),"Daily calorie intake"]}),e.jsx(f,{children:"2200"})]})}),e.jsx(h,{className:"dailyNorm",children:e.jsxs(m,{children:[e.jsxs(g,{className:"textNorm",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-dumbbell`})}),"Daily norm of sports"]}),e.jsx(f,{children:"110 min"})]})}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-apple`})}),"Сalories consumed"]}),e.jsx(f,{children:t})]})}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-calories`})}),"Сalories burned"]}),e.jsx(f,{children:r})]})}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"6"},children:e.jsx("use",{xlinkHref:`${o}#icon-bubble`})}),"The rest of the calories"]}),e.jsx(f,{children:"2200"})]})}),e.jsx(h,{children:e.jsxs(m,{className:"last-item",children:[e.jsxs(g,{className:"last-text",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8",fill:"#EF8964"},children:e.jsx("use",{xlinkHref:`${o}#icon-running`})}),"The rest of sports"]}),e.jsx(f,{children:"110 min"})]})})]}),e.jsxs(be,{children:[e.jsx("svg",{style:{width:"24",height:"24",marginRight:"8",borderRadius:"50%",stroke:"white",backgroundColor:"#EFA082"},children:e.jsx("use",{xlinkHref:`${o}#tabler_exclamation-mark`})}),e.jsx(ue,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Ce=()=>e.jsxs(E,{children:[e.jsx(G,{}),e.jsxs(P,{children:[e.jsxs(z,{children:[e.jsx(ne,{}),e.jsx(fe,{})]}),e.jsx($,{children:e.jsx(je,{})})]})]});export{Ce as default};
