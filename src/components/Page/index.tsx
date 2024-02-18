import { FlexBox } from "components/FlexBox";
import { PageContainer } from "./styles";

export interface PageProps {
  children?: React.ReactNode;
  paddingX?: boolean;
  paddingY?: boolean;
  fullPage?: boolean;
}

export const Page = ({
  children,
  paddingX = true,
  paddingY = true,
  fullPage = false,
}: PageProps) => {
  return (
    <PageContainer fullPage={fullPage}>
      <FlexBox
        full
        direction="column"
        px={paddingX ? 1 : 0}
        py={paddingY ? 2 : 0}
        media={{ lg: { px: paddingX ? 2 : 0, py: paddingY ? 2 : 0 } }}
        gap={2}
      >
        {children}
      </FlexBox>
    </PageContainer>
  );
};
