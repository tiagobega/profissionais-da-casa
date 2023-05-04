import * as SelectPrimitive from '@radix-ui/react-select'
import { Ref, forwardRef } from 'react'

import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { FlexBox } from 'components/FlexBox'
import {
  OptionsContainer,
  ScrollDownButton,
  ScrollUpButton,
  SelectContainer,
  StyledOption,
} from './styles'
import type { SelectProps } from './types'

export const Select = forwardRef(
  (props: SelectProps, innerRef: Ref<HTMLButtonElement>) => {
    const {
      placeholder = 'Escolha uma opção',
      label,
      error,
      options = [],
      name,
      value,
    } = props

    const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()

    return (
      <SelectContainer>
        {label && <label htmlFor={name}>{label}</label>}
        <FlexBox gap={0.5} alignItems="center">
          <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger
              ref={innerRef}
              id={name}
              className="text-md border-solid border-2 border-slate-500 px-2"
              onClick={(event: React.MouseEvent) => preventAutoClose(event)}
            >
              <SelectPrimitive.Value asChild>
                <span>
                  {options.find((option) => option.value == value)?.name ??
                    placeholder}
                </span>
              </SelectPrimitive.Value>
              <SelectPrimitive.Icon />
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
              <OptionsContainer className="border-solid border-2 border-slate-500 bg-white p-2 options-container">
                <ScrollUpButton>
                  <CaretUp />
                </ScrollUpButton>
                <SelectPrimitive.Viewport>
                  {options.map((option) => (
                    <StyledOption key={option.value} value={option.value}>
                      <SelectPrimitive.ItemText>
                        {option.name}
                      </SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator />
                    </StyledOption>
                  ))}
                  <SelectPrimitive.Separator />
                </SelectPrimitive.Viewport>
                <ScrollDownButton>
                  <CaretDown />
                </ScrollDownButton>
              </OptionsContainer>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </SelectContainer>
    )
  }
)
