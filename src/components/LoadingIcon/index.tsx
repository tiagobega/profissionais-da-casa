import { CircleNotch } from '@phosphor-icons/react'
import styled, { css } from 'styled-components'

export const LoadingIcon = () => {
  return <LoadingContainer />
}

const LoadingContainer = styled(CircleNotch)`
  ${({ theme }) => css`
    color: ${theme.color.base[300]};
    animation-name: loadingRotation;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
  `}
  @keyframes loadingRotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(3600deg);
    }
  }
`
