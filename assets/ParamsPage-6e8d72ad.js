import{r as v,j as e,I as s,P as d,n as u,u as ee,a as te,e as re}from"./index-5da8dff8.js";import{F as G,a as Z,E as L,c as A,e as S,f as ae,d as R,b as q}from"./index.esm-d7d63cae.js";import{g as T,e as ie,a as ne,b as F}from"./index-417f324f.js";import{s as t,a as oe}from"./styled-components.browser.esm-a2779691.js";import{S as ce,E as de}from"./Statistics-17258e02.js";import"./createClass-7a4d0d7f.js";const pe=t.input`
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

  /* ${r=>r.withoutВorder&&"border: none;"} */

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
`,se=t.svg`
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
`,M=v.forwardRef(({value:r,onClick:i},o)=>e.jsxs(e.Fragment,{children:[e.jsx(pe,{onClick:i,ref:o,value:r||"Birthday",readOnly:!0,name:"name"}),e.jsx(se,{className:"icon",width:"16",height:"16",fill:"currentColor",onClick:i,children:e.jsx("use",{href:`${s}#icon-calendar`})})]}));M.propTypes={onClick:d.func,value:d.any,readOnly:d.bool,name:d.string};M.displayName="CustomInput";const le=oe`

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  border-color: #ccc;
  border-style: solid;
  border-width: 3px 3px 0 0;
  content: "";
  display: block;
  height: 9px;
  position: absolute;
  top: 6px;
  width: 9px;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
  margin-left: -4px;
  position: absolute;
  width: 0;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
  border-top: none;
  border-bottom-color: #f0f0f0;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
  top: 0;
}
.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle {
  bottom: 0;
  margin-bottom: -8px;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {
  border-bottom: none;
  border-top-color: #fff;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {
  bottom: 0;
}
.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

.react-datepicker-wrapper {
  display: inline-block;
  padding: 0;
  border: 0;
}

.react-datepicker {
  font-family: "Helvetica Neue", helvetica, arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}
.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}
.react-datepicker--time-only .react-datepicker__time,
.react-datepicker--time-only .react-datepicker__time-box {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

.react-datepicker-popper {
  z-index: 1;
}
.react-datepicker-popper[data-placement^=bottom] {
  padding-top: 10px;
}
.react-datepicker-popper[data-placement=bottom-end] .react-datepicker__triangle, .react-datepicker-popper[data-placement=top-end] .react-datepicker__triangle {
  left: auto;
  right: 50px;
}
.react-datepicker-popper[data-placement^=top] {
  padding-bottom: 10px;
}
.react-datepicker-popper[data-placement^=right] {
  padding-left: 8px;
}
.react-datepicker-popper[data-placement^=right] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}
.react-datepicker-popper[data-placement^=left] {
  padding-right: 8px;
}
.react-datepicker-popper[data-placement^=left] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

.react-datepicker__header {
  text-align: center;
  background-color: rgba(239, 137, 100, 1);
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
   border-top-left-radius: 0.3rem;
  padding: 8px 0;
  position: relative;
}

.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}
.react-datepicker__header--time:not(.react-datepicker__header--time--only) {
  border-top-left-radius: 0;
}
.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 15px;
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.react-datepicker__navigation {
  align-items: center;
  background: none;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 2px;
  padding: 0;
  border: none;
  z-index: 1;
  height: 32px;
  width: 32px;
  text-indent: -999em;
  overflow: hidden;
}
.react-datepicker__navigation--previous {
  left: 2px;
}
.react-datepicker__navigation--next {
  right: 2px;
}
.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
  right: 85px;
}
.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__navigation--years-previous {
  top: 4px;
}
.react-datepicker__navigation--years-upcoming {
  top: -4px;
}
.react-datepicker__navigation:hover *::before {
  border-color: #a6a6a6;
}

.react-datepicker__navigation-icon {
  position: relative;
  top: -1px;
  font-size: 20px;
  width: 0;
}
.react-datepicker__navigation-icon--next {
  left: -2px;
}
.react-datepicker__navigation-icon--next::before {
  transform: rotate(45deg);
  left: -7px;
}
.react-datepicker__navigation-icon--previous {
  right: -2px;
}
.react-datepicker__navigation-icon--previous::before {
  transform: rotate(225deg);
  right: -7px;
}

.react-datepicker__month-container {
  float: left;
}

.react-datepicker__year {
  margin: 0.4rem;
  text-align: center;
}
.react-datepicker__year-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 180px;
}
.react-datepicker__year .react-datepicker__year-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__month {
    margin: 0;
    background-color: rgba(239, 137, 100, 1);

  text-align: center;

}
.react-datepicker__month .react-datepicker__month-text,
.react-datepicker__month .react-datepicker__quarter-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__input-time-container {
  clear: both;
  width: 100%;
  float: left;
  margin: 5px 0 10px 15px;
  text-align: left;
}
.react-datepicker__input-time-container .react-datepicker-time__caption {
  display: inline-block;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container {
  display: inline-block;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
  display: inline-block;
  margin-left: 10px;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
  width: auto;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time] {
    appearance: textfield;
  -moz-appearance: textfield;
}
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
  margin-left: 5px;
  display: inline-block;
}

.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 85px;
}
.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -87px;
  top: 0;
}
.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
  border-bottom-right-radius: 0.3rem;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
  width: 85px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
  border-bottom-right-radius: 0.3rem;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + (1.7rem / 2));
  overflow-y: scroll;
  padding-right: 0;
  padding-left: 0;
  width: 100%;
  box-sizing: content-box;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
  height: 30px;
  padding: 5px 10px;
  white-space: nowrap;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}
.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
}

.react-datepicker__day-names {
  margin-bottom: -8px;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: #EFEDE880;

  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__day,
.react-datepicker__month-text,
.react-datepicker__quarter-text,
.react-datepicker__year-text {
    
    font-weight: 400;

    color: rgba(239, 237, 232, 1);

  cursor: pointer;
 
}
.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  /* border-radius: 0.3rem; */
  border-radius: 50%;
  /* background-color: #f0f0f0; */
  background-color: #040404;
}
.react-datepicker__day--today,
.react-datepicker__month-text--today,
.react-datepicker__quarter-text--today,
.react-datepicker__year-text--today {
  font-weight: bold;
}
.react-datepicker__day--highlighted,
.react-datepicker__month-text--highlighted,
.react-datepicker__quarter-text--highlighted,
.react-datepicker__year-text--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}
.react-datepicker__day--highlighted:hover,
.react-datepicker__month-text--highlighted:hover,
.react-datepicker__quarter-text--highlighted:hover,
.react-datepicker__year-text--highlighted:hover {
  background-color: #32be3f;
}
.react-datepicker__day--highlighted-custom-1,
.react-datepicker__month-text--highlighted-custom-1,
.react-datepicker__quarter-text--highlighted-custom-1,
.react-datepicker__year-text--highlighted-custom-1 {
  color: magenta;
}
.react-datepicker__day--highlighted-custom-2,
.react-datepicker__month-text--highlighted-custom-2,
.react-datepicker__quarter-text--highlighted-custom-2,
.react-datepicker__year-text--highlighted-custom-2 {
  color: green;
}
.react-datepicker__day--holidays,
.react-datepicker__month-text--holidays,
.react-datepicker__quarter-text--holidays,
.react-datepicker__year-text--holidays {
  position: relative;
  border-radius: 0.3rem;
  background-color: #ff6803;
  color: #fff;
}
.react-datepicker__day--holidays .holiday-overlay,
.react-datepicker__month-text--holidays .holiday-overlay,
.react-datepicker__quarter-text--holidays .holiday-overlay,
.react-datepicker__year-text--holidays .holiday-overlay {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}
.react-datepicker__day--holidays:hover,
.react-datepicker__month-text--holidays:hover,
.react-datepicker__quarter-text--holidays:hover,
.react-datepicker__year-text--holidays:hover {
  background-color: #cf5300;
}
.react-datepicker__day--holidays:hover .holiday-overlay,
.react-datepicker__month-text--holidays:hover .holiday-overlay,
.react-datepicker__quarter-text--holidays:hover .holiday-overlay,
.react-datepicker__year-text--holidays:hover .holiday-overlay {
  visibility: visible;
  opacity: 1;
}

.react-datepicker__day--selected {
    border-radius: 50%;
    background-color: #040404;
}

 .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}
.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
}

.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #bad9f1;
  color: rgb(0, 0, 0);
}
.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  background-color: #1d5d90;
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range) {
  background-color: rgba(33, 107, 165, 0.5);
}
.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range), .react-datepicker__year--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__year--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__year--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__month--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range),
.react-datepicker__year--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__year-text--in-selecting-range) {
  background-color: #f0f0f0;
  color: #000;
}
.react-datepicker__day--disabled,
.react-datepicker__month-text--disabled,
.react-datepicker__quarter-text--disabled,
.react-datepicker__year-text--disabled {
  cursor: default;
  color: #ccc;
}
.react-datepicker__day--disabled:hover,
.react-datepicker__month-text--disabled:hover,
.react-datepicker__quarter-text--disabled:hover,
.react-datepicker__year-text--disabled:hover {
  background-color: transparent;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}
.react-datepicker__input-container .react-datepicker__calendar-icon {
  position: absolute;
  padding: 0.5rem;
}

.react-datepicker__view-calendar-icon input {
  padding: 6px 10px 5px 25px;
}

.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
  position: relative;
}
.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}
.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}
.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  transform: rotate(135deg);
  right: -16px;
  top: 0;
}

.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}
.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}
.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover {
  background-color: #ccc;
}
.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}
.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}
.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

.react-datepicker__close-icon {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0 6px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}
.react-datepicker__close-icon::after {
  cursor: pointer;
  background-color: #216ba5;
  color: #fff;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  padding: 2px;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  content: "×";
}

.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}
.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}
@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}
.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

.react-datepicker__children-container {
  width: 13.8rem;
  margin: 0.4rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  height: auto;
}

.react-datepicker__aria-live {
  position: absolute;
  clip-path: circle(0);
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  white-space: nowrap;
}

.react-datepicker__calendar-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
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







 
`,W=v.forwardRef(({field:r,form:i},o)=>{const[p,n]=v.useState(""),c=v.useRef(null),w=Array.from({length:T(new Date)-1930},(b,C)=>1931+C),y=["January","February","March","April","May","June","July","August","September","October","November","December"],j=b=>{n(b),i.setFieldValue(r.name,b)};return v.useImperativeHandle(o,()=>({closeDatePicker:()=>{c.current&&c.current.setOpen(!1)}})),W.displayName="Calendar",e.jsxs(e.Fragment,{children:[e.jsx(ie,{selected:p,onChange:j,dateFormat:"dd/MM/yyyy",customInput:e.jsx(M,{}),ref:c,renderCustomHeader:({date:b,changeYear:C,changeMonth:Y,decreaseMonth:U,increaseMonth:X,prevMonthButtonDisabled:K,nextMonthButtonDisabled:Q})=>e.jsxs("div",{style:{margin:10,display:"flex",justifyContent:"center"},children:[e.jsx("button",{className:"calendar-button",type:"button",onClick:U,disabled:K,children:"<"}),e.jsx("select",{className:"calendar-select",value:T(b),onChange:({target:{value:l}})=>C(Number(l)),children:w.map(l=>e.jsx("option",{value:l,children:l},l))}),e.jsx("select",{className:"calendar-select",value:y[ne(b)],onChange:({target:{value:l}})=>Y(y.indexOf(l)),children:y.map(l=>e.jsx("option",{value:l,children:l},l))}),e.jsx("button",{className:"calendar-button",type:"button",onClick:X,disabled:Q,children:">"})]})}),e.jsx(le,{})]})});W.propTypes={field:d.object.isRequired,form:d.object.isRequired};const xe="/GachiClub/assets/params01-mobile-1x-12d31870.jpg",he="/GachiClub/assets/params01-mobile-2x-c2b9cc40.jpg",me="/GachiClub/assets/params01-tablet-1x-3b221efb.jpg",ge="/GachiClub/assets/params01-tablet-2x-28bc3a47.jpg",_e="/GachiClub/assets/params01-desktop-1x-656ed98c.jpg",ke="/GachiClub/assets/params01-desktop-2x-4cea8eb4.jpg",ue=t.h2`
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
`,be=t.p`
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
`,fe=t(G)`
  gap: 7px;
  display: inline;
`,N=t(Z)`
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
`,ve=t.button`
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
`,we=t.svg`
  color: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`,je=t.div`
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
`;t(L)`
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
`;t(L)`
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
`;t(L)`
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
`;t(L)`
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
`;const Ce=t.div`
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
      url(${_e});
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
          url(${ke});
      }
    }
  }
`,z=t.div`
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
`,B=t.div`
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
`;function E(r){const i=o=>{const p={...r.data,...o};r.next(p)};return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{}),e.jsx(ue,{children:"Get closer to your goals!"}),e.jsx(be,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),e.jsx(R,{initialValues:{...r.data,isValid:!1},onSubmit:i,validationSchema:Le,enableReinitialize:!0,children:({isValid:o,handleBlur:p,touched:n,errors:c})=>e.jsxs(fe,{children:[e.jsxs(ye,{className:"WrapperInput",children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(N,{className:"InputField",name:"height",placeholder:"Height",autoComplete:"off",onBlur:p})}),n.height&&c.height?e.jsxs(z,{className:"MessageStyleError",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),c.height]}):n.height?e.jsxs(B,{className:"MessageStyleSuccess",children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success Height"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(N,{className:"InputField",name:"currentWeight",placeholder:"Current Weight",autoComplete:"off",onBlur:p})}),n.currentWeight&&c.currentWeight?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),c.currentWeight]}):n.currentWeight?e.jsxs(B,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success Current Weight"]}):null]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(N,{className:"InputField",name:"desiredWeight",placeholder:"Desired Weight",autoComplete:"off",onBlur:p})}),n.desiredWeight&&c.desiredWeight?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),c.desiredWeight]}):n.desiredWeight?e.jsxs(B,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success Desired Weight"]}):null]}),e.jsxs("div",{children:[e.jsx(N,{className:"InputField",name:"birthday",placeholder:"Birthday",autoComplete:"off",onBlur:p,children:({field:w,form:y})=>e.jsx(W,{field:w,form:y,r:!0})}),n.birthday&&c.birthday?e.jsxs(z,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-error"})}),c.birthday]}):n.birthday?e.jsxs(B,{children:[e.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:e.jsx("use",{href:s+"#icon-checkbox-success"})}),"Success Birthday"]}):null]})]}),e.jsx(ve,{type:"submit",disabled:!o,children:"Next"}),e.jsx(we,{children:e.jsx("use",{xlinkHref:`${s}#icon-arrow`})})]})}),e.jsx(je,{children:e.jsx(ce,{})})]})}const Le=A().shape({height:S().required('Please enter your "Height"').typeError("Desired Weight must be a number").min(150,"Height must be 150 or more"),currentWeight:S().typeError("Current Weight must be a number").required('Please enter your "Current Weight"'),desiredWeight:S().typeError("Desired Weight must be a number").required('Please enter your "Desired Weight"'),birthday:ae().max(F(new Date,-18*365),"Must be over 18 years old").min(F(new Date,-90*365),"Must be under 90 years of age").required("Please enter your Birthday")});E.propTypes={data:d.object.isRequired,next:d.func.isRequired};const Ne="/GachiClub/assets/params02-mobile-1x-8484c34f.jpg",ze="/GachiClub/assets/params02-mobile-2x-48303bad.jpg",Be="/GachiClub/assets/params02-tablet-1x-58cdf03b.jpg",Se="/GachiClub/assets/params02-tablet-2x-f222104d.jpg",qe="/GachiClub/assets/params02-desktop-1x-e0483c02.jpg",$e="/GachiClub/assets/params02-desktop-2x-ae18da26.jpg",Re=t.h2`
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
`,Me=t.div`
  position: absolute;
  top: 130px;
  bottom: -20px;
  right: auto;
  width: 370px;
  height: 780px;
  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${Ne});
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
        url(${ze});
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
      url(${Be});
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
          url(${Se});
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
      url(${qe});
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
          url(${$e});
      }
    }
  }
`,We=t.div`
  padding: 20px;
`,D=t.p`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Te=t.div`
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
`,Fe=t.div`
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
`,De=t.div`
  display: flex;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Pe=t.div`
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
`,Ge=t.p``,Ze=t.ul`
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
`,P=t.button`
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
`,a=t.path`
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
`,_=t(Z)`
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
`,k=t.p`
  display: inline-block;
  vertical-align: middle;

  font-size: 16px;
  line-height: 24px;
`,$=t(L)`
  color: red;
`,I=r=>{const i=o=>{const p={...r.data,...o};r.next(p)};return e.jsxs(We,{children:[e.jsx(Me,{}),e.jsx("div",{children:e.jsx(Re,{children:"Get closer to your goals!"})}),e.jsx(R,{initialValues:r.data,onSubmit:i,validationSchema:He,children:({values:o})=>e.jsxs(G,{children:[e.jsxs(De,{children:[e.jsxs(Te,{children:[e.jsx(D,{children:"Blood"}),e.jsxs(Ae,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-1",children:[e.jsx(_,{type:"radio",id:"bl-1",name:"blood",value:"1"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"1"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-2",children:[e.jsx(_,{type:"radio",id:"bl-2",name:"blood",value:"2"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"2"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-3",children:[e.jsx(_,{type:"radio",id:"bl-3",name:"blood",value:"3"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"3"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"bl-4",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"bl-4",name:"blood",value:"4"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"4"})]}),e.jsx($,{name:"blood",component:"div",className:"error"})]})]}),e.jsxs(Fe,{children:[e.jsx(D,{children:"Sex"}),e.jsxs(Ee,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"sex-1",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"sex-1",name:"sex",value:"male"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Male"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"sex-2",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"sex-2",name:"sex",value:"female"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Female"})]})]}),e.jsx($,{name:"sex",component:"div",className:"error"})]})]}),e.jsxs(Pe,{className:"ContainerActivity",children:[e.jsx(Ge,{children:"Level Activity"}),e.jsxs(Ze,{children:[e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-1",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"activity-1",name:"levelActivity",value:"1"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Sedentary lifestyle (little or no physical activity)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-2",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"activity-2",name:"levelActivity",value:"2"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Light activity (light exercises/sports 1-3 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-3",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"activity-3",name:"levelActivity",value:"3"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-4",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"activity-4",name:"levelActivity",value:"4"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Very active (intense exercises/sports 6-7 days per week)"})]}),e.jsxs(x,{children:[e.jsxs(h,{htmlFor:"activity-5",className:"btn-radio",children:[e.jsx(_,{type:"radio",id:"activity-5",name:"levelActivity",value:"5"}),e.jsxs(m,{width:"20px",height:"20px",viewBox:"0 0 20 20",children:[e.jsx(g,{cx:"10",cy:"10",r:"9"}),e.jsx(a,{d:"M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z",className:"inner"}),e.jsx(a,{d:"M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z",className:"outer"})]})]}),e.jsx(k,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]}),e.jsx($,{name:"levelActivity",component:"div",className:"error"})]})]}),e.jsx(Oe,{className:"Back",children:e.jsx("use",{xlinkHref:`${s}#icon-back`})}),e.jsx(P,{type:"button",onClick:()=>r.prev(o),className:"ButtonNext_back",children:"Back"}),e.jsx(P,{type:"submit",className:"ButtonNext",children:"Next"}),e.jsx(Ie,{className:"Next",children:e.jsx("use",{xlinkHref:`${s}#icon-arrow`})})]})})]})},He=A().shape({blood:q().required("Please select a blood type"),sex:q().required("Please select a sex"),levelActivity:q().required("Please select a level of activity")});I.propTypes={data:d.object.isRequired,next:d.func.isRequired,prev:d.func.isRequired};const Ve="/GachiClub/assets/params03-desktop-1x-da8d6fb9.jpg",Je="/GachiClub/assets/params03-desktop-2x-e0a194c1.jpg",Ye="/GachiClub/assets/params03-tablet-1x-311bff4d.jpg",Ue="/GachiClub/assets/params03-tablet-2x-53f994fc.jpg",Xe="/GachiClub/assets/params03-mobile-1x-0dba25eb.jpg",Ke="/GachiClub/assets/params03-mobile-2x-54d7bfc9.jpg",Qe=u.div`
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
`,et=u.h2`
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
`,tt=u.p`
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
`,rt=u.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 530px;
  @media screen and (min-width: 768px) {
    margin-bottom: 470px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 240px;
  }
`,at=u.button`
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
`,it=u.button`
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
`,nt=u.div`
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 150px;
  }
`,ot=u.div`
  position: absolute;
  right: auto;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${Xe});
  background-size: 375px 812px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${Ke});
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
`,ct=u.svg`
  fill: #e6533c;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
  }
`,dt=u.div`
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
`;u.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -100%;
    left: 0;
  }
`;const O=r=>{const i=ee(),o=te(),p=async n=>{try{await i(re({email:r.data.email,name:r.data.name,password:r.data.password,height:r.data.height,currentWeight:r.data.currentWeight,desiredWeight:r.data.desiredWeight,birthday:r.data.birthday,blood:r.data.blood,sex:r.data.sex,levelActivity:r.data.levelActivity})),o("/diary"),r.next(n,!0)}catch(c){console.error("Error updating user:",c)}};return e.jsxs(e.Fragment,{children:[e.jsx(ot,{}),e.jsxs(nt,{children:[e.jsxs(Qe,{children:[e.jsx(et,{children:"Dear user"}),e.jsx(tt,{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."})]}),e.jsx(R,{initialValues:r.data,onSubmit:p,children:({values:n})=>e.jsxs(rt,{children:[e.jsx(at,{type:"button",onClick:()=>p(n),children:"Go"}),e.jsxs(it,{type:"button",onClick:()=>r.prev(n),children:[e.jsx(ct,{children:e.jsx("use",{href:s+"#icon-back"})}),"Back"]})]})})]}),e.jsx(dt,{children:e.jsx(de,{})})]})};O.propTypes={data:d.object.isRequired,next:d.func.isRequired,prev:d.func.isRequired};const pt="_progressBarOne_fbup7_1",st="_progressBarTwo_fbup7_14",lt="_progressBarThree_fbup7_25",xt="_progressBarPart_fbup7_43",ht="_completed_fbup7_48",mt="_wrap_fbup7_53",f={progressBarOne:pt,progressBarTwo:st,progressBarThree:lt,progressBarPart:xt,completed:ht,wrap:mt},H=({currentStep:r})=>{const i=r>=0;return e.jsx("div",{className:f.progressBarOne,children:e.jsx("div",{className:`${f.progressBarPart} ${i?f.completed:""}`})})},V=({currentStep:r})=>{const i=r>=1;return e.jsx("div",{className:f.progressBarTwo,children:e.jsx("div",{className:`${f.progressBarPart} ${i?f.completed:""}`})})},J=({currentStep:r})=>{const i=r>=2;return e.jsx("div",{className:f.progressBarThree,children:e.jsx("div",{className:`${f.progressBarPart} ${i?f.completed:""}`})})};H.propTypes={currentStep:d.number.isRequired};V.propTypes={currentStep:d.number.isRequired};J.propTypes={currentStep:d.number.isRequired};const gt={display:"flex",marginTop:"20px"},vt=()=>{const[r,i]=v.useState({height:"",currentWeight:"",desiredWeight:"",birthday:null,blood:"",sex:"",levelActivity:""}),[o,p]=v.useState(0),n=(y,j=!1)=>{const b={...r,...y};i(b),!j&&p(C=>C+1)},c=y=>{const j={...r,...y};i(j),p(b=>b-1)},w=[e.jsx(E,{next:n,data:r},"step1"),e.jsx(I,{next:n,prev:c,data:r},"step2"),e.jsx(O,{next:n,prev:c,data:r},"step3")];return e.jsxs("div",{children:[e.jsx("div",{children:w[o]}),e.jsxs("div",{style:gt,children:[e.jsx(H,{currentStep:o}),e.jsx(V,{currentStep:o}),e.jsx(J,{currentStep:o})]})]})};export{vt as default};
