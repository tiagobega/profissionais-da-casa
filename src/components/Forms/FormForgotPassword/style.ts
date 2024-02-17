import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    p {
      width: 100%;
      text-align: center;

      ${media.lg`
        text-align: left;
      `}
    }
  `}
`;
