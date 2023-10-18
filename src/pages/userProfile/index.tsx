import { Camera, Envelope, PhoneCall, User } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormAddImage } from "components/Forms/FormAddImage";
import { FormChangePassword } from "components/Forms/FormChangePassword";
import { FormEditUserProfile } from "components/Forms/FormEditUserProfile";
import { Geometry } from "components/Geometry";
import { Modal } from "components/Modal";
import { useUser } from "contexts/User";
import { useEffect, useState } from "react";
import { MarginContainer } from "styles/commonComponents";
import {
  GeometryContainer,
  HeaderContainer,
  HeaderWrapper,
  InfoColumn,
  PhotoColumn,
} from "./styles";
import { LeadList } from "./components/LeadList";
import { Loading } from "components/Loading";

export interface CustomerProfileProps {}

export const UserProfile: React.FC<CustomerProfileProps> = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalPicture, setModalPicture] = useState(false);
  const { me, getMe } = useUser();

  useEffect(() => {
    if (me) return;
    getMe();
  }, [me]);

  if (!me) return <Loading />;

  return (
    <>
      {me && (
        <>
          <HeaderWrapper>
            <HeaderContainer>
              <FlexBox gap={6}>
                <PhotoColumn
                  direction="column"
                  alignItems="center"
                  gap={1}
                  justifyContent="center"
                >
                  <div className="round-picture">
                    <Button
                      variant="text"
                      color="white"
                      className="pictureButton"
                      onClick={() => setModalPicture(true)}
                    >
                      <Camera weight="fill" /> Trocar foto
                    </Button>
                    {me.profilePicture ? (
                      <img
                        src={me.profilePicture}
                        alt="Foto de perfil do usuário"
                        className="userPicture"
                        loading="lazy"
                      />
                    ) : (
                      <User color="white" weight="light" className="userIcon" />
                    )}
                  </div>
                  <p className="name">{me.name}</p>
                  <p>Perfil Pessoal</p>
                </PhotoColumn>
                <InfoColumn direction="column" gap={1} justifyContent="center">
                  <div>
                    <p className="title">Telefone</p>
                    <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                      <PhoneCall size={30} />
                      {me.phone}
                    </FlexBox>
                  </div>
                  <div>
                    <p className="title">E-mail</p>
                    <FlexBox alignItems="center" gap={0.5} mt={0.5}>
                      <Envelope size={30} />
                      {me.email}
                    </FlexBox>
                  </div>

                  <FlexBox gap={2}>
                    <Button
                      background="white"
                      onClick={() => setModalEdit(true)}
                    >
                      Editar Perfil
                    </Button>
                    <Button
                      background="white"
                      onClick={() => setModalPassword(true)}
                    >
                      Alterar Senha
                    </Button>
                  </FlexBox>
                </InfoColumn>
              </FlexBox>
            </HeaderContainer>
            <GeometryContainer>
              <div className="triangle1">
                <Geometry color="white" width={170} triangle />
              </div>
              <div className="triangle2">
                <Geometry color="white" width={170} triangle />
              </div>
              <div className="triangle3">
                <Geometry color="white" width={80} triangle />
              </div>
              <div className="triangle4">
                <Geometry color="white" width={80} triangle angle={90} />
              </div>
              <div className="triangle5">
                <Geometry color="white" width={80} triangle />
              </div>
            </GeometryContainer>
          </HeaderWrapper>
          <MarginContainer>
            <FlexBox my={me.leads.length > 0 ? 2 : 5}>
              {me.leads && <LeadList professional={false} leads={me.leads} />}
            </FlexBox>
          </MarginContainer>

          <Modal isOpened={modalEdit} onClose={() => setModalEdit(false)} small>
            <FlexBox direction="column" centralized gap={3}>
              <h2>Editar perfil</h2>
              <FormEditUserProfile
                user={me}
                close={() => setModalEdit(false)}
              />
            </FlexBox>
          </Modal>
          <Modal
            isOpened={modalPassword}
            onClose={() => setModalPassword(false)}
            small
          >
            <FlexBox direction="column" centralized gap={3}>
              <FormChangePassword closeModal={() => setModalPassword(false)} />
            </FlexBox>
          </Modal>
          <Modal
            isOpened={modalPicture}
            onClose={() => setModalPicture(false)}
            small
          >
            <FlexBox direction="column" centralized gap={3}>
              <FormAddImage close={() => setModalPicture(false)} />
            </FlexBox>
          </Modal>
        </>
      )}
    </>
  );
};
