import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const GraySection = styled.section<{ isOwn: boolean }>`
  ${({ theme, isOwn }) => css`
    width: 100%;
    padding: 2rem 0;
  `}
`;

export const HeaderContainer = styled(FlexBox)<{ isOwn: boolean }>`
  ${({ theme, isOwn }) => css`
    margin-top: 1rem;

    ${media.lg`
      // height: 257px;
    `}
  `}
`;

export const InformationContainer = styled(FlexBox)`
  ${({ theme }) => css`
    display: flex;
    // flex-grow: 1;
    // width: 50rem;

    h2 {
      font-size: 1.2rem;
      line-height: 1;

      ${media.lg`
        font-size: 2rem;
        text-align: left;
      `}
    }

    p {
      font-size: 0.75rem;
      text-align: justify;
      hyphens: auto;
      ${media.lg`
        font-size: 1.2rem;
      `}
    }
  `}
`;

export const ProfilePicture = styled(FlexBox)`
  ${({ theme }) => css`
    width: 110px;
    height: 110px;
    border: 5px solid white;
    position: relative;
    border-radius: 50%;
    background-color: ${theme.color.brand.purple};
    overflow: hidden;

    ${media.lg`
    width: 166px;
    height: 166px;
      border: 10px solid white;
    `}

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      z-index: 5;
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
      font-size: 0.75rem;
      display: flex;
      flex-direction: column;

      &:hover {
        background-color: rgba(0, 0, 0, 0.75);
        color: white;
      }
    }

    .userIcon {
      width: 75%;
      height: 75%;
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

export const GallerySection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    padding: 2rem 0;
    border-top: 2px solid ${theme.color.base[200]};
    border-bottom: 2px solid ${theme.color.base[200]};

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

export const TextsContainer = styled(FlexBox)``;

export const ButtonsContainer = styled(FlexBox)`
  width: 100%;

  button {
    ${media.to_md`
      width: 100%;
    `}
  }

  ${media.lg`
    width: 30%;
  `}
`;

export const FeaturesContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    margin-top: 1rem;
    grid-template-columns: 1fr;

    > div {
      p {
        ${media.lg`
          text-align:center;
        `}
      }

      h3 {
        ${media.lg`
          width: 100%;
          text-align: center;
        `}
      }

      &:not(:last-child) {
        ${media.lg`
            border-right: 2px solid ${theme.color.base[200]};
          `}
      }
    }
    ${media.lg`
      margin-top: 2rem;
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding: 0 0.5rem;

  li {
    font-size: 12px;
    border: 1px solid black;
    padding: 0.125rem 0.5rem;

    ${media.lg`
      font-size: 14px;
    `}
  }
`;

export const TagList = styled(List)``;
export const LocationList = styled(List)``;
export const SocialList = styled(List)``;

export const ActionsContainer = styled(FlexBox)`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 10;
    background-color: ${theme.color.brand.pinkLight};

    ${media.lg`
      position: relative;
      background-color: transparent;
      width: 100%;
      max-width: 300px;
    `}

    button, a {
      width: 100%;
    }
  `}
`;

export const GalleryNotFound = styled(FlexBox)`
  h2 {
    width: 100%;
    max-width: 800px;
    text-align: center;
    font-size: 1rem;
    line-height: 1;

    ${media.lg`
        font-size: 1.5rem;
        text-align: left;
      `}
  }
`;

export const Gallery = styled.div``;
