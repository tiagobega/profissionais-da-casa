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
export const CheckboxContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    p {
      position: absolute;
      font-size: 0.75rem;
      color: red;
    }
  `}
`
