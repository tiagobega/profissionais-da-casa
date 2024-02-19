import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const Profile = styled(FlexBox)`
  ${({ theme }) => css`
    font-size: 0.75rem;
    ${media.md`
    max-width: 470px;
    font-size: 1rem;
    `}
    &:first-child {
      ${media.md`
    align-items:flex-end
    `}
    }
    .photo-container {
      min-width: 120px;
      width: 120px;
      height: 170px;
      object-fit: fill;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      ${media.md`
      min-width: 170px;
      width: 170px;
      height: 170px;
    `}

      img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
      }
    }
  `}
`;

export const Title = styled(FlexBox)`
  ${({ theme }) => css`
    p {
      font-size: 0.75rem;
    }
    ${media.md`
    max-width: 470px;
    p {
      font-size: 1rem;
    }
    `}
  `}
`;

export const Header = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 970px;
    margin: 0 auto;
    padding: 0 2rem;
    flex-direction: column;
    gap: 3rem;

    ${media.md`
    flex-direction:row;
    justify-content:space-between;
    gap:3rem;
    padding: 0 2rem;
    `}
    ${media.lg`
    padding: 0;
    `}
  `}
`;
