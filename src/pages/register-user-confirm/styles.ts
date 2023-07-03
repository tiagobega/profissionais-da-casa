import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const RightPannel = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    min-width: 600px;
    height: 767px;
    .title {
      font-weight: bold;
    }
  `}
`;
