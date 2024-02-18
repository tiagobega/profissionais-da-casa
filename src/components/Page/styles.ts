import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { PageProps } from ".";

export const PageContainer = styled.div<PageProps>`
  ${({ fullPage }) => css`
    width: 100%;
    margin: 0 auto;
    position: relative;
    ${!fullPage && `max-width: 1280px;`}
  `}
`;
