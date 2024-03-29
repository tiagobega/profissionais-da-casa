import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";

export const CollapsibleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const TitleContainer = styled(FlexBox)<{
  isOpen: boolean;
  variant: "project" | "faq" | "neutral";
}>`
  ${({ theme, isOpen, variant }) => css`
    background-color: ${variant == "faq"
      ? theme.color.brand.purple
      : variant == "project"
      ? theme.color.brand.yellowLight
      : theme.color.base[300]};
    z-index: 15;
    color: ${variant == "faq" ? "white" : "black"};
    div {
      cursor: pointer;
    }
    svg {
      cursor: pointer;
      transition: ${theme.transition.short};
      &.toggle {
        rotate: ${!isOpen ? "0" : "90deg"};
      }
      &:hover {
        transform: scale(1.25);
      }
    }
    button {
      color: ${variant == "faq" ? "white" : "black"};
      &:hover {
        text-decoration: none;
        color: ${variant == "faq" ? "white" : "black"};
      }
      &:focus {
        border: none;
      }
    }
  `}
`;

export const BodyContainer = styled.div<{
  isOpen: boolean;
  variant: "project" | "faq" | "neutral";
}>`
  ${({ theme, isOpen, variant }) => css`
    background-color: ${
      variant == "project"
        ? theme.color.secondary.lighterYellow
        : theme.color.base[200]
    }
    z-index: 10;
    transform-origin: top center;
    display: grid;
    grid-template-rows: ${!isOpen ? "0fr" : "1fr"};
    transition: grid-template-rows ${theme.transition.short};

    & > div {
      overflow: hidden;
    }
    * button {
      display: ${!isOpen ? "none" : "inline"};
    }
  `}
`;
