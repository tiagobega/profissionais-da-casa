import styled, { css } from "styled-components";

export const RadioGroupContainer = styled.fieldset`
  ${({ theme }) => css`
    position: relative;
    fieldset {
      height: auto;
    }
    legend {
      font-size: 1rem;
      padding-bottom: 0;
    }
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`;
