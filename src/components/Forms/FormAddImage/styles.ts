import styled, { css } from "styled-components";

export const ImgPreview = styled.img`
  ${({ theme }) => css`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `}
`;
