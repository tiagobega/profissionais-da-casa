import { forwardRef } from 'react'

import type { ForwardedRef } from 'react'
import { InputContainer } from './styles'
import { FieldError } from 'react-hook-form'

export interface FileInputProps extends React.ComponentProps<'input'> {
  label: string
  error?: FieldError
  disabled?: boolean
}

export const FileInput = forwardRef(
  (
    { label, error, ...rest }: FileInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <InputContainer>
          <label htmlFor={rest.name}>{label}</label>
          <input type="file" id={rest.name} {...rest} ref={forwardedRef} />
          {error && (
            <p aria-errormessage={error.message} role="alert">
              {error.message}
            </p>
          )}
        </InputContainer>
      </>
    )
  }
)
