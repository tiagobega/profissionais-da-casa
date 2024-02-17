import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { media } from "./utils";

export const MarginContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.pageWidth};
    margin: 0 auto;

    /* border: 1px solid red; */
  `}
`;

export const FullContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
export const CarouselButton = styled.div<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: ${theme.transition.short};
    background-color: ${isActive
      ? theme.color.brand.orange
      : theme.color.base[400]};
    &:hover {
      box-shadow: 0 0 0 2px
        ${isActive ? theme.color.brand.orange : theme.color.base[400]};
    }
  `}
`;
