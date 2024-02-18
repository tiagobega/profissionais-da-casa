import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";

export const GrayContainer = styled.section<{ isOwn: boolean }>`
  ${({ theme, isOwn }) => css`
    width: 100%;
    background-color: ${isOwn ? theme.color.base[200] : theme.color.base[100]};
    padding: 2rem 0;
  `}
`;

export const HeaderContainer = styled(MarginContainer)<{ isOwn: boolean }>`
  ${({ theme, isOwn }) => css`
    height: 275px;
    margin-top: 1rem;
    background-color: ${!isOwn ? "transparent" : theme.color.base[200]};
    padding: 2rem;

    .description-text {
      width: 470px;
    }

    .category-list {
      padding: 2rem 0 0;
      display: flex;
      gap: 0.5rem;
      li {
        border: 1px solid black;
        font-size: 14px;
        padding: 0.125rem 0.5rem;
      }
    }
  `}
`;
export const InformationContainer = styled(FlexBox)`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    width: 50rem;
  `}
`;

export const ProfilePicture = styled(FlexBox)`
  ${({ theme }) => css`
    
      position: relative;
      width: 166px;
      height: 166px;
      border: 10px solid white;
      border-radius: 50%;
      background-color: ${theme.color.brand.purple};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        z-index: 5;
      }
    }
    p {
      font-weight: 700;
      text-align: center;
    }

    .name {
      font-size: 20px;
    }
    .pictureButton {
      z-index: 10;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 200ms;
      border-radius: 50%;
      color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
    .userIcon {
      width: 8rem;
      height: 8rem;
      position: absolute;
      opacity: 0.5;
    }
  `}
`;

export const RatingHeader = styled(FlexBox)`
  ${({ theme }) => css`
    .rating {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      gap: 0.5rem;
      p {
        font-weight: bold;
      }
      span {
        font-size: 1rem;
      }
    }
  `}
`;

export const GalleryContainer = styled(FullContainer)`
  ${({ theme }) => css`
    position: relative;
    .gallery-bg {
      width: 100%;
      height: 400px;
      background-color: black;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    .gallery-img {
      width: 100%;
      max-width: 1366px;
      height: 100%;
      object-fit: cover;
      animation: slideRight;
      animation-duration: ${theme.transition.short};
    }
    .gallery-info {
      width: 300px;
      height: 400px;
      padding: 2rem;
      position: absolute;
      background-color: ${theme.color.base[200]};
      top: 0;
      left: 58%;
    }
    .carousel-btn {
      width: 1rem;
      height: 1rem;
    }
    @keyframes identifier slideRight {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  `}
`;

export const ReviewSection = styled(MarginContainer)`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 0;
    gap: 4rem;
    h3 {
      color: ${theme.color.secondary.lightTeal};
      font-size: 2rem;
    }
  `}
`;
export const ReviewContainer = styled(FlexBox)`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 570px;
    .review-item {
      width: 270px;
      p {
        margin-bottom: 1rem;
      }
    }
  `}
`;
export const RatingContainer = styled(FlexBox)`
  ${() => css`
    .rating {
      font-size: 3rem;
      font-weight: bolder;
    }
    .quantity {
      font-size: 1.5rem;
      font-weight: 400;
    }
  `}
`;
