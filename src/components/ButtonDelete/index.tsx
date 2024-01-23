import { Warning } from "@phosphor-icons/react";
import { Button, ButtonProps } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import { ReactNode, useState } from "react";
import { useTheme } from "styled-components";

export interface ButtonDeleteProps {
  deleteFn: () => void;
  name: string;
  variant?: "primary" | "outline" | "text";
  small?: boolean;
  children?: ReactNode;
  width?: number;
  color?: string;
  background?: string;
  disabled?: boolean;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({
  deleteFn,
  name,
  children,
  variant,
  small,
  width,
  color,
  background,
  disabled,
}) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const theme = useTheme();

  const handleDelete = async () => {
    deleteFn();
    setModalConfirm(false);
  };

  return (
    <>
      <Button
        small={small}
        onClick={() => setModalConfirm(true)}
        variant={variant ? variant : `outline`}
        width={width}
        color={color}
        background={background}
        disabled={disabled}
      >
        {children ? children : "Apagar"}
      </Button>
      <Modal
        small
        isOpened={modalConfirm}
        onClose={() => setModalConfirm(false)}
      >
        <FlexBox direction="column" gap={2} full>
          <FlexBox alignItems="center" justifyContent="center" full>
            <Warning color={theme.color.brand.purple} size={48} weight="fill" />
            <h2>Confirmar?</h2>
          </FlexBox>
          <p>
            Você tem certeza que quer apagar <b>{name}</b>?<br />
            <br />
            <b>Esta operação não poderá ser revertida.</b>
          </p>
          <FlexBox gap={2} full justifyContent="center">
            <Button
              onClick={handleDelete}
              width={10}
              background={theme.color.brand.purple}
            >
              Apagar
            </Button>
            <Button
              variant="primary"
              onClick={() => setModalConfirm(false)}
              color="black"
              width={10}
            >
              Cancelar
            </Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </>
  );
};
