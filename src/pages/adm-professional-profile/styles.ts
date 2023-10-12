import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Photo = styled.section`
  ${({ theme }) => css`
    width: 170px;
    height: 170px;
    overflow: hidden;
    border-radius: 50%;
    background-color: black;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;
