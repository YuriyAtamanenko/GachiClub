import { Field } from 'formik';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

export const PrimalField = styled(Field)`
  width: 100%;
  padding: 14px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: rgba(239, 237, 232, 0.6);
  margin-bottom: 8px;

  &:focus {
    color: var(--primary-text-color);
  }
`;

export const LabelStyled = styled.label`
  width: calc(50% - 7px);
  position: relative;
`;

export const TitleForm = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;

  &[id='calendar'] {
    color: transparent;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
`;

export const ContainerField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ChevronDown = styled.button`
  width: calc(100% - 16px);
  padding: 0;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 35px;
  right: 14px;

  & > img {
    margin-left: auto;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: rgba(239, 237, 232, 0.6);
  margin-bottom: 8px;
  &:focus {
    color: var(--primary-text-color);
  }
   &::-webkit-appearance {
    content: '';
    width: 10px;
    height: 10px;
    background-image: url('./chevron_down.svg');`;

export const DropdownHeight = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  position: absolute;
  overflow: scroll;
  background-color: var(--primary-bgc-color);
  z-index: 1;
  top: 70px;
  padding: 14px;

  & > ul > li {
    display: flex;
    justify-content: center;
  }
`;

export const ReactDatePickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  align-items: flex-start;
`;
