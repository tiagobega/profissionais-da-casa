import { FlexBox } from "components/FlexBox";
import { ReactNode, useRef } from "react";
import { Background, CloseButton, Container, Content } from "./styles";
import { CaretLeft } from "@phosphor-icons/react";

export interface ModalProps {
  children: ReactNode;
  isOpened: boolean;
  onProceed?: () => void;
  onClose: () => void;
  small?: boolean;
  bg?: string;
  className?: string;
}
export const Modal: React.FC<ModalProps> = ({
  children,
  isOpened,
  onProceed,
  bg,
  onClose,
  small = false,
  className,
}) => {
  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Container open={isOpened} className={className}>
      <Background open={isOpened} onClick={onClose} />

      <Content
        open={isOpened}
        bg={bg}
        small={small}
        gap={2}
        py={2}
        direction="column"
        className="content"
      >
        <FlexBox px={1}>
          <CloseButton variant="text" onClick={onClose}>
            <CaretLeft weight="fill" />
            Voltar
          </CloseButton>
        </FlexBox>

        <FlexBox
          px={1}
          grow={1}
          className="inner_content"
          direction="column"
          gap={1}
          full
        >
          {children}
        </FlexBox>
      </Content>
    </Container>
  );
};
