import styled, { css } from "styled-components";
export const InputContainer = styled.div<{ width?: number }>`
  ${({ theme, width }) => css`
    width: ${width ? width : "100%"};
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  `}
`;
