import styled, { css } from 'styled-components'
import * as SelectPrimitive from '@radix-ui/react-select'

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

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .options-container {
      background-color: red;
    }
    select {
      background-color: red;
    }
  `}
`
export const OptionsContainer = styled(SelectPrimitive.Content)`
  ${({ theme }) => css`
    background-color: white;
    border: 3px solid ${theme.color.base[200]};

    padding: 1rem 0;
  `}
`
export const StyledOption = styled(SelectPrimitive.Item)`
  ${({ theme }) => css`
    background-color: white;
    padding: 0.25rem 1rem;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${theme.color.base[500]};
      outline: 1px solid ${theme.color.base[500]};
      background-color: ${theme.color.base[500]};
      color: white;
      font-family: 700;
    }
  `}
`

export const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${({ theme }) => css`
    background-color: white;
    padding: 0.25rem 1rem;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;

    &:hover {
      border: 1px solid ${theme.color.base[500]};
      outline: 1px solid ${theme.color.base[500]};
      background-color: ${theme.color.base[500]};
      color: white;
      font-family: 700;
    }
  `}
`
export const ScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${({ theme }) => css`
    background-color: white;
    padding: 0.25rem 1rem;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;

    &:hover {
      border: 1px solid ${theme.color.base[500]};
      outline: 1px solid ${theme.color.base[500]};
      background-color: ${theme.color.base[500]};
      color: white;
      font-family: 700;
    }
  `}
`
