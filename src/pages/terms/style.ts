import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const TermsContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    justify-content: space-between;
    align-items: center;

    header {
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 1;
      height: 64px;
      display: flex;
      align-items: center;
      padding-left: 1rem;
    }
  `}
`;

export const InformationContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.color.base[100]};
    padding: 0 0 72px;
    gap: 2rem;
    flex-grow: 1;

    hr {
      width: 100%;
    }

    .content {
      padding: 1rem 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .text {
      width: 100%;
      height: 100%;
      overflow-y: scroll;

      * {
        hyphenate: auto;
      }

      p {
        text-align: justify;
        margin-top: 1rem;
      }

      h3 {
        text-align: left;
        font-size: 16px;
        margin-bottom: 1rem;
      }
    }
  `}
`;
