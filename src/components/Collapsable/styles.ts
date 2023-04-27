import styled, { css } from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FlexBox } from 'components/FlexBox'

export const CollapsibleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`

export const TitleContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.brand.yellowLight};
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
  `}
`
