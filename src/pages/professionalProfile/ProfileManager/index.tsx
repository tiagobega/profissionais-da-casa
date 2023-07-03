import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormTest } from "components/FormTest";
import { Modal } from "components/Modal";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ManagerContainer } from "./styles";
import { Plus } from "@phosphor-icons/react";
import { FormEditProfile } from "components/Forms/FormEditProfile";
import { useNavigate } from "react-router-dom";

export interface ProfileManagerProps {}
export const ProfileManager: React.FC<ProfileManagerProps> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { color } = useTheme();
  const navigate = useNavigate();

  return (
    <ManagerContainer direction="column" gap={1} justifyContent="space-between">
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
        variant="primary"
        background="white"
        small
        onClick={() => setModalOpen(true)}
        width={10}
      >
        Casa Fast
      </Button>
      <Button
        variant="primary"
        background={color.secondary.blue}
        small
        onClick={() => navigate("/my-projects")}
        width={10}
      >
        Meus Clientes
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
