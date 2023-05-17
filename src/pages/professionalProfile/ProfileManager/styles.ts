import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'
import { FullContainer, MarginContainer } from 'styles/commonComponents'

export const ManagerContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 235px;
  `}
`
