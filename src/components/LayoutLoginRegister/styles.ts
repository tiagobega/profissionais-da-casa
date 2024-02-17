import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { SCREEN_SIZE } from "styles/contants";
import { crossm, media, px, vw } from "styles/utils";

const LOGIN_HEADER_SIZE = {
  MOBILE: 60,
  DESKTOP: 80,
};

const SHAPE_SIZE = 170;

export const BlueField = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background-color: ${theme.color.secondary.blue};
    padding: 2rem;
    overflow: hidden;

    ${media.lg`
      width: ${vw(crossm(668, SCREEN_SIZE.DESKTOP))};
      padding: 0;
      padding-left: 7rem;
      flex-shrink: 0;
      min-height: 700px;
    `}

    ${media.xl`
      width: ${vw(crossm(668, SCREEN_SIZE.DESKTOP_BIG))};
    `}

    h2 {
      position: relative;
      z-index: 100;
      color: white;

      ${media.lg`
        padding: 0;
        font-size: ${vw(crossm(32, SCREEN_SIZE.DESKTOP))};
        padding-top: ${vw(crossm(129, SCREEN_SIZE.DESKTOP))};
        width: ${vw(crossm(370, SCREEN_SIZE.DESKTOP))};
        font-size: ${vw(crossm(40, SCREEN_SIZE.DESKTOP))};
        line-height: 112.5%;
      `}

      ${media.xl`
        font-size: ${px(32)};
        padding-top: ${px(129)};
        width: ${px(370)};
        font-size: ${px(40)};
      `}
    }

    .shape {
      position: absolute;
      z-index: 10;
      display: none;

      ${media.lg`
        display: block;
      `}
    }

    .shape--1 {
      top: 0;
      right: 0;
      rotate: -90deg;
      z-index: 11;
    }

    .shape--2 {
      bottom: ${px(SHAPE_SIZE * 2)};
      right: 0;
    }

    .shape--3 {
      bottom: ${px(SHAPE_SIZE * 1)};
      right: ${px(SHAPE_SIZE * 3)};
    }

    .shape--4 {
      bottom: ${px(SHAPE_SIZE * 1)};
      right: 0;
    }

    .shape--5 {
      bottom: 0;
      right: ${px(SHAPE_SIZE * 1)};
    }

    .shape--6 {
      bottom: ${px(SHAPE_SIZE * 1)};
      right: ${px(SHAPE_SIZE * 2)};
    }

    .shape--7 {
      bottom: 0;
      right: ${px(SHAPE_SIZE * 2)};
    }
  `}
`;

export const BlankField = styled.div`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media.lg`
    width: 50%;
    padding: 0 0 2rem;
    min-height: calc(100vh - ${LOGIN_HEADER_SIZE.DESKTOP}px);
  `}

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const FullPage = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const LoginHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${LOGIN_HEADER_SIZE.MOBILE}px;
  padding: 0 1rem;

  ${media.md`
    height: 80px;
    padding: 0 2rem;
  `}

  ${media.lg`
    height: ${LOGIN_HEADER_SIZE.DESKTOP}px;
    padding: 0 7rem;
  `}
`;

export const LoginMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${media.lg`
    flex-direction: row;
  `}
`;
