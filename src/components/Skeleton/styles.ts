import styled, { css } from 'styled-components'
import { SkeletonProps } from '.'

export const SkeletonContainer = styled.div<SkeletonProps>`
  ${({ theme, variant, width, height, pulse }) => css`
    width: ${`${width}px`};
    height: ${variant == 'line'
      ? '1rem'
      : !height
      ? `${width}px`
      : `${height}px`};
    border-radius: ${variant != 'round' ? '8px' : '50%'};
    background-color: ${theme.color.base[400]};
    border: none;
    opacity: 0.2;
    box-shadow: none;
    animation-name: ${pulse ? 'pulse' : 'none'};
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    @keyframes pulse {
      0% {
        background-color: ${theme.color.base[400]};
      }

      50% {
        background-color: ${theme.color.base[500]};
        opacity: 0.18;
      }
      100% {
        background-color: ${theme.color.base[400]};
      }
    }
  `}
`
