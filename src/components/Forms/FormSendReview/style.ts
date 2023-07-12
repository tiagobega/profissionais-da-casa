import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    margin-block: 1rem;
    margin-inline: auto;
    width: 100%;

    label {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    textarea {
      height: 10rem;
      width: 100%;
    }
  `}
`;

export const StarContainer = styled(FlexBox)`
  ${({ theme }) => css`
    * {
      cursor: pointer;
    }
    .cat-name {
      cursor: auto;
      width: 16rem;
    }
  `}
`;

export const ConfirmModal = styled(Modal)`
  ${({ theme }) => css`
    background-color: red;
  `}
`;
export const Information = styled(FlexBox)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.base[300]};
  `}
`;
