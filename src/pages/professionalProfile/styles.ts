import styled, { css } from 'styled-components'
import { FlexBox } from 'components/FlexBox'
import { FullContainer, MarginContainer } from 'styles/commonComponents'

export const HeaderContainer = styled(MarginContainer)`
  ${({ theme }) => css`
    .profile-img {
      width: 180px;
      height: 180px;
      background-color: black;
      object-fit: cover;
    }
    .description-text {
      width: 470px;
    }

    .category-list {
      padding: 2rem 0 1rem;
      display: flex;
      gap: 0.5rem;
      li {
        border: 1px solid black;
        font-size: 14px;
        padding: 0.125rem 0.5rem;
      }
    }
  `}
`

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
`

export const GalleryContainer = styled(FullContainer)`
  ${({ theme }) => css`
    position: relative;
    .gallery-bg {
      width: 100%;
      height: 400px;
      background-color: black;
      overflow: hidden;
    }
    .gallery-img {
      width: 100%;
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
`

export const ReviewSection = styled(MarginContainer)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    h3 {
      color: ${theme.color.secondary.lightTeal};
      font-size: 2rem;
    }
  `}
`
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
`
export const RatingContainer = styled(FlexBox)`
  ${() => css`
    .rating {
      font-size: 5rem;
      font-weight: bolder;
    }
    .quantity {
      font-size: 2.5rem;
      font-weight: 400;
    }
  `}
`
