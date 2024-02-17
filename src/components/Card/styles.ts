import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    height: 400px;
    border: 5px solid ${theme.color.base[500]};
    display: flex;
    flex-direction: column;
  `}
`;
export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 150px;
    background-color: ${theme.color.brand.purple};
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      transition: ease-in-out ${theme.transition.long};
      &:hover {
        scale: 1.1;
      }
    }
  `}
`;
export const ProfileContainer = styled(FlexBox)`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.brand.purple};
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 4px solid ${theme.color.brand.purple};
    overflow: hidden;
    right: 1rem;
    top: 105px;
    object-fit: cover;
    img {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 240px;
  `}
`;

export const ButtonContainer = styled(FlexBox)`
  ${({ theme }) => css`
    height: 24px;
  `}
`;
