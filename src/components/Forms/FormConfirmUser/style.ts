import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 30rem;
    display: relative;
    strong {
      font-size: 1.2rem;
    }
    input {
      letter-spacing: 0.55rem;
      font-size: 2rem;
      width: 12rem;
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
