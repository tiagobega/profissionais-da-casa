import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 96px - 372px);
    background-color: ${theme.color.brand.purple};
    padding: 1rem;
    position: relative;
    min-height: 80vh;

    .geometry {
      position: absolute;
      display: none;
      top: 50%;
      transform: translateY(-50%);

      &--right {
        left: 0;
      }

      &--left {
        right: 0;
      }

      ${media.md`
        display: block;
      `}
    }

    @media screen and (max-width: 850px) {
      .geometry {
        display: none;
      }
    }
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${() => css`
    width: 100%;
    color: white;
    max-width: 770px;

    h2 {
      font-size: 2rem;
      text-align: center;
    }
    p {
      width: 100%;
      max-width: 500px;
      text-align: center;
      font-size: 1.25rem;
    }
  `}
`;
