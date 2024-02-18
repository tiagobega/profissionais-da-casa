import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const Card = styled.li`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${theme.color.brand.purple};
    padding: 2rem;
    height: 12rem;
    color: white;
    // max-width: 33%;
    transition: 200ms;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
    h3 {
      font-size: 1.5rem;
    }
  `}
`;

export const CardList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);

    ${media.lg`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`;
