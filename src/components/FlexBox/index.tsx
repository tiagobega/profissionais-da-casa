import React, { ReactNode } from "react";
import { FlexBoxContainer, FlexBoxStyleProps } from "./styled";
interface FlexBoxProps extends FlexBoxStyleProps {
  children: ReactNode;
  onClick?: () => void;
}
export const FlexBox: React.FC<FlexBoxProps> = ({
  direction = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  centralized = false,
  gap = 0,
  m = 0,
  mx = 0,
  my = 0,
  p = 0,
  px = 0,
  py = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  children,
  flex,
  full,
  grow,
  h,
  media,
  shrink,
  wrap,
  ...rest
}) => {
  return (
    <FlexBoxContainer
      p={p}
      px={px}
      py={py}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      gap={gap}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      centralized={centralized}
      flex={flex}
      full={full}
      grow={grow}
      h={h}
      media={media}
      shrink={shrink}
      wrap={wrap}
      {...rest}
    >
      {children}
    </FlexBoxContainer>
  );
};
