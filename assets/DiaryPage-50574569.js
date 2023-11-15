import{r as N,u as C,g as B,f as D,j as e,I as o,L as R,b as x,s as T,h as E,i as P}from"./index-31e13ac7.js";import{s as i}from"./styled-components.browser.esm-adad23e6.js";import{e as z}from"./index-82e7190f.js";import"./createClass-1498dc00.js";const $=i.div`
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
`,S=i.div`
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
`,H=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`,L=i.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;const I=i.div`
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
`,F=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px 20px;
  }
`,q=i(z)`
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
`,W=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,M=i.button`
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
`,A=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`,Y=i.h2`
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
`,G=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,J=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,K=i.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,O=()=>{const[r,s]=N.useState(new Date),l=C(),a=n=>`${String(n.getDate()).padStart(2,"0")}-${String(n.getMonth()+1).padStart(2,"0")}-${n.getFullYear()}`;N.useEffect(()=>{l(B(a(r))),l(D(a(r)))});const t=()=>{const n=new Date(r);n.setDate(r.getDate()-1),s(n)},d=()=>{const n=new Date(r);n.setDate(r.getDate()+1),s(n)};return e.jsxs(I,{children:[e.jsxs(F,{children:[e.jsx(q,{selected:r,onChange:n=>s(n),dateFormat:"dd/MM/yyyy"}),e.jsx(G,{children:e.jsx("use",{xlinkHref:`${o}#icon-calendar`})}),e.jsxs(W,{children:[e.jsx(M,{onClick:t,children:e.jsx(J,{children:e.jsx("use",{xlinkHref:`${o}#icon-left`})})}),e.jsx(A,{onClick:d,children:e.jsx(K,{children:e.jsx("use",{xlinkHref:`${o}#icon-right`})})})]})]}),e.jsx(Y,{children:"Diary"})]})},Q=i.div`
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
`,U=i.div`
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
`,V=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,X=i(R).attrs({className:"add-product-link"})`
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
`,Z=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,_=i.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`,ee=i.p`
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
    left: 344px;

    font-size: 16px;
    line-height: 150%;
  }
`,te=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
  }
`,ne=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,ae=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: 42px; */
  }
`,oe=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,b=i.div`
  display: flex;
  align-items: center;

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
`,u=i.label`
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
`,y=i.p`
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`,re=i.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 5px;
`,de=i.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
`,se=()=>{const r=C(),s=x(t=>t.diary.products),l=x(t=>t.diary.date),a=x(T);return e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsxs(U,{children:[e.jsx(V,{children:"Products"}),e.jsxs(X,{to:"/products",className:"add-product-link",children:["Add product",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${o}#icon-next`})})]})]}),s.length===0?e.jsx(ie,{children:"Not found products"}):e.jsxs(Z,{children:[e.jsx(_,{children:["Title","Category","Calories","Weight","Recommend"].map((t,d)=>e.jsx(ee,{className:`title-prod-${d}`,children:t},d))}),e.jsx("div",{children:e.jsx(ae,{children:s.map(({amount:t,calories:d,_id:n,productId:{category:v,title:k,groupBloodNotAllowed:j}})=>e.jsxs(oe,{children:[e.jsxs(b,{className:"title",children:[e.jsx(u,{className:"labTitle",children:"Title"}),e.jsx(y,{children:k})]}),e.jsxs(b,{className:"category",children:[e.jsx(u,{className:"labCategory",children:"Category"}),e.jsx(y,{children:v})]}),e.jsxs(b,{className:"calories",children:[e.jsx(u,{className:"labCalories",children:"Calories"}),e.jsx(y,{children:d})]}),e.jsxs(b,{className:"amount",children:[e.jsx(u,{className:"labWeight",children:"Weight"}),e.jsx(y,{children:t})]}),e.jsxs(b,{className:"recommend",children:[e.jsx(u,{className:"labRecommend",children:"Recommend"}),e.jsx(re,{style:{backgroundColor:`${j[a]?"#E9101D":"#419B09"}`}}),e.jsx(de,{children:j[a]?"No":"Yes"})]}),e.jsx(te,{onClick:()=>r(E({date:l,productToRemove:n})),children:e.jsx(ne,{children:e.jsx("use",{xlinkHref:`${o}#icon-trash`})})})]},n))})})]})]})})},le=i.div`
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
`,xe=i.div`
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
`,pe=i.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`,ce=i(R).attrs({className:"add-exercises-link"})`
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
`,he=i.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`,me=i.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`,ge=i.p`
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
`,fe=i.p`
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
`,we=i.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
  }
`,be=i.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`,ue=i.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: 42px; */
  }
`,je=i.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,p=i.div`
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
`,c=i.label`
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
`,h=i.p`
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
`,ye=()=>{const r=C(),s=x(a=>a.diary.exercises),l=x(a=>a.diary.date);return e.jsx(e.Fragment,{children:e.jsxs(le,{children:[e.jsxs(xe,{className:"block-ex",children:[e.jsx(pe,{children:"Exercises"}),e.jsxs(ce,{to:"/exercises",className:"add-exercises-link",children:["Add exercise",e.jsx("svg",{style:{width:"16",height:"16"},children:e.jsx("use",{xlinkHref:`${o}#icon-next`})})]})]}),s.length===0?e.jsx(fe,{children:"Not found products"}):e.jsxs(he,{children:[e.jsx(me,{children:["Body Part","Equipment","Name","Target","Burned Calories","Time"].map((a,t)=>e.jsx(ge,{className:`title-exe-${t}`,children:a},t))}),e.jsx("div",{children:e.jsx(ue,{children:s.map(({duration:a,calories:t,_id:d,exerciseId:{bodyPart:n,equipment:v,name:k,target:j}})=>e.jsxs(je,{children:[e.jsxs(p,{className:"bodyPart",children:[e.jsx(c,{className:"labBodyPart",children:"Body part"}),e.jsx(h,{children:n})]}),e.jsxs(p,{className:"equipment",children:[e.jsx(c,{className:"labEquipment",children:"Equipment"}),e.jsx(h,{children:v})]}),e.jsxs(p,{className:"name",children:[e.jsx(c,{className:"labName",children:"Name"}),e.jsx(h,{children:k})]}),e.jsxs(p,{className:"target",children:[e.jsx(c,{className:"labTarget",children:"Target"}),e.jsx(h,{children:j})]}),e.jsxs(p,{className:"calories",children:[e.jsx(c,{className:"labCalori",children:"Burned Calories"}),e.jsx(h,{children:t})]}),e.jsxs(p,{className:"duration",children:[e.jsx(c,{className:"labDuration",children:"Time"}),e.jsx(h,{children:a})]}),e.jsx(we,{children:e.jsx(be,{onClick:()=>r(P({date:l,exerciseToRemove:d})),children:e.jsx("use",{xlinkHref:`${o}#icon-trash`})})})]},d))})})]})]})})},ve=i.ul`
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
`,m=i.li`
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
`,g=i.div`
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
`,f=i.p`
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
`,w=i.p`
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
`,ke=i.div`
  @media screen and (min-width: 375px) {
    display: flex;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`,Ce=i.p`
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
`,Ne=()=>{const r=x(t=>t.diary.products),s=x(t=>t.diary.exercises),l=r.reduce((t,d)=>t+d.calories,0),a=s.reduce((t,d)=>t+d.calories,0);return e.jsxs(e.Fragment,{children:[e.jsxs(ve,{children:[e.jsx(m,{className:"dailyCalor",children:e.jsxs(g,{children:[e.jsxs(f,{className:"textColories",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-food`})}),"Daily calorie intake"]}),e.jsx(w,{children:"2200"})]})}),e.jsx(m,{className:"dailyNorm",children:e.jsxs(g,{children:[e.jsxs(f,{className:"textNorm",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-dumbbell`})}),"Daily norm of sports"]}),e.jsx(w,{children:"110 min"})]})}),e.jsx(m,{children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-apple`})}),"Сalories consumed"]}),e.jsx(w,{children:l})]})}),e.jsx(m,{children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8"},children:e.jsx("use",{xlinkHref:`${o}#icon-calories`})}),"Сalories burned"]}),e.jsx(w,{children:a})]})}),e.jsx(m,{children:e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"6"},children:e.jsx("use",{xlinkHref:`${o}#icon-bubble`})}),"The rest of the calories"]}),e.jsx(w,{children:"2200"})]})}),e.jsx(m,{children:e.jsxs(g,{className:"last-item",children:[e.jsxs(f,{className:"last-text",children:[e.jsx("svg",{style:{width:"20",height:"20",marginRight:"8",fill:"#EF8964"},children:e.jsx("use",{xlinkHref:`${o}#icon-running`})}),"The rest of sports"]}),e.jsx(w,{children:"110 min"})]})})]}),e.jsxs(ke,{children:[e.jsx("svg",{style:{width:"24",height:"24",marginRight:"8",borderRadius:"50%",stroke:"white",backgroundColor:"#EFA082"},children:e.jsx("use",{xlinkHref:`${o}#tabler_exclamation-mark`})}),e.jsx(Ce,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Ee=()=>e.jsxs($,{children:[e.jsx(O,{}),e.jsxs(S,{children:[e.jsxs(H,{children:[e.jsx(se,{}),e.jsx(ye,{})]}),e.jsx(L,{children:e.jsx(Ne,{})})]})]});export{Ee as default};
