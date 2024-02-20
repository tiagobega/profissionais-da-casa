import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";
import { Line } from "./styles";
import { Me, Professional } from "services/User/types";
import { Modal } from "components/Modal";
import { useState } from "react";
import { useApi } from "contexts/User";
import { useToast } from "contexts/Toast";

export interface ProfessionalListLineProps {
  entry: {
    user: Me;
    professional: Professional | undefined;
  };
  refetch: () => void;
}

export const UserListLine: React.FC<ProfessionalListLineProps> = ({
  entry,
  refetch,
}) => {
  const { user: userApi, professional: professionalApi } = useApi();

  const { addToast } = useToast();

  const [modalDelete, setModalDelete] = useState(false);
  const { user, professional } = entry;

  const handleUserDelete = async () => {
    if (professional) {
      await professionalApi.deleteProfessional({ id: professional.id });
    }

    const deleteResponse = await userApi.deleteUser({ id: user.id });

    if (!deleteResponse) return;

    addToast(deleteResponse.messages, {
      autoDestroy: true,
    });

    setModalDelete(false);
    refetch();
  };

  return (
    <Line full justifyContent="space-between" py={0.5} alignItems="center">
      <FlexBox gap={1}>
        <div className="name">{user.name}</div>
        <div className="email">{user.email}</div>
        <div className="role">{user.roleRel.name}</div>
        <div className="verified">{user.verified ? "sim" : "não"}</div>
      </FlexBox>

      <Button variant="outline" small onClick={() => setModalDelete(true)}>
        deletar
      </Button>

      <Modal isOpened={modalDelete} onClose={() => setModalDelete(false)} small>
        <FlexBox direction="column" gap={2}>
          <p>Deseja mesmo deletar esse usuário?</p>
          <FlexBox justifyContent="center" full gap={3}>
            <Button onClick={handleUserDelete}>Sim</Button>
            <Button onClick={() => setModalDelete(false)}>Não</Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </Line>
  );
};
