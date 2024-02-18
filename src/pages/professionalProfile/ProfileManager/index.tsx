import { useState } from "react";

import { Button, type ButtonProps } from "components/Button";
import { Modal, type ModalProps } from "components/Modal";
import { FormEditProfile } from "components/Forms/FormEditProfile";
import { PortfolioHome } from "../Portfolio";
import { LeadsHome } from "../Leads";
import { FormAddImage } from "components/Forms/FormAddImage";
import { FormAddProfessionalBgPicture } from "components/Forms/FormAddProfessionalBgPicture";

import { ManagerContainer, ManagerModalContainer } from "./styles";

import { Professional } from "services/User/types";

export interface ProfileManagerProps {
  professional: Professional;
  refetch: () => void;
}
export const ProfileManager: React.FC<ProfileManagerProps> = ({
  professional,
  refetch,
}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPortfolio, setModalPortfolio] = useState(false);
  const [modalLeads, setModalLeads] = useState(false);
  const [modalBg, setModalBg] = useState(false);

  return (
    <ManagerContainer>
      <ManagerModal
        buttonText="Editar Perfil"
        buttonProps={{
          onClick: () => setModalEdit(true),
        }}
        modalProps={{
          isOpened: modalEdit,
          onProceed: () => console.log("proceed"),
          onClose: () => {
            refetch();
            setModalEdit(false);
          },
        }}
      >
        <FormEditProfile
          professional={professional}
          close={() => {
            refetch();
            setModalEdit(false);
          }}
        />
      </ManagerModal>

      <ManagerModal
        buttonText="Meu portifolio"
        buttonProps={{
          onClick: () => setModalPortfolio(true),
        }}
        modalProps={{
          isOpened: modalPortfolio,
          onProceed: () => console.log("proceed"),
          onClose: () => {
            setModalPortfolio(false);
            refetch();
          },
        }}
      >
        <PortfolioHome professional={professional} refetch={refetch} />
      </ManagerModal>

      <ManagerModal
        buttonText="Meus contatos"
        buttonProps={{
          onClick: () => setModalLeads(true),
        }}
        modalProps={{
          isOpened: modalLeads,
          onProceed: () => console.log("proceed"),
          onClose: () => {
            setModalLeads(false);
          },
        }}
      >
        <LeadsHome leads={professional.leads} />
      </ManagerModal>

      <ManagerModal
        buttonText="Foto do card"
        buttonProps={{
          onClick: () => setModalBg(true),
        }}
        modalProps={{
          isOpened: modalBg,
          onProceed: () => console.log("proceed"),
          onClose: () => {
            setModalBg(false);
          },
        }}
      >
        <FormAddProfessionalBgPicture
          professionalProfile={professional}
          close={() => {
            setModalBg(false);
            refetch();
          }}
        />
      </ManagerModal>
    </ManagerContainer>
  );
};

interface ManagerModalProps {
  buttonText: string;
  buttonProps: Omit<ButtonProps, "children">;
  modalProps: Omit<ModalProps, "children">;
  children: React.ReactNode;
}

export const ManagerModal = ({
  children,
  buttonText,
  buttonProps,
  modalProps,
}: ManagerModalProps) => {
  return (
    <ManagerModalContainer>
      <Button
        variant="primary"
        background="white"
        small={true}
        {...buttonProps}
      >
        {buttonText}
      </Button>
      <Modal {...modalProps}>{children}</Modal>
    </ManagerModalContainer>
  );
};

export const EditPerfil = ({ ...props }: ManagerModalProps) => (
  <ManagerModal {...props}></ManagerModal>
);
