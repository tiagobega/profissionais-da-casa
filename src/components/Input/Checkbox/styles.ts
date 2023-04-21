import styled, { css } from "styled-components";

export const CheckboxContainer = styled.fieldset`
  ${({ theme }) => css`
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`;
