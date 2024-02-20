import styled, { css } from "styled-components";
import { HEADER_SIZE, SCREEN_SIZE } from "styles/contants";
import { crossm, media, px, vw } from "styles/utils";

export interface RoleProps {
  role: "logout" | "admin" | "user" | "professional";
}

export const HeaderContainer = styled.header<RoleProps>`
  ${({ theme, role }) => css`
    width: 100%;
    height: ${px(HEADER_SIZE.MOBILE)};
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 30;
    position: sticky;
    top: 0px;
    background-color: white;
    background-color: ${role == "admin"
      ? theme.color.brand.yellowLight
      : "white"};
    padding: 0 2em;

    ${media.sm`
      height: ${px(HEADER_SIZE.MOBILE)};
      `}

    ${media.md`
      height: ${px(HEADER_SIZE.TABLET)};
    `}

    ${media.lg`
      height: ${px(HEADER_SIZE.DESKTOP)};
    `}

    .mobileLogin {
      ${media.md`
      display: none;
    `}
    }

    .logo {
      height: 100%;
    }

    .user {
      display: none;

      ${media.md`
        display: flex;
        flex-shrink: 0;
      `}
    }

    .sandwich {
      width: 40px;
      height: 40px;
      position: relative;
      background: transparent;
      border: none;

      ${media.md`
        display:none
      `}

      &:after,
      &:before {
        content: "";
        width: 80%;
        height: 3px;
        position: absolute;
        background: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 300ms cubic-bezier(0.66, 0, 0.33, 1);
      }

      &:after {
        top: 33%;
      }
      &:before {
        top: 66%;
      }

      &--open {
        &:after {
          top: 50%;
          transform: translate(-50%, -50%) rotateZ(45deg);
        }

        &:before {
          top: 50%;
          transform: translate(-50%, -50%) rotateZ(-45deg);
        }
      }
    }

    .list {
      width: 100vw;
      height: calc(100vh - ${HEADER_SIZE.MOBILE}px);
      position: fixed;
      display: flex;
      flex-grow: 1;
      top: ${px(HEADER_SIZE.MOBILE)};
      left: 0;
      background: ${theme.color.base[100]};
      flex-direction: column;
      transform: translateX(-100%);
      transition: all 300ms cubic-bezier(0.66, 0, 0.33, 1);

      &--open {
        transform: none;
      }

      ${media.md`
        position: static;
        transform: none;
        height: 100%;
        background: transparent;
      `}

      &__close {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      &__user {
        width: 100%;
        height: 120px;

        ${media.md`
          display: none;
        `}
      }

      nav {
        width: 100%;
        display: flex;
        order: 2;
        border-top: 1px solid black;

        ${media.md`
          border-top: none;
        `}

        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          ${media.md`
            flex-direction: row;
            gap: 1rem;
          `}

          li {
            padding: 2em;
            border-bottom: 1px solid black;
            align-item: center;
            display: flex;
            width: 100%;

            ${media.md`
              width: auto;
              padding: 0;
              border-bottom: none;
            `}
          }
        }
      }
    }

    .logo {
      cursor: pointer;
    }
  `}
`;

export const LoginContainer = styled.div<RoleProps>`
  ${({ theme, role }) => css`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    color: "black";
  `}
`;

export const LoginName = styled.p`
  ${() => css`
    min-width: max-content;
  `}
`;
