import{n as i,P as e,j as s}from"./index-10ae6ddb.js";const c=i.button`
  position: absolute;
  top: 50%;
  right: ${({right:t})=>t||"0"};
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #efede8;
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #e6533c;
    scale: 1.15;
  }
`;function a({children:t,onClick:n,right:o,type:r}){return s.jsx(c,{onClick:n,right:o,type:r,children:t})}a.propTypes={onClick:e.func.isRequired,right:e.string,type:e.string,children:e.object.isRequired};export{a as B};
