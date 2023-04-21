import { createGlobalStyle, css } from 'styled-components'

const checkedIcon = '/assets/check.svg'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &:focus {
        border: 2px solid ${theme.color.brand.purple};
      }
    }
    body {
      background-color: ${theme.color.base[100]};
      color: ${theme.color.base[500]};
      -webkit-font-smoothing: antialiased;
      font-family: 'Lexend', sans-serif;
      text-decoration: none;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex-grow: 1;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    a:visited {
      color: inherit;
    }
    li {
      list-style-type: none;
    }

    button {
      cursor: pointer;

      font-family: 'Lexend', sans-serif;
    }

    label {
      font-size: 14;
      cursor: pointer;
    }

    fieldset {
      border: none;
      outline: none;
      padding: 1rem 0 0;
    }

    input {
      font-size: 0.875rem;
      padding: 0.8rem 1.25rem;
      outline: none;
      border: 2px solid ${theme.color.base[300]};
      font-family: 'Lexend', sans-serif;
      width: 100%;

      &[type='checkbox'],
      &[type='radio'] {
        appearance: none;
        width: 26px;
        height: 26px;
        cursor: pointer;
        background-clip: content-box;
        padding: 0;

        &:focus {
          outline: 2px solid black;
        }

        &:checked {
          background: black;
          border: 2px solid black;
        }
      }
      &[type='radio'] {
        border-radius: 50%;
      }
    }
  `}`
