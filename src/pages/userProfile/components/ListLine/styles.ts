import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { crossm, media, px, vw } from "styles/utils";

export const Line = styled(FlexBox)`
  ${({ theme }) => css`
    padding-right: 2rem;
    gap: 2rem;

    .name {
      width: 100%;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;

      gap: 0.5rem;
      ${media.md`
    flex-direction: row;
    gap: 2rem;
   
    `}
      button {
        text-align: left;
      }
      .date {
        font-style: italic;
        font-size: 0.75rem;
      }
    }
    .birth-date {
      width: 120px;
    }
    .email {
      width: 300px;
    }
    .phone {
      width: 130px;
    }
    .rating {
      width: 100px;
      display: flex;
      align-items: center;
    }
    &:hover {
      background-color: ${theme.color.secondary.lighterYellow};
    }
  `}
`;

export const ContactDetails = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    gap: 2rem;
  `}
`;
