import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { FullContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lg`
      align-items: start;
    `}

    p {
      text-align: center;
      
      ${media.lg`
        text-align: left;
      `}
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin: 1rem 0;
      align-items: center;

      ${media.lg`
        align-items: start;
        
      `}
    }
  `}
`;
