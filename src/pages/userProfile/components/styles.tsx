import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const ProjectContainer = styled(FlexBox)`
  ${({ theme }) => css`
    display: flex;
    width: 712px;
    margin: 0 auto;
  `}
`;
