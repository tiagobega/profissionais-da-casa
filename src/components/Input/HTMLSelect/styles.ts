import styled, { css } from 'styled-components'
export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    select {
      border: 2px solid ${theme.color.base[300]};
      cursor: pointer;
      background-color: white;
    }
    .icon-container {
      width: 50px;
      height: 47px;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    option {
      width: 100%;
    }
  `}
`
