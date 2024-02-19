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
}
export const Modal: React.FC<ModalProps> = ({
  children,
  isOpened,
  onProceed,
  bg,
  onClose,
  small = false,
}) => {
  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Container open={isOpened}>
      <Background open={isOpened} onClick={onClose} />

      <Content
        open={isOpened}
        bg={bg}
        small={small}
        px={1}
        py={2}
        gap={2}
        direction="column"
      >
        <FlexBox>
          <CloseButton variant="text" onClick={onClose}>
            <CaretLeft weight="fill" />
            Voltar
          </CloseButton>
        </FlexBox>

        <FlexBox grow={1} direction="column" gap={1} full>
          {children}
        </FlexBox>
      </Content>
    </Container>
  );
};
