import styled, { css } from "styled-components";
export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    input {
      background-color: white;
      border: 2px solid ${theme.color.base[300]};
      padding: 0.75rem 20px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      &:hovere &::-webkit-file-upload-button {
        border: 0;
        background: transparent;
        font-size: 1rem;
        cursor: pointer;
      }
    }

    input[type="file"] {
      cursor: pointer;
    }

    p {
      position: absolute;
      bottom: -1.1rem;
      left: -2px;
      font-size: 0.75rem;
      color: red;
      cursor: pointer;
    }

    label {
      display: flex;
      width: 100%;
      align-items: center;
      z-index: 100;
      cursor: pointer;
    }
  `}
`;
