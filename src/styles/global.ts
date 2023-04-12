import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background-color: ${theme.color.base[100]};
      color: ${theme.color.base[500]};
      -webkit-font-smoothing: antialiased;
      font-family: 'Lexend', sans-serif;
      text-decoration: none;
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    a:visited {
      color: inherit;
    }
  `}
`
