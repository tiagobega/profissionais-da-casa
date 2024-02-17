import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { media } from "styles/utils";

export const ProfessionalsListPageContainer = styled(FlexBox)`
  ${() => css`
    max-width: 1170px;
    margin: 0 auto;
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    // width: 1170px;
    display: flex;
    gap: 1.5rem;
  `}
`;

export const TextContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    border: 6px solid ${theme.color.brand.orange};
    padding: 1rem;

    ${media.lg`
      padding: 2rem 3rem;
      width: 370px;
    `}

    h2 {
      font-size: 1.5rem;
      line-height: 100%;

      ${media.lg`
        font-size: 2.5rem;
      `}
    }
  `}
`;

export const RightContainer = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    flex-direction: column;
    display: none;

    ${media.lg`
      display: flex;
    `}
  `}
`;

export const InviteContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.secondary.blue};
    color: white;

    h2 {
      font-size: 2rem;
      justify-self: flex-start;
    }
  `}
`;
export const ButtonContainer = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 145px;
    height: 100%;
    button {
      height: 5rem;
      padding: 0.5rem 1rem;
      scale: 0.8;
    }
  `}
`;
