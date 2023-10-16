import styled, { css } from "styled-components";

interface RoleProps {
  role: "logout" | "admin" | "user" | "professional";
}

export const HeaderContainer = styled.header<RoleProps>`
  ${({ theme, role }) => css`
    width: 100%;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    background-color: white;
    background-color: ${role == "admin"
      ? theme.color.brand.yellowLight
      : "white"};
    nav ul {
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      button {
        font-size: 0.875rem;
      }
    }
    .logo {
      cursor: pointer;
    }
  `}
`;

export const LoginContainer = styled.div<RoleProps>`
  ${({ theme, role }) => css`
    width: 17rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    color: ${role == "admin" ? "white" : "black"};
    background-color: ${role == "logout"
      ? "white"
      : role == "admin"
      ? theme.color.brand.purple
      : role == "professional"
      ? theme.color.base[200]
      : role == "user" && theme.color.brand.orange};
  `}
`;
export const LoginName = styled.p`
  ${() => css`
    min-width: max-content;
  `}
`;
