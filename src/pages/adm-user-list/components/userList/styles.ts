import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const List = styled.section`
  ${({ theme }) => css`
    width: 1171px;
    display: flex;
    flex-direction: column;
  `}
`;
export const ListHeader = styled(FlexBox)`
  ${({ theme }) => css`
    background-color: ${theme.color.brand.yellowLight};
    padding-inline: 2rem;

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
    .role {
      width: 120px;
    }
    .verified {
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
