import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { crossm, media, px, vw } from "styles/utils";

export const HeaderWrapper = styled(FullContainer)`
  ${({ theme }) => css`
    overflow-y: hidden;
    ${media.md`
    height: 334px;
    `}
  `}
`;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.color.brand.orange};
    z-index: 10;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;

    ${media.md`
      flex-direction: row;
      justify-content: flex-start;
      height: 334px;
      padding: 2rem 5rem;
      gap:6rem;
    `}
  `}
`;

export const PhotoColumn = styled(FlexBox)`
  ${({ theme }) => css`
    width: 166px;
    height: 100%;
    min-width: 166px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
    .round-picture {
      position: relative;
      width: 166px;
      height: 166px;
      min-width: 166px;
      min-height: 166px;
      border: 10px solid white;
      border-radius: 50%;
      background-color: ${theme.color.brand.purple};
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        z-index: 5;
      }
    }
    p {
      font-weight: 700;
      text-align: center;
    }

    .name {
      font-size: 20px;
    }
    .pictureButton {
      z-index: 10;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 200ms;
      border-radius: 50%;
      color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
    .userIcon {
      width: 8rem;
      height: 8rem;
      position: absolute;
      opacity: 0.5;
    }
  `}
`;
export const ProjectContainer = styled(FlexBox)`
  ${({ theme }) => css`
    display: flex;
    width: 100vw;
    padding: 0 2rem;
    ${media.md`
    padding: 0 2rem;
    
    `}
  `}
`;

export const InfoColumn = styled(FlexBox)`
  z-index: 15;
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
    /* display: none; */
    position: relative;
    top: 0;
    width: 100%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.3;
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
    ${media.md`
    display: flex;
    top: -334px;
    width: 100%;
    height: 334px;
    opacity: 1;
    `}
  `}
`;
