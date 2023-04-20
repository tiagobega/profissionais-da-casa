import { FlexBox } from 'components/FlexBox'
import { FieldError } from 'react-hook-form'
import {
  CheckboxContainer,
  InputContainer,
  RadioGroupContainer,
} from './styles'
import { FC, ForwardedRef, forwardRef } from 'react'
import { CheckboxProps, InputProps, RadioGroupProps } from './types'

export const Input = forwardRef(
  (
    { type = 'text', label, error, disabled }: InputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputContainer>
        <input
          type={type}
          placeholder={label}
          disabled={disabled}
          ref={forwardedRef}
        />
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </InputContainer>
    )
  }
)

export const RadioGroup = forwardRef(
  (
    { options, groupLegend, error, disabled, groupName }: RadioGroupProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <RadioGroupContainer role="radiogroup">
        <legend>{groupLegend}</legend>
        <FlexBox gap={2}>
          {options.map((option) => (
            <FlexBox key={option.label} gap={0.25} alignItems="center">
              <input
                type="radio"
                value={option.value}
                id={option.value}
                ref={forwardedRef}
                disabled={disabled}
                name={groupName}
              />
              <label htmlFor={groupName}>{option.label}</label>
            </FlexBox>
          ))}
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </RadioGroupContainer>
    )
  }
)

export const Checkbox = forwardRef(
  (
    { label, subject, error, disabled }: CheckboxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <CheckboxContainer role="radiogroup">
        <FlexBox key={label} gap={0.25} alignItems="center">
          <input
            type="checkbox"
            id={subject}
            ref={forwardedRef}
            disabled={disabled}
            name={subject}
          />
          <label htmlFor="subject">{label}</label>
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </CheckboxContainer>
    )
  }
)
