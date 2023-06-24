import { createGlobalStyle, css } from "styled-components";

const checkedIcon = "/assets/check.svg";

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
      font-family: "Lexend", sans-serif;
      text-decoration: none;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      &.modal-open {
        overflow: hidden;
      }
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
    nav {
      li {
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        transition: ${theme.transition.short};
        &:hover {
          background-color: ${theme.color.brand.yellowLight};
        }
      }
    }

    button {
      cursor: pointer;

      font-family: "Lexend", sans-serif;
      &:focus {
        border: 3px solid ${theme.color.brand.purple};
      }
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

    input,
    select,
    textarea {
      font-size: 0.875rem;
      padding: 0.8rem 1.25rem;
      outline: none;
      border: 2px solid ${theme.color.base[300]};
      font-family: "Lexend", sans-serif;
      width: 100%;
      min-height: 47px;
      resize: none;
      &[type="checkbox"],
      &[type="radio"] {
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
      &[type="radio"] {
        border-radius: 50%;
      }
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      border-radius: 0;
    }
  `}`;
