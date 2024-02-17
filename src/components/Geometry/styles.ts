import styled, { css } from "styled-components";
import { GeometryStyleProps } from ".";
import { crossm, media, vw } from "styles/utils";
import { SCREEN_SIZE, ScreenSize } from "styles/contants";

export const Shape = styled.div<GeometryStyleProps>`
  ${({ triangle = false, angle = 0, width, height = width, ...props }) => css`
    rotate: ${`${angle}deg`};

    ${triangle
      ? mountTriangle({ triangle, height, width, ...props })
      : mountSquare({ triangle, height, width, ...props })}
  `}
`;

const mountTriangle = ({
  width,
  height = width,
  color,
  sizes,
  responsive,
}: GeometryStyleProps) => css`
  border-top: ${width / 2}px solid transparent;
  border-left: ${height / 2}px solid transparent;
  border-right: ${width / 2}px solid ${color};
  border-bottom: ${height / 2}px solid ${color};

  ${responsive &&
  sizes &&
  `
    ${mountResponsiveTriangle({
      width,
      height,
      color,
      screenSize: SCREEN_SIZE.MOBILE,
    })}
    
    ${
      sizes.sm &&
      media.sm`${mountResponsiveTriangle({
        width: sizes.sm,
        height: sizes.sm,
        color,
        screenSize: SCREEN_SIZE.MOBILE_BIG,
      })}`
    }
    
    ${
      sizes.md &&
      media.md`${mountResponsiveTriangle({
        width: sizes.md,
        height: sizes.md,
        color,
        screenSize: SCREEN_SIZE.TABLET,
      })}`
    }
    
    ${
      sizes.lg &&
      media.lg`${mountResponsiveTriangle({
        width: sizes.lg,
        height: sizes.lg,
        color,
        screenSize: SCREEN_SIZE.DESKTOP,
      })}`
    }
    
    ${
      sizes.xl &&
      media.xl`
        border-top: ${width / 2}px solid transparent;
        border-left: ${height / 2}px solid transparent;
        border-right: ${width / 2}px solid ${color};
        border-bottom: ${height / 2}px solid ${color};
      `
    }
    
  `}
`;

const mountSquare = ({
  width,
  height = width,
  color,
  responsive,
}: GeometryStyleProps) => css`
  background-color: ${color};

  width: ${width}px;
  height: ${height}px;

  ${responsive &&
  `
    ${mountResponsiveTriangle({
      width,
      height,
      color,
      screenSize: SCREEN_SIZE.MOBILE,
    })}
  `}
`;

const mountResponsiveTriangle = ({
  width,
  height = width,
  color,
  screenSize,
}: {
  width: number;
  height: number;
  color: string;
  screenSize: ScreenSize;
}) => css`
  border-top: ${vw(crossm(width / 2, screenSize))} solid transparent;
  border-left: ${vw(crossm(height / 2, screenSize))} solid transparent;
  border-right: ${vw(crossm(width / 2, screenSize))} solid ${color};
  border-bottom: ${vw(crossm(height / 2, screenSize))} solid ${color};
`;
