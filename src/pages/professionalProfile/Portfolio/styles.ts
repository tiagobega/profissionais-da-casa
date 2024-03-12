import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const PortfolioFileContainer = styled(FlexBox)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.color.base[200]};
  `}
`;

export const PortfolioCard = styled(FlexBox)`
  ${({ theme }) => css`
    height: 6rem;
    padding-block: 1rem;
    img {
      object-fit: cover;
      height: 4rem;
      width: 6rem;
    }
  `}
`;
