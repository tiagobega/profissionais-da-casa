import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 1170px;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;
  `}
`

export const TextContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 370px;
    min-width: 370px;
    height: 365px;
    border: 6px solid ${theme.color.brand.orange};
    padding: 2rem 3rem;
    h2 {
      font-size: 2.5rem;
      line-height: 2.75rem;
    }
  `}
`

export const RightContainer = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    flex-direction: column;
  `}
`

export const InviteContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    height: 210px;
    background-color: ${theme.color.secondary.blue};
    color: white;
    div > div {
      width: 270px;
    }
    h2 {
      width: 240px;
      font-size: 2rem;
      justify-self: flex-start;
    }
  `}
`
export const ButtonContainer = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 145px;
    height: 100%;
    button {
      height: 5rem;
      padding: 0.5rem 1rem;
      scale: 0.8;
    }
  `}
`
