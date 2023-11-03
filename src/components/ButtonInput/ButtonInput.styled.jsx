import styled from '@emotion/styled';

export const Button = styled.button`
  position: absolute;
  top: 50%;
  /* right: ${({ right }) => right || '0'}; */
  right: 38px;
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

  @media screen and (min-width: 768px) {
    right: 9px;
  }
`;
