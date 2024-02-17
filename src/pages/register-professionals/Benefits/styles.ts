import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Card = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 500px;

    header {
      background-color: ${theme.color.brand.purple};
      width: 100%;
      padding: 1rem;
      color: white;
      text-align: center;
    }
  `}
`;

export const Benefit = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${theme.color.base[100]};
    align-items: center;
    border-bottom: 2px solid ${theme.color.brand.purple};

    .icon-container {
      width: 20px;
    }
  `}
`;
