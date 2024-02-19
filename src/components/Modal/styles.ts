import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  ${({ open }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    ${open &&
    `
      pointer-events:all;
    `}
  `}
`;

export const CloseButton = styled(Button)`
  ${({ theme }) => css`
    &:focus {
      border: none;
      text-decoration: underline;
    }
  `}
`;

export const Background = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: black;
    transition: opacity 300ms;
    pointer-events: none;
    cursor: pointer;

    ${open &&
    `
      opacity: 0.5;
      pointer-events: all;
    `}
  `}
`;

export const Content = styled(FlexBox)<{
  small?: boolean;
  bg?: string;
  open?: boolean;
}>`
  ${({ theme, small, bg, open }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: all 400ms cubic-bezier(0.66, 0, 0.33, 1);
    background-color: ${bg || theme.color.base[200]};
    // top: 7.5rem;
    // left: 50%;
    // width: ${small ? "500px" : "770px"};
    // min-height: 25rem;
    // height: fit-content;
    // max-height: calc(95vh - 7rem);
    // box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.2);
    // border: none;
    // transform: translateX(-50%);
    // background-color: ${bg};

    ${open &&
    `
      transform: none;
    `};
  `}
`;
