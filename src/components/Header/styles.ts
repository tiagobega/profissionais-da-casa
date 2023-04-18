import styled, { css } from 'styled-components'

interface LoginContainer {
  role: 'logout' | 'admin' | 'customer' | 'professional'
}

export const HeaderContainer = styled.header`
  ${({ theme, role }) => css`
    width: 100vw;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    background-color: white;
    nav ul {
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      button {
        font-size: 0.875rem;
      }
    }
  `}
`

export const LoginContainer = styled.div<LoginContainer>`
  ${({ theme, role }) => css`
    width: 17rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${role == 'logout'
      ? 'transparent'
      : role == 'admin'
      ? theme.color.brand.purple
      : role == 'professional'
      ? theme.color.base[200]
      : role == 'customer' && theme.color.brand.orange};
  `}
`
