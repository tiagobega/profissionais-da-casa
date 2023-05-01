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

export const BodyContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.secondary.lighterYellow};
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
    z-index: 10;
    padding: 1rem 2rem;
    transform-origin: top center;
  `}
  @keyframes slideDown {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`
