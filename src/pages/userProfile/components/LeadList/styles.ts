import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { crossm, media, px, vw } from "styles/utils";

export const List = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    ${media.lg`
    width: 1171px;
    `}
  `}
`;
export const ListHeader = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.brand.yellowLight};
    padding-inline: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    ${media.md`
    flex-direction: row;
    gap: 1rem;
    align-items:center;
    justify-content:space-between;
    `}

    h3 {
      width: 500px;
    }
  `}
`;

export const ListContent = styled.ul`
  ${({ theme }) => css`
    min-height: calc(100vh - 96px - 392px - 280px);
    height: 320px;
    overflow-y: scroll;
    margin-bottom: 3rem;

    h3 {
      width: 500px;
    }
  `}
`;

export const ListLegend = styled(FlexBox)`
  ${({ theme }) => css`
    font-size: 12px;
    margin: 2rem 0 0.5rem;

    .name {
      width: 300px;
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
    }
  `}
`;
