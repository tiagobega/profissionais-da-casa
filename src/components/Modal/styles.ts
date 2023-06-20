import { Button } from "components/Button";
import styled, { css } from "styled-components";

export const Container = styled.dialog<{ small?: boolean; bg?: string }>`
  ${({ theme, small, bg = "white" }) => css`
    position: fixed;
    top: 7.5rem;
    left: 50%;
    width: ${small ? "500px" : "770px"};
    min-height: 25rem;
    height: fit-content;
    max-height: calc(95vh - 7rem);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.2);
    border: none;
    transform: translateX(-50%);
    background-color: ${bg};
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
