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
    position: relative;

    .loading {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.32);
      display: "flex";
      position: absolute;
    }
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
