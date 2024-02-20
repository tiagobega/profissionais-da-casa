import { Link, useNavigate } from "react-router-dom";
import { SignOut, X } from "@phosphor-icons/react";
import cn from "classnames";

import {
  HeaderContainer,
  LoginContainer,
  LoginName,
  RoleProps,
} from "./styles";
import { useApi } from "contexts/User";
import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";

import logo from "assets/images/logo.png";
import { HeaderLink, headerLinks } from "constants/header";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { user } = useApi();

  const { me, logged, logout } = user;

  const currentRole = me ? me.roleRel.name : "logout";

  const headerLinkKeys = Object.keys(headerLinks);

  return (
    <HeaderContainer role={currentRole}>
      <FlexBox full justifyContent="space-between" alignItems="center" gap={2}>
        <div className="logo">
          <img
            src={logo}
            alt="cada casa"
            onClick={() => navigate("/")}
            className="logo"
          />
        </div>
        <div className={cn("list", { "list--open": open })}>
          <nav>
            <ul>
              {headerLinkKeys.map((headerLinkKey) => (
                <HeaderLinkComponent
                  key={headerLinkKey}
                  headerLinkKey={headerLinkKey as HeaderLink}
                  closeMenu={() => setOpen(false)}
                />
              ))}
            </ul>
          </nav>
          <div className="list__user">
            <HeaderUser role={currentRole} closeMenu={() => setOpen(false)} />
          </div>
        </div>
        {!me && (
          <div className="mobileLogin">
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
          </div>
        )}

        <button
          className={cn("sandwich", { "sandwich--open": open })}
          onClick={() => setOpen((oldOpen) => !oldOpen)}
        />
        <div className="user">
          <HeaderUser role={currentRole} closeMenu={() => setOpen(false)} />
        </div>
      </FlexBox>
    </HeaderContainer>
  );
};

const HeaderLinkComponent = ({
  headerLinkKey,
  closeMenu,
}: {
  headerLinkKey: HeaderLink;
  closeMenu: () => void;
}) => {
  const { external, link, name } = headerLinks[headerLinkKey];

  if (external) {
    return (
      <li>
        <a href={link} onClick={() => closeMenu()}>
          {name}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={link} onClick={() => closeMenu()}>
        {name}
      </Link>
    </li>
  );
};

interface HeadUserProps extends RoleProps {
  closeMenu: () => void;
}

const HeaderUser = ({ role, closeMenu }: HeadUserProps) => {
  const navigate = useNavigate();

  const { user } = useApi();
  const { me, logged, logout } = user;

  const logoutAndClose = () => {
    logout(() => navigate("/"));
    closeMenu();
  };

  return (
    <LoginContainer role={role}>
      {me && logged ? (
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          px={2}
          full
        >
          <FlexBox gap={0.5} direction="column">
            <LoginName>{me.name.split(" ")[0]}</LoginName>
            <FlexBox gap={0.5} alignItems="center" onClick={() => closeMenu()}>
              {role == "admin" ? (
                <Button variant="text" onClick={() => navigate("/admin")}>
                  Painel Admim
                </Button>
              ) : role == "user" ? (
                <Button variant="text" onClick={() => navigate(`/profile`)}>
                  Meu perfil
                </Button>
              ) : (
                role == "professional" && (
                  <Button
                    variant="text"
                    onClick={() => navigate(`/professional/${me.id}`)}
                  >
                    Meu perfil
                  </Button>
                )
              )}
            </FlexBox>
          </FlexBox>
          <Button small onClick={() => logoutAndClose()}>
            <SignOut size={20} weight="bold" />
          </Button>
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
  );
};

export default Header;
