import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const HeaderWrapper = styled(FullContainer)`
  ${({ theme }) => css`
    height: 334px;
    overflow-y: hidden;
  `}
`;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    height: 334px;
    width: 100%;
    background-color: ${theme.color.brand.orange};
    z-index: 10;
    padding: 0 auto;
    & > div {
      width: ${theme.sizes.pageWidth};
      margin-inline: auto;
    }
  `}
`;

export const PhotoColumn = styled(FlexBox)`
  ${({ theme }) => css`
    width: 166px;
    height: 100%;
    .round-picture {
      width: 166px;
      height: 166px;
      border: 10px solid white;
      border-radius: 50%;
      background-color: black;
    }
    p {
      font-weight: 700;
      text-align: center;
    }

    .name {
      font-size: 20px;
    }
  `}
`;
export const ProjectContainer = styled(FlexBox)`
  ${({ theme }) => css`
    display: flex;
    width: 712px;
    margin: 0 auto;
  `}
`;

export const InfoColumn = styled(FlexBox)`
  ${({ theme }) => css`
    height: 100%;

    p {
      font-weight: 700;
    }

    .name {
      font-size: 20px;
    }
  `}
`;

export const GeometryContainer = styled.header`
  ${({ theme }) => css`
    position: relative;
    top: -334px;
    width: 100%;
    height: 334px;
    z-index: 0;
    pointer-events: none;
    .triangle1 {
      position: absolute;
      bottom: 80px;
      right: 340px;
      width: 170px;
      height: 170px;
    }
    .triangle2 {
      position: absolute;
      bottom: 80px;
      right: 170px;
      width: 170px;
      height: 170px;
    }
    .triangle3 {
      position: absolute;
      bottom: 0px;
      right: 510px;
      width: 80px;
      height: 80px;
    }
    .triangle4 {
      position: absolute;
      bottom: 0px;
      right: 260px;
      width: 80px;
      height: 80px;
    }
    .triangle5 {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 80px;
      height: 80px;
    }
  `}
`;
