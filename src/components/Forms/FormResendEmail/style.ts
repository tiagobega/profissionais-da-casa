import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
    display: relative;
    margin-top: 3rem;
    strong {
      font-size: 1.2rem;
    }
    input {
      width: 100%;
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
    .tooltip-list {
      list-style: circle;
      li {
        margin-top: 0.5rem;
      }
    }
    .icon-div {
      width: 2rem;
      padding-inline: 0.25rem;
    }
  `}
`;
