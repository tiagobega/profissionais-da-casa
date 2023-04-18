import styled, { css } from 'styled-components'

export interface ButtonContainerStyle {
  shadow?: boolean
  color?: string
  variant?: ButtonVariants
}

export type ButtonVariants = 'primary' | 'outline' | 'text'

export const ButtonContainer = styled.button<ButtonContainerStyle>`
  ${({ theme, shadow, color = 'white', variant }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: ${variant != 'text' && '0.75rem 1.25rem'};
    max-height: 2.75rem;
    outline: none;
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    text-underline-offset: 8px;
    font-size: 1rem;
    background-color: ${variant != 'primary' ? 'transparent' : color};
    color: ${variant !== 'primary' ? color : 'black'};
    ${variant != 'text'
      ? `border: 3px solid ${variant == 'primary' ? 'black' : color}; `
      : `border:none;`}
    ${variant != 'text' && shadow && `box-shadow: -3px 3px 0 black;`}
    &:hover {
      transition: 200ms;
      color: ${color};
      background-color: ${variant != 'text' && 'black'};
      ${variant == 'text' && 'text-decoration: underline;'}
      svg {
        path {
          fill: white;
          transition: 200ms;
        }
      }
    }
  `}
`
