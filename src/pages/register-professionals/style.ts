import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";

export const Header = styled(FlexBox)`
  ${({ theme }) => css`
    padding-bottom: 1.5rem;
    border-bottom: 3px solid black;
    width: 618px;
    h2 {
      width: 216px;
      font-size: 2.25rem;
    }
    p {
      width: 172px;
      font-size: 1.5rem;
      font-weight: 200;
    }
  `}
`;

export const ContentContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 618px;
    height: 100%;
  `}
`;
export const LinkBackContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 42px;
    padding-left: 72px;
  `}
`;

export const BodyContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.base[200]};
    padding: 3rem;
    min-height: calc(100vh - 42px);
  `}
`;
