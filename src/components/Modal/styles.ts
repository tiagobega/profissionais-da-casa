import { Button } from "components/Button";
import styled, { css } from "styled-components";

export const Container = styled.dialog<{ small?: boolean; bg?: string }>`
  ${({ theme, small, bg = "white" }) => css`
    width: 100vw;
    height: 100vh;
    transform: translateX(-100%);
    opacity: 0;
    top: 0;
    left: 0;
    max-width: 100vw;
    max-height: 100vh;
    transition: opacity 300ms cubic-bezier(0.66, 0, 0.33, 1), display 300ms;
    transition-behavior: allow-discrete;

    // position: fixed;
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

    &:focus {
      border: none;
    }
    &::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }
    transition: ${theme.transition.short};
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
