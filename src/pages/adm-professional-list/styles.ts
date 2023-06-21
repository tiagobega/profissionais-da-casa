import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    h2 {
      font-size: 2.25rem;
    }
  `}
`;
