import{r as w,j as e,I as c,P as d,n as f,u as ee,a as te,e as ie}from"./index-29e4f69b.js";import{F as Z,a as q,E as N,c as A,e as $,f as ne,d as W,b as R}from"./index.esm-970170b4.js";import{g as F,e as ae,a as re,b as D}from"./index-ba33208a.js";import{s as t,a as se}from"./styled-components.browser.esm-19f8ed86.js";import{S as oe,E as de}from"./Statistics-54626353.js";import"./createClass-99490e17.js";const le=t.input`
  position: relative;
  width: 159px;
  height: 46px;
  background-color: transparent;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);

  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;

  /* ${i=>i.withoutВorder&&"border: none;"} */

  &:hover,
  &:focus {
    border: 1px solid rgba(230, 83, 60, 1);
  }

  &:hover + svg {
    stroke: #e6533c;
  }

  &:focus + svg {
    stroke: #e6533c;
  }

  transition: 0.5s;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 52px;
    font-size: 16px;
    line-height: 24px;
  }
`,ce=t.svg`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  stroke: #efede8;
  transition: stroke 0.5s;
  /* outline: 1px solid tomato; */

  &:hover {
    stroke: #e6533c;
  }
`,T=w.forwardRef(({value:i,onClick:a},s)=>e.jsxs(e.Fragment,{children:[e.jsx(le,{onClick:a,ref:s,value:i||"Birthday",readOnly:!0,name:"name"}),e.jsx(ce,{className:"icon",width:"16",height:"16",fill:"currentColor",onClick:a,children:e.jsx("use",{href:`${c}#icon-calendar`})})]}));T.propTypes={onClick:d.func,value:d.any,readOnly:d.bool,name:d.string};T.displayName="CustomInput";const pe=se`
.react-datepicker__month {
    margin: 0;
    background-color: rgba(239, 137, 100, 1);

    
}


.react-datepicker__day {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    
    color: rgba(239, 237, 232, 1);

    &:hover {
        border-radius: 50%;
        background-color: #040404;
    }

}

.react-datepicker__day-name {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: #EFEDE880;

}

.react-datepicker__day--selected {
    border-radius: 50%;
    background-color: #040404;
    
}

.react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
}

.react-datepicker__header {
    background-color: rgba(239, 137, 100, 1);
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
}

.calendar-select {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: rgba(239, 137, 100, 1);
    color: rgba(239, 237, 232, 1);
    border: 1px solid rgba(239, 237, 232, 0.2);
}

.calendar-button {
    background-color: rgba(239, 137, 100, 1);
    color: rgba(239, 237, 232, 1);
    border: 1px solid rgba(239, 237, 232, 0.2);
}
 
`,_=w.forwardRef(({field:i,form:a},s)=>{const[l,r]=w.useState(""),o=w.useRef(null),C=Array.from({length:F(new Date)-1930},(j,L)=>1931+L),y=["January","February","March","April","May","June","July","August","September","October","November","December"],k=j=>{r(j),a.setFieldValue(i.name,j)};return w.useImperativeHandle(s,()=>({closeDatePicker:()=>{o.current&&o.current.setOpen(!1)}})),_.displayName="Calendar",e.jsxs(e.Fragment,{children:[e.jsx(ae,{selected:l,onChange:k,dateFormat:"dd/MM/yyyy",customInput:e.jsx(T,{}),ref:o,renderCustomHeader:({date:j,changeYear:L,changeMonth:Y,decreaseMonth:U,increaseMonth:K,prevMonthButtonDisabled:Q,nextMonthButtonDisabled:X})=>e.jsxs("div",{style:{margin:10,display:"flex",justifyContent:"center"},children:[e.jsx("button",{className:"calendar-button",type:"button",onClick:U,disabled:Q,children:"<"}),e.jsx("select",{className:"calendar-select",value:F(j),onChange:({target:{value:p}})=>L(Number(p)),children:C.map(p=>e.jsx("option",{value:p,children:p},p))}),e.jsx("select",{className:"calendar-select",value:y[re(j)],onChange:({target:{value:p}})=>Y(y.indexOf(p)),children:y.map(p=>e.jsx("option",{value:p,children:p},p))}),e.jsx("button",{className:"calendar-button",type:"button",onClick:K,disabled:X,children:">"})]})}),e.jsx(pe,{})]})});_.propTypes={field:d.object.isRequired,form:d.object.isRequired};const xe="/GachiClub/assets/params01-mobile-1x-12d31870.jpg",he="/GachiClub/assets/params01-mobile-2x-c2b9cc40.jpg",me="/GachiClub/assets/params01-tablet-1x-3b221efb.jpg",ge="/GachiClub/assets/params01-tablet-2x-28bc3a47.jpg",ue="/GachiClub/assets/params01-desktop-1x-656ed98c.jpg",be="/GachiClub/assets/params01-desktop-2x-4cea8eb4.jpg",fe=t.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 16px;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 151px;
    margin-bottom: 16px;
    line-height: 44px;
    width: 496px;
  }
`,je=t.p`
  margin-bottom: 50px;
  width: 335px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 24px;
    width: 496px;
  }
`,ye=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    width: 527px;
  }
`,ve=t(Z)`
  gap: 7px;
  display: inline;
`,B=t(q)`
  background-color: transparent;
  width: 155px;
  height: 46px;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;


  &[name='currentWeight'] {
    width: 159px;
    height: 46px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(230, 83, 60, 1);
  }

  transition: 0.5s;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 52px;
    font-size: 16px;
    line-height: 24px;
    &[name='currentWeight'] {
      width: 172px;
      height: 52px;
    }
    &[name='desiredWeight'] {
      width: 174px;
      height: 52px;
    }
  }
`,we=t.button`
  margin-top: 28px;
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 439px;
    margin-top: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 204px;
  }
`,Ce=t.svg`
  color: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`,ke=t.div`
  position: relative;
  top: -200px;
  right: 6px;
  @media screen and (min-width: 768px) {
    top: -256px;
  }
  @media screen and (min-width: 1440px) {
    top: -380px;
    right: -30px;
  }
`;t(N)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 36%;
  @media screen and (min-width: 1440px) {
    top: 48%;
  }
`;t(N)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 36%;
  left: 190px;
  @media screen and (min-width: 1440px) {
    top: 48%;
    left: 270px;
  }
`;t(N)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 42%;
  @media screen and (min-width: 1440px) {
    top: 56%;
  }
`;t(N)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  left: 220px;
  top: 42%;
  @media screen and (min-width: 1440px) {
    top: 56%;
    left: 290px;
  }
`;const Le=t.div`
  position: absolute;
  top: 130px;
  bottom: -20px;
  right: auto;
  width: 370px;
  height: 780px;
  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${xe});
  background-size: 289px 571px;
  background-position: 100% 100%;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: linear-gradient(
          89deg,
          #040404 0%,
          rgba(4, 4, 4, 0) 100%
        ),
        url(${he});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 260px;
    left: 412px;
    background-position: 100% 100%;
    background-size: 500px 835px;
    pointer-events: none;

    background-image: linear-gradient(
        168.13deg,
        #040404 12.66%,
        rgba(4, 4, 4, 0) 20.98%
      ),
      linear-gradient(90.82deg, #040404 -10.38%, rgba(4, 4, 4, 0) 42.83%),
      linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${me});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            89deg,
            #040404 0%,
            rgba(4, 4, 4, 0) 100%
          ),
          url(${ge});
      }
    }
  }

  @media screen and (min-width: 1440px) {
    top: 0;
    left: 800px;
    width: 670px;
    height: 860px;
    pointer-events: none;

    background-image: linear-gradient(
        88.74deg,
        #040404 1.1%,
        rgba(4, 4, 4, 0) 70.79%
      ),
      url(${ue});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            88.74deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${be});
      }
    }
  }
`,S=t.div`
  display: flex;
  gap: 4px;
  /* position: absolute; */
  width: 153px;
  margin-top: 5px;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 42%;

  @media screen and (min-width: 1440px) {
    top: 56%;
  }
`,z=t.div`
  /* position: absolute; */
  width: 153px;

  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;

  color: #3cbf61;
`;function E(i){const a=s=>{const l={...i.data,...s};i.next(l)};return e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(fe,{children:"Get closer to your goals!"}),e.jsx(je,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),e.jsx(W,{initialValues:{...i.data,isValid:!1},onSubmit:a,autoComplete:"off",validationSchema:Ne,enableReinitialize:!0,children:({isValid:s,handleBlur:l,touched:r,errors:o})=>e.jsxs(ve,{children:[e.jsxs(ye,{className:"WrapperInput",children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(B,{className:"InputField",name:"height",placeholder:"Height",onBlur:l})}),r.height&&o.height?e.jsxs(S,{className:"MessageStyleError",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-error"})}),o.height]}):r.height?e.jsxs(z,{className:"MessageStyleSuccess",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-success"})}),"Success Height"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(B,{className:"InputField",name:"currentWeight",placeholder:"Current Weight",onBlur:l})}),r.currentWeight&&o.currentWeight?e.jsxs(S,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-error"})}),o.currentWeight]}):r.currentWeight?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-success"})}),"Success Current Weight"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(B,{className:"InputField",name:"desiredWeight",placeholder:"Desired Weight",onBlur:l})}),r.desiredWeight&&o.desiredWeight?e.jsxs(S,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-error"})}),o.desiredWeight]}):r.desiredWeight?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-success"})}),"Success Desired Weight"]}):null]}),e.jsxs("div",{children:[e.jsx(B,{className:"InputField",name:"birthday",placeholder:"Birthday",autoComplete:"off",onBlur:l,children:({field:C,form:y})=>e.jsx(_,{field:C,form:y,r:!0})}),r.birthday&&o.birthday?e.jsxs(S,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-error"})}),o.birthday]}):r.birthday?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:c+"#icon-checkbox-success"})}),"Success Birthday"]}):null]})]}),e.jsx(we,{type:"submit",disabled:!s,children:"Next"}),e.jsx(Ce,{children:e.jsx("use",{xlinkHref:`${c}#icon-arrow`})})]})}),e.jsx(ke,{children:e.jsx(oe,{})})]})}const Ne=A().shape({height:$().required('Please enter your "Height"').typeError("Desired Weight must be a number").min(150,"Height must be 150 or more"),currentWeight:$().typeError("Current Weight must be a number").required('Please enter your "Current Weight"'),desiredWeight:$().typeError("Desired Weight must be a number").required('Please enter your "Desired Weight"'),birthday:ne().max(D(new Date,-18*365),"Must be over 18 years old").min(D(new Date,-90*365),"Must be under 90 years of age").required("Please enter your Birthday")});E.propTypes={data:d.object.isRequired,next:d.func.isRequired};const Be="/GachiClub/assets/params02-mobile-1x-8484c34f.jpg",Se="/GachiClub/assets/params02-mobile-2x-48303bad.jpg",ze="/GachiClub/assets/params02-tablet-1x-58cdf03b.jpg",$e="/GachiClub/assets/params02-tablet-2x-f222104d.jpg",Re="/GachiClub/assets/params02-desktop-1x-e0483c02.jpg",Me="/GachiClub/assets/params02-desktop-2x-ae18da26.jpg",We=t.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-top: 90px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.11;
    letter-spacing: 0.7px;
    margin-top: 140px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`,Te=t.div`
  position: absolute;
  top: 130px;
  bottom: -20px;
  right: auto;
  width: 370px;
  height: 780px;
  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${Be});
  background-size: 289px 571px;
  background-position: 100% 100%;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: linear-gradient(
          89deg,
          #040404 0%,
          rgba(4, 4, 4, 0) 100%
        ),
        url(${Se});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 260px;
    left: 412px;
    background-position: 100% 100%;
    background-size: 500px 835px;
    pointer-events: none;

    background-image: linear-gradient(
        168.13deg,
        #040404 12.66%,
        rgba(4, 4, 4, 0) 20.98%
      ),
      linear-gradient(90.82deg, #040404 -10.38%, rgba(4, 4, 4, 0) 42.83%),
      linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${ze});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            89deg,
            #040404 0%,
            rgba(4, 4, 4, 0) 100%
          ),
          url(${$e});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 800px;
    width: 670px;
    height: 860px;
    pointer-events: none;

    background-image: linear-gradient(
        88.74deg,
        #040404 1.1%,
        rgba(4, 4, 4, 0) 70.79%
      ),
      url(${Re});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            88.74deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${Me});
      }
    }
  }
`,_e=t.div`
  padding: 20px;
`,P=t.p`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Fe=t.div`
  margin-right: 64px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,De=t.div`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Pe=t.div`
  display: flex;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Ge=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    font-size: 16px;
    line-height: 24px;
  }
`,Ze=t.p``,qe=t.ul`
  display: flex;
  flex-direction: column;
  width: 334px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 523px;
  }
`,Ae=t.ul`
  display: flex;
  flex-direction: column;
  width: 40px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 46px;
  }
`,Ee=t.ul`
  display: flex;
  flex-direction: column;
  width: 74px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 85px;
  }
`,x=t.li`
  display: flex;
  align-items: center;
  gap: 9px;

  font-family: Roboto;
  text-align: left;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,G=t.button`
  margin-top: 28px;
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 439px;
    margin-top: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 204px;
  }
`,Ie=t.svg`
  color: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`;t.div`
  position: relative;
  top: -200px;
  right: 6px;
  @media screen and (min-width: 768px) {
    top: -256px;
  }
  @media screen and (min-width: 1440px) {
    top: -380px;
    right: -30px;
  }
`;const Oe=t.svg`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`,h=t.label`
  cursor: pointer;

  float: left;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 480px) {
    float: none;
  }
`,m=t.svg`
  fill: none;
  vertical-align: middle;
  margin-right: 8px;
`,g=t.circle`
  stroke-width: 2;
  stroke: #c8ccd4;
`,n=t.path`
  /* stroke: #008fff; */
  stroke: #e6533c;

  &.inner {
    stroke-width: 6;
    stroke-dasharray: 19;
    stroke-dashoffset: 19;
  }

  &.outer {
    stroke-width: 2;
    stroke-dasharray: 57;
    stroke-dashoffset: 57;
  }
`,u=t(q)`
  display: none;

  &:checked + svg {
    path {
      transition: all 0.4s ease;

      &.inner {
        stroke-dashoffset: 38;
        transition-delay: 0.3s;
      }

      &.outer {
        stroke-dashoffset: 0;
      }
    }
  }
`,b=t.p`
  display: inline-block;
  vertical-align: middle;

  font-size: 16px;
  line-height: 24px;
`,M=t(N)`
  color: red;
`,I=i=>{const a=s=>{const l={...i.data,...s};i.next(l)};return e.jsxs(_e,{children:[e.jsx(Te,{}),e.jsx("div",{children:e.jsx(We,{children:"Get closer to your goals!"})}),e.jsx(W,{initialValues:i.data,onSubmit:a,validationSchema:He,children:({values:s})=>e.jsxs(Z,{children:[e.jsxs(Pe,{children:[e.jsxs(Fe,{children:[e.jsx(P,{children:"Blood"}),e.jsxs(Ae,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-1",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"bl-1",name:"blood",value:"1"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"1"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-2",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"bl-2",name:"blood",value:"2"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"2"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-3",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"bl-3",name:"blood",value:"3"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"3"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-4",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"bl-4",name:"blood",value:"4"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"4"})]}),e.jsx(M,{name:"blood",component:"div",className:"error"})]})]}),e.jsxs(De,{children:[e.jsx(P,{children:"Sex"}),e.jsxs(Ee,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"sex-1",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"sex-1",name:"sex",value:"male"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Male"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"sex-2",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"sex-2",name:"sex",value:"female"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Female"})]})]}),e.jsx(M,{name:"sex",component:"div",className:"error"})]})]}),e.jsxs(Ge,{className:"ContainerActivity",children:[e.jsx(Ze,{children:"Level Activity"}),e.jsxs(qe,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-1",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"activity-1",name:"levelActivity",value:"1"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Sedentary lifestyle (little or no physical activity)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-2",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"activity-2",name:"levelActivity",value:"2"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Light activity (light exercises/sports 1-3 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-3",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"activity-3",name:"levelActivity",value:"3"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-4",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"activity-4",name:"levelActivity",value:"4"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Very active (intense exercises/sports 6-7 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-5",className:"btn-radio",children:[e.jsx(u,{type:"radio",id:"activity-5",name:"levelActivity",value:"5"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(n,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(n,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(b,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]}),e.jsx(M,{name:"levelActivity",component:"div",className:"error"})]})]}),e.jsx(Oe,{className:"Back",children:e.jsx("use",{xlinkHref:`${c}#icon-back`})}),e.jsx(G,{type:"button",onClick:()=>i.prev(s),className:"ButtonNext_back",children:"Back"}),e.jsx(G,{type:"submit",className:"ButtonNext",children:"Next"}),e.jsx(Ie,{className:"Next",children:e.jsx("use",{xlinkHref:`${c}#icon-arrow`})})]})})]})},He=A().shape({blood:R().required("Please select a blood type"),sex:R().required("Please select a sex"),levelActivity:R().required("Please select a level of activity")});I.propTypes={data:d.object.isRequired,next:d.func.isRequired,prev:d.func.isRequired};const Ve="/GachiClub/assets/params03-desktop-1x-da8d6fb9.jpg",Je="/GachiClub/assets/params03-desktop-2x-e0a194c1.jpg",Ye="/GachiClub/assets/params03-tablet-1x-311bff4d.jpg",Ue="/GachiClub/assets/params03-tablet-2x-53f994fc.jpg",Ke="/GachiClub/assets/params03-mobile-1x-0dba25eb.jpg",Qe="/GachiClub/assets/params03-mobile-2x-54d7bfc9.jpg",Xe=f.div`
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
    margin-bottom: 64px;
  }
`,et=f.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px; /* 137.5% */
    margin-bottom: 16px;
  }
`,tt=f.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    margin-bottom: 64px;
  }
`,it=f.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 530px;
  @media screen and (min-width: 768px) {
    margin-bottom: 470px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 240px;
  }
`,nt=f.button`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: #e6533c;
  color: #efede8;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    padding: 16px 75px;
    font-size: 20px;
    line-height: 24px; /* 120% */
  }

  &:hover,
  &:focus {
    background: #ef8964;
  }
`,at=f.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
  }
`,rt=f.div`
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 150px;
  }
`,st=f.div`
  position: absolute;
  right: auto;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${Ke});
  background-size: 375px 812px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${Qe});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    height: 1024px;
    pointer-events: none;

    background-image: url(${Ye});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${Ue});
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

    background-image: url(${Ve});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${Je});
      }
    }
  }
`,ot=f.svg`
  fill: #e6533c;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
  }
`,dt=f.div`
  position: absolute;
  left: 35%;
  top: 70%;
  @media screen and (min-width: 768px) {
    left: 45%;
    top: 70%;
  }
  @media screen and (min-width: 1440px) {
    left: 53%;
    top: 50%;
  }
`;f.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -100%;
    left: 0;
  }
`;const O=i=>{const a=ee(),s=te(),l=async r=>{try{await a(ie({email:i.data.email,name:i.data.name,password:i.data.password,height:i.data.height,currentWeight:i.data.currentWeight,desiredWeight:i.data.desiredWeight,birthday:i.data.birthday,blood:i.data.blood,sex:i.data.sex,levelActivity:i.data.levelActivity})),s("/diary"),i.next(r,!0)}catch(o){console.error("Error updating user:",o)}};return e.jsxs(e.Fragment,{children:[e.jsx(st,{}),e.jsxs(rt,{children:[e.jsxs(Xe,{children:[e.jsx(et,{children:"Dear user"}),e.jsx(tt,{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(W,{initialValues:i.data,onSubmit:l,children:({values:r})=>e.jsxs(it,{children:[e.jsx(nt,{type:"button",onClick:()=>l(r),children:"Go"}),e.jsxs(at,{type:"button",onClick:()=>i.prev(r),children:[e.jsx(ot,{children:e.jsx("use",{href:c+"#icon-back"})}),"Back"]})]})})]}),e.jsx(dt,{children:e.jsx(de,{})})]})};O.propTypes={data:d.object.isRequired,next:d.func.isRequired,prev:d.func.isRequired};const lt="_progressBarOne_fbup7_1",ct="_progressBarTwo_fbup7_14",pt="_progressBarThree_fbup7_25",xt="_progressBarPart_fbup7_43",ht="_completed_fbup7_48",mt="_wrap_fbup7_53",v={progressBarOne:lt,progressBarTwo:ct,progressBarThree:pt,progressBarPart:xt,completed:ht,wrap:mt},H=({currentStep:i})=>{const a=i>=0;return e.jsx("div",{className:v.progressBarOne,children:e.jsx("div",{className:`${v.progressBarPart} ${a?v.completed:""}`})})},V=({currentStep:i})=>{const a=i>=1;return e.jsx("div",{className:v.progressBarTwo,children:e.jsx("div",{className:`${v.progressBarPart} ${a?v.completed:""}`})})},J=({currentStep:i})=>{const a=i>=2;return e.jsx("div",{className:v.progressBarThree,children:e.jsx("div",{className:`${v.progressBarPart} ${a?v.completed:""}`})})};H.propTypes={currentStep:d.number.isRequired};V.propTypes={currentStep:d.number.isRequired};J.propTypes={currentStep:d.number.isRequired};const gt={display:"flex",marginTop:"20px"},wt=()=>{const[i,a]=w.useState({height:"",currentWeight:"",desiredWeight:"",birthday:null,blood:"",sex:"",levelActivity:""}),[s,l]=w.useState(0),r=(y,k=!1)=>{const j={...i,...y};a(j),!k&&l(L=>L+1)},o=y=>{const k={...i,...y};a(k),l(j=>j-1)},C=[e.jsx(E,{next:r,data:i},"step1"),e.jsx(I,{next:r,prev:o,data:i},"step2"),e.jsx(O,{next:r,prev:o,data:i},"step3")];return e.jsxs("div",{children:[e.jsx("div",{children:C[s]}),e.jsxs("div",{style:gt,children:[e.jsx(H,{currentStep:s}),e.jsx(V,{currentStep:s}),e.jsx(J,{currentStep:s})]})]})};export{wt as default};
