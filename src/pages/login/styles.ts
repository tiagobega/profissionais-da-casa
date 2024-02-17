import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { media } from "styles/utils";

export const RightPannel = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.md`
      max-width: 400px;
      align-items: center;
    `}

    ${media.lg`
      align-items: start;
      max-width: 400px;
    `}

    .orange {
      background-color: ${theme.color.brand.orange};
      padding: 1rem;
      color: white;
      text-align: center;
      margin-bottom: 1.25rem;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      ${media.md`
        font-size: 1rem;
        padding: 1.5rem;
      `}
    }

    .logo {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;

      h2 {
        font-size: 2rem;
      }
    }

    .divider {
      margin: 1rem 0;
      height: 1px;
      background-color: ${theme.color.base[300]};
      width: 100%;
    }

    .content {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      ${media.lg`
        align-items: start;
      `}
    }
  `}
`;
