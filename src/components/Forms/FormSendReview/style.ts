import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    border-top: 3px solid ${theme.color.secondary.tealDark};
    padding-block: 2rem;
    margin-block: 3rem;
    margin-inline: auto;

    label {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    textarea {
      height: 10rem;
      width: 970px;
    }
  `}
`;

export const StarContainer = styled(FlexBox)`
  ${({ theme }) => css`
    * {
      cursor: pointer;
    }
  `}
`;

export const ConfirmModal = styled(Modal)`
  ${({ theme }) => css`
    background-color: red;
  `}
`;
