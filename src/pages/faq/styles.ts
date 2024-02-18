import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { HEADER_SIZE, SCREEN_SIZE } from "styles/contants";
import { crossm, media, px, vw } from "styles/utils";

export const FAQContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 96px - 372px);
    margin: 1rem auto;

    ${media.lg`
    width: 1171px;
    `}
  `}
`;

export const GeometrySideContainer = styled.section`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;

    ${media.lg`
      display:flex
    `}
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${() => css`
    width: 100%;
    padding-inline: 1rem;
    border: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    ${media.lg`
    width: 770px;
    height: 680px;
    `}
    h2 {
      font-size: 2rem;
      width: 100%;
      text-align: center;
    }
    .questions {
      width: calc(100% - 3rem);
      border: 1px solid blue;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-y: scroll;
      ${media.lg`
      max-height: 520px;
      `}
    }
  `}
`;

export const CollapsibleInformation = styled.div`
  ${() => css`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    hr {
      border: 1px solid black;
      margin-top: 1rem;
    }
    .question-item {
      h4 {
        margin-bottom: 0.5rem;
      }
    }
  `}
`;
