import styled, { css } from 'styled-components'
import { GeometryStyleProps } from '.'

export const Shape = styled.div<GeometryStyleProps>`
  ${({ angle = 0, color, triangle = false, width, height = width }) => css`
    width: ${!triangle ? `${width}px` : 0};
    height: ${!triangle ? `${height}px` : 0};

    background-color: ${triangle ? 'transparent' : color};
    border-top: ${triangle && `${width / 2}px solid transparent`};
    border-left: ${triangle && `${height / 2}px solid transparent`};
    border-right: ${triangle && `${width / 2}px solid ${color}`};
    border-bottom: ${triangle && `${height / 2}px solid ${color}`};

    rotate: ${`${angle}deg`};
  `}
`
