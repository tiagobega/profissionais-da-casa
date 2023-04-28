import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export const TextContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 30rem;
    h2 {
      font-size: 2rem;
    }
  `}
`
