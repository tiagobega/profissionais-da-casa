import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariants } from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  shadow?: boolean
  color?: string
  variant?: ButtonVariants
  href?: string
}
export const Button: React.FC<ButtonProps> = (props) => {
  return props.href ? (
    <a href={props.href} target={'_blank'}>
      <ButtonBody {...props} />
    </a>
  ) : (
    <ButtonBody {...props} />
  )
}

const ButtonBody: React.FC<ButtonProps> = ({
  children,
  color,
  shadow,
  variant,
  ...props
}) => (
  <ButtonContainer color={color} shadow={shadow} variant={variant} {...props}>
    {children}
  </ButtonContainer>
)
