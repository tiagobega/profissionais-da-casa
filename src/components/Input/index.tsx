import { FlexBox } from 'components/FlexBox'
import { Controller, FieldError } from 'react-hook-form'
import {
  CheckboxContainer,
  InputContainer,
  RadioGroupContainer,
  SelectContainer,
} from './styles'
import { FC, ForwardedRef, Ref, forwardRef, useEffect } from 'react'
import {
  CheckboxProps,
  InputProps,
  RadioGroupProps,
  SelectInputProps,
  SelectProps,
} from './types'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'

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
            <FlexBox key={option.label} gap={0.5} alignItems="center">
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
        <FlexBox key={label} gap={0.5} alignItems="center">
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

export const SelectInput = forwardRef(
  ({ ...props }: SelectInputProps, forwardedRef: Ref<HTMLButtonElement>) => {
    useEffect(() => {
      console.log(props.value)
    }, [])
    return (
      <SelectContainer role="radiogroup">
        <FlexBox gap={0.5} alignItems="center">
          <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger ref={forwardedRef}>
              {props.value ?? props.label}
              <SelectPrimitive.Value asChild />
              <SelectPrimitive.Icon>
                <CaretDown size={14} />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content>
                <SelectPrimitive.Viewport>
                  <SelectPrimitive.Group>
                    <SelectPrimitive.Label>Escolha um</SelectPrimitive.Label>
                    {props.options.map((op) => (
                      <SelectPrimitive.Item value={op.value} key={op.name}>
                        {op.name}
                        <SelectPrimitive.ItemIndicator />
                      </SelectPrimitive.Item>
                    ))}
                  </SelectPrimitive.Group>
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </FlexBox>
        {props.error && (
          <p aria-errormessage={props.error.message} role="alert">
            {props.error.message}
          </p>
        )}
      </SelectContainer>
    )
  }
)

export const Select: FC<SelectProps> = ({
  control,
  selectName,
  options,
  error,
  label,
}) => {
  return (
    <Controller
      control={control}
      name={selectName}
      render={({ field: { onChange, value, ref } }) => (
        <SelectInput
          onValueChange={onChange}
          value={value?.toString()}
          forwardedRef={ref}
          options={options}
          error={error}
          label={label}
        />
      )}
    />
  )
}
