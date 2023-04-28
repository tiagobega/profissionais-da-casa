import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export const CollapsibleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const TitleContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.brand.yellowLight};
    z-index: 15;
    div {
      cursor: pointer;
    }
    svg {
      cursor: pointer;
      transition: ${theme.transition.short};
      &:hover {
        transform: scale(1.25);
      }
    }
  `}
`

export const BodyContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.secondary.lighterYellow};
    animation-name: slideDownAndFade;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
  `}
  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-5px);
      z-index: 10;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      z-index: 10;
    }
  }
`
