import { Plus } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FormEditProfile } from "components/Forms/FormEditProfile";
import { Modal } from "components/Modal";
import { useState } from "react";
import { ManagerContainer } from "./styles";
import { Professional } from "services/User/types";
import { PortfolioHome } from "../Portfolio";
import { LeadsHome } from "../Leads";

export interface ProfileManagerProps {
  professional: Professional;
}
export const ProfileManager: React.FC<ProfileManagerProps> = ({
  professional,
}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPortfolio, setModalPortfolio] = useState(false);
  const [modalLeads, setModalLeads] = useState(false);

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
        variant="outline"
        small
        onClick={() => setModalPortfolio(true)}
        width={10}
      >
        <Plus weight="bold" size={24} />
        Meu portifolio
      </Button>
      <Button
        variant="outline"
        small
        onClick={() => setModalPortfolio(true)}
        width={10}
      >
        <Plus weight="bold" size={24} />
        Meus contatos
      </Button>
      <Modal
        isOpened={modalEdit}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalEdit(false)}
      >
        <FormEditProfile />
      </Modal>
      <Modal
        isOpened={modalPortfolio}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalPortfolio(false)}
      >
        <PortfolioHome portfolio={professional.portfolioProjects} />
      </Modal>
      <Modal
        isOpened={modalLeads}
        onProceed={() => console.log("proceed")}
        onClose={() => setModalLeads(false)}
      >
        <LeadsHome leads={professional.leads} />
      </Modal>
    </ManagerContainer>
  );
};
