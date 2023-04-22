import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }

    button {
      width: 100%;
      padding: 0.8rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid ${theme.color.base[300]};
      background-color: white;
      font-size: 0.875rem;
      color: ${theme.color.base[400]};
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  `}
`;
