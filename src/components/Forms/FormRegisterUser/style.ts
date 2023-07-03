import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 20rem;
    display: relative;
    strong {
      font-size: 1.2rem;
    }
    .tooltip-list {
      list-style: circle;
    }
    input[type="text"],
    [type="email"],
    [type="password"] {
      width: 18rem;
    }
  `}
`;
export const StyledTooltip = styled(FlexBox)`
  ${({ theme }) => css`
    strong {
      width: 100%;
      text-align: center;
      padding: 0 1rem;
    }
    text-align: center;
  `}
`;
