import styled, { css } from 'styled-components'

export interface ButtonContainerStyle {
  shadow?: boolean
  color?: string
  variant?: 'primary' | 'outline' | 'text'
}

export const ButtonContainer = styled.button<ButtonContainerStyle>`
  ${({ theme, shadow, color = 'white', variant }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.75rem 1.25rem;
    max-height: 2.75rem;

    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    background-color: ${variant != 'primary' ? 'transparent' : color};
    color: ${variant == 'outline' ? color : 'black'};
    ${variant != 'text'
      ? `border: 3px solid ${variant == 'primary' ? 'black' : color}; `
      : `border:none;`}
    ${variant != 'text' && shadow && `box-shadow: -3px 3px 0 black;`}
    &:hover {
      transition: 200ms;
      color: white;
      background-color: black;
      svg {
        path {
          fill: white;
        }
      }
    }
  `}
`
