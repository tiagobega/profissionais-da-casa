import { FlexBox } from "components/FlexBox";
import type { HeaderProps } from "./types";
import logo from "assets/images/logo.png";
import { HeaderContainer, LoginContainer, LoginName } from "./styles";
import { Button } from "components/Button";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "contexts/User";
import { SignOut } from "@phosphor-icons/react";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();

  const { user, professional } = useApi();

  const { me, logged, logout } = user;
  const { myProfessional } = professional;

  const getRole = () => {
    if (!me) return "logout";
    else return me.roleRel.name;
  };

  return (
    <HeaderContainer role={getRole()}>
      <FlexBox full justifyContent="space-between" alignItems="center" px={6}>
        <img src={logo} alt="cada casa" />

        <FlexBox justifyContent="space-between">
          <nav>
            <ul>
              {/* <li>
                <a href="#">Casa Fast</a>
              </li> */}
              <li>
                <Link to="/catalog">Profissionais da Casa</Link>
              </li>
              {/* <li>
                <a href="#">Seguros</a>
              </li> */}
              {/* <li>
                <a href="#">Blog</a>
              </li> */}
              {/* <li>
                <a href="#">Quem somos</a>
              </li> */}
            </ul>
          </nav>
        </FlexBox>
      </FlexBox>
      <LoginContainer role={getRole()}>
        {me && logged ? (
          <FlexBox
            alignItems="flex-start"
            gap={0.5}
            px={1.5}
            direction="column"
          >
            <LoginName>{me.name.split(" ")[0]}</LoginName>
            <FlexBox gap={0.5} alignItems="center">
              {getRole() == "admin" ? (
                <Button
                  variant="text"
                  onClick={() => navigate("/admin")}
                  color="white"
                >
                  Painel Admim
                </Button>
              ) : getRole() == "user" ? (
                <Button variant="text" onClick={() => navigate(`/profile`)}>
                  Meu perfil
                </Button>
              ) : (
                getRole() == "professional" && (
                  <Button
                    variant="text"
                    onClick={() => navigate(`/professional/${me.id}`)}
                  >
                    Meu perfil
                  </Button>
                )
              )}
              <Button small onClick={() => logout(() => navigate("/"))}>
                <SignOut size={20} weight="bold" />
              </Button>
            </FlexBox>
          </FlexBox>
        ) : (
          <Button variant="primary" onClick={() => navigate("/login")}>
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7389 9.70152C12.1184 8.73839 13.0208 7.1391 13.0208 5.32903C13.0208 2.38589 10.635 0 7.69181 0C4.74867 0 2.36278 2.38589 2.36278 5.32903C2.36278 7.13908 3.26521 8.73837 4.64469 9.7015L0 20.4279H15.3836L10.7389 9.70152Z"
                fill="black"
              />
            </svg>
            Login
          </Button>
        )}
      </LoginContainer>
    </HeaderContainer>
  );
};
export default Header;
