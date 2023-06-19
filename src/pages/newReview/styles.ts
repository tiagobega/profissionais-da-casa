import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Profile = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 470px;
    .photo-container {
      width: 170px;
      height: 170px;
      object-fit: fill;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const Title = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 470px;
  `}
`;

export const Header = styled(FlexBox)`
  ${({ theme }) => css`
    max-width: 970px;
    margin: 0 auto;
  `}
`;
