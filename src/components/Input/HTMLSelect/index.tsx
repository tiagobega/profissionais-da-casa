import { ForwardedRef } from 'react'
import { InputContainer } from './styles'
import { FieldError } from 'react-hook-form'
import { CaretDown } from '@phosphor-icons/react'
import { forwardRef } from 'react'
import { NameValueType } from 'Models/models'

export interface HTMLSelectProps extends React.ComponentProps<'select'> {
  label?: string
  error?: FieldError
  disabled?: boolean
  options: NameValueType[]
}
export const Select = forwardRef(
  (
    { label, error, options, ...rest }: HTMLSelectProps,
    forwardedRef: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <InputContainer>
        {label && <label htmlFor={rest.name}>{label}</label>}
        <select id={rest.name} {...rest} ref={forwardedRef}>
          {options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.name}
            </option>
          ))}
        </select>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
        <div className="icon-container">
          <CaretDown />
        </div>
      </InputContainer>
    )
  }
)
