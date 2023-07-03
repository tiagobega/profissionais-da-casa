import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const RightPannel = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    min-width: 600px;
    height: 767px;
    .orange {
      background-color: ${theme.color.brand.orange};
      padding: 1.5rem;
      color: white;
      text-align: center;
      margin-bottom: 1.25rem;
    }
    .divider {
      margin: 1rem 0;
      height: 1px;
      background-color: ${theme.color.base[300]};
      width: 20rem;
    }
  `}
`;
