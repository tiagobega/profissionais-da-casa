import styled, { css } from 'styled-components'

export const IconContainer = styled.div`
  ${({ theme }) => css`
    padding: 0.25rem;
    color: black;
  `}
`
export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      text-align: center;
      line-height: 1.25;
    }
    .title {
      font-weight: 700;
    }
  `}
`
