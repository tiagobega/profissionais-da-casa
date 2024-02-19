import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { crossm, media, px, vw } from "styles/utils";

export const RightPannel = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    min-width: 600px;
    height: 767px;
    .title {
      font-weight: bold;
    }
  `}
`;

export const Container = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    margin-block: 2rem;
    padding: 1rem;
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${media.lg`
      gap:10rem;
      flex-direction:row;
      margin-inline: auto;
      margin-block: 16rem;
    `}
  `}
`;
