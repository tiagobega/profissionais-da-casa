import { ReactNode } from 'react'
import { ButtonContainer, ButtonContainerStyle } from './style'

export interface ButtonProps extends ButtonContainerStyle {
  children: ReactNode
}
export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  shadow,
  variant,
}) => {
  return (
    <ButtonContainer color={color} shadow={shadow} variant={variant}>
      {children}
    </ButtonContainer>
  )
}
