import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
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
