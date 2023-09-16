import styled, { css } from "styled-components";

export const CheckboxContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`;
