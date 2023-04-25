import { Geometry } from 'components/Geometry'
import styled, { css } from 'styled-components'

interface ShapesStyledProps {
  direction: 'cw' | 'ccw'
}

export const LoadingWrapper = styled.div`
  ${() => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: 'white';
    p {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
    }
    z-index: 99;
  `}
`

export const LoadingShapes = styled(Geometry)<ShapesStyledProps>`
  ${({ direction }) => css`
    animation-name: ${direction};
    animation-iteration-count: infinite;
    animation-duration: 8000ms;
    z-index: 100;

    @keyframes cw {
      0% {
        transform: rotate(0);
      }
      40% {
        transform: rotate(1085deg);
      }
      47% {
        transform: rotate(1080deg);
      }
      50% {
        transform: rotate(1080deg);
      }
      90% {
        transform: rotate(-5deg);
      }
      97% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(0);
      }
    }
    @keyframes ccw {
      0% {
        transform: rotate(0);
      }
      40% {
        transform: rotate(-1085deg);
      }
      47% {
        transform: rotate(-1080deg);
      }
      50% {
        transform: rotate(-1080deg);
      }
      90% {
        transform: rotate(5deg);
      }
      97% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(0);
      }
    }
  `}
`
