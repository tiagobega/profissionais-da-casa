import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Photo = styled.section`
  ${({ theme }) => css`
    width: 170px;
    height: 170px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    background-color: black;
    margin-top: 1rem;
  `}
`;
