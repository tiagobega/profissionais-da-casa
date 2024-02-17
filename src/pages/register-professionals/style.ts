import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const Header = styled(FlexBox)`
  ${({ theme }) => css`
    padding-bottom: 1.5rem;
    border-bottom: 3px solid black;
    width: 100%;

    h2 {
      width: 216px;
      font-size: 1.5rem;
      text-align: left !important;

      ${media.md`
        font-size: 2.25rem;
      `}
    }

    p {
      width: 172px;
      font-weight: 200;
      width: 100%;
      text-align: center;

      ${media.lg`
        text-align: left;
        font-size: 1.5rem;
        width: min-content;
      `}
    }
  `}
`;

export const ContentContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 618px;

    h3 {
      text-align: center;
      width: 100%;

      ${media.lg`
        text-align: left;
      `}
    }

    h2 {
      width: 100%;
      text-align: center;
    }

    .label {
      width: 100%;
      display: inline;
    }
  `}
`;

export const BodyContainer = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.base[200]};
  `}
`;
