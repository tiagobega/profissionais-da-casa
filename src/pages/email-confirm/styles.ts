import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const EmailConfirmationContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 96px - 372px);
    background-color: ${theme.color.brand.purple};
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 770px;
    color: white;
    backgroun-color: ${theme.color.base[100]};
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
