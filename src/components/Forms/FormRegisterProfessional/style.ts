import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
    .fieldsetDivider {
      padding-block: 2rem;
      border-bottom: 1px solid black;
    }
    fieldset:last-child {
      padding-block: 2rem;
      border-bottom: none;
    }
    legend {
      font-size: 1.2rem;
    }
    input[type="text"],
    [type="email"],
    [type="password"] {
      width: 18rem;
    }
  `}
`;
export const FullWidthFormContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 618px;
  `}
`;
