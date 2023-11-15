import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const HomeContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 96px - 372px);
    background-color: ${theme.color.brand.purple};
    @media screen and (max-width: 850px) {
      .geometry {
        display: none;
      }
    }
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${() => css`
    width: 770px;
    color: white;
    h2 {
      font-size: 2rem;
    }
    p {
      width: 500px;
      text-align: center;
      font-size: 1.25rem;
    }
  `}
`;
