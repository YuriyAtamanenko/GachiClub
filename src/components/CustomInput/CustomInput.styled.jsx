import { styled } from 'styled-components';
export const StyledInput = styled.input`
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

  /* ${props => props.withoutВorder && 'border: none;'} */

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
`;

export const Icon = styled.svg`
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
`;
