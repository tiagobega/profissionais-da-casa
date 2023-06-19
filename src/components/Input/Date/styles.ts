import styled, { css } from "styled-components";
export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
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
