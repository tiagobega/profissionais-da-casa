import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";

export const Line = styled(FlexBox)`
  ${({ theme }) => css`
    padding-right: 2rem;

    .name {
      width: 300px;
    }
    .verified {
      width: 120px;
    }
    .role {
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
