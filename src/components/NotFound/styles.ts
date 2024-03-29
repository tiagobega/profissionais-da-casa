import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { media } from "styles/utils";

export const TextContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: auto;
    text-align: center;
    h2 {
      font-size: 1.5rem;
    }
    ${media.md`
      width: 30rem;
      text=align:left;
        h2 {
          font-size: 2rem;
        }
    `}
  `}
`;
export const Container = styled(FlexBox)`
  ${({ theme }) => css`
    padding-inline: 2rem;
    img {
      display: none;
      ${media.md`
      display: block;
    `}
    }
  `}
`;

export const ContentContainer = styled(FlexBox)`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    ${media.lg`
      flex-direction: row;
      gap: 0;
      align-items:flex-end;
    `}
  `}
`;
