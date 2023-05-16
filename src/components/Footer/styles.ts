import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem 11rem;
    background-color: ${theme.color.brand.purple};
    color: white;
    font-size: 1rem;
    font-weight: 300;
    h6 {
      font-size: 1.25rem;
    }
  `}
`
export const FooterContent = styled.footer`
  ${() => css`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  `}
`
