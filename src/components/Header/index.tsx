import { FlexBox } from 'components/FlexBox'
import type { HeaderProps } from './types'
import logo from 'assets/images/logo.png'
import { HeaderContainer, LoginContainer } from './styles'
import { Button } from 'components/Button'
import { useTheme } from 'styled-components'
import keyhole from 'assets/images/keyhole.svg'

const Header = () => {
  const { color } = useTheme()

  return (
    <HeaderContainer>
      <FlexBox full justifyContent="space-between" alignItems="center" px={6}>
        <img src={logo} alt="cada casa" />

        <FlexBox justifyContent="space-between">
          <nav>
            <ul>
              <li>Casa Fast</li>
              <li>Profissionais da Casa</li>
              <li>Seguros</li>
              <li>Blog</li>
              <li>Quem somos</li>
            </ul>
          </nav>
        </FlexBox>
      </FlexBox>
      <LoginContainer role="customer">
        <Button variant="primary" color={color.brand.yellowLight}>
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7389 9.70152C12.1184 8.73839 13.0208 7.1391 13.0208 5.32903C13.0208 2.38589 10.635 0 7.69181 0C4.74867 0 2.36278 2.38589 2.36278 5.32903C2.36278 7.13908 3.26521 8.73837 4.64469 9.7015L0 20.4279H15.3836L10.7389 9.70152Z"
              fill="black"
            />
          </svg>
          Login
        </Button>
      </LoginContainer>
    </HeaderContainer>
  )
}
export default Header
