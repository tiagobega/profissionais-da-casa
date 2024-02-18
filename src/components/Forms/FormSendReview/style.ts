import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const Form = styled.form`
  ${({ theme }) => css`
    margin-block: 1rem;
    margin-inline: auto;
    width: 100%;
    padding: 0 1rem;
    max-width: 1024px;

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
    flex-direction: column;
    align-items: center;
    ${media.md`
    flex-direction:row;
    align-items: center;
    justify-content:flex-start
    `}
    * {
      cursor: pointer;
    }
    .cat-name {
      cursor: auto;

      ${media.md`
      width: 16rem;
    `}
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
    font-size: 0.75rem;
    ${media.md`
    font-size: 1rem;
    `}
  `}
`;
