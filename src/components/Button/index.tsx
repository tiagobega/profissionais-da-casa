import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariants } from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  shadow?: boolean
  color?: string
  background?: string
  variant?: ButtonVariants
  href?: string
  full?: boolean
  width?: number
  //width in REM - optional - default:fit-content
  small?: boolean
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
  background,
  shadow,
  variant,
  width,
  full,
  small = false,
  ...props
}) => (
  <ButtonContainer
    color={color}
    background={background}
    shadow={shadow}
    variant={variant}
    width={width}
    full={full}
    small={small}
    {...props}
  >
    {children}
  </ButtonContainer>
)
