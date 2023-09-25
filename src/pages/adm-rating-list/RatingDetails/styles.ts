import { FlexBox } from "components/FlexBox";
import styled, { css } from "styled-components";
import { EvaluationStatus } from "constants/evaluation";

const borderColor = (
  status: EvaluationStatus,
  approvedColor: string,
  refusedColor: string
) => {
  switch (status) {
    case "pending":
      return "black";
    case "approved":
      return approvedColor;
    case "refused":
      return refusedColor;
    default:
      return "black";
  }
};

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.secondary.lighterYellow};
    margin-bottom: 3rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    margin: 2rem 0;
  `}
`;

export const ContentBox = styled(FlexBox)<{ status: EvaluationStatus }>`
  ${({ theme, status }) => css`
    background-color: white;
    width: 770px;
    padding: 2rem;
    border: 3px solid
      ${borderColor(
        status,
        theme.color.secondary.lightTeal,
        theme.color.brand.orange
      )};
  `}
`;

export const ContentHeader = styled(FlexBox)`
  ${({ theme }) => css`
    border-bottom: 3px solid black;
    padding-bottom: 1.5rem;
    img {
      width: 55px;
      height: 55px;
      object-fit: cover;
      border-radius: 50%;
      overflow: hidden;
    }
  `}
`;

export const InfoContainer = styled(FlexBox)`
  ${({ theme }) => css`
    width: 250px;
    .contact {
      font-size: 13px;
    }
  `}
`;
