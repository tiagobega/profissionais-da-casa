import styled, { css } from "styled-components";
import { ProjectCardProps } from ".";
import { FlexBox } from "components/FlexBox";

export const ProjectCardContainer = styled(FlexBox)<{
  projectStatus: "not-started" | "ongoing" | "complete";
}>`
  ${({ theme, projectStatus }) => css`
    border: 4px solid black;
    background-color: white;
    max-width: 684px;
    *.status {
      color: ${projectStatus == "not-started"
        ? theme.color.brand.orange
        : projectStatus == "complete"
        ? theme.color.secondary.lightTeal
        : "black"};
      font-weight: bold;
    }
  `}
`;
