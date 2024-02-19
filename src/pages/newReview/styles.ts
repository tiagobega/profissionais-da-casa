import { FlexBox } from "components/FlexBox";
import { List } from "pages/professionalProfile/styles";
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
      width: 120px;
      height: 120px;
      border-radius: 50%;
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
    h2 {
      margin-bottom: 0.5rem;
    }
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
    flex-direction: column;
    gap: 3rem;

    ${media.md`
      flex-direction:row;
      gap:3rem;
      padding: 0 2rem;
    `}

    ${media.lg`
      padding: 0;
    `}
  `}
`;

export const LocationList = styled(List)`
  padding: 0;
  justify-content: center;
`;
