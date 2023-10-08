import { FlexBox } from "components/FlexBox";
import { Geometry } from "components/Geometry";
import styled, { css } from "styled-components";

export const FilterSearchContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    align-items: center;
    position: relative;
    div {
      width: 270px;
    }
    input {
      width: 270px;
    }
    .icon-button {
      position: absolute;
      left: 230px;
      font-size: 1.25rem;
    }
  `}
`;

export const FilterContent = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;
    margin-top: 2.5rem;
    background-color: ${theme.color.brand.purple};
    transition: ${theme.transition.short};
    animation: slideDown;
    animation-duration: ${theme.transition.short};

    .profession-list {
      width: 100%;
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }
    .category-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    button {
      border-width: 1px;
      padding: 0.5rem 1.5rem;
      &:focus {
        box-shadow: none;
        border-width: 1px;
      }
    }
  `}
  @keyframes slideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Container = styled.section`
  ${() => css`
    width: calc(100vw - 12rem);
    max-width: 1170px;
    margin: 0 auto;
  `}
`;
export const FilterContainer = styled.div`
  ${() => css`
    position: relative;
  `}
`;

export const Triangle = styled(Geometry)`
  ${({ theme }) => css`
    position: absolute;
    left: 350px;
    top: -32px;
    animation: slideDown;
    animation-duration: ${theme.transition.short};
    @keyframes slideDown {
      0% {
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  `}
`;

export const ProfileList = styled.section`
  ${() => css`
    width: 1170px;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  `}
`;
