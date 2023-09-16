import { Field } from 'formik';
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
`;

export const ContainerField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ChevronDown = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 35px;
  right: 14px;
`;
