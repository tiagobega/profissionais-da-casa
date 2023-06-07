import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { ReactElement, ReactNode, useState } from "react";
import { BodyContainer, CollapsibleContainer, TitleContainer } from "./styles";
import { Button } from "components/Button";

export interface CollapsibleProps {
  title: string | ReactNode;
  children: ReactNode;
  actionButton?: ReactElement;
  titleButton?: ReactElement;
  variant?: "project" | "faq";
}
export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  actionButton,
  titleButton,
  variant = "project",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CollapsibleContainer>
      <TitleContainer
        isOpen={isOpen}
        alignItems="center"
        justifyContent="space-between"
        full
        p={1}
        variant={variant}
      >
        <FlexBox alignItems="center" gap={2}>
          <Button variant="text" onClick={() => setIsOpen(!isOpen)}>
            <CaretRight
              onClick={() => setIsOpen(true)}
              size={24}
              className="toggle"
            />
            <h4>{title}</h4>
          </Button>
          {titleButton}
        </FlexBox>
        {actionButton}
      </TitleContainer>
      <BodyContainer isOpen={isOpen} aria-hidden={!isOpen} variant={variant}>
        <div>{children}</div>
      </BodyContainer>
    </CollapsibleContainer>
  );
};
