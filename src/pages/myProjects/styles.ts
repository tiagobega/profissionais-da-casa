import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";

export const Content = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.base[200]};
    margin-bottom: 3rem;
    input {
      width: 100%;
    }
  `}
`;

export const ListContainer = styled.section`
  ${({ theme }) => css`
    width: 870px;
    margin: 0 auto;
  `}
`;
