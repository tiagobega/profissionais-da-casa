import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.secondary.lighterYellow};
    margin-bottom: 3rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    margin-top: 2rem;
  `}
`;

export const ButtonContainer = styled(FlexBox)`
  ${({ theme }) => css`
    .inactive {
    }
  `}
`;
