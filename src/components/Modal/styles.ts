import { Button } from 'components/Button'
import styled, { css } from 'styled-components'

export const Container = styled.dialog<{ small?: boolean }>`
  ${({ small }) => css`
    position: fixed;
    top: 7.5rem;
    left: 50%;
    width: ${small ? '500px' : '770px'};
    height: clamp(25rem, fit-content, calc(95vh - 7.5rem))
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.2);
    border: none;
    transform: translateX(-50%);
    &:focus {
      border: none;
    }
    &::backdrop {
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`
export const CloseButton = styled(Button)`
  ${({ theme }) => css`
    &:focus {
      border: none;
      text-decoration: underline;
    }
  `}
`
