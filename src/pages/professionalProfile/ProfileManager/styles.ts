import styled, { css } from "styled-components";
import { FlexBox } from "components/FlexBox";
import { FullContainer, MarginContainer } from "styles/commonComponents";
import { media } from "styles/utils";

export const ManagerContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 0.5rem;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    ${media.lg`
    grid-template-columns: 1fr;
    `}

    button {
      font-size: 12px;
      width: 100%;
    }
  `}
`;

export const ManagerModalContainer = styled(FlexBox)``;
