import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export interface TagContainerProps {
  white?: boolean
}

export const TagContainer = styled(FlexBox)<TagContainerProps>`
  ${({ white }) => css`
    padding: 0 0.5rem;
    color: ${white ? 'white' : 'black'};
    border: 1px solid ${white ? 'white' : 'black'};
    font-size: 14px;
    flex-wrap: wrap;
  `}
`
