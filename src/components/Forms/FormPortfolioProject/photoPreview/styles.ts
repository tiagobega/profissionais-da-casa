import styled, { css } from "styled-components";

export const ImageContainer = styled.div<{ isCover: boolean }>`
  ${({ theme, isCover }) => css`
    width: 80px;
    height: 80px;
    overflow: hidden;
    border: 2px solid ${isCover ? theme.color.brand.purple : "transparent"};
    position: relative;

    .delete {
      position: absolute;
      z-index: 10;
      top: 8px;
      right: 8px;
      cursor: pointer;
      &:hover {
        scale: 1.05;
      }
    }
    .coverButton {
      z-index: 5;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;

      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;
