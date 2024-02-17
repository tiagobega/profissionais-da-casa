import styled, { css } from "styled-components";
import { media } from "styles/utils";

export interface ButtonContainerStyle {
  shadow?: boolean;
  color?: string;
  background?: string;
  variant?: ButtonVariants;
  width?: number;
  full?: boolean;
  small?: boolean;
}

export type ButtonVariants = "primary" | "outline" | "text";
export const ButtonContainer = styled.button<ButtonContainerStyle>`
  ${({
    theme,
    shadow,
    color = "black",
    variant = "primary",
    background,
    width,
    full,
    small,
    disabled,
  }) => css`
    display: flex;
    height: fit-content;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: ${
      variant == "text"
        ? 0
        : !small
        ? "0.75rem 1.25rem"
        : small && "0.25rem 0.7rem"
    };
    width: ${full ? "100%" : `${width}rem`};
    outline: none;
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    text-underline-offset: 8px;
    
    font-size: 1rem;

    background-color: ${
      variant != "primary"
        ? "transparent"
        : background
        ? background
        : theme.color.brand.yellowLight
    };
    color: ${color};
    ${
      variant != "text"
        ? `border: 3px solid ${variant == "primary" ? "black" : color}; `
        : `border:none;`
    }
    ${variant != "text" && shadow && `box-shadow: -3px 3px 0 black;`};
    ${disabled && "pointer-events:none"};
    ${disabled && "opacity: 0.5"};
    &:hover {
      transition: 200ms;
      color: ${variant != "text" ? "white" : color};
      background-color: ${variant != "text" && "black"};
      border-color: ${variant !== "text" && "black"};
      ${variant == "text" && "text-decoration: underline;"} svg {
        path {
          fill: ${variant !== "text" && "white"};
          transition: 200ms;
        }
      }
    }
    &:focus {
      transition: 200ms;
      ${variant != "text" && "box-shadow: -3px 3px 0 black;"}
      border: ${variant !== "text" ? "3px solid black" : "none"}}
    }
    &:active {
      transition: 200ms;
      ${variant != "text" && "box-shadow: -3px 3px 0 black;"}
      border: ${variant !== "text" ? "3px solid black" : "none"}}
    }
  `}
`;
