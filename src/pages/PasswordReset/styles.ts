import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const RightPannel = styled(FlexBox)`
  ${({ theme }) => css`
    flex-grow: 1;
    min-width: 600px;
    .orange {
      background-color: ${theme.color.brand.orange};
      padding: 1.5rem;
      color: white;
      text-align: center;
      margin-bottom: 1.25rem;
    }
    .logo {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;
      h2 {
        font-size: 2rem;
      }
    }
    .divider {
      margin: 1rem 0;
      height: 1px;
      background-color: ${theme.color.base[300]};
      width: 100%;
    }
  `}
`;
