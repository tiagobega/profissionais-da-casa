import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const Container = styled.aside<{ open: boolean }>`
  ${({ open }) => css`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
    align-items: center;
    justify-content: center;

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
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: all 400ms cubic-bezier(0.66, 0, 0.33, 1);
    background-color: ${bg || theme.color.base[200]};

    .inner_content {
      overflow-y: auto;
    }

    ${media.lg`
      width: auto;
      max-width: 50vw;
      height: auto;
      max-height: 75vh;
      position: relative;
      transform: none;
      opacity: 0;
      box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.25);
      top: unset;
      left: unset;
      margin-top: 50px;

      ${
        open &&
        `
        margin-top: 0px;
          opacity: 1;
        `
      };

    `}

    ${open &&
    `
      transform: none;
      opacity: 1;
    `};
  `}
`;
