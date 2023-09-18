import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    background-color: ${theme.color.brand.purple};
    padding: 2rem 3rem;
    height: 12rem;
    color: white;
    max-width: 33%;
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
