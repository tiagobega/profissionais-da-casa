import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const StageCollapsableContent = styled(FlexBox)`
  ${({ theme }) => css`
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-bottom: 1rem;
    }
    li {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  `}
`;

export const AddButton = styled.button`
  ${({ theme }) => css`
    border: none;
    width: 100%;
    background-color: ${theme.color.brand.orange};
    text-align: start;
    padding: 1.25rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    transition: ${theme.transition.short};
    svg {
      transition: ${theme.transition.short};
    }
    &:hover {
      background-color: ${theme.color.hover.orange};
      svg {
        transform: scale(1.25);
      }
    }
    &:focus {
      border: none;
    }
  `}
`;
