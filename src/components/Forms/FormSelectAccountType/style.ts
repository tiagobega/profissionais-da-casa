import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: relative;

    strong {
      font-size: 1.2rem;
    }

    .tooltip-list {
      list-style: circle;
    }

    p {
      text-align: center;

      ${media.lg`
        text-align: left;
      `}
    }

    legend {
      width: 100%;
      text-align: center;

      ${media.lg`
        text-align: left;
      `}
    }
  `}
`;
export const StyledTooltip = styled(FlexBox)`
  ${({ theme }) => css`
    display: none;

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
