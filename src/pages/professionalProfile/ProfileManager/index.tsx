import { Plus } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FormEditProfile } from "components/Forms/FormEditProfile";
import { Modal } from "components/Modal";
import { useState } from "react";
import { ManagerContainer } from "./styles";

export interface ProfileManagerProps {}
export const ProfileManager: React.FC<ProfileManagerProps> = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ManagerContainer direction="column" gap={1}>
      <Button
        variant="primary"
        background="white"
        small
        onClick={() => setModalOpen(true)}
        width={10}
      >
        Editar Perfil
      </Button>

      <Button
        variant="outline"
        small
        onClick={() => setModalOpen(true)}
        width={10}
      >
        <Plus weight="bold" size={24} />
        Adicionar Projeto ao portifolio
      </Button>
      <Modal
        isOpened={modalOpen}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalOpen(false)}
      >
        <FormEditProfile />
      </Modal>
    </ManagerContainer>
  );
};
