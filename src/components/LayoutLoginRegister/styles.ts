import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const BlueField = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 45vw;
    height: 767px;
    background-color: ${theme.color.secondary.blue};
    padding: 120px 110px;
    .shape1 {
      position: absolute;
      top: 0;
      right: 0;
      rotate: -90deg;
    }
    .shape2 {
      position: absolute;
      bottom: 340px;
      right: 0;
    }
    .shape3 {
      position: absolute;
      bottom: 170px;
      right: 560px;
    }
    .shape4 {
      position: absolute;
      bottom: 170px;
      right: 0;
    }
    .shape5 {
      position: absolute;
      bottom: 0px;
      right: 220px;
    }
    .shape6 {
      position: absolute;
      bottom: 170px;
      right: 390px;
    }
    h2 {
      color: white;
      font-size: 40px;
      & @media screen and (max-width:1200px) {
        font-size: 32px;
      }
    }
  `}
`;

export const FullPage = styled(FullContainer)`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    gap: 10rem;
    align-items: flex-end;
    justify-content: space-between;
  `}
`;
