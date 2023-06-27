import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const ScrollingList = styled(FlexBox)`
  ${({ theme }) => css`
    width: 809px;
    height: 410px;
    padding-right: 1rem;
    overflow-y: scroll;
  `}
`;
