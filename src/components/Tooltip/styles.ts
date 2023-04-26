import styled, { css } from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`

interface ContentStyleProps {
  maxWidth?: number
  side: 'top' | 'bottom'
  align: 'start' | 'center' | 'end'
}

export const Content = styled(Tooltip.Content)<ContentStyleProps>`
  ${({ theme, maxWidth = 170, align }) => css`
    position: relative;
    background-color: ${theme.color.brand.yellowLight};
    padding: 1rem 1.5rem;
    font-size: 14px;
    max-width: ${maxWidth}px;
    width: ${maxWidth}px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-side='top'] {
      &[data-align='end'] {
        animation-name: slideRightAndFade;
        transform: translateY(0) translateX(-45px);
      }

      &[data-align='start'] {
        animation-name: slideLeftAndFade;
        transform: translateY(0) translateX(45px);
      }
      &[data-align='center'] {
        animation-name: slideDownAndFade;
      }
    }

    &[data-side='bottom'] {
      &[data-align='end'] {
        animation-name: slideRightAndFade;
        transform: translateX(-45px) translateY(0);
      }

      &[data-align='start'] {
        animation-name: slideLeftAndFade;
        transform: translateX(45px) translateY(0);
      }
      &[data-align='center'] {
        animation-name: slideUpAndFade;
      }
    }
  `}
  @keyframes slideRightAndFade {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(-45px);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(45px);
    }
  }
  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Arrow = styled.div<{ inverted: boolean }>`
  ${({ theme, inverted }) => css`
    fill: ${theme.color.brand.yellowLight};

    position: absolute;
    ${!inverted && 'left: 1rem;top: -28px; '}
    ${inverted && 'left: -2.75rem;top: -28px;'}
  `}
`
