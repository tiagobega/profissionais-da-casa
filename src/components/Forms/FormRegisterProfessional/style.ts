import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
    .fieldsetDivider {
      padding-block: 2rem;
      border-bottom: 1px solid black;
    }
    fieldset {
      width: 100%;
    }
    fieldset:last-child {
      padding-block: 2rem;
      border-bottom: none;
    }
    legend {
      font-size: 1.2rem;
    }

    .disclaimer {
      font-size: 0.8rem;
    }
  `}
`;
export const FullWidthFormContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 618px;
  `}
`;
