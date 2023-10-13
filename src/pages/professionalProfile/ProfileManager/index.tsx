import { Plus } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FormEditProfile } from "components/Forms/FormEditProfile";
import { Modal } from "components/Modal";
import { useState } from "react";
import { ManagerContainer } from "./styles";
import { Professional } from "services/User/types";
import { PortfolioHome } from "../Portfolio";
import { LeadsHome } from "../Leads";
import { FormAddImage } from "components/Forms/FormAddImage";

export interface ProfileManagerProps {
  professional: Professional;
}
export const ProfileManager: React.FC<ProfileManagerProps> = ({
  professional,
}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPortfolio, setModalPortfolio] = useState(false);
  const [modalLeads, setModalLeads] = useState(false);
  const [modalBg, setModalBg] = useState(false);

  return (
    <ManagerContainer direction="column" gap={1}>
      <Button
        variant="primary"
        background="white"
        small
        onClick={() => setModalEdit(true)}
        width={10}
      >
        Editar Perfil
      </Button>

      <Button
        variant="primary"
        background="white"
        small
        onClick={() => setModalPortfolio(true)}
        width={10}
      >
        Meu portifolio
      </Button>
      <Button
        variant="primary"
        background="white"
        small
        onClick={() => setModalLeads(true)}
        width={10}
      >
        Meus contatos
      </Button>
      <Button
        variant="primary"
        background="white"
        small
        onClick={() => setModalBg(true)}
        width={10}
      >
        Foto de fundo
      </Button>
      <Modal
        isOpened={modalEdit}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalEdit(false)}
      >
        <FormEditProfile
          professional={professional}
          close={() => setModalEdit(false)}
        />
      </Modal>
      <Modal
        isOpened={modalPortfolio}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalPortfolio(false)}
      >
        <PortfolioHome professional={professional} />
      </Modal>
      <Modal
        isOpened={modalLeads}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalLeads(false)}
      >
        <LeadsHome leads={professional.leads} />
      </Modal>
      <Modal
        isOpened={modalBg}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalBg(false)}
      >
        <FormAddImage close={() => setModalBg(false)} />
      </Modal>
    </ManagerContainer>
  );
};
