import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Modal } from "components/Modal";
import { ReactNode, useState } from "react";
import { useTheme } from "styled-components";

export interface ButtonDeleteProps {
  deleteFn: () => void;
  name: string;
  children?: ReactNode;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({
  deleteFn,
  name,
  children,
}) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Button onClick={deleteFn} variant="outline">
        {children ? children : "Apagar"}
      </Button>
      <Modal isOpened={modalConfirm} onClose={() => setModalConfirm(false)}>
        <FlexBox direction="column" gap={1}>
          <h3>Confirmar</h3>
          <p>
            Você tem certeza que quer apagar <b>${name}</b>?<br />
            <b>Esta operação não poderá ser revertida.</b>
          </p>
          <FlexBox gap={1} mt={2}>
            <Button onClick={deleteFn}>Apagar</Button>
            <Button variant="outline" onClick={() => setModalConfirm(false)}>
              Cancelar
            </Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </>
  );
};
