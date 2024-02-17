import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.brand.purple};
    padding: 1rem;
    color: white;
    font-size: 1rem;
    font-weight: 300;

    ${media.lg`
      padding: 2rem 11rem;
    `}
  `}
`;
export const FooterContent = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const FooterHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const FooterHeaderContainer = styled.div`
  padding: 0.5rem 0.75rem;
  width: 50%;
  display: flex;
  height: auto;
  align-items: center;

  &:nth-child(odd) {
    border-right: 1px solid white;
    justify-content: flex-end;
  }

  &:nth-child(even) {
    border-left: 1px solid white;
    justify-content: flex-start;
  }

  img {
    padding: 0.5rem 0;
  }

  h6 {
    font-size: 1.25rem;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.md`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const FooterSocial = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3rem 0;
`;
