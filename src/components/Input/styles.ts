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
  `}
`

export const RadioGroupContainer = styled.fieldset`
  ${({ theme }) => css`
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`
export const CheckboxContainer = styled.fieldset`
  ${({ theme }) => css`
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }

    button {
      width: 100%;
      padding: 0.8rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid ${theme.color.base[300]};
      background-color: white;
      font-size: 0.875rem;
      color: ${theme.color.base[400]};
    }
  `}
`
