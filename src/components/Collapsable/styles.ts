import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export const CollapsibleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const TitleContainer = styled(FlexBox)<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.color.brand.yellowLight};
    z-index: 15;
    div {
      cursor: pointer;
    }
    svg {
      cursor: pointer;
      transition: ${theme.transition.short};
      &.toggle {
        rotate: ${isOpen ? '0' : '90deg'};
      }
      &:hover {
        transform: scale(1.25);
      }
    }
    button {
      &:hover {
        text-decoration: none;
      }
      &:focus {
        border: none;
      }
    }
  `}
`

export const BodyContainer = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.color.secondary.lighterYellow};
    z-index: 10;
    transform-origin: top center;
    display: grid;
    grid-template-rows: ${isOpen ? '0fr' : '1fr'};
    transition: grid-template-rows ${theme.transition.short};
    & > div {
      overflow: hidden;
    }
  `}
`
