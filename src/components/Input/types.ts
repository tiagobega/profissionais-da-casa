import { FieldError } from 'react-hook-form'

export interface InputProps {
  type?: 'text' | 'number' | 'date'
  label: string
  error: FieldError | undefined
  disabled?: boolean
}

export interface RadioGroupProps {
  groupLegend: string
  error: FieldError | undefined
  disabled?: boolean
  groupName: string
  options: RadioOptionType[]
}

export type RadioOptionType = {
  value: string
  label: string
}

export interface CheckboxProps {
  label: string
  subject: string
  error: FieldError | undefined
  disabled?: boolean
}
